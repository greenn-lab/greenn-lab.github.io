"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8272],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),c=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},u=function(e){var n=c(e.components);return r.createElement(p.Provider,{value:n},e.children)},s={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(t),m=o,g=d["".concat(p,".").concat(m)]||d[m]||s[m]||a;return t?r.createElement(g,l(l({ref:n},u),{},{components:t})):r.createElement(g,l({ref:n},u))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,l=new Array(a);l[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},5431:function(e,n,t){t.r(n),t.d(n,{assets:function(){return u},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s}});var r=t(7462),o=t(3366),a=(t(7294),t(3905)),l=["components"],i={authors:["green"],title:"JSX(in typescript) \uc0ac\uc6a9\ud558\uae30",date:"2019-08-06T22:00",tags:["JSX","typescript"]},p=void 0,c={permalink:"/blog/2019/08/06/JSX-in-typescript",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-08-06-JSX-in-typescript.md",source:"@site/blog/2019-08-06-JSX-in-typescript.md",title:"JSX(in typescript) \uc0ac\uc6a9\ud558\uae30",description:"\uac1c\uc694",date:"2019-08-06T22:00:00.000Z",formattedDate:"2019\ub144 8\uc6d4 6\uc77c",tags:[{label:"JSX",permalink:"/blog/tags/jsx"},{label:"typescript",permalink:"/blog/tags/typescript"}],readingTime:3.305,truncated:!1,authors:[{name:"Green",title:"\uc5b4\uc911\uc774\ub5a0\uc911\uc774 \ub4a4\uc8fd\ubc15\uc911 \uc5c9\ub9dd\uc9c4\uc9dc ...",url:"https://github.com/greenn-lab",imageURL:"https://github.com/greenn-lab.png",key:"green"}],frontMatter:{authors:["green"],title:"JSX(in typescript) \uc0ac\uc6a9\ud558\uae30",date:"2019-08-06T22:00",tags:["JSX","typescript"]},prevItem:{title:"Reboot!",permalink:"/blog/reboot"},nextItem:{title:"DOM \uc694\uc18c\uc758 \ud654\uba74 \uc704\uce58 \uad6c\ud558\uae30 Element.getBoundingClientRect() \ub97c \uc544\uc2dc\ub098\uc694?",permalink:"/blog/2019/07/16/getBoundingClientRect"}},u={authorsImageUrls:[void 0]},s=[{value:"\uac1c\uc694",id:"\uac1c\uc694",level:3},{value:"\uc124\uc815",id:"\uc124\uc815",level:3},{value:"\uad6c\ud604",id:"\uad6c\ud604",level:3},{value:"<code>JSX.ts</code> \ud30c\uc77c",id:"jsxts-\ud30c\uc77c",level:4},{value:"<code>index.tsx</code> \ud30c\uc77c",id:"indextsx-\ud30c\uc77c",level:4},{value:"\ub9c8\ubb34\ub9ac",id:"\ub9c8\ubb34\ub9ac",level:3}],d={toc:s};function m(e){var n=e.components,t=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h3",{id:"\uac1c\uc694"},"\uac1c\uc694"),(0,a.kt)("p",null,"\uc2e4\ubb34\uc5d0\uc11c SPA\ub85c \uad6c\ud604\ud560 \uc218 \uc5c6\ub294 \uc774\uc0c1\ud55c(?) \uad6c\uc870\uc758 \uc6f9\uc5b4\ud50c\ub9ac\ucf00\uc774\uc158\uc744 \uac1c\ubc1c\ud558\ub294\uac8c \ub2e4\ubc18\uc0ac\uac00 \ub418\uc5c8\uc5b4\uc694. \uace0\uac1d\uc0ac\ub294 \ud55c\ubc88 \ucc44\ud0dd\ud55c \uadf8 \ubcf5\uc7a1\ud558\uace0\ub3c4 \uc5b4\uc9c0\ub7ec\uc6b4 UI\ub97c \ub9d8\uc5d0 \ub4e4\uc5b4\ud55c \ud6c4\ub85c \uacc4\uc18d \uadf8\ub7f0\uc2dd\uc744 \uace0\uc218\ud558\uace0 \uc788\uac70\ub4e0\uc694."),(0,a.kt)("p",null,"\uadf8\ub798\uc11c \ub9ac\uc5d1\ud2b8\ub97c \uc0ac\uc6a9\ud574\uc11c \uac1c\ubc1c\ud558\ub358 \uc5b4\ub5a4 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uc870\uae08 \ub354 \ubc94\uc6a9\uc801\uc73c\ub85c(vanilla js) \uc0ac\uc6a9\ud574\ubcf4\ub824\uace0 \uc2dc\ub3c4 \ud558\uba74\uc11c DOM\uc744 \uc870\uc791\ud558\ub294 \ube44\ud6a8\uc728\uc801\uc778 Javascript WebAPI\uc5d0\uc11c \ud0c8\ud53c\ud558\uace0 JSX\ub97c \ub9ac\uc5d1\ud2b8 \uc5c6\uc774 \uc0ac\uc6a9\ud574\ubcf4\ub824\uace0 \ud569\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uc124\uc815"},"\uc124\uc815"),(0,a.kt)("p",null,"\uc6b0\uc120 ",(0,a.kt)("inlineCode",{parentName:"p"},"tsconfig.json")," \uc5d0\uc11c,"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "compilerOptions": {\n    "module": "es6",\n    "jsx": "react",\n    "jsxFactory": "JSX",\n    ...\n')),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"jsFactory")," \ub85c ",(0,a.kt)("inlineCode",{parentName:"p"},"JSX")," \ub77c\uace0 \ud588\uc73c\ub2c8, \uadf8 \uc774\ub984\uc73c\ub85c \uc804\uc5ed \ud568\uc218\ub97c \ub9cc\ub4e4\uc5b4\uc918\uc57c \ud574\uc694."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default function JSX(\n  element: any,\n  props: { [id: string]: any },\n  ...children: any[]\n): any {\n  console.log(arguments) // \ud638\ucd9c\uc2dc\uc810, \uc778\uc790 \ud655\uc778\uc6a9\n\n  if (typeof element === 'function')\n    return element()\n  else return {\n    name: element,\n    props,\n    children\n  }\n}\n")),(0,a.kt)("p",null,"\uc774\ub807\uac8c \ud574\uc11c ",(0,a.kt)("inlineCode",{parentName:"p"},"console.log")," \ub4f1\uc73c\ub85c \ud568\uc218\uc758 \uc778\uc790, \ud638\ucd9c\uc2dc\uc810\uc744 \ud655\uc778\ud574 \ubcf4\uba74 JSX\uc758 DOM\uc774 \ud30c\uc2f1\ub418\ub294 \uacfc\uc815\uc744 \ud655\uc778 \ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."),(0,a.kt)("h3",{id:"\uad6c\ud604"},"\uad6c\ud604"),(0,a.kt)("p",null,"\ub9ac\uc5d1\ud2b8 \uad6c\ud604 \ucf54\ub4dc\ub97c \uc2e4\uc81c\ub85c \ubcf4\uc2dc\uba74 \ub354 \uc790\uc5f0\uc2a4\ub808 \uc774\ud574\uac00 \ub418\uc2e4\uac70\uc5d0\uc694.",(0,a.kt)("br",{parentName:"p"}),"\n","\uc81c\uac00 \uc0ac\uc6a9\ud55c \ucf54\ub4dc\ub294 \ub2e4\uc74c\uacfc \uac19\uc544\uc694."),(0,a.kt)("h4",{id:"jsxts-\ud30c\uc77c"},(0,a.kt)("inlineCode",{parentName:"h4"},"JSX.ts")," \ud30c\uc77c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"export default function JSX(\n  element: any,\n  props: { [id: string]: any },\n  ...children: any[]\n): any {\n  if (typeof element === 'function')\n    return element()\n  else return {\n    name: element,\n    props,\n    children\n  }\n}\n\nexport function dom(element: {\n                      name: string,\n                      props: { [id: string]: any },\n                      children: any[]\n                    },\n                    parent: Node): void {\n\n  const tag: HTMLElement = document.createElement(element.name)\n  attributes(tag, element.props)\n\n  if (element.children && element.children.length) {\n    element.children.forEach(child => {\n      if (typeof child !== 'object' || !child.hasOwnProperty('name'))\n        tag.appendChild(document.createTextNode(child.toString()))\n      else {\n        child.props.__child = true\n        dom(child, tag)\n      }\n    })\n  }\n\n  parent.appendChild(tag)\n}\n")),(0,a.kt)("h4",{id:"indextsx-\ud30c\uc77c"},(0,a.kt)("inlineCode",{parentName:"h4"},"index.tsx")," \ud30c\uc77c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"import JSX, {dom} from \"./JSX\"\n\ndom(\n  <div>\n    <h1>Hi, guys!</h1>\n    <blockquote>\n      Nice to see you!\n      <strong>I tidy up my article.</strong>\n      but, you will be boring.\n    </blockquote>\n    <p>Bye guys.</p>\n  </div>\n  ,\n  document.querySelector('#app')\n)\n\n")),(0,a.kt)("h3",{id:"\ub9c8\ubb34\ub9ac"},"\ub9c8\ubb34\ub9ac"),(0,a.kt)("p",null,"\uc774\uac8c \ud1b5\uc0c1\uc801\uc778 JSX \uc0ac\uc6a9\ubc95\uc778\uc9c0\ub294 \uc798 \ubaa8\ub974\uaca0\uc5b4\uc694. \uc5ec\ub984\ud734\uac00\ub97c \uae38\uac8c \ub2e4\ub140\uc654\ub294\ub370, \uadf8\uc804\uc5d0 \uac80\uc0c9\ud558\uace0 \ubc29\ubc95\uc744 \ucc3e\uc544\ubcf8\uac78 \uc774\uc81c\uc57c \uc815\ub9ac\ud558\ub2e4\ubcf4\ub2c8 \uc2e4\ud589\uc740 \uc798 \ub418\ub294\ub370 \ud655\uc2e0\uc740 \uac00\uc9c0 \uc54a\ub294\uad70\uc694."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\uc774\ub807\uac8c \uae30\ub85d\uc744 \ub0a8\uae34\ub2e4\ub294\uac8c \ubd80\ub044\ub7fd\uae30\ub3c4 \ud558\uace0, \ub3d9\uc2dc\uc5d0 \uc774\ub7f0 \ubc29\uc810\uc5c6\ub294 \uc5b4\uc815\uc815\ud55c \uc815\ubcf4\uac00 \uc5ec\ub7ec\uc0ac\ub78c\uc5d0\uac8c \uc624\ud574\ub97c \ub9cc\ub4dc\ub294\uac74 \uc544\ub2d0\uae4c\ud558\ub294 \ub51c\ub808\ub9c8\ub85c \ud3ec\uc2a4\ud305\uc744 \ud558\ub294\uac8c \ud56d\uc0c1 \ub450\ub824\uc6cc\uc694.",(0,a.kt)("br",{parentName:"p"}),"\n","\uadf8\ub7ec\uba74\uc11c\ub3c4 \ud639\uc2dc \ub204\uad70\uac00, \uc5b4\ub460\uc18d\uc744 \ud5e4\ub9e4\ub294 \ub9c9\ub9c9\ud55c \uc774\uc5d0\uac8c \ubbf8\uc57d\ud558\ub098\ub9c8 \uc791\uc740 \ub4f1\ubd88\uc774\ub77c\ub3c4 \ub418\uc5c8\uc73c\uba74\ud558\ub294 \ubc14\ub78c\uc73c\ub85c \uc6a9\uae30\ub97c \ub0b4\uc5b4\uc694.")))}m.isMDXComponent=!0}}]);