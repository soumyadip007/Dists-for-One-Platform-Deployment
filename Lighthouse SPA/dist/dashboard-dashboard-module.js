(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "200M":
/*!********************************************!*\
  !*** ./src/app/dashboard/dashboard.gql.ts ***!
  \********************************************/
/*! exports provided: ListLHProperties, GetLHPropertyById, ListLHPropertyScores */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLHProperties", function() { return ListLHProperties; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetLHPropertyById", function() { return GetLHPropertyById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListLHPropertyScores", function() { return ListLHPropertyScores; });
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! apollo-angular */ "/IUn");

const ListLHProperties = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query ListLHProperties {
    listLHProperties {
      id
      name
    }
  }
`;
const GetLHPropertyById = apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
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
`;
const ListLHPropertyScores = (projectId, apps) => {
    let queryAliasBuilder = '';
    apps.map(({ branch, id }) => {
        queryAliasBuilder += `
    app${id}:listLHProjectBuilds(projectID:$projectId,branch:"${branch}",limit:1){
      id
      projectId
      score{
        pwa
        accessibility
        seo
        bestPractices
        performance
      }
    }
    `;
    });
    return apollo_angular__WEBPACK_IMPORTED_MODULE_0__["gql"] `
  query ListLHPropertyScores($projectId: String!) {
    ${queryAliasBuilder}
  }
  `;
};


/***/ }),

/***/ "6gd5":
/*!******************************************************************!*\
  !*** ./src/app/dashboard/pages/dashboard/dashboard.component.ts ***!
  \******************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var app_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/dashboard/dashboard.service */ "QAUA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/loader/loader.component */ "668k");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_property_card_property_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/property-card/property-card.component */ "ofOu");






function DashboardComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " No data found ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Contact");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " one-portal-devel@redhat.com ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-property-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h1", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const property_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", "./" + property_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](property_r4.name);
} }
function DashboardComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DashboardComponent_div_6_div_1_Template, 10, 2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.properties);
} }
class DashboardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.loading = true;
        this.properties = [];
        this.isEmpty = false;
    }
    ngOnInit() {
        this.dashboardService
            .listLHProperties()
            .valueChanges.subscribe(({ data, loading }) => {
            this.loading = loading;
            this.properties = data.listLHProperties;
            this.isEmpty = data.listLHProperties.length === 0;
        });
    }
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 7, vars: 3, consts: [[1, "pf-l-flex", "pf-m-column", "pf-u-p-lg", "pf-u-h-100", "pf-m-nowrap"], [1, "pf-l-flex__item", "pf-m-spacer-lg"], [1, "pf-c-title", "pf-m-2xl"], ["class", "pf-l-flex pf-m-grow pf-m-justify-content-center pf-m-align-items-center", 4, "ngIf"], ["class", "pf-l-grid pf-m-gutter", 4, "ngIf"], [1, "pf-l-flex", "pf-m-grow", "pf-m-justify-content-center", "pf-m-align-items-center"], ["title", "Loading..."], [1, "pf-c-empty-state", "pf-m-xs"], [1, "pf-c-empty-state__content"], ["aria-hidden", "true", 1, "fas", "fa-cubes", "pf-c-empty-state__icon"], [1, "pf-c-title", "pf-m-md"], [1, "pf-c-empty-state__body"], ["href", "mailto:one-portal-devel@redhat.com"], [1, "pf-l-grid", "pf-m-gutter"], ["class", "pf-l-grid__item pf-m-12-col-on-sm pf-m-6-col-on-md pf-m-4-col-on-lg pf-m-3-col-on-2xl", 4, "ngFor", "ngForOf"], [1, "pf-l-grid__item", "pf-m-12-col-on-sm", "pf-m-6-col-on-md", "pf-m-4-col-on-lg", "pf-m-3-col-on-2xl"], [3, "routerLink"], ["src", "assets/containers.svg", "icon", ""], [1, "pf-l-flex", "pf-m-align-center", 3, "title"], [1, "pf-l-flex__item"], [1, "pf-c-title", "pf-m-md", "pf-u-font-weight-bold", 3, "title"], [1, "fas", "fa-arrow-right"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Run lighthouse on internal web properties ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DashboardComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, DashboardComponent_div_5_Template, 10, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, DashboardComponent_div_6_Template, 2, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.isEmpty);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !(ctx.loading && ctx.isEmpty));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_3__["LoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"], _components_property_card_property_card_component__WEBPACK_IMPORTED_MODULE_5__["PropertyCardComponent"]], styles: ["a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  color: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHFCQUFBO0VBQ0EsWUFBQTtBQUNGIiwiZmlsZSI6ImRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB1bnNldDtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ "Oy4E":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/analysis/analysis.component */ "z2Zy");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "6gd5");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");





