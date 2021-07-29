(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{TDBs:function(e,t,n){"use strict";n.r(t),n.d(t,"DashboardModule",function(){return $});var r=n("ofXK"),i=n("4KHl"),c=n("tk/3"),s=n("tyNb"),a=n("fXoL"),p=n("UYTu");const o=p.a`
  query ListLHProperties {
    listLHProperties {
      id
      name
    }
  }
`,l=p.a`
  query GetLHPropertyById($propertyId: ID!) {
    getLHPropertyById(id: $propertyId) {
      projectId
      name
      apps {
        id
        branch
        name
      }
    }
  }
`,f=(e,t)=>{let n="";return t.map(({branch:e,id:t})=>{n+=`\n    app${t}:listLHProjectBuilds(projectID:$projectId,branch:"${e}",limit:1){\n      id\n      projectId\n      score{\n        pwa\n        accessibility\n        seo\n        bestPractices\n        performance\n      }\n    }\n    `}),p.a`
  query ListLHPropertyScores($projectId: String!) {
    ${n}
  }
  `};var b=n("/IUn");let d=(()=>{class e extends i.a{constructor(e){super(),this.apollo=e}listLHProperties(){return this.apollo.watchQuery({query:o})}getLHPropertyById(e){return this.apollo.watchQuery({query:l,variables:{propertyId:e}})}getLHPropertyScores(e,t){return this.apollo.watchQuery({query:f(0,t),variables:{projectId:e}})}}return e.\u0275fac=function(t){return new(t||e)(a.Tb(b.b))},e.\u0275prov=a.Gb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),m=(()=>{class e{constructor(){this.title="",this.textClassName="",this.spinnerClassName=""}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Eb({type:e,selectors:[["app-loader"]],inputs:{title:"title",textClassName:"textClassName",spinnerClassName:"spinnerClassName"},decls:9,vars:3,consts:[[1,"pf-l-flex","pf-m-align-items-center"],[1,"pf-l-flex__item"],["role","progressbar","aria-valuetext","Loading...",1,"pf-c-spinner",3,"ngClass"],[1,"pf-c-spinner__clipper"],[1,"pf-c-spinner__lead-ball"],[1,"pf-c-spinner__tail-ball"],[1,"pf-c-title","pf-m-2xl",3,"ngClass"]],template:function(e,t){1&e&&(a.Pb(0,"div",0),a.Pb(1,"div",1),a.Pb(2,"span",2),a.Lb(3,"span",3),a.Lb(4,"span",4),a.Lb(5,"span",5),a.Ob(),a.Ob(),a.Pb(6,"div",1),a.Pb(7,"h1",6),a.mc(8),a.Ob(),a.Ob(),a.Ob()),2&e&&(a.zb(2),a.dc("ngClass",t.spinnerClassName),a.zb(5),a.dc("ngClass",t.textClassName),a.zb(1),a.nc(t.title))},directives:[r.h],styles:[""]}),e})();var u=n("OU7g"),g=n("er65");function h(e,t){1&e&&(a.Pb(0,"div",3),a.Lb(1,"app-loader",4),a.Ob())}function P(e,t){1&e&&(a.Nb(0),a.Pb(1,"div",21),a.Lb(2,"app-loader",22),a.Ob(),a.Mb())}function v(e,t){if(1&e&&(a.Pb(0,"div",5),a.Lb(1,"app-outlined-pie-graph",24),a.Ob()),2&e){const e=t.$implicit;a.zb(1),a.ec("score",e.score),a.ec("name",e.label)}}function y(e,t){if(1&e&&(a.Nb(0),a.lc(1,v,2,2,"div",23),a.Mb()),2&e){const e=a.ac().$implicit,t=a.ac(2);a.zb(1),a.dc("ngForOf",t.scores[e.id])}}function O(e,t){if(1&e&&(a.Pb(0,"div",15),a.Pb(1,"div",16),a.Pb(2,"h3",17),a.mc(3),a.Ob(),a.Ob(),a.Pb(4,"div",5),a.Pb(5,"div",18),a.Pb(6,"div",19),a.Pb(7,"div",20),a.lc(8,P,3,0,"ng-container",2),a.lc(9,y,2,1,"ng-container",2),a.Ob(),a.Lb(10,"app-lhcard-legend"),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&e){const e=t.$implicit,n=a.ac(2);a.zb(3),a.nc(e.name),a.zb(5),a.dc("ngIf",n.scoreLoading),a.zb(1),a.dc("ngIf",!n.scoreLoading)}}function L(e,t){if(1&e&&(a.Nb(0),a.Pb(1,"div",5),a.Pb(2,"nav",6),a.Pb(3,"ol",7),a.Pb(4,"li",8),a.Pb(5,"span",9),a.Lb(6,"i",10),a.Ob(),a.Pb(7,"a",11),a.mc(8,"Dashboard"),a.Ob(),a.Ob(),a.Pb(9,"li",8),a.Pb(10,"span",9),a.Lb(11,"i",10),a.Ob(),a.Pb(12,"span",12),a.mc(13),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Pb(14,"div",13),a.lc(15,O,11,3,"div",14),a.Ob(),a.Mb()),2&e){const e=a.ac();a.zb(13),a.oc(" ",e.title," "),a.zb(2),a.dc("ngForOf",e.apps)}}let _=(()=>{class e{constructor(e,t){this.route=e,this.dashboardService=t,this.apps=[],this.scores={},this.title="",this.appListLoading=!0,this.scoreLoading=!0}ngOnInit(){this.route.params.subscribe(e=>{this.dashboardService.getLHPropertyById(e.id).valueChanges.subscribe(({data:e,loading:t})=>{const{apps:n,projectId:r,name:i}=e.getLHPropertyById;this.apps=n,this.title=i,this.appListLoading=t,this.dashboardService.getLHPropertyScores(r,n).valueChanges.subscribe(({data:e,loading:t})=>{Object.entries(e).map(([e,n])=>{const r=this.getAverageScore(n[0].score),i=e.slice(3);this.scoreLoading=t,this.scores[i]=this.scoreFormater(r)})})})})}getAverageScore(e){const t=e.length;return e.reduce((e,n)=>(Object.keys(e).map(r=>{e[r]+=Math.floor(n[r]/t*100)}),e),{pwa:0,accessibility:0,seo:0,bestPractices:0,performance:0})}scoreFormater(e){return[{label:"Performance",name:"performance",score:0},{label:"Accessibility",name:"accessibility",score:0},{label:"Best Practices",name:"bestPractices",score:0},{label:"SEO",name:"seo",score:0},{label:"PWA",name:"pwa",score:0}].map(t=>(t.score=e[t.name],t))}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(s.a),a.Kb(d))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-analysis"]],decls:3,vars:2,consts:[[1,"pf-l-flex","pf-m-column","pf-m-nowrap","pf-u-p-lg"],["class","pf-l-flex pf-m-grow pf-m-justify-content-center pf-m-align-items-center",4,"ngIf"],[4,"ngIf"],[1,"pf-l-flex","pf-m-grow","pf-m-justify-content-center","pf-m-align-items-center"],["title","Loading..."],[1,"pf-l-flex__item"],["aria-label","breadcrumb",1,"pf-c-breadcrumb"],[1,"pf-c-breadcrumb__list"],[1,"pf-c-breadcrumb__item"],[1,"pf-c-breadcrumb__item-divider"],["aria-hidden","true",1,"fas","fa-angle-right"],["routerLink","/dashboard",1,"pf-c-breadcrumb__link"],["aria-current","page",1,"pf-c-breadcrumb__link","pf-m-current"],[1,"pf-l-flex","pf-m-grow","pf-m-align-items-center","pf-m-column","pf-u-w-100","pf-u-py-md"],["id","apps-score-card","class","pf-l-flex pf-m-column pf-u-w-75",4,"ngFor","ngForOf"],["id","apps-score-card",1,"pf-l-flex","pf-m-column","pf-u-w-75"],[1,"pf-l-flex__item","pf-c-content"],[1,"capitialize"],[1,"pf-c-card","score-card"],[1,"pf-c-card__body"],[1,"pf-l-flex","pf-m-nowrap","pf-m-justify-content-space-around","pf-m-space-items-xl"],[1,"pf-u-py-2xl"],["title","loading score...","spinnerClassName","pf-m-lg","textClassName","pf-m-md"],["class","pf-l-flex__item",4,"ngFor","ngForOf"],[3,"score","name"]],template:function(e,t){1&e&&(a.Pb(0,"div",0),a.lc(1,h,2,0,"div",1),a.lc(2,L,16,2,"ng-container",2),a.Ob()),2&e&&(a.zb(1),a.dc("ngIf",t.appListLoading),a.zb(1),a.dc("ngIf",!t.appListLoading))},directives:[r.j,m,s.c,r.i,u.a,g.a],styles:[".score-card[_ngcontent-%COMP%]{transition:all .5s linear}"]}),e})();const x=["*",[["","title",""]]],w=["*","[title]"];let I=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Eb({type:e,selectors:[["app-property-card"]],ngContentSelectors:w,decls:5,vars:0,consts:[[1,"card","pf-l-flex","pf-m-column","pf-m-justify-content-center","pf-m-align-center","pf-u-w-100","pf-u-w-100","pf-u-p-xl"],[1,"pf-l-flex__item","pf-l-flex","pf-m-justify-content-center","pf-m-align-center"],[1,"pf-l-flex__item","pf-u-text-align-center","pf-l-flex","pf-m-justify-content-center","pf-m-align-center"]],template:function(e,t){1&e&&(a.cc(x),a.Pb(0,"div",0),a.Pb(1,"div",1),a.bc(2,0,["[icon]",""]),a.Ob(),a.Pb(3,"div",2),a.bc(4,1),a.Ob(),a.Ob())},styles:[".card[_ngcontent-%COMP%]{border:1px solid #d2d2d2;border-radius:3px}"]}),e})();function C(e,t){1&e&&(a.Pb(0,"div",5),a.Lb(1,"app-loader",6),a.Ob())}function j(e,t){1&e&&(a.Pb(0,"div",5),a.Pb(1,"div",7),a.Pb(2,"div",8),a.Lb(3,"i",9),a.Pb(4,"h1",10),a.mc(5," No data found "),a.Ob(),a.Pb(6,"div",11),a.mc(7," Contact"),a.Pb(8,"a",12),a.mc(9," one-portal-devel@redhat.com "),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob())}function z(e,t){if(1&e&&(a.Pb(0,"div",15),a.Pb(1,"a",16),a.Pb(2,"app-property-card"),a.Lb(3,"img",17),a.Pb(4,"div",18),a.Pb(5,"div",19),a.Pb(6,"h1",20),a.mc(7),a.Ob(),a.Ob(),a.Pb(8,"div",19),a.Lb(9,"i",21),a.Ob(),a.Ob(),a.Ob(),a.Ob(),a.Ob()),2&e){const e=t.$implicit;a.zb(1),a.dc("routerLink","./"+e.id),a.zb(6),a.nc(e.name)}}function H(e,t){if(1&e&&(a.Pb(0,"div",13),a.lc(1,z,10,2,"div",14),a.Ob()),2&e){const e=a.ac();a.zb(1),a.dc("ngForOf",e.properties)}}const N=[{path:"",component:(()=>{class e{constructor(e){this.dashboardService=e,this.loading=!0,this.properties=[],this.isEmpty=!1}ngOnInit(){this.dashboardService.listLHProperties().valueChanges.subscribe(({data:e,loading:t})=>{this.loading=t,this.properties=e.listLHProperties,this.isEmpty=0===e.listLHProperties.length})}}return e.\u0275fac=function(t){return new(t||e)(a.Kb(d))},e.\u0275cmp=a.Eb({type:e,selectors:[["app-dashboard"]],decls:7,vars:3,consts:[[1,"pf-l-flex","pf-m-column","pf-u-p-lg","pf-u-h-100","pf-m-nowrap"],[1,"pf-l-flex__item","pf-m-spacer-lg"],[1,"pf-c-title","pf-m-2xl"],["class","pf-l-flex pf-m-grow pf-m-justify-content-center pf-m-align-items-center",4,"ngIf"],["class","pf-l-grid pf-m-gutter",4,"ngIf"],[1,"pf-l-flex","pf-m-grow","pf-m-justify-content-center","pf-m-align-items-center"],["title","Loading..."],[1,"pf-c-empty-state","pf-m-xs"],[1,"pf-c-empty-state__content"],["aria-hidden","true",1,"fas","fa-cubes","pf-c-empty-state__icon"],[1,"pf-c-title","pf-m-md"],[1,"pf-c-empty-state__body"],["href","mailto:one-portal-devel@redhat.com"],[1,"pf-l-grid","pf-m-gutter"],["class","pf-l-grid__item pf-m-12-col-on-sm pf-m-6-col-on-md pf-m-4-col-on-lg pf-m-3-col-on-2xl",4,"ngFor","ngForOf"],[1,"pf-l-grid__item","pf-m-12-col-on-sm","pf-m-6-col-on-md","pf-m-4-col-on-lg","pf-m-3-col-on-2xl"],[3,"routerLink"],["src","assets/containers.svg","icon",""],[1,"pf-l-flex","pf-m-align-center",3,"title"],[1,"pf-l-flex__item"],[1,"pf-c-title","pf-m-md","pf-u-font-weight-bold",3,"title"],[1,"fas","fa-arrow-right"]],template:function(e,t){1&e&&(a.Pb(0,"div",0),a.Pb(1,"div",1),a.Pb(2,"h1",2),a.mc(3," Run lighthouse on internal web properties "),a.Ob(),a.Ob(),a.lc(4,C,2,0,"div",3),a.lc(5,j,10,0,"div",3),a.lc(6,H,2,1,"div",4),a.Ob()),2&e&&(a.zb(4),a.dc("ngIf",t.loading),a.zb(1),a.dc("ngIf",!t.loading&&t.isEmpty),a.zb(1),a.dc("ngIf",!(t.loading&&t.isEmpty)))},directives:[r.j,m,r.i,s.c,I],styles:["a[_ngcontent-%COMP%]{text-decoration:none;color:unset}"]}),e})()},{path:":id",component:_}];let S=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({imports:[[s.d.forChild(N)],s.d]}),e})();var F=n("PCNd");let $=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.Ib({type:e}),e.\u0275inj=a.Hb({imports:[[r.b,S,i.a,c.b,F.a]]}),e})()}}]);