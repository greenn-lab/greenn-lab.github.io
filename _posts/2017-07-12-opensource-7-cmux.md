---
layout: post
title: 'kakao의 오픈소스 Ep7 - CMUX: CLI에 날개를 달자!'
author: jon.kwon
tags: [cmux,hadoop,cloudera,tmux,fzf,ruby]
---

<a id="forkme" href="https://github.com/kakao/cmux"></a>

> "카카오의 오픈소스를 소개합니다" 일곱번째는 [jon.kwon](http://github.com/kakao/jonkwon)과 동료들이 개발한 **CMUX**입니다.
>
> [CMUX](https://github.com/kakao/cmux)는 [Cloudera Manager](https://www.cloudera.com/products/product-components/cloudera-manager.html?) 기반의 하둡 클러스터를 관리하는데 필요한 대화형 커멘드라인 인터페이스를 제공합니다.
>
> CMUX의 아이디어를 참고해 보세요. 여러분의 커멘드라인에 날개를 달 수 있습니다.


## 카카오의 하둡 엔지니어링 파트에서는 CMUX를 이렇게 사용합니다.

수천 대의 하둡 클러스터의 정보를 빠르게 검색하여 필요한 정보를 조회하기도 하고,
![cmux lh](http://api-metakage-4misc.kakao.com/dn/hadoopeng/cmux/cmux_list-hosts.gif)

특정 조건으로 검색한 노드에 SSH 로그인하여 병렬 작업을 하기도 하거나,
![cmux ssh](http://api-metakage-4misc.kakao.com/dn/hadoopeng/cmux/cmux_ssh-cm-hosts.gif)

특정 조건으로 검색한 관리자 웹페이지를 열어보기도 합니다.
![cmux websvc](http://api-metakage-4misc.kakao.com/dn/hadoopeng/cmux/cmux_web-service.gif)

![cmux webcm](http://api-metakage-4misc.kakao.com/dn/hadoopeng/cmux/cmux_web-cm.gif)

특정 조건으로 검색한 노드에만 명령어를 실행할 수도 있습니다.
![cmux scmagent](http://api-metakage-4misc.kakao.com/dn/hadoopeng/cmux/cmux_manage-cludera-scm-agent.gif)

필요하면 외부 툴을 실행할 수도 있죠.
![cmux hri](http://api-metakage-4misc.kakao.com/dn/hadoopeng/cmux/cmux_hri.gif)

조금만 여유가 있다면 [Rolling restart role](https://github.com/kakao/cmux/wiki/The-steps-to-Rolling-Restart-Roles)처럼 아주 복잡한 유지 보수 작업이나 배치 작업을 만들어서 사용할 수도 있습니다.

지금부터 이런 것들을 가능하게 한 CMUX의 아이디어를 소개해 드리겠습니다.

## CMUX의 구조

CMUX는 아래와 같이 크게 4단계의 흐름으로 작성된 명령어 집합입니다.

### 입력 단계
입력 소스는 파일, 파이프라인, API 등 여러분이 상상할 수 있는 다양한 형태가 될 수 있습니다. CMUX에서는 Cloudera Manager의 REST API와 카카오의 인프라 자원을 조회하는 API를 주로 사용합니다.

### 검색/필터 단계
CMUX의 꽃에 해당되는 부분으로 빔(Vim)신이라고 불리는 카카오의 [최준건](https://github.com/junegunn)이 만드신 [FZF](https://github.com/junegunn/fzf)라는 커맨드라인 검색 도구를 사용하여 원하는 조건만 걸러냅니다.
![FZF](https://raw.github.com/junegunn/i/master/fzf.gif)

### 작업 흐름 작성 단계
앞서 걸러진 조건을 바탕으로 작업 흐름 또는 명령어 집합을 생성합니다. CMUX는 [Ruby](https://www.ruby-lang.org)로 작성되어 있기 때문에 당연히 Ruby 코드로 생성하겠죠.

### 실행 단계
앞에서 생성한 작업 흐름 또는 명령어 집합을 실행합니다. 이 때 복수의 명령어나 작업 흐름을 병렬로 실행해야 할 수도 있는데, 이를 위해 [TMUX](https://github.com/tmux/tmux/wiki)를 사용합니다.

그럼, 이해를 돕기 위해 간단한 예제 코드를 통해 이 과정을 구현해 보겠습니다.

## 준비
위에서 설명드린대로 CMUX의 아이디어를 구현하기 위해 필요한 두 가지 도구인 [FZF](https://github.com/junegunn/fzf), [TMUX](https://github.com/tmux/tmux/wiki)를 설치합니다. OSX 유저라면 home brew로 간단하게 설치할 수 있습니다.

```sh
brew install tmux fzf
```

CMUX 코드는 Ruby로 작성되어 있지만, 이 예제에서는 Bash 쉘 스크립트를 사용할 것입니다. 일부 쉘 스크립트로 구현하기 복잡한 기능은 Ruby 코드를 사용하기도 할 것이지만 대세에 영향을 줄 만한 부분은 아니니 무시하셔도 되겠습니다.

JSON 포맷으로 제공되는 [Cloudera Manager REST API](http://cloudera.github.io/cm_api/apidocs/v16/)를 활용할 것입니다. 이 때 [jq](https://stedolan.github.io/jq/) 를 사용하면 쉘 스크립트가 편안해 지므로 설치하도록 하겠습니다.

```sh
brew install jq
```

자 이제 준비가 되었으니 먼저 데이터 입력 부분을 구현해 보겠습니다.

## 입력

앞서 말씀드린대로 [Cloudera Manager REST API](http://cloudera.github.io/cm_api/apidocs/v16/)를 활용하도록 하여 현재 Cloudera Manager에 생성된 클러스터 정보를 받아오도록 하겠습니다.

```sh
$ CM="test.kakao.cm"
$ CM_PORT="7180"
$ CM_API_VER="v14"
$ CM_USER="hadoop"
$ CM_USER_PWD="doopy"
$ RESOURCE="/clusters"
$ BASE_URL="$CM:$CM_PORT/api/$CM_API_VER"
$ URL="$BASE_URL$RESOURCE"
$ curl -f -s -u "$CM_USER":"$CM_USER_PWD" "$URL"
```

대략 이런 모습의 결과를 확인할 수 있을 것입니다.

```json
{
  "items" : [{
    "name" : "cluster",
    "displayName" : "Neo",
    "version" : "CDH5",
    "fullVersion" : "5.3.8",
    "maintenanceMode" : false,
    "maintenanceOwners" : [ ],
    "clusterUrl" : "https://www.kakaofriends.com/kr/products/groups/characters/8",
    "hostsUrl" : "https://www.kakaofriends.com/kr/products/groups/characters/8",
    "entityStatus" : "NONE"
  }, {
    "name" : "cluster1",
    "displayName" : "Ryan",
    "version" : "CDH5",
    "fullVersion" : "5.11.1",
    "maintenanceMode" : true,
    "maintenanceOwners" : [ "CLUSTER" ],
    "clusterUrl" : "https://www.kakaofriends.com/kr/products/groups/characters/23",
    "hostsUrl" : "https://www.kakaofriends.com/kr/products/groups/characters/23",
    "entityStatus" : "GOOD_HEALTH"
  }, {
    "name" : "cluster2",
    "displayName" : "Apeach",
    "version" : "CDH5",
    "fullVersion" : "5.3.8",
    "maintenanceMode" : true,
    "maintenanceOwners" : [ ],
    "clusterUrl" : "https://www.kakaofriends.com/kr/products/groups/characters/6",
    "hostsUrl" : "https://www.kakaofriends.com/kr/products/groups/characters/6",
    "entityStatus" : "GOOD_HEALTH"
  } ]
}
```



## 검색/필터

> 지금부터는 Cloudera Manager 환경이 준비되어 있지 않은 분들을 위해 위의 내용을 `clusters.txt`로 저장했다고 가정하고 다음 단계를 진행해 하겠습니다.

호출된 결과를 `jq` 명령어를 이용해서 특정 필드만 가져오도록 하겠습니다. 
우리는 "클러스터 이름(`name`)", "클러스터 표시 명(`displayName`)", "CDH 풀버전(`fullVersion`)", "유지관리모드 소유자(`maintenanceOwners`)", "클러스터 관리자 페이지 URL(`clusterUrl`)"에만 관심이 있습니다.

```sh
$ cat clusters.txt \
| jq -r '.items[]
           | [.name, .displayName, .fullVersion, .clusterUrl]'
```

잘 걸러졌습니다.

```json
[
  "cluster",
  "Neo",
  "5.3.8",
  "http://test.kakao.cm:7180/cmf/clusterRedirect/cluster"
]
[
  "cluster1",
  "Ryan",
  "5.11.1",
  "http://test.kakao.cm:7180/cmf/clusterRedirect/cluster1"
]
[
  "cluster2",
  "Apeach",
  "5.3.8",
  "http://test.kakao.cm:7180/cmf/clusterRedirect/cluster2"
]
```

이제 특정 클러스터를 검색하고 필터링할 수 있도록 해 보겠습니다.

먼저, 이 결과를 선택 가능한 형태로 되도록 `jq`의 `join`문으로 결합하겠습니다.

```sh
$ cat clusters.txt \
| jq -r '.items[]
           | [.name, .displayName, .fullVersion, .clusterUrl]
           | join("\t")'
```

```
cluster Neo     5.3.8   http://test.kakao.cm:7180/cmf/clusterRedirect/cluster
cluster1        Ryan    5.11.1  http://test.kakao.cm:7180/cmf/clusterRedirect/cluster1
cluster2        Apeach  5.3.8   http://test.kakao.cm:7180/cmf/clusterRedirect/cluster2
```

컬럼 이름도 입히고 예쁘게 정렬도 보겠습니다. 
정렬을 돕기 위해 아래와 같이 루비 코드를 작성하고 같은 디렉토리에 `align.rb`로 저장합니다.

> CMUX에서는 [Formatter 모듈](https://github.com/kakao/cmux/blob/master/lib/cmux/utils/formatter.rb#L7-L31) 에 구현되어 있습니다.

```ruby
#/usr/bin/env ruby
def align(args = {})
  body = $stdin.map { |line| line.chomp.split("\t") }
  maxes = body.transpose.map { |g| g.map { |e| e.length }.max }
  separator = lambda { puts maxes.map { |m| '-' * m }.join(' ') }

  body.each_with_index do |line, i|
    line.zip(maxes).each do |pair|
      print pair.first.ljust(pair.last + 1)
    end
    puts
    separator.call if args[:header] && i.zero?
  end
end
```

그런 다음, `awk`로 컬럼 이름을 입히고 `align.rb`의 `align` 함수를 호출할 수 하여 정렬할 수 있도록 각각 파이프로 연결합니다.

```sh
$ COLUMN_HEAD="Cluster\tDisplay Name\tCDH Version\tCluster URL"
$ cat clusters.txt \
| jq -r '.items[]
           | [.name, .displayName, .fullVersion, .clusterUrl]
           | join("\t")' \
| awk -v HEAD="$COLUMN_HEAD" 'BEGIN{print HEAD} {print $0}' \
| ruby -r ./align.rb -e "align('header')"
```

예쁘게 테이블이 완성되었습니다.

```sh
Cluster  Display Name CDH Version Cluster URL                                           
-------- ------------ ----------- ------------------------------------------------------
cluster  Neo          5.3.8       http://test.kakao.cm:7180/cmf/clusterRedirect/cluster 
cluster1 Ryan         5.11.1      http://test.kakao.cm:7180/cmf/clusterRedirect/cluster1
cluster2 Apeach       5.3.8       http://test.kakao.cm:7180/cmf/clusterRedirect/cluster2
```

마지막으로 필터할 수 있도록 `fzf` 명령어를 파이프에 연결하겠습니다.
사용한 옵션은 다음과 같습니다. 자세한 내용은 `fzf`의 `man` 페이지를 확인하시면 됩니다.
- `--multi`: 다중 선택
- `--reverse`: 역순 레이아웃, 기본값은 아래에서 위로 정렬됩니다.
- `--header-lines=N`: 첫 번 째 N 라인을 헤더로 간주합니다.
- `--header=STR`: 작성한 문자열은 가장 상단에 프린트합니다. 

```sh
$ COLUMN_HEAD="Cluster\tDisplay Name\tCDH Version\tCluster URL"
$ cat clusters.txt \
| jq -r '.items[]
           | [.name, .displayName, .fullVersion, .clusterUrl]
           | join("\t")' \
| awk -v HEAD="$COLUMN_HEAD" 'BEGIN{print HEAD} {print $0}' \
| ruby -r ./align.rb -e "align('header')" \
| fzf --multi --reverse --header-lines=2 --header="Select clusters.

"

```

아래와 같이 선택 가능한 상태로 FZF가 활성화됩니다.
![](/files/cmux-fzf01.png)

Ryan으로 검색을 해보겠습니다.
"Fuzzy Finder" 라는 이름에 걸맞게 아래와 같이 느슨한 검색이 가능합니다. 다양한 검색 옵션이 있으니 `fzf`의 `man` 페이지를 읽어보시기 바랍니다.
![](/files/cmux-fzf02.png)

이번엔 Neo와 Apeach를 선택해 보겠습니다. 선택은 기본적으로 `tab` 키로 할 수 있습니다. 전체 선택, 전체 선택 해제 등 다양한 옵션이 있으니  `fzf`의 `man` 페이지를 읽어보시기 바랍니다.
![](/files/cmux-fzf03.png)

선택한 결과는 아래와 같이 문자열로 리턴됩니다.

```
cluster  Neo          5.3.8       http://test.kakao.cm:7180/cmf/clusterRedirect/cluster
cluster2 Apeach       5.3.8       http://test.kakao.cm:7180/cmf/clusterRedirect/cluster2
```

## 작업 흐름 작성
리턴될 결과에서 마지막 열인 "Custer URL"은 기본 브라우저로 열 수 있도록 작업 흐름(여기서는 명령어)를 작성해 보겠습니다. OSX 환경이라는 가정하에 `open` 명령어를 사용하도록 하겠습니다.

```sh
$ COLUMN_HEAD="Cluster\tDisplay Name\tCDH Version\tCluster URL"
$ cat clusters.txt \
| jq -r '.items[]
           | [.name, .displayName, .fullVersion, .clusterUrl]
           | join("\t")' \
| awk -v HEAD="$COLUMN_HEAD" 'BEGIN{print HEAD} {print $0}' \
| ruby -r ./align.rb -e "align('header')" \
| fzf --multi --reverse --header-lines=2 --header="Select clusters.

" \
| awk '{print "open "$NF}'
```

## 실행
위에서 만든 명령어들을 실행할 수 있도록 코드를 추가하겠습니다.

```sh
$ COLUMN_HEAD="Cluster\tDisplay Name\tCDH Version\tCluster URL"
$ CMD=$(cat clusters.txt \
| jq -r '.items[]
           | [.name, .displayName, .fullVersion, .clusterUrl]
           | join("\t")' \
| awk -v HEAD="$COLUMN_HEAD" 'BEGIN{print HEAD} {print $0}' \
| ruby -r ./align.rb -e "align('header')" \
| fzf --multi --reverse --header-lines=2 --header="Select clusters.

" \
| awk '{print "open "$NF}') && eval "${CMD}"
```

이 코드를 실행하면 기본 웹브라우저로 여러분이 선택한 클러스터의 URL이 열릴 것입니다. 이 예제에서는 이해를 돕기 위해 각 프렌즈의 상품페이지로 이동하도록 URL을 작성해 두었습니다. ^^;

조금 더 복잡한 구현을 해보도록 하겠습니다.
웹 브라우저로 각 URL을 열기 전에 TMUX로 선택한 URL의 수만큼 윈도우를 분할한 후 URL 정보를 화면에 출력하도록 코드를 보강하겠습니다.

먼저 아래와 같이 `ts`라는 함수를 생성하겠습니다. 이 함수는 문자열로 구성된 명령어 배열을 인자로 받고 있으며, 명령어 개수만큼 분할한 후, 각 pane에 각 명령어를 실행합니다.

> CMUX에서는 [tws](https://github.com/kakao/cmux/blob/master/lib/cmux/commands/tmux_window_splitter.rb) 라는 별도의 명령어로 윈도우를 보다 세밀한 제어가 가능하도록 구현되어 있습니다.

```sh
# Split TMUX pane with array element and run array element as commands.
$ ts () {
  local PANE1 PANE_N IDX=0 ARR=("$@")
  local TAIL="echo -n Press enter to finish.; read"

  [[ ${#ARR[@]} -gt 1 && -z "${TMUX:-}" ]] && msg_n_exit "You are not in TMUX session!!!"

  for LINE in ${ARR[@]}; do
    PANE_N="eval $(xxd -p <<< "$LINE")"

    if [ $IDX -eq 0 ]; then
      PANE1=$PANE_N
    else
      # Create other window pane.
      tmux -2 split-window "$SHELL -ci \"\$(xxd -p -r <<< '$PANE_N'); $TAIL\""
      tmux -2 select-layout tiled
    fi
    ((++IDX))
  done

  # Create first window pane.
  [ $IDX -gt 1 ] && tmux -2 set-window-option synchronize-panes on
  $SHELL -ci "$(xxd -p -r <<< $PANE1); $TAIL"
}
$ set -o pipefail
$ IFS='\n'
$ COLUMN_HEAD="Cluster\tDisplay Name\tCDH Version\tCluster URL"
$ CMD=$(cat clusters.txt \
| jq -r '.items[]
           | [.name, .displayName, .fullVersion, .clusterUrl]
           | join("\t")' \
| awk -v HEAD="$COLUMN_HEAD" 'BEGIN{print HEAD} {print $0}' \
| ruby -r ./align.rb -e "align('header')" \
| fzf --multi --reverse --header-lines=2 --header="Select clusters.

" \
| awk '{print "echo \""$1": " $NF"\" && open "$NF}') && ts "${CMD}"
```

위와 같이 실행하면 여러분의 터미널 윈도우가 아래와 같이 분할된 후 URL에 출력되는 것을 확인할 수 있을 것입니다.
![](/files/cmux-ts.png)

## 맺음말

CMUX를 개발한 후, 지난 1년여 동안 내부적으로 사용하면서 버그를 수정하고 기능을 보강하고 있지만 부끄러울 정도로 부족한 면이 많습니다. 
하지만, CLI에서도 이런 것도 할 수 있다는 아이디어를 공유하고 싶었으며, 더 기발한 아이디어로 CLI가 풍부해지길 기대하면서 오픈 소스로 공개하게 되었습니다.

마지막으로 CMUX를 위해 [FZF](https://github.com/junegunn/fzf)에 기능을 추가해 주신 [최준건](https://github.com/junegunn)께 감사의 말씀을 드립니다.


