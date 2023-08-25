"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[7455],{3905:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(t),u=a,d=m["".concat(s,".").concat(u)]||m[u]||f[u]||i;return t?r.createElement(d,o(o({ref:n},l),{},{components:t})):r.createElement(d,o({ref:n},l))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c[m]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<i;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},13253:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>p});var r=t(87462),a=(t(67294),t(3905));const i={description:"Snaps CLI subcommands and options reference",sidebar_position:3},o="Snaps command line interface",c={unversionedId:"reference/cli/index",id:"reference/cli/index",title:"Snaps command line interface",description:"Snaps CLI subcommands and options reference",source:"@site/snaps/reference/cli/index.md",sourceDirName:"reference/cli",slug:"/reference/cli/",permalink:"/cm/snaps-publishing-clarification/snaps/reference/cli/",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/reference/cli/index.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{description:"Snaps CLI subcommands and options reference",sidebar_position:3},sidebar:"snapsSidebar",previous:{title:"Snaps exports",permalink:"/cm/snaps-publishing-clarification/snaps/reference/exports"},next:{title:"Options",permalink:"/cm/snaps-publishing-clarification/snaps/reference/cli/options"}},s={},p=[],l={toc:p},m="wrapper";function f(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"snaps-command-line-interface"},"Snaps command line interface"),(0,a.kt)("p",null,"This reference describes the syntax of the Snaps command line interface (CLI) subcommands and options."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The CLI is installed when you ",(0,a.kt)("a",{parentName:"p",href:"/cm/snaps-publishing-clarification/snaps/get-started/quickstart"},"create a snap project"),".")),(0,a.kt)("p",null,"You can specify subcommands and options using the ",(0,a.kt)("inlineCode",{parentName:"p"},"mm-snap")," command:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mm-snap [SUBCOMMAND] [OPTIONS]\n")),(0,a.kt)("p",null,"You can also override the default values of the options by specifying them in the\n",(0,a.kt)("a",{parentName:"p",href:"/cm/snaps-publishing-clarification/snaps/concepts/anatomy#configuration-file"},"configuration file"),"."))}f.isMDXComponent=!0}}]);