"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2523],{9613:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(9496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),p=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,b=u["".concat(c,".").concat(m)]||u[m]||g[m]||i;return r?n.createElement(b,l(l({ref:t},s),{},{components:r})):n.createElement(b,l({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},9952:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(1163),a=(r(9496),r(9613));const i={title:"Using gitlab CI/CD (gitlab-runner)",authors:["green"],tags:["gitlab","ci/cd","git"]},l=void 0,o={permalink:"/blog/2023/02/28/gitlab-ci-cd",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2023-02-28-gitlab-ci-cd/index.md",source:"@site/blog/2023-02-28-gitlab-ci-cd/index.md",title:"Using gitlab CI/CD (gitlab-runner)",description:"gitlab \uc5d0\uc11c CI/CD \ub97c \uc9c4\ud589 \ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \uc815\ub9ac \ud574\ubd10\uc694.",date:"2023-02-28T00:00:00.000Z",formattedDate:"2023\ub144 2\uc6d4 28\uc77c",tags:[{label:"gitlab",permalink:"/blog/tags/gitlab"},{label:"ci/cd",permalink:"/blog/tags/ci-cd"},{label:"git",permalink:"/blog/tags/git"}],readingTime:.51,truncated:!1,authors:[{name:"Green",title:"\uc5b4\uc911\uc774\ub5a0\uc911\uc774 \ub4a4\uc8fd\ubc15\uc911 \uc5c9\ub9dd\uc9c4\uc9dc ...",url:"https://github.com/greenn-lab",imageURL:"https://github.com/greenn-lab.png",key:"green"}],frontMatter:{title:"Using gitlab CI/CD (gitlab-runner)",authors:["green"],tags:["gitlab","ci/cd","git"]},nextItem:{title:"SSL \uc778\uc99d\uc11c \ucc98\ub9ac(key \ud30c\uc77c\uc5d0 \ube44\ubc00\ubc88\ud638 \ub179\uc774\uae30)",permalink:"/blog/2022/11/01/ssl-\uc778\uc99d\uc11c"}},c={authorsImageUrls:[void 0]},p=[{value:"wip...",id:"wip",level:2}],s={toc:p},u="wrapper";function g(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"gitlab \uc5d0\uc11c CI/CD \ub97c \uc9c4\ud589 \ud560 \uc218 \uc788\ub294 \ubc29\ubc95\uc744 \uc815\ub9ac \ud574\ubd10\uc694."),(0,a.kt)("h1",{id:"cast"},"cast"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gitlab server")," \uc18c\uc2a4 \ucf54\ub4dc \uc800\uc7a5\uc18c\ub97c \uac00\uc9c0\uace0 \uc788\ub294 \uc11c\ubc84"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"repository")," \uc18c\uc2a4\ucf54\ub4dc \uc800\uc7a5\uc18c"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"deploy server")," \ubc30\ud3ec \ub300\uc0c1 \uc11c\ubc84"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"gitlab-runner")," \uc774 \ubaa8\ub4e0 \uc77c\uc744 \uac00\ub2a5\ucf00 \ud574\uc8fc\ub294 \uc8fc\uc778\uacf5")),(0,a.kt)("h1",{id:"synopsys"},"synopsys"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"deploy-server"),"\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"li"},"gitlab-runner")," \ub97c \uc124\uce58\ud558\uace0,"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"gitlab-runner register")," \uba85\ub839\uc73c\ub85c ",(0,a.kt)("inlineCode",{parentName:"li"},"gitlab-server"),"\ub97c \uc5f0\uacb0\ud558\uace0,"),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("inlineCode",{parentName:"li"},"repository"),"\uc5d0 ",(0,a.kt)("inlineCode",{parentName:"li"},".gitlab-ci.yml"),"\ub97c \uc791\uc131")),(0,a.kt)("h1",{id:"scenario"},"scenario"),(0,a.kt)("h2",{id:"wip"},"wip..."))}g.isMDXComponent=!0}}]);