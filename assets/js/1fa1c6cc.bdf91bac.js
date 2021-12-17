"use strict";(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[48926],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(n),c=a,f=d["".concat(l,".").concat(c)]||d[c]||m[c]||i;return n?r.createElement(f,o(o({ref:t},u),{},{components:n})):r.createElement(f,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},81792:(e,t,n)=>{n.r(t),n.d(t,{frontMatter:()=>i,contentTitle:()=>o,metadata:()=>p,toc:()=>l,default:()=>u});var r=n(83117),a=(n(67294),n(3905));const i={id:"faq-81",slug:"/faqs/81",title:"Wie definiere ich f\xfcr den Qualifikations-Import die Wiederholungsintervalle",keywords:["Datenimport","Aufgaben & Qualifikationen"]},o=void 0,p={unversionedId:"faqs/faq-81",id:"faqs/faq-81",title:"Wie definiere ich f\xfcr den Qualifikations-Import die Wiederholungsintervalle",description:"TimeInterval gibt die Einheit an, in der die Zeit gemessen wird:",source:"@site/docs/faqs/wie-definiere-ich-f\xfcr-den-qualifikations-import-die-wiederholungsintervalle.md",sourceDirName:"faqs",slug:"/faqs/81",permalink:"/docs/faqs/81",editUrl:"https://github.com/qmBase/docs/tree/master/docs/faqs/wie-definiere-ich-f\xfcr-den-qualifikations-import-die-wiederholungsintervalle.md",tags:[],version:"current",lastUpdatedAt:1639745253,formattedLastUpdatedAt:"17.12.2021",frontMatter:{id:"faq-81",slug:"/faqs/81",title:"Wie definiere ich f\xfcr den Qualifikations-Import die Wiederholungsintervalle",keywords:["Datenimport","Aufgaben & Qualifikationen"]},sidebar:"someSidebar",previous:{title:"Was sind Custom Fields",permalink:"/docs/faqs/80"},next:{title:"Wie exportiere ich eine Tabelle",permalink:"/docs/faqs/82"}},l=[],s={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"TimeInterval"))," gibt die Einheit an, in der die Zeit gemessen wird:"),(0,a.kt)("p",null,"0 = Year ,"),(0,a.kt)("p",null,"1 = Month ,"),(0,a.kt)("p",null,"2 =Week,"),(0,a.kt)("p",null,"3 = Day,"),(0,a.kt)("p",null,"4 = Hour,"),(0,a.kt)("p",null,"5 = Minute,"),(0,a.kt)("p",null,"6 = Second"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"TimeIntervalValue")," "),"gibt dann den dazugeh\xf6rigen nummerischen Wert an."),(0,a.kt)("p",null,"TimeInterval = 0, TimerIntervallValue = 2 w\xfcrde bedeuten, dass die Qualifikation eine G\xfcltigkeit von 2 Jahren hat."),(0,a.kt)("p",null,"Das Feld ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"SurveillanceIntervalTimeSpan")," "),"erfasst die Informationen gem\xe4\xdf ",(0,a.kt)("a",{parentName:"p",href:"https://de.wikipedia.org/wiki/ISO_8601"},"https://de.wikipedia.org/wiki/ISO_8601")),(0,a.kt)("p",null,"Eine G\xfcltigkeit von zwei Jahren wird wie folgt vorgegeben: ",(0,a.kt)("strong",{parentName:"p"},"P2Y")),(0,a.kt)("p",null,"Das ",(0,a.kt)("strong",{parentName:"p"},"P")," gibt an, dass es sich um eine Zeitspanne (Period) handelt."),(0,a.kt)("p",null,"Zeichen f\xfcr weitere Zeitspannen"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Y"),"\nJahr (",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"year")),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"M"),"\nMonat (",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"month")),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"W"),"\nWoche (",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"week")),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"D"),"\nTag (",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"day")),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"h"),"\nStunde (",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"hour")),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"m"),"\nMinute (",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"minute")),")"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"s"),"\nSekunde (",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"second")),")"))}u.isMDXComponent=!0}}]);