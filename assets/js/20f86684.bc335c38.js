"use strict";(self.webpackChunkaodocs=self.webpackChunkaodocs||[]).push([[909],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7528:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,l={unversionedId:"Gameplay/Installation",id:"Gameplay/Installation",title:"Installation",description:"Installation",source:"@site/docs/Gameplay/Installation.md",sourceDirName:"Gameplay",slug:"/Gameplay/Installation",permalink:"/Gameplay/Installation",draft:!1,editUrl:"https://github.com/AttorneyOnline/AODocs/docs/Gameplay/Installation.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Casing",permalink:"/Gameplay/Casing"},next:{title:"loading_1.0",permalink:"/Legacy/loading_1.0"}},s={},c=[{value:"Installation",id:"installation",level:2},{value:"What&#39;s the Difference?",id:"whats-the-difference",level:3},{value:"Downloading",id:"downloading",level:3},{value:"Extracting",id:"extracting",level:3},{value:"Running",id:"running",level:3}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Here, we'll explain how to install Attorney Online. Installation is only required for the desktop version of AO, unlike webAO which can be run directly from the web browser."),(0,a.kt)("h3",{id:"whats-the-difference"},"What's the Difference?"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Platform support.")," webAO works on anything with a web browser, including Android, iOS, Chrome OS, smart TVs, and probably cars. Desktop AO works natively on Windows, Linux, and macOS."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Server support.")," Desktop AO can access any server, whereas webAO can only access servers that support it."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Animation timing.")," Desktop AO has perfect frame timing; webAO has various timing issues in its animations that disturb the experience."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Asset downloading.")," Desktop AO allows you to install your own assets locally; webAO downloads a curated list automatically."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Large display support.")," Desktop AO requires a custom theme to look good on a large screen; webAO resizes to fit the window out-of-the-box."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Development.")," Both versions of AO are worked on by different teams.")),(0,a.kt)("p",null,"In summary, while webAO is more convenient, the desktop version of AO is more robust and provides a more stable and authentic experience."),(0,a.kt)("h3",{id:"downloading"},"Downloading"),(0,a.kt)("p",null,"Install the client from the ",(0,a.kt)("a",{parentName:"p",href:"https://aceattorneyonline.com/"},"website"),". The launcher is recommended, which does the extracting step for you and will automatically install updates whenever they are available."),(0,a.kt)("h3",{id:"extracting"},"Extracting"),(0,a.kt)("p",null,"Once you've downloaded the game, copy the contents of the ZIP file to any folder."),(0,a.kt)("h3",{id:"running"},"Running"),(0,a.kt)("p",null,"Double-click the Attorney Online executable file. For new releases, you may get a SmartScreen or antivirus warning; our software is not very popular, so sometimes it can take a while for virus scanners to recognize it as safe. You can safely ignore the warning."))}u.isMDXComponent=!0}}]);