---
authors: [green]
title: 'MapStruct 를 idea(IntelliJ) 에서 gradle 로 써서 duplicate class 오류가 나면...'
date: 2019-05-28T21:00
tags: [DTO, MapStruct]
---

이런게 사실, 조금 쓰기 힘든 내용인 것 같아요.  
개인적인 개발 환경의 문제이거나 제가 실수한 설정의 문제이거나 할까봐서, '이런 기능 오류를 이렇게 해결했다' 라고 올리는게 맞는건가 싶어서요.  
그래서 아울러 말씀드리면 정답이 아닐 수도 있으니까 공식 참조문서를 찾아 보시고 stackOverflow 같은 곳도 잘 뒤져보시는 걸 우선 추천 드립니다.

### 증상
어플리케이션(테스트도 역시) 실행하게 되면 `MapStruct` 에서 generated 된 소스가 `build/generated/sources/annotationProcessor/java` 디렉토리에 .java 파일로 나타나게 되잖아요.  
결과적으로 그것들이 "duplicate class" 라는 에러의 원인이 되는거죠.

### 해결
> 다시 한번 말씀드리지만 이건 제가 문제를 해결한 방법이지 정답이 아니라는 거...

[공식 문서](http://mapstruct.org/documentation/stable/reference/html/#_gradle)에 나온 대로 진행을 하시고 난 후,  
`build.gradle` 에서

```groovy
compileJava {
    options.compilerArgs = [
            '-Amapstruct.defaultComponentModel=spring'
    ]

    doLast {
        delete fileTree('build') {  // 삭제를 하는데, build 디렉토리 중에서
            include '**/*.java'     // *.java 파일을 삭제
        }
    }
}
```

이렇습니다. 단순히 build 디렉토리에 java 파일을 지우는 걸로 해결 했어요.

### 마무리
더 좋은 방법이 있거나, 이 방법이 문제가 될 소지가 있다면 피드백 주시면 좋겠습니다.  