const routes = [
    {
        path: '',
        component: _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
    },
    {
        path: ':id',
        component: _pages_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_1__["AnalysisComponent"],
    },
];
class DashboardRoutingModule {
}
DashboardRoutingModule.ɵfac = function DashboardRoutingModule_Factory(t) { return new (t || DashboardRoutingModule)(); };
DashboardRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DashboardRoutingModule });
DashboardRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DashboardRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "QAUA":
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.service.ts ***!
  \************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var app_graphql_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! app/graphql.module */ "4KHl");
/* harmony import */ var _dashboard_gql__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.gql */ "200M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var apollo_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! apollo-angular */ "/IUn");




class DashboardService extends app_graphql_module__WEBPACK_IMPORTED_MODULE_0__["GraphQLModule"] {
    constructor(apollo) {
        super();
        this.apollo = apollo;
    }
    listLHProperties() {
        return this.apollo.watchQuery({
            query: _dashboard_gql__WEBPACK_IMPORTED_MODULE_1__["ListLHProperties"],
        });
    }
    getLHPropertyById(propertyId) {
        return this.apollo.watchQuery({
            query: _dashboard_gql__WEBPACK_IMPORTED_MODULE_1__["GetLHPropertyById"],
            variables: {
                propertyId,
            },
        });
    }
    getLHPropertyScores(projectId, apps) {
        return this.apollo.watchQuery({
            query: Object(_dashboard_gql__WEBPACK_IMPORTED_MODULE_1__["ListLHPropertyScores"])(projectId, apps),
            variables: {
                projectId,
            },
        });
    }
}
DashboardService.ɵfac = function DashboardService_Factory(t) { return new (t || DashboardService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](apollo_angular__WEBPACK_IMPORTED_MODULE_3__["Apollo"])); };
DashboardService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: DashboardService, factory: DashboardService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ "TDBs":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var app_graphql_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! app/graphql.module */ "4KHl");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard-routing.module */ "Oy4E");
/* harmony import */ var _pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/dashboard/dashboard.component */ "6gd5");
/* harmony import */ var _components_property_card_property_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/property-card/property-card.component */ "ofOu");
/* harmony import */ var _pages_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/analysis/analysis.component */ "z2Zy");
/* harmony import */ var app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! app/shared/shared.module */ "PCNd");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ "fXoL");









class DashboardModule {
}
DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
DashboardModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: DashboardModule });
DashboardModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
            app_graphql_module__WEBPACK_IMPORTED_MODULE_1__["GraphQLModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_pages_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"], _components_property_card_property_card_component__WEBPACK_IMPORTED_MODULE_5__["PropertyCardComponent"], _pages_analysis_analysis_component__WEBPACK_IMPORTED_MODULE_6__["AnalysisComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["DashboardRoutingModule"],
        app_graphql_module__WEBPACK_IMPORTED_MODULE_1__["GraphQLModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        app_shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]] }); })();


/***/ }),

