"use strict";(self.webpackChunkmetamask_docs=self.webpackChunkmetamask_docs||[]).push([[6423],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)n=s[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),l=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,h=u["".concat(i,".").concat(d)]||u[d]||m[d]||s;return n?a.createElement(h,o(o({ref:t},c),{},{components:n})):a.createElement(h,o({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:r,o[1]=p;for(var l=2;l<s;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},7919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const s={description:"Get started quickly using the Snaps template.",sidebar_position:2},o="Snaps quickstart",p={unversionedId:"get-started/quickstart",id:"get-started/quickstart",title:"Snaps quickstart",description:"Get started quickly using the Snaps template.",source:"@site/snaps/get-started/quickstart.md",sourceDirName:"get-started",slug:"/get-started/quickstart",permalink:"/update-docusaurus-version-2/snaps/get-started/quickstart",draft:!1,editUrl:"https://github.com/MetaMask/metamask-docs/edit/main/snaps/get-started/quickstart.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{description:"Get started quickly using the Snaps template.",sidebar_position:2},sidebar:"snapsSidebar",previous:{title:"Install MetaMask Flask",permalink:"/update-docusaurus-version-2/snaps/get-started/install-flask"},next:{title:"How to",permalink:"/update-docusaurus-version-2/snaps/how-to"}},i={},l=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Create the project",id:"create-the-project",level:2},{value:"Start the snap",id:"start-the-snap",level:2},{value:"Connect to the snap",id:"connect-to-the-snap",level:2},{value:"Customize the snap",id:"customize-the-snap",level:2}],c={toc:l},u="wrapper";function m(e){let{components:t,...n}=e;return(0,r.kt)(u,(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"snaps-quickstart"},"Snaps quickstart"),(0,r.kt)("p",null,"Get started with Snaps using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/create-snap")," CLI"),".\nWith the CLI, you can initialize a snap monorepo project built with TypeScript and React."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"/update-docusaurus-version-2/snaps/get-started/install-flask"},"MetaMask Flask installed")),(0,r.kt)("admonition",{parentName:"li",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask Snaps works with the latest LTS version of Node.js, but we recommend using the version specified in\nthe template's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/template-snap-monorepo/blob/main/.nvmrc"},(0,r.kt)("inlineCode",{parentName:"a"},".nvmrc"))," file."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"A text editor (for example, ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VS Code"),")")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/"},"Yarn")," version 3"))),(0,r.kt)("h2",{id:"create-the-project"},"Create the project"),(0,r.kt)("p",null,"Create a new snap project using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/MetaMask/snaps/tree/main/packages/create-snap"},(0,r.kt)("inlineCode",{parentName:"a"},"@metamask/create-snap")," CLI")," by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn create @metamask/snap your-snap-name\n")),(0,r.kt)("p",null,"or"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm create @metamask/snap your-snap-name\n")),(0,r.kt)("p",null,"See the section ",(0,r.kt)("a",{parentName:"p",href:"/update-docusaurus-version-2/snaps/concepts/anatomy"},"Snaps anatomy")," to learn about the anatomy of your snap project files."),(0,r.kt)("h2",{id:"start-the-snap"},"Start the snap"),(0,r.kt)("p",null,"From the root of the newly created project, install the project dependencies using Yarn:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn install\n")),(0,r.kt)("p",null,"Start the development server:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"yarn start\n")),(0,r.kt)("p",null,"You are now serving the snap at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8080/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:8080"))," and its front-end at ",(0,r.kt)("a",{parentName:"p",href:"http://localhost:8000/"},(0,r.kt)("inlineCode",{parentName:"a"},"http://localhost:8000")),"."),(0,r.kt)("h2",{id:"connect-to-the-snap"},"Connect to the snap"),(0,r.kt)("p",null,"On the front-end, select the ",(0,r.kt)("strong",{parentName:"p"},"Connect")," button and the MetaMask Flask extension pops up and\nrequires you to approve the snap's permissions."),(0,r.kt)("p",null,"Once connected, select the ",(0,r.kt)("strong",{parentName:"p"},"Send message")," button to display a custom message within a confirmation\nscreen in MetaMask Flask."),(0,r.kt)("h2",{id:"customize-the-snap"},"Customize the snap"),(0,r.kt)("p",null,"Open the project in a text editor.\nYou can customize your snap by editing ",(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/snap/src")," folder."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"index.ts")," contains an example request that uses the\n",(0,r.kt)("a",{parentName:"p",href:"/update-docusaurus-version-2/snaps/reference/rpc-api#snapdialog"},(0,r.kt)("inlineCode",{parentName:"a"},"snap_dialog"))," method to display a custom confirmation screen:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { OnRpcRequestHandler } from '@metamask/snaps-types';\nimport { getMessage } from './message';\n\nexport const onRpcRequest: OnRpcRequestHandler = ({ origin, request }) => {\n  switch (request.method) {\n    case 'hello':\n      return snap.request({\n        method: 'snap_dialog',\n        params: {\n          type: 'Confirmation',\n          content: panel([\n            text(`Hello, **${origin}**!`),\n            text('This custom confirmation is just for display purposes.'),\n            text(\n              'But you can edit the snap source code to make it do something, if you want to!',\n            ),\n          ]),\n        },\n      });\n    default:\n      throw new Error('Method not found.');\n  }\n};\n")),(0,r.kt)("p",null,"Edit the text in any ",(0,r.kt)("inlineCode",{parentName:"p"},"text()")," component and select the ",(0,r.kt)("strong",{parentName:"p"},"Reconnect")," button\non the front-end to re-install the snap."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"MetaMask Flask automatically re-installs locally hosted snaps whenever it receives a connection request\nfor them.")),(0,r.kt)("p",null,"The next time you select the ",(0,r.kt)("strong",{parentName:"p"},"Send message")," button, you see the updated text in the confirmation screen."),(0,r.kt)("p",null,"You've now successfully connected, installed, interacted with, and customized your snap!\nLearn more about ",(0,r.kt)("a",{parentName:"p",href:"/update-docusaurus-version-2/snaps/how-to/develop-a-snap"},"developing a snap"),"."))}m.isMDXComponent=!0}}]);