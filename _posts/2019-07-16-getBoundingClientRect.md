---
layout: post
title: 'DOM 요소의 화면 위치 구하기 Element.getBoundingClientRect() 를 아시나요?'
date: 2019-07-16T16:00
tags: [WebAPI, javascript]
---

### 개요
토이프로젝트를 진행하던 중, 마우스 포인터의 좌표와 대상 요소의 위치를 비교하는 계산이 필요한 지점이 생겼어요.

[jQuery.position()](https://api.jquery.com/position/) 이 생각나서 jQuery 를 의존성 주입해야하나 고민하다가(~~요즘은 jQuery를 의식적으로 거부하고 있어서~~)  
새로운 API를 알게 되었어요.

### 활용
[`Element.getBoundingClientRect()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect) 이 녀석 입니다. 실무에서는 고객대응 때문에 아직도 IE10 을 고려해야하는데, 이 API는 IE9 부터 사용가능하다고 하네요. (그토록 오랫동안 모르고 있었다니...)

![](/files/20190716/scr.png)

실무에서 사용하는 IE10 에서 사용해 보았습니다.

### 마무리
jQuery는 쓰기 싫고 직접 요소의 부모를 찾아 `html` 까지 올라가면서 padding, margin, position 을 조사하면서 위치를 계산해야 하는건가 싶었는데, 좋은 방법을 찾았습니다.

한편으로는 이 유용한 것을 지금까지 왜 모르고 있었나 싶어서 부족한 나를 자책해 봅니다. (어쨌든 그래도 Love myself :)