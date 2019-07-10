---
layout: post
title: 'create-react-app v2(with typescript)에서 Sass 사용이 쉬워졌어요'
date: 2019-07-10T10:00
tags: [sass, react, typescript]
---

typescript로 간단한 React 모듈을 개발하다가 화면 구성이 필요해서 Sass를 사용하려다가 알게 됐어요.

CRA<sub>create-react-app</sub>으로 구성했더니 아주 간편하게 처리가 되더라고요.
```shell
npm install node-sass
```
이렇게 그냥 의존관계만 만들어주면 알아서 sass-loader가 추가되나봐요.

CRA v2 부터의 변화중에 하나인 것 같은데,
[velopert님의 포스트](https://velog.io/@velopert/create-react-app-v2)에서 확인했고, 새로운 v2의 기능들을 언제나 그렇듯 잘 설명해 주셨으니 확인해 보세요.