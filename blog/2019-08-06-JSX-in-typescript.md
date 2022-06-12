---
author: Green
title: 'JSX(in typescript) 사용하기'
date: 2019-08-06T22:00
tags: [JSX, typescript]
---

### 개요
실무에서 SPA로 구현할 수 없는 이상한(?) 구조의 웹어플리케이션을 개발하는게 다반사가 되었어요. 고객사는 한번 채택한 그 복잡하고도 어지러운 UI를 맘에 들어한 후로 계속 그런식을 고수하고 있거든요.

그래서 리엑트를 사용해서 개발하던 어떤 컴포넌트를 조금 더 범용적으로(vanilla js) 사용해보려고 시도 하면서 DOM을 조작하는 비효율적인 Javascript WebAPI에서 탈피하고 JSX를 리엑트 없이 사용해보려고 합니다.

### 설정
우선 `tsconfig.json` 에서,
```json
{
  "compilerOptions": {
    "module": "es6",
    "jsx": "react",
    "jsxFactory": "JSX",
    ...
```
`jsFactory` 로 `JSX` 라고 했으니, 그 이름으로 전역 함수를 만들어줘야 해요.

```typescript
export default function JSX(
  element: any,
  props: { [id: string]: any },
  ...children: any[]
): any {
  console.log(arguments) // 호출시점, 인자 확인용

  if (typeof element === 'function')
    return element()
  else return {
    name: element,
    props,
    children
  }
}
```
이렇게 해서 `console.log` 등으로 함수의 인자, 호출시점을 확인해 보면 JSX의 DOM이 파싱되는 과정을 확인 할 수 있습니다.

### 구현

리엑트 구현 코드를 실제로 보시면 더 자연스레 이해가 되실거에요.  
제가 사용한 코드는 다음과 같아요.

#### `JSX.ts` 파일
```typescript
export default function JSX(
  element: any,
  props: { [id: string]: any },
  ...children: any[]
): any {
  if (typeof element === 'function')
    return element()
  else return {
    name: element,
    props,
    children
  }
}

export function dom(element: {
                      name: string,
                      props: { [id: string]: any },
                      children: any[]
                    },
                    parent: Node): void {

  const tag: HTMLElement = document.createElement(element.name)
  attributes(tag, element.props)

  if (element.children && element.children.length) {
    element.children.forEach(child => {
      if (typeof child !== 'object' || !child.hasOwnProperty('name'))
        tag.appendChild(document.createTextNode(child.toString()))
      else {
        child.props.__child = true
        dom(child, tag)
      }
    })
  }

  parent.appendChild(tag)
}
```

#### `index.tsx` 파일
```tsx
import JSX, {dom} from "./JSX"

dom(
  <div>
    <h1>Hi, guys!</h1>
    <blockquote>
      Nice to see you!
      <strong>I tidy up my article.</strong>
      but, you will be boring.
    </blockquote>
    <p>Bye guys.</p>
  </div>
  ,
  document.querySelector('#app')
)

```

### 마무리
이게 통상적인 JSX 사용법인지는 잘 모르겠어요. 여름휴가를 길게 다녀왔는데, 그전에 검색하고 방법을 찾아본걸 이제야 정리하다보니 실행은 잘 되는데 확신은 가지 않는군요.

>이렇게 기록을 남긴다는게 부끄럽기도 하고, 동시에 이런 방점없는 어정정한 정보가 여러사람에게 오해를 만드는건 아닐까하는 딜레마로 포스팅을 하는게 항상 두려워요.  
>그러면서도 혹시 누군가, 어둠속을 헤매는 막막한 이에게 미약하나마 작은 등불이라도 되었으면하는 바람으로 용기를 내어요.