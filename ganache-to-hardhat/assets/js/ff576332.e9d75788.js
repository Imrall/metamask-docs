"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[4151],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>f});var r=n(67294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},l="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),l=c(n),d=s,f=l["".concat(p,".").concat(d)]||l[d]||u[d]||a;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,i=new Array(a);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[l]="string"==typeof e?e:s,i[1]=o;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3932:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var r=n(87462),s=(n(67294),n(3905));const a={description:"Request permissions in a manifest file.",sidebar_position:2},i="Request permissions",o={unversionedId:"how-to/request-permissions",id:"how-to/request-permissions",title:"Request permissions",description:"Request permissions in a manifest file.",source:"@site/snaps/how-to/request-permissions.md",sourceDirName:"how-to",slug:"/how-to/request-permissions",permalink:"/ganache-to-hardhat/snaps/how-to/request-permissions",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/how-to/request-permissions.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Request permissions in a manifest file.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Develop a snap",permalink:"/ganache-to-hardhat/snaps/how-to/develop-a-snap"},next:{title:"Manage keys",permalink:"/ganache-to-hardhat/snaps/how-to/manage-keys"}},p={},c=[{value:"RPC API permissions",id:"rpc-api-permissions",level:2},{value:"Endowments",id:"endowments",level:2},{value:"Dynamic permissions",id:"dynamic-permissions",level:2}],m={toc:c},l="wrapper";function u(e){let{components:t,...n}=e;return(0,s.kt)(l,(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"request-permissions"},"Request permissions"),(0,s.kt)("p",null,"To access certain powerful JavaScript globals or API methods, a snap must ask the user for permission.\nSnaps follow the ",(0,s.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2255"},"EIP-2255 wallet permissions specification"),",\nand you must specify a snap's required permissions (except for ",(0,s.kt)("a",{parentName:"p",href:"#dynamic-permissions"},"dynamic permissions"),")\nin the ",(0,s.kt)("inlineCode",{parentName:"p"},"initialPermissions")," field of the ",(0,s.kt)("a",{parentName:"p",href:"/ganache-to-hardhat/snaps/concepts/anatomy#manifest-file"},"manifest file"),"."),(0,s.kt)("h2",{id:"rpc-api-permissions"},"RPC API permissions"),(0,s.kt)("p",null,"You must request permission to use any\n",(0,s.kt)("a",{parentName:"p",href:"/ganache-to-hardhat/snaps/reference/rpc-api#restricted-methods"},"restricted JSON-RPC API methods"),"."),(0,s.kt)("p",null,"For example, to request to use ",(0,s.kt)("a",{parentName:"p",href:"/ganache-to-hardhat/snaps/reference/rpc-api#snap_dialog"},(0,s.kt)("inlineCode",{parentName:"a"},"snap_dialog")),", add the\nfollowing to the manifest file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "snap_dialog": {}\n},\n')),(0,s.kt)("h2",{id:"endowments"},"Endowments"),(0,s.kt)("p",null,"Endowments are a type of permission.\nSee the ",(0,s.kt)("a",{parentName:"p",href:"/ganache-to-hardhat/snaps/reference/permissions"},"Snaps permissions reference")," for the full list of endowments\nyou can specify in the manifest file."),(0,s.kt)("p",null,"For example, to request the ",(0,s.kt)("a",{parentName:"p",href:"/ganache-to-hardhat/snaps/reference/permissions#endowmentnetwork-access"},(0,s.kt)("inlineCode",{parentName:"a"},"endowment:network-access")),"\npermission, add the following to the manifest file:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-json"},'"initialPermissions": {\n  "endowment:network-access": {}\n},\n')),(0,s.kt)("h2",{id:"dynamic-permissions"},"Dynamic permissions"),(0,s.kt)("p",null,"Dynamic permissions are not requested in the manifest file.\nInstead, your snap can acquire dynamic permissions during its lifecycle."),(0,s.kt)("p",null,"For example, your snap can request permission to call the Ethereum provider's\n",(0,s.kt)("a",{parentName:"p",href:"/ganache-to-hardhat/snaps/reference/permissions#eth_accounts"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_accounts"))," RPC method by calling the provider's\n",(0,s.kt)("a",{parentName:"p",href:"/wallet/reference/eth_requestaccounts"},(0,s.kt)("inlineCode",{parentName:"a"},"eth_requestAccounts"))," RPC method."),(0,s.kt)("p",null,"See the ",(0,s.kt)("a",{parentName:"p",href:"/wallet/concepts/rpc-api#restricted-methods"},"Ethereum JSON-RPC API restricted methods"),"\nfor more information."))}u.isMDXComponent=!0}}]);