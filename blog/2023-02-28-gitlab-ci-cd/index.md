---
title: 'Using gitlab CI/CD (gitlab-runner)'
authors: [green]
tags: ['gitlab', 'ci/cd', 'git']
---
gitlab 에서 CI/CD 를 진행 할 수 있는 방법을 정리 해봐요.

# cast
- `gitlab server` 소스 코드 저장소를 가지고 있는 서버
- `repository` 소스코드 저장소
- `deploy server` 배포 대상 서버
- `gitlab-runner` 이 모든 일을 가능케 해주는 주인공

# synopsys
1. `deploy-server`에 `gitlab-runner` 를 설치하고,
2. `gitlab-runner register` 명령으로 `gitlab-server`를 연결하고,
3. `repository`에 `.gitlab-ci.yml`를 작성

# scenario
## wip...
