(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{153:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var b=a.a.createContext({}),p=function(e){var t=a.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(n),u=r,d=s["".concat(o,".").concat(u)]||s[u]||m[u]||i;return n?a.a.createElement(d,l(l({ref:t},b),{},{components:n})):a.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=n[b];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},79:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),i=(n(0),n(153)),o={id:"op-cli",title:"One Platform CLI",sidebar_label:"One Platform CLI",slug:"/cli"},l={unversionedId:"cli/op-cli",id:"cli/op-cli",isDocsHomePage:!1,title:"One Platform CLI",description:"* * *",source:"@site/docs/cli/op-cli.md",slug:"/cli",permalink:"/get-started/docs/cli",editUrl:"https://github.com/1-platform/one-platform/edit/master/packages/documentation-spa/docs/cli/op-cli.md",version:"current",sidebar_label:"One Platform CLI",sidebar:"someSidebar",previous:{title:"Style Guide",permalink:"/get-started/docs/component-library/style-guide"},next:{title:"One Platform FAQs",permalink:"/get-started/docs/faqs"}},c=[{value:"Contributors &amp; Maintainers",id:"contributors--maintainers",children:[]},{value:"License",id:"license",children:[]},{value:"Getting Started",id:"getting-started",children:[]},{value:"Usage",id:"usage",children:[{value:"Introduction",id:"introduction",children:[]},{value:"Supported Features",id:"supported-features",children:[]},{value:"Installation &amp; Setup",id:"installation--setup",children:[]},{value:"Development and Debugging",id:"development-and-debugging",children:[]}]},{value:"FAQs",id:"faqs",children:[]}],b={rightToc:c};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("h2",{id:"contributors--maintainers"},"Contributors & Maintainers"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Diwanshi Pandey - ",Object(i.b)("a",{parentName:"li",href:"mailto:dpandey@redhat.com"},"dpandey@redhat.com")," - ",Object(i.b)("a",{parentName:"li",href:"https://github.com/diwanshi"},"diwanshi (Diwanshi Gadgil) \xb7 GitHub")),Object(i.b)("li",{parentName:"ol"},"Rigin Oommen - ",Object(i.b)("a",{parentName:"li",href:"mailto:roommen@redhat.com"},"roommen@redhat.com")," - ",Object(i.b)("a",{parentName:"li",href:"https://github.com/riginoommen"},"riginoommen (Rigin Oommen) \xb7 GitHub"))),Object(i.b)("h2",{id:"license"},"License"),Object(i.b)("p",null,Object(i.b)("a",{parentName:"p",href:"https://github.com/1-Platform/one-platform/blob/master/LICENSE"},"MIT")),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"One Platform (OP) CLI generator which was built using yeoman which helps to bootstrap microservices. This project can be used to generate microservice on GraphQL and REST specifications. Yeoman is a generic scaffolding system allowing the creation of any kind of app. It allows for rapidly getting started on new projects and streamlines the maintenance of existing projects."),Object(i.b)("h2",{id:"usage"},"Usage"),Object(i.b)("h3",{id:"introduction"},"Introduction"),Object(i.b)("p",null,"One Platform CLI Generator will bootstrap a microservice which is compatible with NodeJS ecosystem."),Object(i.b)("h3",{id:"supported-features"},"Supported Features"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Pre-built API Configurations"),Object(i.b)("li",{parentName:"ol"},"Test Suite Setup"),Object(i.b)("li",{parentName:"ol"},"Build configuration with webpack"),Object(i.b)("li",{parentName:"ol"},"MongoDB database integration")),Object(i.b)("h4",{id:"apps-using-this-cli"},"Apps using this CLI"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Notifications"),Object(i.b)("li",{parentName:"ol"},"Home"),Object(i.b)("li",{parentName:"ol"},"MoD handovers"),Object(i.b)("li",{parentName:"ol"},"Feedback"),Object(i.b)("li",{parentName:"ol"},"API Gateway"),Object(i.b)("li",{parentName:"ol"},"User SPA"),Object(i.b)("li",{parentName:"ol"},"Search")),Object(i.b)("h3",{id:"installation--setup"},"Installation & Setup"),Object(i.b)("h4",{id:"prerequisites"},"Prerequisites"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"NodeJS"),"  should be installed (",Object(i.b)("em",{parentName:"li"},"version>=**v10.15.3"),")"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"NPM")," should be installed ",Object(i.b)("em",{parentName:"li"},"(version>=",Object(i.b)("strong",{parentName:"em"},"6.4.1"),")")),Object(i.b)("li",{parentName:"ol"},"Version control system required. Preferably ",Object(i.b)("strong",{parentName:"li"},"git"),".")),Object(i.b)("h4",{id:"steps"},"Steps"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Clone the ",Object(i.b)("a",{parentName:"p",href:"https://github.com/1-Platform/one-platform"},"repository"),"."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"git clone git@github.com:1-Platform/one-platform.git\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Switch to the cloned repository"),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"cd one-platform\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Install the dependencies."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"npm i\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Trigger the microservice creation."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"npm run cli-microservice\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Enter the basic details of the microservices in the CLI prompts"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Enter the name of microservice")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Select API type (GraphQL/REST) you require?")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If database integration needed opt in for it.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Give the author details of microservice such as Name and Email."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"Your microservice name: mod\nWhich type of API do you want to create? GraphQL\nAre you going to use MongoDB? Yes\nAuthor name Rigin Oommen\nAuthor Email riginoommen@gmail.com\n"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If you opted for GraphQL, a directory will be created with ",Object(i.b)("inlineCode",{parentName:"p"},"<microservice-name>"),"-service and for REST it will be ",Object(i.b)("inlineCode",{parentName:"p"},"<microservice-name>"),"-integration."))))),Object(i.b)("h3",{id:"development-and-debugging"},"Development and Debugging"),Object(i.b)("h4",{id:"start"},"Start"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"npm start:dev")," to run your microservice for dev env and npm start for production env.")),Object(i.b)("h4",{id:"build"},"Build"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",{parentName:"li",href:"https://webpack.js.org"},"Webpack")," is used for the build system in the microservices."),Object(i.b)("li",{parentName:"ol"},"Run ",Object(i.b)("inlineCode",{parentName:"li"},"npm build:dev")," to generate a build for development environment and ",Object(i.b)("inlineCode",{parentName:"li"},"npm build")," for production build.")),Object(i.b)("h4",{id:"testing"},"Testing"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"For testing microservice with ",Object(i.b)("a",{parentName:"p",href:"https://www.npmjs.com/package/supertest"},"supertest")," with the preconfigured settings.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Test related environment configurations are present in .test.env under the e2e folder.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Execute the command for testing."),Object(i.b)("pre",{parentName:"li"},Object(i.b)("code",{parentName:"pre",className:"language-sh"},"npm run test\n")))),Object(i.b)("h2",{id:"faqs"},"FAQs"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Does this generator support other languages?")),Object(i.b)("p",{parentName:"li"},"  No this generator provides support only Javascript."))))}p.isMDXComponent=!0}}]);