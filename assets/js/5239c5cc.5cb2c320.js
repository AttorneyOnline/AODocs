"use strict";(self.webpackChunkaodocs=self.webpackChunkaodocs||[]).push([[758],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},602:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"Authoring/Characters/Depreciated Options and Information about 1.x Leftovers",id:"Authoring/Characters/Depreciated Options and Information about 1.x Leftovers",title:"Depreciated Options and Information about 1.x Leftovers",description:"Deprecated/Renamed options",source:"@site/docs/Authoring/Characters/Depreciated Options and Information about 1.x Leftovers.md",sourceDirName:"Authoring/Characters",slug:"/Authoring/Characters/Depreciated Options and Information about 1.x Leftovers",permalink:"/Authoring/Characters/Depreciated Options and Information about 1.x Leftovers",draft:!1,editUrl:"https://github.com/AttorneyOnline/AODocs/docs/Authoring/Characters/Depreciated Options and Information about 1.x Leftovers.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Basic Troubleshooting",permalink:"/Authoring/Basic Troubleshooting"},next:{title:"Overview",permalink:"/Authoring/Characters/Overview"}},c={},l=[{value:"Deprecated/Renamed options",id:"deprecatedrenamed-options",level:2},{value:"<code>(c)</code> emotes, DemoThings, and cluttered up miscs",id:"c-emotes-demothings-and-cluttered-up-miscs",level:2}],p={toc:l};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"deprecatedrenamed-options"},"Deprecated/Renamed options"),(0,a.kt)("p",null,"Older char.inis may contain sections or options not mentioned in this guide. Here are a few of them and a brief explanation of each, for posterity:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"firstmode"),": Technically never deprecated - ",(0,a.kt)("inlineCode",{parentName:"p"},"firstmode")," was never used by AO2 in the first place. This is another holdover from AO1, and if you see this in a char.ini you can probably assume it's ",(0,a.kt)("em",{parentName:"p"},"very")," old. The purpose of ",(0,a.kt)("inlineCode",{parentName:"p"},"firstmode")," was to work around a limitation in the unofficial Attorney Online 1.8 client which you can read more about ",(0,a.kt)("a",{parentName:"p",href:"https://sites.google.com/site/attorneyonlinedev/updates/asmallpatchandastoryaboutbuttons"},"here."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"shouts"),": (Depreciated in 2.9.0, functionality merged with ",(0,a.kt)("inlineCode",{parentName:"p"},"chat"),") Modifies the interjections, zooms, and realization flash your character will use if they aren't included in your character folder. These are located in ",(0,a.kt)("inlineCode",{parentName:"p"},"misc/"),", just like ",(0,a.kt)("inlineCode",{parentName:"p"},"chat")," - in fact, they often share a folder.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"gender"),": (Renamed to ",(0,a.kt)("inlineCode",{parentName:"p"},"blips")," in 2.9.0)"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"TODO:")," It's possible to use static and animated emotes at the same time by including only the ",(0,a.kt)("inlineCode",{parentName:"p"},"(a)")," or the ",(0,a.kt)("inlineCode",{parentName:"p"},"(b)")," animation and putting an identically named static emote in the root folder. Determine if this is intended, and if it is, add a section about it here. - in1tiate")),(0,a.kt)("h2",{id:"c-emotes-demothings-and-cluttered-up-miscs"},(0,a.kt)("inlineCode",{parentName:"h2"},"(c)")," emotes, DemoThings, and cluttered up miscs"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("strong",{parentName:"p"},"TODO:")," I wrote this section and then realized it doesn't really fit in a character creation guide. As I'm certain many will find the storied history of AO1 as entertaining as I do, I suggest a dedicated page for documenting it. - in1tiate")),(0,a.kt)("p",null,'Extremely old file bases may have characters that have files with the prefix "',(0,a.kt)("inlineCode",{parentName:"p"},"(c)"),'". These are a remnant of a never-realized feature in AO1 that would allow the specification of a third animation to play once the character was done talking. It was never implemented, and thus ',(0,a.kt)("inlineCode",{parentName:"p"},"(c)")," emotes went unused until 2.9.x."),(0,a.kt)("p",null,'Another commonality in AO1-era file bases is the presence of a "DemoThings" folder located under ',(0,a.kt)("inlineCode",{parentName:"p"},"misc/"),". This folder's name is somewhat nonsensical - on AO1, its purpose was to store the ",(0,a.kt)("inlineCode",{parentName:"p"},"char_icon")," of every character so that they could be displayed on the character selection screen. AO2 uses the much more sane solution of storing the icon inside the character folder."),(0,a.kt)("p",null,"Many assets used in the UI were also stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"misc/")," on AO1 - as themes were nonexistent - some of which have seen continued use to this day - including the ever-popular Missingno placeholder."))}d.isMDXComponent=!0}}]);