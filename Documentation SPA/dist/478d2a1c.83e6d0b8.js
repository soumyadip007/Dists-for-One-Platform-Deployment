(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{153:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return g}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),p=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=p(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(a),b=n,g=m["".concat(i,".").concat(b)]||m[b]||u[b]||o;return a?r.a.createElement(g,l(l({ref:t},c),{},{components:a})):r.a.createElement(g,l({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=b;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},88:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),o=(a(0),a(153)),i={slug:"announcing-one-platform-mvp",title:"Announcing One Platform MVP",author:"Sayak Sarkar",author_title:"Senior Software Engineer @ Red Hat",author_url:"https://github.com/sayak-sarkar",author_image_url:"https://avatars0.githubusercontent.com/u/1418735?s=400&v=4",tags:["redhat","blog","one","platform","portal","oneportal","oneplatform","react","angular","mvp","announcement","spaship"]},l={permalink:"/get-started/blog/announcing-one-platform-mvp",editUrl:"https://github.com/1-platform/one-platform/edit/master/packages/documentation-spa/blog/blog/2020-06-16-announcing-one-platform-mvp.md",source:"@site/blog/2020-06-16-announcing-one-platform-mvp.md",description:"We are happy to announce the One Platform MVP release with limited alpha versions of Microservices and some of the inbuilt Single Page Applications (SPAs).",date:"2020-06-16T00:00:00.000Z",tags:[{label:"redhat",permalink:"/get-started/blog/tags/redhat"},{label:"blog",permalink:"/get-started/blog/tags/blog"},{label:"one",permalink:"/get-started/blog/tags/one"},{label:"platform",permalink:"/get-started/blog/tags/platform"},{label:"portal",permalink:"/get-started/blog/tags/portal"},{label:"oneportal",permalink:"/get-started/blog/tags/oneportal"},{label:"oneplatform",permalink:"/get-started/blog/tags/oneplatform"},{label:"react",permalink:"/get-started/blog/tags/react"},{label:"angular",permalink:"/get-started/blog/tags/angular"},{label:"mvp",permalink:"/get-started/blog/tags/mvp"},{label:"announcement",permalink:"/get-started/blog/tags/announcement"},{label:"spaship",permalink:"/get-started/blog/tags/spaship"}],title:"Announcing One Platform MVP",readingTime:1.615,truncated:!1,prevItem:{title:"Announcing One Platform Alpha",permalink:"/get-started/blog/announcing-one-platform-alpha"},nextItem:{title:"Welcome",permalink:"/get-started/blog/welcome"}},s=[{value:"MVP Highlights",id:"mvp-highlights",children:[]},{value:"What\u2019s next",id:"whats-next",children:[]},{value:"Questions",id:"questions",children:[]}],c={rightToc:s};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"We are happy to announce the One Platform MVP release with limited alpha versions of Microservices and some of the inbuilt Single Page Applications (SPAs)."),Object(o.b)("p",null,"This MVP was focused on building a backend infrastructure to support One Platform, some basic frameworks and features of Microservices, inbuilt SPAs, and SPAship implementation to deploy the SPAs."),Object(o.b)("h2",{id:"mvp-highlights"},"MVP Highlights"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"One Platform limited alpha with services such as SSO Authentication, Notification Framework, Feedback and User & Group microservices; which covers most of the basic requirements of currently deployed SPAs."),Object(o.b)("li",{parentName:"ul"},"Notifications Framework for configuring Email or Push Notifications; and a Feedback service with Jira integration."),Object(o.b)("li",{parentName:"ul"},"Default One Platform chroming template for Global Navigation Header with the ability to view all the deployed SPAs and Notifications."),Object(o.b)("li",{parentName:"ul"},"Default Feedback button on all pages, for gathering quick feedback from users."),Object(o.b)("li",{parentName:"ul"},"SPAship implementation for faster SPA deployments."),Object(o.b)("li",{parentName:"ul"},"Microservice Architecture using the PSI OpenShift Container Platform."),Object(o.b)("li",{parentName:"ul"},"GraphQL API Gateway for One Platform Microservices."),Object(o.b)("li",{parentName:"ul"},"Custom design system compatible with Patternfly 4, to support most SPA requirements and to ensure smooth onboarding.")),Object(o.b)("h2",{id:"whats-next"},"What\u2019s next"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"One Platform User Interface release."),Object(o.b)("li",{parentName:"ul"},"Continue fixing known issues, enhancements for Chroming templates, and more for the Microservices & inbuilt SPAs."),Object(o.b)("li",{parentName:"ul"},"Implement a Search Microservice in collaboration with the Search Platform team."),Object(o.b)("li",{parentName:"ul"},"Create a detailed documentation to onboard new SPAs."),Object(o.b)("li",{parentName:"ul"},"Prioritize and migrate One Portal modules. Decouple One Portal modules and convert into individual Microservice and SPAs."),Object(o.b)("li",{parentName:"ul"},"Initiate stakeholder conversations to migrate existing SPAs deployed on other properties. - Understand application requirements and make necessary updates/modifications to One Platform Microservices."),Object(o.b)("li",{parentName:"ul"},"Continue SPAship onboarding and upgrades, explore other third-party tools and application integrations."),Object(o.b)("li",{parentName:"ul"},"Create a Component library for One Platform Applications, inherited from Patternfly design system.")),Object(o.b)("h2",{id:"questions"},"Questions"),Object(o.b)("p",null,"For any questions, please reach out to One Platform team over ",Object(o.b)("a",{parentName:"p",href:"mailto:one-portal-devel@redhat.com"},"one-portal-devel@redhat.com")," or ping us over ",Object(o.b)("a",{parentName:"p",href:"https://chat.google.com/room/AAAAF4M7oZE"},"One Platform GChat Room"),".\nFor more information please view ",Object(o.b)("a",{parentName:"p",href:"/docs/faqs"},"FAQs"),"."))}p.isMDXComponent=!0}}]);