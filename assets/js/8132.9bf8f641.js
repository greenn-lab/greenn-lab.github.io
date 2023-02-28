(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8132],{9613:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>u,kt:()=>f});var o=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),i=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=i(e.components);return o.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=i(n),d=r,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||a;return n?o.createElement(f,c(c({ref:t},u),{},{components:n})):o.createElement(f,c({ref:t},u))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var i=2;i<a;i++)c[i]=n[i];return o.createElement.apply(null,c)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7762:(e,t,n)=>{"use strict";n.d(t,{Z:()=>i});var o=n(1163),r=n(9496),a=n(5924),c=n(4028),l=n(7562);const s={anchorWithStickyNavbar:"anchorWithStickyNavbar_FEui",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_aCCa"};function i(e){let{as:t,id:n,...i}=e;const{navbar:{hideOnScroll:u}}=(0,l.L)();return"h1"!==t&&n?r.createElement(t,(0,o.Z)({},i,{className:(0,a.Z)("anchor",u?s.anchorWithHideOnScrollNavbar:s.anchorWithStickyNavbar),id:n}),i.children,r.createElement("a",{className:"hash-link",href:`#${n}`,title:(0,c.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):r.createElement(t,(0,o.Z)({},i,{id:void 0}))}},8132:(e,t,n)=>{"use strict";n.d(t,{Z:()=>oe});var o=n(9496),r=n(9613),a=n(1163),c=n(2287);var l=n(5594),s=n(5924),i=n(8528),u=n(7562);function p(){const{prism:e}=(0,u.L)(),{colorMode:t}=(0,i.I)(),n=e.theme,o=e.darkTheme||n;return"dark"===t?o:n}var m=n(7226),d=n.n(m);const f=/title=(?<quote>["'])(?<title>.*?)\1/,y=/\{(?<range>[\d,-]+)\}/,g={js:{start:"\\/\\/",end:""},jsBlock:{start:"\\/\\*",end:"\\*\\/"},jsx:{start:"\\{\\s*\\/\\*",end:"\\*\\/\\s*\\}"},bash:{start:"#",end:""},html:{start:"\x3c!--",end:"--\x3e"}};function h(e,t){const n=e.map((e=>{const{start:n,end:o}=g[e];return`(?:${n}\\s*(${t.flatMap((e=>[e.line,e.block?.start,e.block?.end].filter(Boolean))).join("|")})\\s*${o})`})).join("|");return new RegExp(`^\\s*(?:${n})\\s*$`)}function b(e,t){let n=e.replace(/\n$/,"");const{language:o,magicComments:r,metastring:a}=t;if(a&&y.test(a)){const e=a.match(y).groups.range;if(0===r.length)throw new Error(`A highlight range has been given in code block's metastring (\`\`\` ${a}), but no magic comment config is available. Docusaurus applies the first magic comment entry's className for metastring ranges.`);const t=r[0].className,o=d()(e).filter((e=>e>0)).map((e=>[e-1,[t]]));return{lineClassNames:Object.fromEntries(o),code:n}}if(void 0===o)return{lineClassNames:{},code:n};const c=function(e,t){switch(e){case"js":case"javascript":case"ts":case"typescript":return h(["js","jsBlock"],t);case"jsx":case"tsx":return h(["js","jsBlock","jsx"],t);case"html":return h(["js","jsBlock","html"],t);case"python":case"py":case"bash":return h(["bash"],t);case"markdown":case"md":return h(["html","jsx","bash"],t);default:return h(Object.keys(g),t)}}(o,r),l=n.split("\n"),s=Object.fromEntries(r.map((e=>[e.className,{start:0,range:""}]))),i=Object.fromEntries(r.filter((e=>e.line)).map((e=>{let{className:t,line:n}=e;return[n,t]}))),u=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.start,t]}))),p=Object.fromEntries(r.filter((e=>e.block)).map((e=>{let{className:t,block:n}=e;return[n.end,t]})));for(let d=0;d<l.length;){const e=l[d].match(c);if(!e){d+=1;continue}const t=e.slice(1).find((e=>void 0!==e));i[t]?s[i[t]].range+=`${d},`:u[t]?s[u[t]].start=d:p[t]&&(s[p[t]].range+=`${s[p[t]].start}-${d-1},`),l.splice(d,1)}n=l.join("\n");const m={};return Object.entries(s).forEach((e=>{let[t,{range:n}]=e;d()(n).forEach((e=>{m[e]??=[],m[e].push(t)}))})),{lineClassNames:m,code:n}}var v=n(4982);const k={codeBlockContainer:"codeBlockContainer_e1tr"};function E(e){let{as:t,...n}=e;const r=function(e){const t={color:"--prism-color",backgroundColor:"--prism-background-color"},n={};return Object.entries(e.plain).forEach((e=>{let[o,r]=e;const a=t[o];a&&"string"==typeof r&&(n[a]=r)})),n}(p());return o.createElement(t,(0,a.Z)({},n,{style:r,className:(0,s.Z)(n.className,k.codeBlockContainer,v.k.common.codeBlock)}))}const N={codeBlockContent:"codeBlockContent_WL1y",codeBlockTitle:"codeBlockTitle_Yek3",codeBlock:"codeBlock_iocK",codeBlockStandalone:"codeBlockStandalone_vVOi",codeBlockLines:"codeBlockLines_aslU",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_ZVFA",buttonGroup:"buttonGroup_Om21"};function B(e){let{children:t,className:n}=e;return o.createElement(E,{as:"pre",tabIndex:0,className:(0,s.Z)(N.codeBlockStandalone,"thin-scrollbar",n)},o.createElement("code",{className:N.codeBlockLines},t))}const C={plain:{backgroundColor:"#2a2734",color:"#9a86fd"},styles:[{types:["comment","prolog","doctype","cdata","punctuation"],style:{color:"#6c6783"}},{types:["namespace"],style:{opacity:.7}},{types:["tag","operator","number"],style:{color:"#e09142"}},{types:["property","function"],style:{color:"#9a86fd"}},{types:["tag-id","selector","atrule-id"],style:{color:"#eeebff"}},{types:["attr-name"],style:{color:"#c4b9fe"}},{types:["boolean","string","entity","url","attr-value","keyword","control","directive","unit","statement","regex","atrule","placeholder","variable"],style:{color:"#ffcc99"}},{types:["deleted"],style:{textDecorationLine:"line-through"}},{types:["inserted"],style:{textDecorationLine:"underline"}},{types:["italic"],style:{fontStyle:"italic"}},{types:["important","bold"],style:{fontWeight:"bold"}},{types:["important"],style:{color:"#c4b9fe"}}]};var w={Prism:n(999).Z,theme:C};function O(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function j(){return j=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},j.apply(this,arguments)}var L=/\r\n|\r|\n/,T=function(e){0===e.length?e.push({types:["plain"],content:"\n",empty:!0}):1===e.length&&""===e[0].content&&(e[0].content="\n",e[0].empty=!0)},Z=function(e,t){var n=e.length;return n>0&&e[n-1]===t?e:e.concat(t)},S=function(e,t){var n=e.plain,o=Object.create(null),r=e.styles.reduce((function(e,n){var o=n.languages,r=n.style;return o&&!o.includes(t)||n.types.forEach((function(t){var n=j({},e[t],r);e[t]=n})),e}),o);return r.root=n,r.plain=j({},n,{backgroundColor:null}),r};function x(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&-1===t.indexOf(o)&&(n[o]=e[o]);return n}const P=function(e){function t(){for(var t=this,n=[],o=arguments.length;o--;)n[o]=arguments[o];e.apply(this,n),O(this,"getThemeDict",(function(e){if(void 0!==t.themeDict&&e.theme===t.prevTheme&&e.language===t.prevLanguage)return t.themeDict;t.prevTheme=e.theme,t.prevLanguage=e.language;var n=e.theme?S(e.theme,e.language):void 0;return t.themeDict=n})),O(this,"getLineProps",(function(e){var n=e.key,o=e.className,r=e.style,a=j({},x(e,["key","className","style","line"]),{className:"token-line",style:void 0,key:void 0}),c=t.getThemeDict(t.props);return void 0!==c&&(a.style=c.plain),void 0!==r&&(a.style=void 0!==a.style?j({},a.style,r):r),void 0!==n&&(a.key=n),o&&(a.className+=" "+o),a})),O(this,"getStyleForToken",(function(e){var n=e.types,o=e.empty,r=n.length,a=t.getThemeDict(t.props);if(void 0!==a){if(1===r&&"plain"===n[0])return o?{display:"inline-block"}:void 0;if(1===r&&!o)return a[n[0]];var c=o?{display:"inline-block"}:{},l=n.map((function(e){return a[e]}));return Object.assign.apply(Object,[c].concat(l))}})),O(this,"getTokenProps",(function(e){var n=e.key,o=e.className,r=e.style,a=e.token,c=j({},x(e,["key","className","style","token"]),{className:"token "+a.types.join(" "),children:a.content,style:t.getStyleForToken(a),key:void 0});return void 0!==r&&(c.style=void 0!==c.style?j({},c.style,r):r),void 0!==n&&(c.key=n),o&&(c.className+=" "+o),c})),O(this,"tokenize",(function(e,t,n,o){var r={code:t,grammar:n,language:o,tokens:[]};e.hooks.run("before-tokenize",r);var a=r.tokens=e.tokenize(r.code,r.grammar,r.language);return e.hooks.run("after-tokenize",r),a}))}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.render=function(){var e=this.props,t=e.Prism,n=e.language,o=e.code,r=e.children,a=this.getThemeDict(this.props),c=t.languages[n];return r({tokens:function(e){for(var t=[[]],n=[e],o=[0],r=[e.length],a=0,c=0,l=[],s=[l];c>-1;){for(;(a=o[c]++)<r[c];){var i=void 0,u=t[c],p=n[c][a];if("string"==typeof p?(u=c>0?u:["plain"],i=p):(u=Z(u,p.type),p.alias&&(u=Z(u,p.alias)),i=p.content),"string"==typeof i){var m=i.split(L),d=m.length;l.push({types:u,content:m[0]});for(var f=1;f<d;f++)T(l),s.push(l=[]),l.push({types:u,content:m[f]})}else c++,t.push(u),n.push(i),o.push(0),r.push(i.length)}c--,t.pop(),n.pop(),o.pop(),r.pop()}return T(l),s}(void 0!==c?this.tokenize(t,o,c,n):[o]),className:"prism-code language-"+n,style:void 0!==a?a.root:{},getLineProps:this.getLineProps,getTokenProps:this.getTokenProps})},t}(o.Component),_={codeLine:"codeLine_VnKp",codeLineNumber:"codeLineNumber_wvcG",codeLineContent:"codeLineContent_piZJ"};function I(e){let{line:t,classNames:n,showLineNumbers:r,getLineProps:c,getTokenProps:l}=e;1===t.length&&"\n"===t[0].content&&(t[0].content="");const i=c({line:t,className:(0,s.Z)(n,r&&_.codeLine)}),u=t.map(((e,t)=>o.createElement("span",(0,a.Z)({key:t},l({token:e,key:t})))));return o.createElement("span",i,r?o.createElement(o.Fragment,null,o.createElement("span",{className:_.codeLineNumber}),o.createElement("span",{className:_.codeLineContent},u)):o.createElement(o.Fragment,null,u,o.createElement("br",null)))}var A=n(4028);const D={copyButtonCopied:"copyButtonCopied_GNhs",copyButtonIcons:"copyButtonIcons_V1g6",copyButtonIcon:"copyButtonIcon_v4Od",copyButtonSuccessIcon:"copyButtonSuccessIcon_RpIC"};function W(e){let{code:t,className:n}=e;const[r,a]=(0,o.useState)(!1),c=(0,o.useRef)(void 0),l=(0,o.useCallback)((()=>{!function(e,t){let{target:n=document.body}=void 0===t?{}:t;const o=document.createElement("textarea"),r=document.activeElement;o.value=e,o.setAttribute("readonly",""),o.style.contain="strict",o.style.position="absolute",o.style.left="-9999px",o.style.fontSize="12pt";const a=document.getSelection();let c=!1;a.rangeCount>0&&(c=a.getRangeAt(0)),n.append(o),o.select(),o.selectionStart=0,o.selectionEnd=e.length;let l=!1;try{l=document.execCommand("copy")}catch{}o.remove(),c&&(a.removeAllRanges(),a.addRange(c)),r&&r.focus()}(t),a(!0),c.current=window.setTimeout((()=>{a(!1)}),1e3)}),[t]);return(0,o.useEffect)((()=>()=>window.clearTimeout(c.current)),[]),o.createElement("button",{type:"button","aria-label":r?(0,A.I)({id:"theme.CodeBlock.copied",message:"Copied",description:"The copied button label on code blocks"}):(0,A.I)({id:"theme.CodeBlock.copyButtonAriaLabel",message:"Copy code to clipboard",description:"The ARIA label for copy code blocks button"}),title:(0,A.I)({id:"theme.CodeBlock.copy",message:"Copy",description:"The copy button label on code blocks"}),className:(0,s.Z)("clean-btn",n,D.copyButton,r&&D.copyButtonCopied),onClick:l},o.createElement("span",{className:D.copyButtonIcons,"aria-hidden":"true"},o.createElement("svg",{className:D.copyButtonIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M19,21H8V7H19M19,5H8A2,2 0 0,0 6,7V21A2,2 0 0,0 8,23H19A2,2 0 0,0 21,21V7A2,2 0 0,0 19,5M16,1H4A2,2 0 0,0 2,3V17H4V3H16V1Z"})),o.createElement("svg",{className:D.copyButtonSuccessIcon,viewBox:"0 0 24 24"},o.createElement("path",{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}))))}const V={wordWrapButtonIcon:"wordWrapButtonIcon_ltOD",wordWrapButtonEnabled:"wordWrapButtonEnabled_wql_"};function z(e){let{className:t,onClick:n,isEnabled:r}=e;const a=(0,A.I)({id:"theme.CodeBlock.wordWrapToggle",message:"Toggle word wrap",description:"The title attribute for toggle word wrapping button of code block lines"});return o.createElement("button",{type:"button",onClick:n,className:(0,s.Z)("clean-btn",t,r&&V.wordWrapButtonEnabled),"aria-label":a,title:a},o.createElement("svg",{className:V.wordWrapButtonIcon,viewBox:"0 0 24 24","aria-hidden":"true"},o.createElement("path",{fill:"currentColor",d:"M4 19h6v-2H4v2zM20 5H4v2h16V5zm-3 6H4v2h13.25c1.1 0 2 .9 2 2s-.9 2-2 2H15v-2l-3 3l3 3v-2h2c2.21 0 4-1.79 4-4s-1.79-4-4-4z"})))}function $(e){let{children:t,className:n="",metastring:r,title:c,showLineNumbers:l,language:i}=e;const{prism:{defaultLanguage:m,magicComments:d}}=(0,u.L)(),y=i??function(e){const t=e.split(" ").find((e=>e.startsWith("language-")));return t?.replace(/language-/,"")}(n)??m,g=p(),h=function(){const[e,t]=(0,o.useState)(!1),[n,r]=(0,o.useState)(!1),a=(0,o.useRef)(null),c=(0,o.useCallback)((()=>{const n=a.current.querySelector("code");e?n.removeAttribute("style"):n.style.whiteSpace="pre-wrap",t((e=>!e))}),[a,e]),l=(0,o.useCallback)((()=>{const{scrollWidth:e,clientWidth:t}=a.current,n=e>t||a.current.querySelector("code").hasAttribute("style");r(n)}),[a]);return(0,o.useEffect)((()=>{l()}),[e,l]),(0,o.useEffect)((()=>(window.addEventListener("resize",l,{passive:!0}),()=>{window.removeEventListener("resize",l)})),[l]),{codeBlockRef:a,isEnabled:e,isCodeScrollable:n,toggle:c}}(),v=function(e){return e?.match(f)?.groups.title??""}(r)||c,{lineClassNames:k,code:B}=b(t,{metastring:r,language:y,magicComments:d}),C=l??function(e){return Boolean(e?.includes("showLineNumbers"))}(r);return o.createElement(E,{as:"div",className:(0,s.Z)(n,y&&!n.includes(`language-${y}`)&&`language-${y}`)},v&&o.createElement("div",{className:N.codeBlockTitle},v),o.createElement("div",{className:N.codeBlockContent},o.createElement(P,(0,a.Z)({},w,{theme:g,code:B,language:y??"text"}),(e=>{let{className:t,tokens:n,getLineProps:r,getTokenProps:a}=e;return o.createElement("pre",{tabIndex:0,ref:h.codeBlockRef,className:(0,s.Z)(t,N.codeBlock,"thin-scrollbar")},o.createElement("code",{className:(0,s.Z)(N.codeBlockLines,C&&N.codeBlockLinesWithNumbering)},n.map(((e,t)=>o.createElement(I,{key:t,line:e,getLineProps:r,getTokenProps:a,classNames:k[t],showLineNumbers:C})))))})),o.createElement("div",{className:N.buttonGroup},(h.isEnabled||h.isCodeScrollable)&&o.createElement(z,{className:N.codeButton,onClick:()=>h.toggle(),isEnabled:h.isEnabled}),o.createElement(W,{className:N.codeButton,code:B}))))}function H(e){let{children:t,...n}=e;const r=(0,l.Z)(),c=function(e){return o.Children.toArray(e).some((e=>(0,o.isValidElement)(e)))?e:Array.isArray(e)?e.join(""):e}(t),s="string"==typeof c?$:B;return o.createElement(s,(0,a.Z)({key:String(r)},n),c)}var R=n(3794);var M=n(9181);const F={details:"details_pEv2",isBrowser:"isBrowser_io1p",collapsibleContent:"collapsibleContent_Iyzt"};function G(e){return!!e&&("SUMMARY"===e.tagName||G(e.parentElement))}function q(e,t){return!!e&&(e===t||q(e.parentElement,t))}function K(e){let{summary:t,children:n,...r}=e;const c=(0,l.Z)(),i=(0,o.useRef)(null),{collapsed:u,setCollapsed:p}=(0,M.u)({initialState:!r.open}),[m,d]=(0,o.useState)(r.open);return o.createElement("details",(0,a.Z)({},r,{ref:i,open:m,"data-collapsed":u,className:(0,s.Z)(F.details,c&&F.isBrowser,r.className),onMouseDown:e=>{G(e.target)&&e.detail>1&&e.preventDefault()},onClick:e=>{e.stopPropagation();const t=e.target;G(t)&&q(t,i.current)&&(e.preventDefault(),u?(p(!1),d(!0)):p(!0))}}),t??o.createElement("summary",null,"Details"),o.createElement(M.z,{lazy:!1,collapsed:u,disableSSRStyle:!0,onCollapseTransitionEnd:e=>{p(e),d(!e)}},o.createElement("div",{className:F.collapsibleContent},n)))}const U={details:"details_TGbC"},Y="alert alert--info";function J(e){let{...t}=e;return o.createElement(K,(0,a.Z)({},t,{className:(0,s.Z)(Y,U.details,t.className)}))}var Q=n(7762);function X(e){return o.createElement(Q.Z,e)}const ee={containsTaskList:"containsTaskList_8GpG"};const te={img:"img_dwSQ"};const ne={head:function(e){const t=o.Children.map(e.children,(e=>o.isValidElement(e)?function(e){if(e.props?.mdxType&&e.props.originalType){const{mdxType:t,originalType:n,...r}=e.props;return o.createElement(e.props.originalType,r)}return e}(e):e));return o.createElement(c.Z,e,t)},code:function(e){const t=["a","b","big","i","span","em","strong","sup","sub","small"];return o.Children.toArray(e.children).every((e=>"string"==typeof e&&!e.includes("\n")||(0,o.isValidElement)(e)&&t.includes(e.props.mdxType)))?o.createElement("code",e):o.createElement(H,e)},a:function(e){return o.createElement(R.Z,e)},pre:function(e){return o.createElement(H,(0,o.isValidElement)(e.children)&&"code"===e.children.props?.originalType?e.children.props:{...e})},details:function(e){const t=o.Children.toArray(e.children),n=t.find((e=>o.isValidElement(e)&&"summary"===e.props?.mdxType)),r=o.createElement(o.Fragment,null,t.filter((e=>e!==n)));return o.createElement(J,(0,a.Z)({},e,{summary:n}),r)},ul:function(e){return o.createElement("ul",(0,a.Z)({},e,{className:(t=e.className,(0,s.Z)(t,t?.includes("contains-task-list")&&ee.containsTaskList))}));var t},img:function(e){return o.createElement("img",(0,a.Z)({loading:"lazy"},e,{className:(t=e.className,(0,s.Z)(t,te.img))}));var t},h1:e=>o.createElement(X,(0,a.Z)({as:"h1"},e)),h2:e=>o.createElement(X,(0,a.Z)({as:"h2"},e)),h3:e=>o.createElement(X,(0,a.Z)({as:"h3"},e)),h4:e=>o.createElement(X,(0,a.Z)({as:"h4"},e)),h5:e=>o.createElement(X,(0,a.Z)({as:"h5"},e)),h6:e=>o.createElement(X,(0,a.Z)({as:"h6"},e))};function oe(e){let{children:t}=e;return o.createElement(r.Zo,{components:ne},t)}},7226:(e,t)=>{function n(e){let t,n=[];for(let o of e.split(",").map((e=>e.trim())))if(/^-?\d+$/.test(o))n.push(parseInt(o,10));else if(t=o.match(/^(-?\d+)(-|\.\.\.?|\u2025|\u2026|\u22EF)(-?\d+)$/)){let[e,o,r,a]=t;if(o&&a){o=parseInt(o),a=parseInt(a);const e=o<a?1:-1;"-"!==r&&".."!==r&&"\u2025"!==r||(a+=e);for(let t=o;t!==a;t+=e)n.push(t)}}return n}t.default=n,e.exports=n}}]);