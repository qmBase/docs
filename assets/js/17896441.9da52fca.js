"use strict";(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[27918],{16237:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var n=a(67294),l=a(86010),s=a(93783),i=a(39960),r=a(95999);const o=function(e){const{previous:t,next:a}=e;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,r.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&n.createElement(i.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(r.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},a.title," \xbb"))))};var c=a(52263),d=a(80907),m=a(53810);const u={unreleased:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(r.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){let{siteTitle:t,versionMetadata:a}=e;return n.createElement(r.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function v(e){const t=u[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){let{versionLabel:t,to:a,onClick:l}=e;return n.createElement(r.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(i.Z,{to:a,onClick:l},n.createElement(r.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function g(e){let{className:t,versionMetadata:a}=e;const{siteConfig:{title:s}}=(0,c.Z)(),{pluginId:i}=(0,d.gA)({failfast:!0}),{savePreferredVersionName:r}=(0,m.J)(i),{latestDocSuggestion:o,latestVersionSuggestion:u}=(0,d.Jo)(i),g=null!=o?o:(h=u).docs.find((e=>e.id===h.mainDocId));var h;return n.createElement("div",{className:(0,l.Z)(t,m.kM.docs.docVersionBanner,"alert alert--warning margin-bottom--md"),role:"alert"},n.createElement("div",null,n.createElement(v,{siteTitle:s,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:u.label,to:g.path,onClick:()=>r(u.name)})))}function h(e){let{className:t}=e;const a=(0,m.E6)();return a.banner?n.createElement(g,{className:t,versionMetadata:a}):null}function E(e){let{className:t}=e;const a=(0,m.E6)();return a.badge?n.createElement("span",{className:(0,l.Z)(t,m.kM.docs.docVersionBadge,"badge badge--secondary")},"Version: ",a.label):null}var b=a(41217);function N(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a}=e;return n.createElement(r.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function f(e){let{lastUpdatedBy:t}=e;return n.createElement(r.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function _(e){let{lastUpdatedAt:t,formattedLastUpdatedAt:a,lastUpdatedBy:l}=e;return n.createElement("span",{className:m.kM.common.lastUpdated},n.createElement(r.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(N,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:l?n.createElement(f,{lastUpdatedBy:l}):""}},"Last updated{atDate}{byUser}"),!1)}var k=a(86753),Z=a(20062);const L="lastUpdated_13-_";function U(e){return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterTagsRow,"row margin-bottom--sm")},n.createElement("div",{className:"col"},n.createElement(Z.Z,e)))}function T(e){let{editUrl:t,lastUpdatedAt:a,lastUpdatedBy:s,formattedLastUpdatedAt:i}=e;return n.createElement("div",{className:(0,l.Z)(m.kM.docs.docFooterEditMetaRow,"row")},n.createElement("div",{className:"col"},t&&n.createElement(k.Z,{editUrl:t})),n.createElement("div",{className:(0,l.Z)("col",L)},(a||s)&&n.createElement(_,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:s})))}function C(e){const{content:t}=e,{metadata:a}=t,{editUrl:s,lastUpdatedAt:i,formattedLastUpdatedAt:r,lastUpdatedBy:o,tags:c}=a,d=c.length>0,u=!!(s||i||o);return d||u?n.createElement("footer",{className:(0,l.Z)(m.kM.docs.docFooter,"docusaurus-mt-lg")},d&&n.createElement(U,{tags:c}),u&&n.createElement(T,{editUrl:s,lastUpdatedAt:i,lastUpdatedBy:o,formattedLastUpdatedAt:r})):null}var y=a(51575);const w="tocCollapsible_1PrD",M="tocCollapsibleButton_2O1e",A="tocCollapsibleContent_2Ydz",H="tocCollapsibleExpanded_3GYr";var x=a(25002);function B(e){let{toc:t,className:a,minHeadingLevel:s,maxHeadingLevel:i}=e;const{collapsed:o,toggleCollapsed:c}=(0,m.uR)({initialState:!0});return n.createElement("div",{className:(0,l.Z)(w,{[H]:!o},a)},n.createElement("button",{type:"button",className:(0,l.Z)("clean-btn",M),onClick:c},n.createElement(r.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(m.zF,{lazy:!0,className:A,collapsed:o},n.createElement(x.Z,{toc:t,minHeadingLevel:s,maxHeadingLevel:i})))}var S=a(39649);const D="docItemContainer_33ec",O="docItemCol_3FnS",V="tocMobile_3Hoh";function F(e){const{content:t}=e,{metadata:a,frontMatter:i}=t,{image:r,keywords:c,hide_title:d,hide_table_of_contents:u,toc_min_heading_level:v,toc_max_heading_level:p}=i,{description:g,title:N}=a,f=!d&&void 0===t.contentTitle,_=(0,s.Z)(),k=!u&&t.toc&&t.toc.length>0,Z=k&&("desktop"===_||"ssr"===_);return n.createElement(n.Fragment,null,n.createElement(b.Z,{title:N,description:g,keywords:c,image:r}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,l.Z)("col",{[O]:!u})},n.createElement(h,null),n.createElement("div",{className:D},n.createElement("article",null,n.createElement(E,null),k&&n.createElement(B,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:p,className:(0,l.Z)(m.kM.docs.docTocMobile,V)}),n.createElement("div",{className:(0,l.Z)(m.kM.docs.docMarkdown,"markdown")},f&&n.createElement(S.N,null,N),n.createElement(t,null)),n.createElement(C,e)),n.createElement(o,{previous:a.previous,next:a.next}))),Z&&n.createElement("div",{className:"col col--3"},n.createElement(y.Z,{toc:t.toc,minHeadingLevel:v,maxHeadingLevel:p,className:m.kM.docs.docTocDesktop}))))}},86753:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(67294),l=a(95999),s=a(83117),i=a(86010);const r="iconEdit_2_ui";const o=function(e){let{className:t,...a}=e;return n.createElement("svg",(0,s.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(r,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var c=a(53810);function d(e){let{editUrl:t}=e;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:c.kM.common.editThisPage},n.createElement(o,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},39649:(e,t,a)=>{a.d(t,{N:()=>d,Z:()=>m});var n=a(83117),l=a(67294),s=a(86010),i=a(95999),r=a(53810);const o="anchorWithStickyNavbar_31ik",c="anchorWithHideOnScrollNavbar_3R7-",d=e=>{let{...t}=e;return l.createElement("header",null,l.createElement("h1",(0,n.Z)({},t,{id:void 0}),t.children))},m=e=>{return"h1"===e?d:(t=e,e=>{let{id:a,...d}=e;const{navbar:{hideOnScroll:m}}=(0,r.LU)();return a?l.createElement(t,(0,n.Z)({},d,{className:(0,s.Z)("anchor",{[c]:m,[o]:!m}),id:a}),d.children,l.createElement("a",{"aria-hidden":"true",className:"hash-link",href:"#"+a,title:(0,i.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"\u200b")):l.createElement(t,d)});var t}},51575:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(83117),l=a(67294),s=a(86010),i=a(25002);const r="tableOfContents_35-E";const o=function(e){let{className:t,...a}=e;return l.createElement("div",{className:(0,s.Z)(r,"thin-scrollbar",t)},l.createElement(i.Z,(0,n.Z)({},a,{linkClassName:"table-of-contents__link toc-highlight",linkActiveClassName:"table-of-contents__link--active"})))}},25002:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(83117),l=a(67294),s=a(53810);function i(e){let{toc:t,className:a,linkClassName:n,isChild:s}=e;return t.length?l.createElement("ul",{className:s?void 0:a},t.map((e=>l.createElement("li",{key:e.id},l.createElement("a",{href:"#"+e.id,className:null!=n?n:void 0,dangerouslySetInnerHTML:{__html:e.value}}),l.createElement(i,{isChild:!0,toc:e.children,className:a,linkClassName:n}))))):null}function r(e){let{toc:t,className:a="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:o,minHeadingLevel:c,maxHeadingLevel:d,...m}=e;const u=(0,s.LU)(),v=null!=c?c:u.tableOfContents.minHeadingLevel,p=null!=d?d:u.tableOfContents.maxHeadingLevel,g=(0,s.DA)({toc:t,minHeadingLevel:v,maxHeadingLevel:p}),h=(0,l.useMemo)((()=>{if(r&&o)return{linkClassName:r,linkActiveClassName:o,minHeadingLevel:v,maxHeadingLevel:p}}),[r,o,v,p]);return(0,s.Si)(h),l.createElement(i,(0,n.Z)({toc:g,className:a,linkClassName:r},m))}},7774:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),l=a(86010),s=a(39960);const i="tag_1Okp",r="tagRegular_3MiF",o="tagWithCount_1HU1";const c=function(e){const{permalink:t,name:a,count:c}=e;return n.createElement(s.Z,{href:t,className:(0,l.Z)(i,{[r]:!c,[o]:c})},a,c&&n.createElement("span",null,c))}},20062:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(67294),l=a(86010),s=a(95999),i=a(7774);const r="tags_2ga9",o="tag_11ep";function c(e){let{tags:t}=e;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(r,"padding--none","margin-left--sm")},t.map((e=>{let{label:t,permalink:a}=e;return n.createElement("li",{key:a,className:o},n.createElement(i.Z,{name:t,permalink:a}))}))))}}}]);