"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3473],{3905:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return g}});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),c=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=c(e.components);return a.createElement(p.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=c(t),g=r,d=u["".concat(p,".").concat(g)]||u[g]||m[g]||i;return t?a.createElement(d,l(l({ref:n},s),{},{components:t})):a.createElement(d,l({ref:n},s))}));function g(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var p in n)hasOwnProperty.call(n,p)&&(o[p]=n[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3365:function(e,n,t){t.r(n),t.d(n,{assets:function(){return s},contentTitle:function(){return p},default:function(){return g},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return m}});var a=t(7462),r=t(3366),i=(t(7294),t(3905)),l=["components"],o={authors:["green"],title:"JPA @Inheritance",date:"2019-05-20T21:00",tags:["java","jpa"]},p=void 0,c={permalink:"/blog/2019/05/20/jpa-inheritance",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/2019-05-20-jpa-inheritance.md",source:"@site/blog/2019-05-20-jpa-inheritance.md",title:"JPA @Inheritance",description:"\uae40\uc601\ud55c\ub2d8\uc758 \uc790\ubc14 ORM \ud45c\uc900 JPA \ud504\ub85c\uadf8\ub798\ubc0d \uc73c\ub85c \uc2a4\ud130\ub514\ub97c \ud558\uba74\uc11c \uc815\ub9ac\ud55c \ub0b4\uc6a9\uc774\uc5c8\ub294\ub370, \ucc3e\uc544\ubcf4\uae30 \uc27d\uac8c \uac04\ub7b5\ud654 \ud574\ubd05\ub2c8\ub2e4.",date:"2019-05-20T21:00:00.000Z",formattedDate:"2019\ub144 5\uc6d4 20\uc77c",tags:[{label:"java",permalink:"/blog/tags/java"},{label:"jpa",permalink:"/blog/tags/jpa"}],readingTime:2.63,truncated:!1,authors:[{name:"Green",title:"\uc5b4\uc911\uc774\ub5a0\uc911\uc774 \ub4a4\uc8fd\ubc15\uc911 \uc5c9\ub9dd\uc9c4\uc9dc ...",url:"https://github.com/greenn-lab",imageURL:"https://github.com/greenn-lab.png",key:"green"}],frontMatter:{authors:["green"],title:"JPA @Inheritance",date:"2019-05-20T21:00",tags:["java","jpa"]},prevItem:{title:"Javascript Generator",permalink:"/blog/2019/05/26/javascript-generator"},nextItem:{title:"positive, nagative \uadf8\ub9ac\uace0 lookahead lookbehind",permalink:"/blog/2019/05/13/positive-nagative-and-lookahead-lookbehind"}},s={authorsImageUrls:[void 0]},m=[{value:"1. JOINED",id:"1-joined",level:2},{value:"2. SINGLE TABLE",id:"2-single-table",level:2},{value:"3. TABLE PER CLASS",id:"3-table-per-class",level:2}],u={toc:m};function g(e){var n=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"http://www.yes24.com/Product/Goods/19040233?scode=032&OzSrank=1"},"\uae40\uc601\ud55c\ub2d8\uc758 \uc790\ubc14 ORM \ud45c\uc900 JPA \ud504\ub85c\uadf8\ub798\ubc0d")," \uc73c\ub85c \uc2a4\ud130\ub514\ub97c \ud558\uba74\uc11c \uc815\ub9ac\ud55c \ub0b4\uc6a9\uc774\uc5c8\ub294\ub370, \ucc3e\uc544\ubcf4\uae30 \uc27d\uac8c \uac04\ub7b5\ud654 \ud574\ubd05\ub2c8\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/greenn-lab/blog-codes-java-jpa-2019-05-20-jpa-inheritance"},"github")," \uc5d0 \uc608\uc81c \uc18c\uc2a4\ub3c4 \uc62c\ub77c\uac00 \uc788\uace0\uc694."),(0,i.kt)("h1",{id:"\uc0c1\uc18d-\ubc29\uc2dd"},"\uc0c1\uc18d \ubc29\uc2dd"),(0,i.kt)("p",null,"RDB \uc0c1\uc5d0\uc11c \uc0c1\uc18d\uc758 \uac1c\ub150\uc73c\ub85c Entity\ub97c \ub9cc\ub4e4 \ub54c ",(0,i.kt)("inlineCode",{parentName:"p"},"@Inheritance")," \ub97c \uc0ac\uc6a9\ud558\uc796\uc544\uc694.",(0,i.kt)("br",{parentName:"p"}),"\n","\uadf8\ub7f0\ub370 \ubc29\uc2dd\uc774 3\uac00\uc9c0\uac00 \uc788\uc5b4\uc11c, \uac01\uac01 \ub2e4\ub978 \ud14c\uc774\ube14\uacfc \ub300\uc751\ud558\uac8c \ub418\ub354\ub77c\uace0\uc694."),(0,i.kt)("h2",{id:"1-joined"},"1. JOINED"),(0,i.kt)("p",null,"\uac01 Entity \ubcc4\ub85c \ub530\ub85c \ud14c\uc774\ube14\uc774 \ub9cc\ub4e4\uc5b4 \uc9c0\ub294 \ubc29\uc2dd\uc774\uc5d0\uc694.  "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\n@Inheritance(strategy = InherianceType.JOINED)\n@DiscriminatorColumn(name = "MEMBER_TYPE")\nabstract class Member {\n  @Id\n  @Column(name = "MEMBER_ID")\n  private Long id;\n\n  private String username;\n  private Integer password;\n  ...\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\n@DiscriminatorValue("ADMIN")\nclass Admin extends Member {\n  @Column(name = "DEPT_CD")\n  private String department;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\n@DiscriminatorValue("SELLER")\nclass Seller extends Member {\n  private String company;\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\n@DisciriminatorValue("CUSTOMER")\nclass Customer extends Member {\n  private String email;\n}\n')),(0,i.kt)("p",null,"\uc774\ub807\uac8c \ub418\uba74 \ub2e4\uc74c\uacfc \uac19\uc740 \uad00\uacc4\ub97c \uac00\uc9c0\uac8c \ub418\ub294 \uac70\uc8e0.\n",(0,i.kt)("img",{src:t(9151).Z,width:"1532",height:"726"})),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("inlineCode",{parentName:"p"},"Member")," \uc5d0 ",(0,i.kt)("inlineCode",{parentName:"p"},"@DiscriminatorColumn(...)")," \uc744 \uc0dd\ub7b5 \ud560 \uc218 \uc788\uc5b4\uc694.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc0c1\uc18d\ubc1b\ub294 \ub300\uc0c1\uc744 \uad6c\ubd84\ud560 \uac12\uc774 \uc5c6\ub2e4\uba74 \uad73\uc774 \ub123\uc9c0 \uc54a\uc544\ub3c4 \ub418\ub294\uac70\uc8e0. \ub2f9\uc5f0\ud788 ",(0,i.kt)("inlineCode",{parentName:"p"},"@DiscriminatorValue(...)")," \ub3c4 \uc548\uc368\ub3c4 \ub418\uaca0\ub124\uc694. ")),(0,i.kt)("h2",{id:"2-single-table"},"2. SINGLE TABLE"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\n@Inheritance(strategy = InheritanceType.SINGLE_TABLE)\n@DiscriminationColumn(name = "MEMBER_TYPE")\nclass Member {\n  @Id\n  @Column(name = "MEMBER_ID")\n  private Long id;\n  \n  private String username;\n  private String password;\n  private String company;\n  \n  @Column(name = "DEPT_CD")\n  private String department;\n  \n  private String email;\n}\n')),(0,i.kt)("p",null,"\uc774\ub7f0\uc2dd\uc73c\ub85c \ud558\ub098\uc758 \ud14c\uc774\ube14\uc5d0 \ubabd\ub545 \ub123\ub294 \uac70\uc5d0\uc694.",(0,i.kt)("br",{parentName:"p"}),"\n","\ub098\uba38\uc9c0 \ud074\ub798\uc2a4\ub294."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\n@DiscriminatorValue("ADMIN")\nclass Admin extends Member {\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\n@DiscriminatorValue("SELLER")\nclass Seller extends Member {\n}\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\n@DiscriminatorValue("CUSTOMER")\nclass CUSTOMER extends Member {\n}\n')),(0,i.kt)("p",null,"\uadf8\ub7ec\uba74 Schema\ub294 \uc774\ub807\uac8c \uc0dd\uc131\ub429\ub2c8\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("img",{src:t(1381).Z,width:"554",height:"514"}),"  "),(0,i.kt)("h2",{id:"3-table-per-class"},"3. TABLE PER CLASS"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\n@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)\nabstract class Member {\n  @Id\n  @Column(name = "MEMBER_ID")\n  private Long id;\n\n  private String username;\n  private String password;\n}\n')),(0,i.kt)("p",null,"\uc5b4\ucc28\ud53c Entity \uac00 \uc0c1\uc18d \ub300\uc0c1 \ud56d\ubaa9\ubcc4\ub85c \ub530\ub85c \uc0dd\uaca8\ub0a0 \uac70\ub2c8\uae4c ",(0,i.kt)("inlineCode",{parentName:"p"},"@DiscriminationColumn(Value)")," \ub294 \ud544\uc694 \uc5c6\uad70\uc694."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'@Entity\nclass Admin extends Member {\n  @Column(name = "DEPT_CD")\n  private String department;\n}\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\nclass Customer extends Member {\n  private String email;\n}\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"@Entity\nclass Seller extends TablePerClassMember {\n  private String company;\n}\n")),(0,i.kt)("p",null,"\uc774\ub807\uac8c \ud558\uba74,\n",(0,i.kt)("img",{src:t(1028).Z,width:"2222",height:"370"}),"\n\uc774\ub807\uac8c Schema \ub098\uc635\ub2c8\ub2e4.",(0,i.kt)("br",{parentName:"p"}),"\n","\uc774 \uc804\ub7b5\uc740 ",(0,i.kt)("inlineCode",{parentName:"p"},"UNION ALL")," \uc744 \uc0ac\uc6a9\ud558\uac8c \ub418\uc5b4\uc11c \ube44\ucd94 \ub418\ub294 \uac83 \uac19\uace0\uc694."))}g.isMDXComponent=!0},9151:function(e,n,t){n.Z=t.p+"assets/images/inheritance-joined-2aa785eecf6e9d501cb2fd291aba6210.png"},1381:function(e,n,t){n.Z=t.p+"assets/images/inheritance-single-table-62c49f5d6b91b34e9fe2e7934dfb4cee.png"},1028:function(e,n,t){n.Z=t.p+"assets/images/inheritance-table-per-class-d26a067747ef228771e786579c7fc958.png"}}]);