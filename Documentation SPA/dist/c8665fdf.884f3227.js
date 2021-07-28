(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{131:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return u}));var r=a(2),n=a(6),i=(a(0),a(153)),o={id:"api-gateway",title:"API Gateway",sidebar_label:"API Gateway",slug:"/microservices/api-gateway"},c={unversionedId:"microservices/api-gateway/api-gateway",id:"microservices/api-gateway/api-gateway",isDocsHomePage:!1,title:"API Gateway",description:"*",source:"@site/docs/microservices/api-gateway/api-gateway.md",slug:"/microservices/api-gateway",permalink:"/get-started/docs/microservices/api-gateway",editUrl:"https://github.com/1-platform/one-platform/edit/master/packages/documentation-spa/docs/microservices/api-gateway/api-gateway.md",version:"current",sidebar_label:"API Gateway",sidebar:"someSidebar",previous:{title:"SSI Service",permalink:"/get-started/docs/apps/internal/ssi"},next:{title:"Authorization Service",permalink:"/get-started/docs/microservices/authorization"}},s=[{value:"Getting Started",id:"getting-started",children:[{value:"Authenticating your API requests",id:"authenticating-your-api-requests",children:[]},{value:"API Reference",id:"api-reference",children:[]}]},{value:"Developers",id:"developers",children:[]},{value:"FAQs",id:"faqs",children:[]}],l={rightToc:s};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("hr",null),Object(i.b)("p",null,"The One Platform API Gateway is the entrypoint to get started with using the APIs and services provided by the One Platform."),Object(i.b)("p",null,"It provides a single gateway for all the GraphQL APIs available across the multitude of microservices provided by the One Platform."),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"Any developer can access the APIs provided by the API Gateway as long as the requests are authenticated."),Object(i.b)("h3",{id:"authenticating-your-api-requests"},"Authenticating your API requests"),Object(i.b)("p",null,"You can autheticate your API calls to the API Gateway using 2 different techniques depending on how you want to use the APIs."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"Directly from the Client-side App (Keycloak)")),Object(i.b)("p",{parentName:"li"},"The API Gateway supports Red Hat's Internal Keycloak Single Sign On for API authentication. To use this, you just have to authenticate your request using the Red Hat Internal Keycloak provider, and use the JWT Bearer token for the Authorization header.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},Object(i.b)("strong",{parentName:"p"},"From a backend service or a bot")),Object(i.b)("p",{parentName:"li"},"The API Gateway also supports API Key based authentication for service-to-service access. For this, you need to register your app/project on the One Platform Developer Console. You can create and manage your API Keys on the Developer Console, and use the created API Keys in your API Calls."))),Object(i.b)("h3",{id:"api-reference"},"API Reference"),Object(i.b)("p",null,"The API Gateway is basically a collection / entrypoint for the One Platform Microservices. So the API Gateway provides a complete stiched schema collected from all the GraphQL Queries and Mutations exposed by the Microservices."),Object(i.b)("p",null,"The Microservices available via the API Gateway are:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/get-started/docs/microservices/user-groups-service"},"User & Groups")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/get-started/docs/microservices/feedback-service"},"Feedback Service")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/get-started/docs/microservices/notifications-service"},"Notifciations Service")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/get-started/docs/microservices/search-service"},"Search Service")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/get-started/docs/microservices/apps-service"},"Apps Service"))),Object(i.b)("h2",{id:"developers"},"Developers"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Mayur Deshmukh - ",Object(i.b)("a",{parentName:"li",href:"mailto:mdeshmuk@redhat.com"},"mdeshmuk@redhat.com"))),Object(i.b)("h2",{id:"faqs"},"FAQs"),Object(i.b)("details",null,Object(i.b)("summary",null,"What can I do from the API Gateway?"),"The API Gateway is the entrypoint to the One Platform's Internal Microservices. So if you need to use any of the microservices, or integrate your own apps/services, then the API Gateway provides an easy way to access the microservices using a single GraphQL API Endpoint."),Object(i.b)("details",null,Object(i.b)("summary",null,"Can I add my own service to the API Gateway?"),"No currently. The API Gateway in it's current implemenation is made for the One Platform's internal microservices.",Object(i.b)("p",null,"But having said that, we're working on a new and updated Gateway/Portal which will allow anyone to add their own Services to the One Platform API Gateway easily and take advantage of the common authentication and authorization provided by the Gateway. Look forward to that.")))}u.isMDXComponent=!0},153:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),u=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=u(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(a),b=r,h=p["".concat(o,".").concat(b)]||p[b]||d[b]||i;return a?n.a.createElement(h,c(c({ref:t},l),{},{components:a})):n.a.createElement(h,c({ref:t},l))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var l=2;l<i;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"}}]);