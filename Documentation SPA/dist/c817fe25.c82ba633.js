(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{130:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var n=a(2),r=a(6),l=(a(0),a(153)),o={slug:"state-of-one-platform-feb-2021",title:"State of One Platform - February 2021",author:"Ghanshyam Lohar",author_title:"Senior Software Engineer @ Red Hat",author_url:"https://github.com/ghanlohar",author_image_url:"https://avatars.githubusercontent.com/u/5575651?s=400&v=4",tags:["redhat","blog","oneportal","oneplatform","react","angular","january","update"]},b={permalink:"/get-started/blog/state-of-one-platform-feb-2021",editUrl:"https://github.com/1-platform/one-platform/edit/master/packages/documentation-spa/blog/blog/2021-03-10-state-of-one-platform-feb-2021.md",source:"@site/blog/2021-03-10-state-of-one-platform-feb-2021.md",description:"Meta",date:"2021-03-10T00:00:00.000Z",tags:[{label:"redhat",permalink:"/get-started/blog/tags/redhat"},{label:"blog",permalink:"/get-started/blog/tags/blog"},{label:"oneportal",permalink:"/get-started/blog/tags/oneportal"},{label:"oneplatform",permalink:"/get-started/blog/tags/oneplatform"},{label:"react",permalink:"/get-started/blog/tags/react"},{label:"angular",permalink:"/get-started/blog/tags/angular"},{label:"january",permalink:"/get-started/blog/tags/january"},{label:"update",permalink:"/get-started/blog/tags/update"}],title:"State of One Platform - February 2021",readingTime:4.315,truncated:!1,prevItem:{title:"State of One Platform - March 2021",permalink:"/get-started/blog/state-of-one-platform-mar-2021"},nextItem:{title:"State of One Platform - January 2021",permalink:"/get-started/blog/state-of-one-platform-jan-2021"}},i=[{value:"Meta",id:"meta",children:[]},{value:"Introduction",id:"introduction",children:[]},{value:"OKRs",id:"okrs",children:[]},{value:"Polishing microservice/SPA use cases:",id:"polishing-microservicespa-use-cases",children:[]},{value:"Key highlights",id:"key-highlights",children:[]},{value:"What&#39;s coming?",id:"whats-coming",children:[]},{value:"Questions",id:"questions",children:[]}],c={rightToc:i};function s(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"meta"},"Meta"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Completed Sprint:")," One Platform \u2013 Feb '21"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"Ongoing/Upcoming Sprint:")," One Platform \u2013 Mar'21"),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"One Platform:")," ",Object(l.b)("a",{parentName:"p",href:"https://one.redhat.com"},"one.redhat.com")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"JIRA:")," ",Object(l.b)("a",{parentName:"p",href:"https://projects.engineering.redhat.com/projects/ONEPLAT/issues"},"https://projects.engineering.redhat.com/projects/ONEPLAT/issues")),Object(l.b)("p",null,Object(l.b)("strong",{parentName:"p"},"GitHub:")," ",Object(l.b)("a",{parentName:"p",href:"https://github.com/1-Platform/one-platform/issues"},"https://github.com/1-Platform/one-platform/issues")),Object(l.b)("h3",{id:"introduction"},"Introduction"),Object(l.b)("p",null,"This is a summary of the development goals achieved by the One Platform team in the month of February 2021. This month the team had the following goals:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Application Development:")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Home SPA Documentation Hub to access all the document at one place"),Object(l.b)("li",{parentName:"ul"},"Revamped pluggable Feedback SPA & Microservice development"),Object(l.b)("li",{parentName:"ul"},"Automated end-to-end testing for One Platform initial set of modules"),Object(l.b)("li",{parentName:"ul"},"DSAL stats dashboard & address user feedback"),Object(l.b)("li",{parentName:"ul"},"Microservices\u2019 enhancements(continued)"),Object(l.b)("li",{parentName:"ul"},"Research Repository phase 2 features release"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Onboarding:")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"GDPR deployment on production"),Object(l.b)("li",{parentName:"ul"},"Onboarding discussions about Lifecycle, Pantheon, IR dashboard"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Infrastructure update:")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"New strategy for using an external image repository to build and store One Platform Microservice docker images (either quay.io or GitHub container registry)"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Component Library:")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Feedback as a pluggable web component(opc-feedback)")))),Object(l.b)("h3",{id:"okrs"},"OKRs"),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Objectives"),Object(l.b)("td",null,"Status"),Object(l.b)("td",null,"IMP Summary from Key Results")),Object(l.b)("tr",null,Object(l.b)("td",null,Object(l.b)("strong",null,"Accelerate and provide consistent SPA development & delivery experience")),Object(l.b)("td",null,"At Risk"),Object(l.b)("td",null,Object(l.b)("ul",null,Object(l.b)("li",null,"Revamped Feedback SPA & Service are deployed on QA & Stage and are being tested."),Object(l.b)("li",null,"Notifications Microservice is completed, Notifications SPA designs in progress."),Object(l.b)("li",null,"User Groups rover integration - Not started"),Object(l.b)("li",null,"Change Home Service schema into Developer Console schema"),Object(l.b)("li",null,"Developer console API developed"),Object(l.b)("li",null,"List of use cases & status for polishing microservices & SPAs is, as in the table below.")))),Object(l.b)("tr",null,Object(l.b)("td",null,Object(l.b)("strong",null,"Evolve",Object(l.b)("a",{href:"http://one.redhat.com/"}," one.redhat.com")," as a single place to host internal applications and accessible outside VPN. ")),Object(l.b)("td",null,"On Track"),Object(l.b)("td",null,Object(l.b)("ul",null,Object(l.b)("li",null,"Implemented a Document hub to access all the documents at one place."),Object(l.b)("li",null,"Plans for using ",Object(l.b)("a",{href:"https://quay.io/"},"quay.io")," for storing docker images for native microservices."),Object(l.b)("li",null,"External app support - Acknowledged. Build a team to go external."),Object(l.b)("li",null,"GDPR in production."),Object(l.b)("li",null,"Lifecycle, Pantheon - In discussion."))))),Object(l.b)("h3",{id:"polishing-microservicespa-use-cases"},"Polishing microservice/SPA use cases:"),Object(l.b)("table",null,Object(l.b)("tr",null,Object(l.b)("td",null,"Microservice"),Object(l.b)("td",null,"Use Cases"),Object(l.b)("td",null,"Status")),Object(l.b)("tr",null,Object(l.b)("td",null,"Feedback"),Object(l.b)("td",null,"Published the opc-feedback component and testing the SPA, Microservice in QA and Stage."),Object(l.b)("td",null,"In Progress")),Object(l.b)("tr",null,Object(l.b)("td",null,"Notifications"),Object(l.b)("td",null,"Revamped Notifications microservice is completed and Revamped Notifications design & UI are underway."),Object(l.b)("td",null,"In Progress")),Object(l.b)("tr",null,Object(l.b)("td",{rowspan:"2"},"Search"),Object(l.b)("td",null,"Rover integration."),Object(l.b)("td",null,"In Progress")),Object(l.b)("tr",null,Object(l.b)("td",null,"Suggestions based on user search history."),Object(l.b)("td",null,"Not Started")),Object(l.b)("tr",null,Object(l.b)("td",{rowspan:"2"},"User Groups"),Object(l.b)("td",null,"Rover integration to get user data"),Object(l.b)("td",null,"In Progress")),Object(l.b)("tr",null,Object(l.b)("td",null,"Build API authorization based on user-groups"),Object(l.b)("td",null,"Not Started")),Object(l.b)("tr",null,Object(l.b)("td",{rowspan:"3"},"Home Service (convert into Developer Console Service)"),Object(l.b)("td",null,"Change Home Service schema into Developer Console schema"),Object(l.b)("td",null,"In Testing")),Object(l.b)("tr",null,Object(l.b)("td",null,"Build APIs for managing Projects/Apps for the developer console"),Object(l.b)("td",null,"In Progress")),Object(l.b)("tr",null,Object(l.b)("td",null,"Developer console UI"),Object(l.b)("td",null,"In Progress")),Object(l.b)("tr",null,Object(l.b)("td",null,"API gateway"),Object(l.b)("td",null,"Periodic GraphQL IntrospectSchema refresh, for up-to-date schema on the API Gateway"),Object(l.b)("td",null,"Not Started"))),Object(l.b)("h3",{id:"key-highlights"},"Key highlights"),Object(l.b)("p",null,"The team was able to close 33 JIRAs across a range of development priorities. The highlights are:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Application development and readiness:")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Native Apps:")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Feedback:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Added custom target support for the flexibility to choose where feedback issues are reported"),Object(l.b)("li",{parentName:"ul"},"Pluggable API & web component to collect feedback for web properties other than One Platform"))),Object(l.b)("li",{parentName:"ul"},"Developer Console:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Transformed the old home-service to app-service to accommodate the developer console needs. Being tested for the final release."),Object(l.b)("li",{parentName:"ul"},"UI implementation underway"))),Object(l.b)("li",{parentName:"ul"},"Notifications:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Design discussions for One Platform Notification Management SPA"))),Object(l.b)("li",{parentName:"ul"},"Search",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Created initial prototype for the search data automation"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Non-Native Apps:")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Research Repository: Phase 2 features released"),Object(l.b)("li",{parentName:"ul"},"DSAL: Ongoing development for DSAL Dashboard & Minor bug fixes"),Object(l.b)("li",{parentName:"ul"},"Video Library: User feedback addressed"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Component Library:")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Published the feedback component",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://www.npmjs.com/package/@one-platform/opc-feedback"},"https://www.npmjs.com/package/@one-platform/opc-feedback")))))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},Object(l.b)("strong",{parentName:"p"},"Onboarding")),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Lifecycle SPA",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Deployed Lifecycle Admin SPA to QA, Ticket to add redirect URLs is in TODO"))),Object(l.b)("li",{parentName:"ul"},"GDPR",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Released on production at /personal-data-request and waiting for acknowledgement from the team to close GDPR"))),Object(l.b)("li",{parentName:"ul"},"Pantheon",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"We are in discussion with the team. The team is to evaluate the options and finalize, Next follow up with the team is scheduled in April"))),Object(l.b)("li",{parentName:"ul"},"IR Dashboard",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"We did a feasibility study for the IR Dashboard SPA to onboard it to One Platform, Tried to separate the SPA & API")))))),Object(l.b)("h3",{id:"whats-coming"},"What's coming?"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"SPA Onboarding:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"GDPR production release after confirmation from the testing team about the expected functionalities."),Object(l.b)("li",{parentName:"ul"},"Lifecycle Admin SPA deployment & testing on QA and Stage."),Object(l.b)("li",{parentName:"ul"},"Pantheon onboarding follow-ups, approach evaluation & decision."))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"Development and Adoption Priorities"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Developer Console:",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Build and release the Developer Console Dashboard UI"))))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("strong",{parentName:"li"},"One Platform Test Automation:"),Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"Automated end-to-end testing for all native modules"),Object(l.b)("li",{parentName:"ul"},"Test report automation & dashboard using Jenkins")))),Object(l.b)("p",null,"For more updates related to One Platform, please check out the One Platform Blog at ",Object(l.b)("a",{parentName:"p",href:"https://one.redhat.com/get-started/blog/"},"one.redhat.com/get-started/blog")),Object(l.b)("h2",{id:"questions"},"Questions"),Object(l.b)("p",null,"For any questions, please reach out to the One Platform team over ",Object(l.b)("a",{parentName:"p",href:"mailto:one-portal-devel@redhat.com"},"one-portal-devel@redhat.com")," or ping us over ",Object(l.b)("a",{parentName:"p",href:"https://chat.google.com/room/AAAAF4M7oZE"},"One Platform GChat Room"),".\nFor more information please view ",Object(l.b)("a",{parentName:"p",href:"/docs/faqs"},"FAQs"),"."))}s.isMDXComponent=!0},153:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,d=p["".concat(o,".").concat(m)]||p[m]||u[m]||l;return a?r.a.createElement(d,b(b({ref:t},c),{},{components:a})):r.a.createElement(d,b({ref:t},c))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=m;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:n,o[1]=b;for(var c=2;c<l;c++)o[c]=a[c];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);