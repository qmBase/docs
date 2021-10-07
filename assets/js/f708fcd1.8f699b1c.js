(self.webpackChunkpbd_docs=self.webpackChunkpbd_docs||[]).push([[71728],{3905:(e,t,n)=>{"use strict";n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=l,h=c["".concat(s,".").concat(m)]||c[m]||d[m]||r;return n?a.createElement(h,i(i({ref:t},p),{},{components:n})):a.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},39195:(e,t,n)=>{"use strict";n.r(t),n.d(t,{frontMatter:()=>r,contentTitle:()=>i,metadata:()=>o,toc:()=>s,default:()=>p});var a=n(22122),l=(n(67294),n(3905));const r={id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/technical/installation"},i=void 0,o={unversionedId:"technical/installation",id:"technical/installation",isDocsHomePage:!1,title:"Installation",description:"Install on Windows",source:"@site/docs/technical/installation.md",sourceDirName:"technical",slug:"/technical/installation",permalink:"/docs/technical/installation",editUrl:"https://github.com/qmBase/docs/tree/master/docs/technical/installation.md",tags:[],version:"current",lastUpdatedAt:1633599493,formattedLastUpdatedAt:"7.10.2021",frontMatter:{id:"installation",title:"Installation",sidebar_label:"Installation",slug:"/technical/installation"},sidebar:"someSidebar",previous:{title:"Wie wird qmBase entwickelt",permalink:"/docs/technical/wie-wird-qmbase-entwickelt"},next:{title:"Tutorial Template",permalink:"/docs/tutorial-template"}},s=[{value:"Install on Windows",id:"install-on-windows",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"How to install?",id:"how-to-install",children:[]},{value:"How to update?",id:"how-to-update",children:[]}]},{value:"Install on Linux",id:"install-on-linux",children:[]},{value:"Breaking Changes",id:"breaking-changes",children:[{value:"Deployment Status",id:"deployment-status",children:[]}]},{value:"Tools &amp; Frameworks we use",id:"tools--frameworks-we-use",children:[]}],u={toc:s};function p({components:e,...t}){return(0,l.kt)("wrapper",(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"install-on-windows"},"Install on Windows"),(0,l.kt)("p",null,"qmBase can be installed on Windows."),(0,l.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"MS SQL 2019 Database"),(0,l.kt)("li",{parentName:"ul"},"Windows 10 Pro or higher"),(0,l.kt)("li",{parentName:"ul"},"ASP.NET Core Hosting Bundle 5.0.x"),(0,l.kt)("li",{parentName:"ul"},"IIS Webserver V 10"),(0,l.kt)("li",{parentName:"ul"},"SSL Certificate Public or self signed"),(0,l.kt)("li",{parentName:"ul"},"Hardware requirements",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"min 4 GB Ram"),(0,l.kt)("li",{parentName:"ul"},"min 10 GB HDD")))),(0,l.kt)("h4",{id:"recommended-folder-structure"},"Recommended Folder Structure"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"D:\\qmbase\\",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"app\\ -> Save the app data here"),(0,l.kt)("li",{parentName:"ul"},"builds\\ -> Save old builds here if you need to roll back an update"),(0,l.kt)("li",{parentName:"ul"},"databases\\ -> Store databases here"),(0,l.kt)("li",{parentName:"ul"},"uploads","\\","{CustomerId}\\ -> Save user generated uploads here")))),(0,l.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Use a dedidacted partition (D:","\\",") to store the data."))),(0,l.kt)("h3",{id:"how-to-install"},"How to install?"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Download the latest qmBase version from ",(0,l.kt)("a",{parentName:"p",href:"https://support.qmbase.com/downloads/"},"here"),". You will get the credentials via mail after you have signed the contract.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Extract the ZIP file to the folder where the IIS is located.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Run the latest database migrations. The SQL scripts will be provided on the download page as well. You will need to create 2 databases. Use the following name schema"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"multi-tenant"),(0,l.kt)("li",{parentName:"ul"},"qmbase{CustomerId}"))),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"qmBase requires a SSL connection. So you have to configure the IIS to use either a self signed certificate or use a regular certificate.")),(0,l.kt)("li",{parentName:"ol"},(0,l.kt)("p",{parentName:"li"},"Configure qmBase and start running."))),(0,l.kt)("h4",{id:"configure-qmbase"},"Configure qmBase"),(0,l.kt)("p",null,"To configure qmBase you have take actions in 2 different places."),(0,l.kt)("p",null,"Insert this row in your multi tenant database"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"INSERT INTO [yourDatabase].[dbo].[MultiTenants]\n(\n        ,[DatabaseType]\n        ,[Host]\n        ,[ConnectionString]\n        ,[StorageConnectionString]\n        ,[Name]\n        ,[CustomerId]\n)\nVALUES\n(\n        ,0\n        ,pathToYour.qmbase\n        ,SQL Connection string\n        ,NULL\n        ,yourCustomerName\n        ,yourCustomerId\n)\n")),(0,l.kt)("p",null,"Change the appSettings.Production.json file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'// These settings will only be applied if HostingEnvironment is "Production"\n// Use this file to customize the behavior in Production\n{\n  //ApplicationInsights settings omitted for brevity.\n  "ConnectionStrings": {\n    "MultiTenantConnection": "Connection string to multiTenantContext",\n    // These settings are not needed if multiTenant==true\n    "DefaultConnection": "Your Ms SQL ConnectionString -> not needed in MultiTenantScenario"\n  },\n  "AppSettings": {\n    "MultiTenantContext": true,\n    "StorageType": "FileSystem", //"FileSystem" | "AzureBlobStorage"\n    "PhysicalFileProviderRootPath": "D:\\\\qmbase\\\\uploads"\n  }\n}\n')),(0,l.kt)("h3",{id:"how-to-update"},"How to update?"),(0,l.kt)("p",null,"We are improving qmBase continuously. That means that we are releasing multiple Updates per Day. So if you are experiencing any bugs you can always try to download the latest release."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"Delete all files in ",(0,l.kt)("code",null,"app")," folder except ",(0,l.kt)("strong",{parentName:"li"},"web.config")," and ",(0,l.kt)("strong",{parentName:"li"},"appSettings.Production.json"),"."),(0,l.kt)("li",{parentName:"ol"},"Extract the zip file from the update and copy all files except ",(0,l.kt)("strong",{parentName:"li"},"web.config")," and ",(0,l.kt)("strong",{parentName:"li"},"appSettings.Production.json")," to the ",(0,l.kt)("code",null,"app")," folder.")),(0,l.kt)("h4",{id:"qmbaseinstaller"},"qmBase.Installer"),(0,l.kt)("p",null,"Alternatively you can use the qmBase.Installer.exe. If you use the default configuration you can do 9 out of 10 updates automatically. Please note that the qmBase.Installer is part of the Enterprise subscription."),(0,l.kt)("h2",{id:"install-on-linux"},"Install on Linux"),(0,l.kt)("p",null,"Possible but not yet documented"),(0,l.kt)("h2",{id:"breaking-changes"},"Breaking Changes"),(0,l.kt)("h3",{id:"deployment-status"},"Deployment Status"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null}),(0,l.kt)("th",{parentName:"tr",align:null},"Status"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Build"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://dev.azure.com/caqio/PBD/_build/latest?definitionId=24"},(0,l.kt)("img",{parentName:"a",src:"https://dev.azure.com/caqio/PBD/_apis/build/status/qmBase%20Master",alt:"Build status"})))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"Deployment"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("img",{parentName:"td",src:"https://vsrm.dev.azure.com/caqio/_apis/public/Release/badge/40d1313e-3385-464b-a9ed-3cce1c2d470e/3/16",alt:null}))))),(0,l.kt)("h2",{id:"tools--frameworks-we-use"},"Tools & Frameworks we use"),(0,l.kt)("p",null,"qmBase builds upon modern and popular technologies.\nFor our backend we use"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ASP.NET 5.0")),(0,l.kt)("p",null,"For our frontend we use"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"React"),(0,l.kt)("li",{parentName:"ul"},"Code is written in TypeScript")))}p.isMDXComponent=!0}}]);