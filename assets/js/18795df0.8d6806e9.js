"use strict";(self.webpackChunkaodocs=self.webpackChunkaodocs||[]).push([[206],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8887:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"Development/Roadmap",id:"Development/Roadmap",title:"Roadmap",description:"Roadmap",source:"@site/docs/Development/Roadmap.md",sourceDirName:"Development",slug:"/Development/Roadmap",permalink:"/AODocs/Development/Roadmap",draft:!1,editUrl:"https://github.com/AttorneyOnline/AODocs/tree/main/docs/Development/Roadmap.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Network",permalink:"/AODocs/Development/Network"},next:{title:"Casing",permalink:"/AODocs/Gameplay/Casing"}},s={},c=[{value:"Roadmap",id:"roadmap",level:2},{value:"Finish the ui-files branch",id:"finish-the-ui-files-branch",level:3},{value:"Add a real asset system",id:"add-a-real-asset-system",level:3},{value:"Redesign the core engine",id:"redesign-the-core-engine",level:3},{value:"Disconnect from the <em>Ace Attorney</em> franchise",id:"disconnect-from-the-ace-attorney-franchise",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"roadmap"},"Roadmap"),(0,r.kt)("p",null,"Okay, the roadmap... I'm sure everyone wants to know what direction AO intends to go. These are mostly long-term goals; short-term goals are usually done on impulse and usually just involve putting things that already exist together."),(0,r.kt)("h3",{id:"finish-the-ui-files-branch"},"Finish the ui-files branch"),(0,r.kt)("p",null,"This is a full revamp of the UI and network code. There will be some things that won't be refactored before release, such as asset loading, the character parser, and the viewport (which is essentially the core engine of the game)."),(0,r.kt)("p",null,"This means that the UI will be much easier to customize and will scale well for large monitors, and it will be significantly easier to add new features."),(0,r.kt)("p",null,"Work was begun in December of 2018 and has been ongoing. Various UI portions are still in the process of being moved to the new code."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://cdn.discordapp.com/attachments/323377366997008394/698959173840535606/unknown.png",alt:"Screenshot"})),(0,r.kt)("p",null,"As you may see, I am having trouble with color and layout choices - I'm a backend, not a frontend, developer. If you have designed a good theme before, please don't hesitate to reach out."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In need of:")," UX designer"),(0,r.kt)("h3",{id:"add-a-real-asset-system"},"Add a real asset system"),(0,r.kt)("p",null,"I've got plenty of specs for a unifying asset system with the following features:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Allows for automatic asset downloading (both on-demand and before joining)"),(0,r.kt)("li",{parentName:"ul"},"Backwards compatible with older servers"),(0,r.kt)("li",{parentName:"ul"},"Doesn't prevent players from installing characters manually"),(0,r.kt)("li",{parentName:"ul"},"Doesn't pollute the hard drive with duplicate animations of similar characters")),(0,r.kt)("p",null,"This will have to be implemented after the major refactoring is finished, however."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"In need of:")," Cooperating server owners"),(0,r.kt)("h3",{id:"redesign-the-core-engine"},"Redesign the core engine"),(0,r.kt)("p",null,"The core engine is rather limited in a few ways:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"There are only a limited number of events:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Emotes, which are just preanimation + talking + idle, with a choice of side and sound effect."),(0,r.kt)("li",{parentName:"ul"},"Evidence display."),(0,r.kt)("li",{parentName:"ul"},"Interjections."),(0,r.kt)("li",{parentName:"ul"},"WT/CE."))),(0,r.kt)("li",{parentName:"ul"},"Only a fixed number of layers.")),(0,r.kt)("p",null,"It has been overloaded, and events really need to be split into smaller sub-events using a timeline model."),(0,r.kt)("p",null,"Eventually, this will also require a major modification of the network protocol in order to be fully leveraged."),(0,r.kt)("h3",{id:"disconnect-from-the-ace-attorney-franchise"},"Disconnect from the ",(0,r.kt)("em",{parentName:"h3"},"Ace Attorney")," franchise"),(0,r.kt)("p",null,"Using Capcom assets is an immense legal liability. Distancing ourselves from the ",(0,r.kt)("em",{parentName:"p"},"Ace Attorney")," franchise by pushing the legal burden of nonfree assets to server hosts and distributing the base game as 100% fan content opens business opportunities."),(0,r.kt)("p",null,"This is also an opportunity to publish the game on Steam as an original fan game. From my knowledge of marketing, I personally believe that adding a small price to the game may increase perceived value than if it were simply free, even if the game remained open-source. It also introduces a revenue stream that can be used to fund artists for original content. But as there are many moving parts to sales - and this implies the formation of a company, during a time when I would already be working a full-time software job - I would otherwise assume that it would enter Steam free."))}m.isMDXComponent=!0}}]);