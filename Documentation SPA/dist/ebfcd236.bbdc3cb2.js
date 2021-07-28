(window.webpackJsonp=window.webpackJsonp||[]).push([[90],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return c}));var a=n(2),i=n(6),r=(n(0),n(153)),l={id:"getting-started",title:"Getting Started with One Platform",sidebar_label:"Getting Started",slug:"/"},o={unversionedId:"getting-started/getting-started",id:"getting-started/getting-started",isDocsHomePage:!1,title:"Getting Started with One Platform",description:"* * *",source:"@site/docs/getting-started/get-started.md",slug:"/",permalink:"/get-started/docs/",editUrl:"https://github.com/1-platform/one-platform/edit/master/packages/documentation-spa/docs/getting-started/get-started.md",version:"current",sidebar_label:"Getting Started",sidebar:"someSidebar",next:{title:"One Platform Assets",permalink:"/get-started/docs/apps/assets"}},p=[{value:"SPA Developers Guide",id:"spa-developers-guide",children:[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Deploying to One Platform",id:"deploying-to-one-platform",children:[]},{value:"SSI Implementation",id:"ssi-implementation",children:[]}]},{value:"GitHub Repo",id:"github-repo",children:[]}],s={rightToc:p};function c(e){var t=e.components,l=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,l,{components:t,mdxType:"MDXLayout"}),Object(r.b)("hr",null),Object(r.b)("h2",{id:"spa-developers-guide"},"SPA Developers Guide"),Object(r.b)("h3",{id:"prerequisites"},"Prerequisites"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://nodejs.org/en/"},Object(r.b)("strong",{parentName:"a"},"NodeJS")),"  should be installed (",Object(r.b)("em",{parentName:"li"},"version>=v10.15.3"),")"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://www.npmjs.com/get-npm"},Object(r.b)("strong",{parentName:"a"},"NPM"))," should be installed ",Object(r.b)("em",{parentName:"li"},"(version>=6.4.1)"))),Object(r.b)("h3",{id:"deploying-to-one-platform"},"Deploying to One Platform"),Object(r.b)("h4",{id:"setting-up-the-spaship-cli"},"Setting up the SPAship CLI."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"SPAship is an open source platform for deploying, integrating, and managing single-page apps (SPAs)."),Object(r.b)("li",{parentName:"ul"},"SPAship have a CLI client which enables to push the SPA to the specified environments.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"npm install -g @spaship/cli\n")),Object(r.b)("h4",{id:"acquiring-an-api-key"},"Acquiring an API Key."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Navigate to SPAship Hosted URL>/authentication/apikeys"),Object(r.b)("li",{parentName:"ul"},"Click on the Create API Key button. A modal will popup.")),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:n(231).default})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Set the Label, API Key Expiry Date and mark the environments that the key needs to be enabled and press the Create API Key button.")),Object(r.b)("p",null,Object(r.b)("img",{alt:"img",src:n(232).default})),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"API Key has generated for the specified environments and you need to copy the key instantly because you won't be able to see the key for next time.")),Object(r.b)("h4",{id:"configuring-spashiprcyaml"},"Configuring spashiprc.yaml."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create .spashiprc.yaml in the home folder and add the api keys and SPAship urls.  Based on the SPAship Instances QA and Stage environment urls also need to be included.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"$ cat ~/.spashiprc.yml\nenvs:\n  qa:\n    url: https://op-spaship-qa-api.cloud.paas.psi.redhat.com\n    apikey: v1833557-d45b-4729-8c12-bdda62d31133\n  beta:\n    url: https://op-spaship-api.cloud.paas.psi.redhat.com\n    apikey: 3391f3l8-571s-4c70-a0f5-dea105e94556\n")),Object(r.b)("h4",{id:"using-the-spaship-deploy-command"},"Using the Spaship deploy command."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"SPAship allows the user to deploy the packaged version of the SPA build. Based on the Technology stack you use to build the SPA generate the build accordingly."),Object(r.b)("li",{parentName:"ul"},"Execute spaship init command to include the spaceship configuration on build"),Object(r.b)("li",{parentName:"ul"},"Switch the working directory into the ",Object(r.b)("em",{parentName:"li"},"dist")," folder. Pack the dist folder of SPA using zip utility.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"zip spa.zip .")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Deploy the SPA using Spaship deploy command.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"spaship deploy Archive.zip --env=dev")),Object(r.b)("h4",{id:"setting-up-a-ci-script-for-automating-the-deployment-process"},"Setting up a CI script for automating the deployment process."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"There is a ",Object(r.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/1-Platform/one-platform/master/deploy.sh"},"script")," available for deployment of SPA build. You can add this in the project root folder and execute the script to generate the package and deploy in the SPAship environments.")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"./deploy.sh spa <spaname> /<spa-url> <env> <version>")),Object(r.b)("p",null,"Example - ",Object(r.b)("inlineCode",{parentName:"p"},"./deploy.sh spa mod-spa /mod qa 0.1.0")),Object(r.b)("h4",{id:"validating-the-deployment"},"Validating the deployment."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"If the deployment is a success you will get an acknowledgement like below.")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-sh"},"Deploying SPA to qa (https://op-spaship-qa-api.cloud.paas.psi.redhat.com)\n\u2714 The file op-search.zip deployed successfully !\nUpload file tooks 5 seconds\nProcess file tooks 9 seconds\nTotal: 14 seconds\n{ status: 'success',\n  data:\n   { name: 'op-search',\n     path: '/search',\n     ref: '1.0.0',\n     timestamp: '2020-10-08T07:16:58.530Z' } }\n")),Object(r.b)("h3",{id:"ssi-implementation"},"SSI Implementation"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("h4",{parentName:"li",id:"including-the-one-platform-ssi-script-in-your-application"},"Including the One Platform SSI script in your application."),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Following SSI Code snippet is a universal web property for using the SSI with the SPA. This needs to be injected with the root of your spa inside the ",Object(r.b)("body",null)," tag.")))),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-html"},'\x3c!-- SSI Include Snippet --\x3e\n\x3c!--#include virtual="/.ssi/nav/default.html" --\x3e\n\n')),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Angular  - index.html."),Object(r.b)("li",{parentName:"ul"},"React - index.html."),Object(r.b)("li",{parentName:"ul"},"VueJS - index.html")),Object(r.b)("h4",{id:"utilizing-one-platforms-user-group-service"},"Utilizing One Platform\u2019s user-group service."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"For using the user group microservice environment variables needs to be configured"),Object(r.b)("li",{parentName:"ul"},"Copy the .env.example file in the root directory as .env file.")),Object(r.b)("h2",{id:"github-repo"},"GitHub Repo"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://github.com/1-Platform/one-platform"},"https://github.com/1-Platform/one-platform")))}c.isMDXComponent=!0},153:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var a=n(0),i=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),c=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=c(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=c(n),d=a,m=b["".concat(l,".").concat(d)]||b[d]||u[d]||r;return n?i.a.createElement(m,o(o({ref:t},s),{},{components:n})):i.a.createElement(m,o({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<r;s++)l[s]=n[s];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},231:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image2-b6a5b1928d801afb5ca41feb061c4ca9.png"},232:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image3-9cd3e549a8b586483d38f7270b617a7b.png"}}]);