/***/ "ofOu":
/*!*******************************************************************************!*\
  !*** ./src/app/dashboard/components/property-card/property-card.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PropertyCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropertyCardComponent", function() { return PropertyCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const _c0 = ["*", [["", "title", ""]]];
const _c1 = ["*", "[title]"];
class PropertyCardComponent {
    constructor() { }
    ngOnInit() {
    }
}
PropertyCardComponent.ɵfac = function PropertyCardComponent_Factory(t) { return new (t || PropertyCardComponent)(); };
PropertyCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PropertyCardComponent, selectors: [["app-property-card"]], ngContentSelectors: _c1, decls: 5, vars: 0, consts: [[1, "card", "pf-l-flex", "pf-m-column", "pf-m-justify-content-center", "pf-m-align-center", "pf-u-w-100", "pf-u-w-100", "pf-u-p-xl"], [1, "pf-l-flex__item", "pf-l-flex", "pf-m-justify-content-center", "pf-m-align-center"], [1, "pf-l-flex__item", "pf-u-text-align-center", "pf-l-flex", "pf-m-justify-content-center", "pf-m-align-center"]], template: function PropertyCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"](_c0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2, 0, ["[icon]", ""]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](4, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".card[_ngcontent-%COMP%] {\n  border: 1px solid #d2d2d2;\n  border-radius: 3px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb3BlcnR5LWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoicHJvcGVydHktY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2QyZDJkMjtcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xufVxuIl19 */"] });


/***/ }),

/***/ "z2Zy":
/*!****************************************************************!*\
  !*** ./src/app/dashboard/pages/analysis/analysis.component.ts ***!
  \****************************************************************/
/*! exports provided: AnalysisComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalysisComponent", function() { return AnalysisComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var app_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! app/dashboard/dashboard.service */ "QAUA");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/loader/loader.component */ "668k");
/* harmony import */ var _shared_components_lhcard_legend_lhcard_legend_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/lhcard-legend/lhcard-legend.component */ "OU7g");
/* harmony import */ var _shared_components_outlined_pie_graph_outlined_pie_graph_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/outlined-pie-graph/outlined-pie-graph.component */ "er65");







function AnalysisComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loader", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AnalysisComponent_ng_container_2_div_15_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-loader", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function AnalysisComponent_ng_container_2_div_15_ng_container_9_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-outlined-pie-graph", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const score_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("score", score_r7.score);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("name", score_r7.label);
} }
function AnalysisComponent_ng_container_2_div_15_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnalysisComponent_ng_container_2_div_15_ng_container_9_div_1_Template, 2, 2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const app_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r5.scores[app_r3.id]);
} }
function AnalysisComponent_ng_container_2_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, AnalysisComponent_ng_container_2_div_15_ng_container_8_Template, 3, 0, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AnalysisComponent_ng_container_2_div_15_ng_container_9_Template, 2, 1, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-lhcard-legend");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r3 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](app_r3.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.scoreLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r2.scoreLoading);
} }
function AnalysisComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ol", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, AnalysisComponent_ng_container_2_div_15_Template, 11, 3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.apps);
} }
class AnalysisComponent {
    constructor(route, dashboardService) {
        this.route = route;
        this.dashboardService = dashboardService;
        this.apps = [];
        this.scores = {};
        this.title = '';
        this.appListLoading = true;
        this.scoreLoading = true;
    }
    ngOnInit() {
        this.route.params.subscribe((params) => {
            const propertyId = params.id;
            this.dashboardService
                .getLHPropertyById(propertyId)
                .valueChanges.subscribe(({ data, loading }) => {
                const { apps, projectId, name } = data.getLHPropertyById;
                this.apps = apps;
                this.title = name;
                this.appListLoading = loading;
                // fetch scores for all apps
                this.dashboardService
                    .getLHPropertyScores(projectId, apps)
                    .valueChanges.subscribe(({ data, loading }) => {
                    Object.entries(data).map(([id, appLatestBuild]) => {
                        const buildScore = this.getAverageScore(appLatestBuild[0].score);
                        const originalId = id.slice(3);
                        this.scoreLoading = loading;
                        this.scores[originalId] = this.scoreFormater(buildScore);
                    });
                });
            });
        });
    }
    getAverageScore(scoreList) {
        const totalNumberOfScores = scoreList.length;
        return scoreList.reduce((average, score) => {
            Object.keys(average).map((scoreType) => {
                average[scoreType] += Math.floor((score[scoreType] / totalNumberOfScores) * 100);
            });
            return average;
        }, {
            pwa: 0,
            accessibility: 0,
            seo: 0,
            bestPractices: 0,
            performance: 0,
        });
    }
    scoreFormater(score) {
        const formatedScores = [
            {
                label: 'Performance',
                name: 'performance',
                score: 0,
            },
            {
                label: 'Accessibility',
                name: 'accessibility',
                score: 0,
            },
            {
                label: 'Best Practices',
                name: 'bestPractices',
                score: 0,
            },
            {
                label: 'SEO',
                name: 'seo',
                score: 0,
            },
            {
                label: 'PWA',
                name: 'pwa',
                score: 0,
            },
        ];
        return formatedScores.map((formatedScore) => {
            formatedScore.score = score[formatedScore.name];
            return formatedScore;
        });
    }
}
AnalysisComponent.ɵfac = function AnalysisComponent_Factory(t) { return new (t || AnalysisComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](app_dashboard_dashboard_service__WEBPACK_IMPORTED_MODULE_2__["DashboardService"])); };
AnalysisComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AnalysisComponent, selectors: [["app-analysis"]], decls: 3, vars: 2, consts: [[1, "pf-l-flex", "pf-m-column", "pf-m-nowrap", "pf-u-p-lg"], ["class", "pf-l-flex pf-m-grow pf-m-justify-content-center pf-m-align-items-center", 4, "ngIf"], [4, "ngIf"], [1, "pf-l-flex", "pf-m-grow", "pf-m-justify-content-center", "pf-m-align-items-center"], ["title", "Loading..."], [1, "pf-l-flex__item"], ["aria-label", "breadcrumb", 1, "pf-c-breadcrumb"], [1, "pf-c-breadcrumb__list"], [1, "pf-c-breadcrumb__item"], [1, "pf-c-breadcrumb__item-divider"], ["aria-hidden", "true", 1, "fas", "fa-angle-right"], ["routerLink", "/dashboard", 1, "pf-c-breadcrumb__link"], ["aria-current", "page", 1, "pf-c-breadcrumb__link", "pf-m-current"], [1, "pf-l-flex", "pf-m-grow", "pf-m-align-items-center", "pf-m-column", "pf-u-w-100", "pf-u-py-md"], ["id", "apps-score-card", "class", "pf-l-flex pf-m-column pf-u-w-75", 4, "ngFor", "ngForOf"], ["id", "apps-score-card", 1, "pf-l-flex", "pf-m-column", "pf-u-w-75"], [1, "pf-l-flex__item", "pf-c-content"], [1, "capitialize"], [1, "pf-c-card", "score-card"], [1, "pf-c-card__body"], [1, "pf-l-flex", "pf-m-nowrap", "pf-m-justify-content-space-around", "pf-m-space-items-xl"], [1, "pf-u-py-2xl"], ["title", "loading score...", "spinnerClassName", "pf-m-lg", "textClassName", "pf-m-md"], ["class", "pf-l-flex__item", 4, "ngFor", "ngForOf"], [3, "score", "name"]], template: function AnalysisComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AnalysisComponent_div_1_Template, 2, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AnalysisComponent_ng_container_2_Template, 16, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.appListLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.appListLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_components_loader_loader_component__WEBPACK_IMPORTED_MODULE_4__["LoaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _shared_components_lhcard_legend_lhcard_legend_component__WEBPACK_IMPORTED_MODULE_5__["LHCardLegendComponent"], _shared_components_outlined_pie_graph_outlined_pie_graph_component__WEBPACK_IMPORTED_MODULE_6__["OutlinedPieGraphComponent"]], styles: [".score-card[_ngcontent-%COMP%] {\n  transition: all 0.5s linear;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2FuYWx5c2lzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMkJBQUE7QUFDRiIsImZpbGUiOiJhbmFseXNpcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY29yZS1jYXJkIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xufVxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module.js.map