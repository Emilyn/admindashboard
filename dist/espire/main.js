"use strict";
(self["webpackChunkespire"] = self["webpackChunkespire"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./layout/auth-layout/auth-layout.component */ 1201);
/* harmony import */ var _layout_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/app-layout/app-layout-component */ 8058);
/* harmony import */ var _routes_auth_layout_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./routes/auth-layout.routes */ 3133);
/* harmony import */ var _routes_app_layout_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes/app-layout.routes */ 2471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);







const appRoutes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
    },
    {
        path: '',
        component: _layout_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_1__.AppLayoutComponent,
        children: _routes_app_layout_routes__WEBPACK_IMPORTED_MODULE_3__.APP_LAYOUT_ROUTES
    },
    {
        path: '',
        component: _layout_auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_0__.AuthLayoutComponent,
        children: _routes_auth_layout_routes__WEBPACK_IMPORTED_MODULE_2__.AUTH_LAYOUT_ROUTES
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forRoot(appRoutes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_5__.PreloadAllModules,
            anchorScrolling: 'enabled',
            scrollPositionRestoration: 'enabled',
            relativeLinkResolution: 'legacy'
        }), _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _i18n_en_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./i18n/en/index */ 9068);
/* harmony import */ var _i18n_fr_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n/fr/index */ 1031);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);







const storageKey = 'lang';
class AppComponent {
    constructor(translateService) {
        this.translateService = translateService;
        translateService.setTranslation('en_US', _i18n_en_index__WEBPACK_IMPORTED_MODULE_1__.en_US);
        translateService.setTranslation('fr_FR', _i18n_fr_index__WEBPACK_IMPORTED_MODULE_2__.fr_FR);
    }
    ngOnInit() {
        this.app$.subscribe(app => {
            this.currentLang = localStorage.getItem(storageKey) || app.lang || this.translateService.getBrowserCultureLang();
            this.translateService.use(this.currentLang);
        });
        this.langChangeSubscription = this.translateService.onLangChange.subscribe((event) => {
            localStorage.setItem(storageKey, event.lang);
        });
    }
    ngOnDestroy() {
        if (this.langChangeSubscription) {
            this.langChangeSubscription.unsubscribe();
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet], encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)((state) => state.app)
], AppComponent.prototype, "app$", void 0);


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser/animations */ 7146);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout/layout.module */ 4805);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/shared.module */ 4466);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngxs/devtools-plugin */ 2015);
/* harmony import */ var _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngxs/logger-plugin */ 5011);
/* harmony import */ var _store_app_config_app_config_state__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/app-config/app-config.state */ 7503);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);

















// import mockServer from './mock-data/app.mock';
// mockServer();
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__.LocationStrategy,
            useClass: _angular_common__WEBPACK_IMPORTED_MODULE_9__.PathLocationStrategy
        }
    ], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule.forRoot(),
        _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__.LayoutModule,
        _ngxs_store__WEBPACK_IMPORTED_MODULE_3__.NgxsModule.forRoot([
            _store_app_config_app_config_state__WEBPACK_IMPORTED_MODULE_6__.AppConfigState
        ]),
        _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__.NgxsReduxDevtoolsPluginModule.forRoot(),
        _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__.NgxsLoggerPluginModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule,
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__.BrowserAnimationsModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateModule, _layout_layout_module__WEBPACK_IMPORTED_MODULE_1__.LayoutModule, _ngxs_store__WEBPACK_IMPORTED_MODULE_3__["ɵk"], _ngxs_devtools_plugin__WEBPACK_IMPORTED_MODULE_4__.NgxsReduxDevtoolsPluginModule, _ngxs_logger_plugin__WEBPACK_IMPORTED_MODULE_5__.NgxsLoggerPluginModule] }); })();


/***/ }),

/***/ 6626:
/*!***************************************!*\
  !*** ./src/app/configs/app.config.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "API_ENDPOINT": () => (/* binding */ API_ENDPOINT),
/* harmony export */   "AppConfiguration": () => (/* binding */ AppConfiguration)
/* harmony export */ });
/* harmony import */ var _i18n_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./i18n.config */ 1850);

const AppConfiguration = {
    layoutType: 'vertical',
    sideNavCollapse: false,
    mobileNavCollapse: false,
    lang: _i18n_config__WEBPACK_IMPORTED_MODULE_0__.defaultLanguge,
    navMenuColor: 'light',
    headerNavColor: '#ffffff'
};
// Change your API endpoint here
const API_ENDPOINT = '/api';


/***/ }),

/***/ 1850:
/*!****************************************!*\
  !*** ./src/app/configs/i18n.config.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "defaultLanguge": () => (/* binding */ defaultLanguge),
/* harmony export */   "supportedLanguages": () => (/* binding */ supportedLanguages)
/* harmony export */ });
const supportedLanguages = {
    en_US: 'English',
    fr_FR: 'French'
};
const defaultLanguge = localStorage.getItem('lang') || Object.keys(supportedLanguages)[0];


/***/ }),

/***/ 2651:
/*!***************************************!*\
  !*** ./src/app/configs/nav.config.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "navConfiguration": () => (/* binding */ navConfiguration)
/* harmony export */ });
const dashboard = [
    {
        path: '/dashboard',
        title: 'Dashboard',
        translateKey: 'NAV.DASHBOARD',
        type: 'item',
        iconType: 'feather',
        icon: 'icon-home',
        key: 'dashboard',
        submenu: []
    },
];
const menuWithTitle = [
    {
        path: '',
        title: 'Menu with Title',
        translateKey: 'NAV.MENU_WITH_TITLE',
        type: 'title',
        iconType: 'feather',
        icon: 'icon-file',
        key: 'menu-with-title',
        submenu: [
            {
                path: '/menu-1',
                title: 'Menu 1',
                translateKey: 'NAV.MENU_WITH_TITLE_ITEM_1',
                type: 'item',
                iconType: 'feather',
                icon: 'icon-file',
                key: 'menu-with-title.menu-with-title-item-1',
                submenu: []
            },
            {
                path: '/menu-2',
                title: 'Menu 2',
                translateKey: 'NAV.MENU_WITH_TITLE_ITEM_2',
                type: 'item',
                iconType: 'feather',
                icon: 'icon-file',
                key: 'menu-with-title.menu-with-title-item-2',
                submenu: []
            },
        ]
    }
];
const navWithSubMenu = [
    {
        path: '',
        title: 'Nav with submenu',
        translateKey: 'NAV.NAV_WITH_SUBMENU',
        type: 'collapse',
        iconType: 'feather',
        icon: 'icon-align-left',
        key: 'nav-wth-submenu',
        submenu: [
            {
                path: '/submenu-1',
                title: 'Submenu 1',
                translateKey: 'NAV.SUBMENU_1',
                type: 'item',
                iconType: 'feather',
                icon: 'icon-file',
                key: 'nav-wth-submenu.submenu-1',
                submenu: []
            },
            {
                path: '/submenu-2',
                title: 'Submenu 2',
                translateKey: 'NAV.SUBMENU_2',
                type: 'item',
                iconType: 'feather',
                icon: 'icon-file',
                key: 'nav-wth-submenu.submenu-2',
                submenu: []
            },
        ]
    }
];
const subMenuWithTitle = [
    {
        path: '',
        title: 'Submenu with title',
        translateKey: 'NAV.SUBMENU_WITH_TITLE',
        type: 'title',
        iconType: 'feather',
        icon: 'icon-package',
        key: 'submenu-with-title',
        submenu: [
            {
                path: '',
                title: 'Menu',
                translateKey: 'NAV.MENU',
                type: 'collapse',
                iconType: 'feather',
                icon: 'icon-box',
                key: 'submenu-with-title.menu',
                submenu: [
                    {
                        path: '/ui-elements/accordion',
                        title: 'Submenu 1',
                        translateKey: 'NAV.SUBMENU_1',
                        type: 'item',
                        iconType: '',
                        icon: '',
                        key: 'submenu-with-title.menu.submenu-1',
                        submenu: []
                    },
                    {
                        path: '/ui-elements/alert',
                        title: 'Submenu 2',
                        translateKey: 'NAV.SUBMENU_2',
                        type: 'item',
                        iconType: '',
                        icon: '',
                        key: 'submenu-with-title.menu.submenu-2',
                        submenu: []
                    }
                ],
            },
        ]
    }
];
const navConfiguration = [
    ...dashboard,
    ...navWithSubMenu,
    ...menuWithTitle,
    ...subMenuWithTitle
];


/***/ }),

/***/ 9068:
/*!**********************************!*\
  !*** ./src/app/i18n/en/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "en_US": () => (/* binding */ en_US)
/* harmony export */ });
/* harmony import */ var _section_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section/nav */ 3766);

const en_US = {
    ..._section_nav__WEBPACK_IMPORTED_MODULE_0__.nav
};


/***/ }),

/***/ 3766:
/*!****************************************!*\
  !*** ./src/app/i18n/en/section/nav.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nav": () => (/* binding */ nav)
/* harmony export */ });
const nav = {
    'NAV': {
        'DASHBOARD': 'Dashboard',
        'MENU_WITH_TITLE': 'Menu with title',
        'MENU_WITH_TITLE_ITEM_1': 'Menu with title item 1',
        'MENU_WITH_TITLE_ITEM_2': 'Menu with title item 2',
        'NAV_WITH_SUBMENU': 'Nav with submenu',
        'SUBMENU_1': 'Submenu 1',
        'SUBMENU_2': 'Submenu 2',
        'SUBMENU_WITH_TITLE': 'Submenu with title',
        'MENU': 'Menu'
    }
};


/***/ }),

/***/ 1031:
/*!**********************************!*\
  !*** ./src/app/i18n/fr/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fr_FR": () => (/* binding */ fr_FR)
/* harmony export */ });
/* harmony import */ var _section_nav__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./section/nav */ 999);

const fr_FR = {
    ..._section_nav__WEBPACK_IMPORTED_MODULE_0__.nav
};


/***/ }),

/***/ 999:
/*!****************************************!*\
  !*** ./src/app/i18n/fr/section/nav.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nav": () => (/* binding */ nav)
/* harmony export */ });
const nav = {
    'NAV': {
        'DASHBOARD': 'Tableau de bord',
        'MENU_WITH_TITLE': 'Menu avec titre',
        'MENU_WITH_TITLE_ITEM_1': 'Menu avec élément de titre 1',
        'MENU_WITH_TITLE_ITEM_2': 'Menu avec élément de titre 2',
        'NAV_WITH_SUBMENU': 'Nav avec sous-menu',
        'SUBMENU_1': 'Sous-menu 1',
        'SUBMENU_2': 'Sous-menu 2',
        'SUBMENU_WITH_TITLE': 'Sous-menu avec titre',
        'MENU': 'Menu'
    }
};


/***/ }),

/***/ 8058:
/*!***********************************************************!*\
  !*** ./src/app/layout/app-layout/app-layout-component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppLayoutComponent": () => (/* binding */ AppLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _components_vertical_layout_vertical_layout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/vertical-layout/vertical-layout.component */ 3166);
/* harmony import */ var _components_horizontal_layout_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/horizontal-layout/horizontal-layout.component */ 9799);







function AppLayoutComponent_vertical_layout_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "vertical-layout");
} }
function AppLayoutComponent_horizontal_layout_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "horizontal-layout");
} }
class AppLayoutComponent {
    constructor(cdr) {
        this.cdr = cdr;
    }
    ngOnInit() {
        this.subscription = this.app$.subscribe(app => {
            this.layout = app.layoutType;
            this.cdr.detectChanges();
        });
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
AppLayoutComponent.ɵfac = function AppLayoutComponent_Factory(t) { return new (t || AppLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ChangeDetectorRef)); };
AppLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AppLayoutComponent, selectors: [["app-layout"]], hostVars: 2, hostBindings: function AppLayoutComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("layout", true);
    } }, decls: 2, vars: 2, consts: [[4, "ngIf"]], template: function AppLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AppLayoutComponent_vertical_layout_0_Template, 1, 0, "vertical-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AppLayoutComponent_horizontal_layout_1_Template, 1, 0, "horizontal-layout", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.layout === "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.layout === "horizontal");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _components_vertical_layout_vertical_layout_component__WEBPACK_IMPORTED_MODULE_1__.VerticalLayoutComponent, _components_horizontal_layout_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_2__.HorizontalLayoutComponent], encapsulation: 2, changeDetection: 0 });
(0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)((state) => state.app)
], AppLayoutComponent.prototype, "app$", void 0);


/***/ }),

/***/ 1201:
/*!*************************************************************!*\
  !*** ./src/app/layout/auth-layout/auth-layout.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthLayoutComponent": () => (/* binding */ AuthLayoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 124);


class AuthLayoutComponent {
    constructor() { }
    ngOnInit() { }
}
AuthLayoutComponent.ɵfac = function AuthLayoutComponent_Factory(t) { return new (t || AuthLayoutComponent)(); };
AuthLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthLayoutComponent, selectors: [["auth-layout"]], decls: 1, vars: 0, template: function AuthLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 4714:
/*!****************************************************************!*\
  !*** ./src/app/layout/components/content/content.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContentComponent": () => (/* binding */ ContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../footer/footer.component */ 2223);
/* harmony import */ var _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../page-header/page-header.component */ 9754);







function ContentComponent_page_header_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "page-header");
} }
class ContentComponent {
    constructor(router, activatedRoute) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.pageHeader = true;
        this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)((event) => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_4__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.startWith)(this.router), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.map)(() => {
            let child = this.activatedRoute.firstChild;
            while (child) {
                if (child.firstChild) {
                    child = child.firstChild;
                }
                else if (child.snapshot.data && child.snapshot.data['hidePageHeader']) {
                    return child.snapshot.data['hidePageHeader'];
                }
                else {
                    return null;
                }
            }
            return null;
        }))
            .subscribe((data) => {
            data ? this.pageHeader = false : this.pageHeader = true;
        });
    }
    ngOnInit() {
    }
}
ContentComponent.ɵfac = function ContentComponent_Factory(t) { return new (t || ContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
ContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ContentComponent, selectors: [["content"]], hostVars: 8, hostBindings: function ContentComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("content", true)("container", ctx.layoutType === "horizontal")("with-page-header", ctx.pageHeader)("is-collapse", ctx.collapse);
    } }, inputs: { collapse: "collapse", layoutType: "layoutType", pageHeader: "pageHeader" }, decls: 4, vars: 1, consts: [[1, "main"], [4, "ngIf"]], template: function ContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ContentComponent_page_header_1_Template, 1, 0, "page-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "app-footer");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.pageHeader);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterOutlet, _footer_footer_component__WEBPACK_IMPORTED_MODULE_0__.FooterComponent, _page_header_page_header_component__WEBPACK_IMPORTED_MODULE_1__.PageHeaderComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 2223:
/*!**************************************************************!*\
  !*** ./src/app/layout/components/footer/footer.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], hostVars: 2, hostBindings: function FooterComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("footer", true);
    } }, decls: 8, vars: 0, consts: [[1, "footer-content"], [1, "mb-0"], ["href", "", 1, "text-gray", "me-3"], ["href", "", 1, "text-gray"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Copyright \u00A9 2021 Theme_Nate. All rights reserved.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span")(4, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Term & Conditions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Privacy & Policy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } }, encapsulation: 2 });


/***/ }),

/***/ 1855:
/*!**********************************************************************!*\
  !*** ./src/app/layout/components/header-nav/header-nav.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderNavComponent": () => (/* binding */ HeaderNavComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_utils_ColorContrast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/utils/ColorContrast */ 4712);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/logo/logo.component */ 8168);
/* harmony import */ var _nav_toggle_nav_toggle_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../nav-toggle/nav-toggle.component */ 1741);
/* harmony import */ var _nav_config_nav_config_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../nav-config/nav-config.component */ 8041);






function HeaderNavComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function HeaderNavComponent_ng_template_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function HeaderNavComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "nav-toggle", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HeaderNavComponent_ng_template_2_ng_container_2_Template, 1, 0, "ng-container", 1);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isMobile", ctx_r2.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function HeaderNavComponent_ng_template_4_nav_toggle_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "nav-toggle", 6);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("isMobile", ctx_r8.isMobile);
} }
function HeaderNavComponent_ng_template_4_logo_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "logo", 9);
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("white", ctx_r9.logoColor !== "dark");
} }
function HeaderNavComponent_ng_template_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function HeaderNavComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderNavComponent_ng_template_4_nav_toggle_1_Template, 1, 1, "nav-toggle", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HeaderNavComponent_ng_template_4_logo_2_Template, 1, 1, "logo", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HeaderNavComponent_ng_template_4_ng_container_3_Template, 1, 0, "ng-container", 1);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r4.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r5);
} }
function HeaderNavComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "nav-config");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
const _c0 = function (a0) { return { "container": a0 }; };
class HeaderNavComponent {
    constructor() {
        this.color = '#ffffff';
    }
    get headingClass() {
        const color = (0,_app_shared_utils_ColorContrast__WEBPACK_IMPORTED_MODULE_0__.ColorContrast)(this.color);
        this.logoColor = color;
        return `header-text-${color}`;
    }
    ngOnInit() {
    }
}
HeaderNavComponent.ɵfac = function HeaderNavComponent_Factory(t) { return new (t || HeaderNavComponent)(); };
HeaderNavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HeaderNavComponent, selectors: [["header-nav"]], hostVars: 12, hostBindings: function HeaderNavComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](ctx.headingClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("background-color", ctx.color);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("header-nav", true)("layout-vertical", ctx.layoutType === "vertical")("layout-horizon", ctx.layoutType === "horizontal")("is-collapse", ctx.collapse);
    } }, inputs: { layoutType: "layoutType", collapse: "collapse", isMobile: "isMobile", color: "color" }, decls: 8, vars: 4, consts: [[1, "header-nav-wrap", 3, "ngClass"], [4, "ngTemplateOutlet"], ["vertical", ""], ["horizontal", ""], ["headerNavRight", ""], [1, "header-nav-left"], [3, "isMobile"], [3, "isMobile", 4, "ngIf"], [3, "white", 4, "ngIf"], [3, "white"], [1, "header-nav-right"]], template: function HeaderNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderNavComponent_ng_container_1_Template, 1, 0, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HeaderNavComponent_ng_template_2_Template, 3, 2, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, HeaderNavComponent_ng_template_4_Template, 4, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, HeaderNavComponent_ng_template_6_Template, 2, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c0, ctx.layoutType === "horizontal"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", ctx.layoutType === "vertical" ? _r1 : _r3);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__.LogoComponent, _nav_toggle_nav_toggle_component__WEBPACK_IMPORTED_MODULE_2__.NavToggleComponent, _nav_config_nav_config_component__WEBPACK_IMPORTED_MODULE_3__.NavConfigComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 3163:
/*!****************************************************************************!*\
  !*** ./src/app/layout/components/header-navbar/header-navbar.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderNavbarComponent": () => (/* binding */ HeaderNavbarComponent)
/* harmony export */ });
/* harmony import */ var _app_configs_nav_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/configs/nav.config */ 2651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/nav-menu/nav-menu.component */ 9335);
/* harmony import */ var _shared_components_nav_menu_nav_submenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/nav-menu/nav-submenu.component */ 8255);
/* harmony import */ var _shared_components_nav_menu_nav_menu_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/nav-menu/nav-menu-item.component */ 5001);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);








function HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_ng_template_1_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0, a1) { return { type: a0, icon: a1 }; };
function HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_ng_template_1_ng_container_0_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](5, _c0, item_r3.iconType, item_r3.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, item_r3.translateKey) || item_r3.title);
} }
function HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_nav_menu_item_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
const _c1 = function (a0) { return [a0]; };
const _c2 = function () { return ["is-active"]; };
function HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_nav_menu_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav-menu-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_nav_menu_item_3_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const firstLevel_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("index", firstLevel_r7.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](8, _c0, firstLevel_r7.iconType, firstLevel_r7.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c1, firstLevel_r7.path))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, firstLevel_r7.translateKey) || item_r3.title, " ");
} }
function HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_nav_submenu_4_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_nav_submenu_4_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_nav_submenu_4_ng_template_1_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const firstLevel_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](5, _c0, firstLevel_r7.iconType, firstLevel_r7.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, firstLevel_r7.translateKey) || firstLevel_r7.title);
} }
function HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_nav_submenu_4_nav_menu_item_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_nav_submenu_4_nav_menu_item_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav-menu-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_nav_submenu_4_nav_menu_item_3_ng_container_1_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const secondLevel_r22 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("index", secondLevel_r22.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](8, _c0, secondLevel_r22.iconType, secondLevel_r22.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c1, secondLevel_r22.path))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](13, _c2));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 6, secondLevel_r22.translateKey) || secondLevel_r22.title, " ");
} }
function HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_nav_submenu_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav-submenu", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_nav_submenu_4_ng_template_1_Template, 5, 8, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_nav_submenu_4_nav_menu_item_3_Template, 5, 14, "nav-menu-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const firstLevel_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", firstLevel_r7.submenu);
} }
function HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_ng_template_1_Template, 4, 8, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_nav_menu_item_3_Template, 5, 14, "nav-menu-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_nav_submenu_4_Template, 4, 1, "nav-submenu", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const firstLevel_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", firstLevel_r7.submenu.length === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", firstLevel_r7.submenu.length > 0);
} }
function HeaderNavbarComponent_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nav-submenu", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HeaderNavbarComponent_ng_container_2_ng_container_1_ng_container_2_Template, 5, 2, "ng-container", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r3.submenu);
} }
function HeaderNavbarComponent_ng_container_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function HeaderNavbarComponent_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nav-menu-item", 10)(2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HeaderNavbarComponent_ng_container_2_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 15)(5, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("index", item_r3.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c1, item_r3.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](10, _c0, item_r3.iconType, item_r3.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", item_r3.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 6, item_r3.translateKey) || item_r3.title, " ");
} }
function HeaderNavbarComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, HeaderNavbarComponent_ng_container_2_ng_container_1_Template, 3, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HeaderNavbarComponent_ng_container_2_ng_container_2_Template, 8, 13, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r3.submenu.length > 0 && item_r3.type === "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r3.submenu.length === 0 && item_r3.type === "item");
} }
const _c3 = function (a0, a1, a2) { return [a0, a1, a2]; };
function HeaderNavbarComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 16);
} if (rf & 2) {
    const iconType_r28 = ctx.type;
    const icon_r29 = ctx.icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](1, _c3, iconType_r28 === "line-awesome" ? "lar las lab" : "", iconType_r28 === "feather" ? "feather" : "", icon_r29));
} }
class HeaderNavbarComponent {
    constructor() {
        this.menu = [];
        this.color = 'light';
    }
    ngOnInit() {
        this.menu = _app_configs_nav_config__WEBPACK_IMPORTED_MODULE_0__.navConfiguration;
    }
}
HeaderNavbarComponent.ɵfac = function HeaderNavbarComponent_Factory(t) { return new (t || HeaderNavbarComponent)(); };
HeaderNavbarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: HeaderNavbarComponent, selectors: [["header-navbar"]], hostVars: 6, hostBindings: function HeaderNavbarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("header-navbar", true)("nav-menu-light", ctx.color === "light")("nav-menu-dark", ctx.color === "dark");
    } }, inputs: { color: "color" }, decls: 5, vars: 2, consts: [[1, "container"], ["mode", "horizontal", 3, "border"], [4, "ngFor", "ngForOf"], ["iconTemplate", ""], [4, "ngIf"], ["index", "item.key"], ["title", ""], [3, "index", 4, "ngIf"], ["index", "firstLevel.key", 4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "index"], [3, "routerLink", "routerLinkActive"], ["index", "firstLevel.key"], [3, "index", 4, "ngFor", "ngForOf"], [3, "routerLink"], [1, "nav-menu-item-title"], [3, "ngClass"]], template: function HeaderNavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "nav-menu", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, HeaderNavbarComponent_ng_container_2_Template, 3, 2, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, HeaderNavbarComponent_ng_template_3_Template, 1, 5, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("border", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.menu);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkActive, _shared_components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__.NavMenu, _shared_components_nav_menu_nav_submenu_component__WEBPACK_IMPORTED_MODULE_2__.NavSubmenu, _shared_components_nav_menu_nav_menu_item_component__WEBPACK_IMPORTED_MODULE_3__.NavMenuItem, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], encapsulation: 2 });


/***/ }),

/***/ 9799:
/*!************************************************************************************!*\
  !*** ./src/app/layout/components/horizontal-layout/horizontal-layout.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HorizontalLayoutComponent": () => (/* binding */ HorizontalLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _app_shared_services_screen_size_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/screen-size.service */ 5836);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var _app_shared_types_screen_size_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/types/screen-size.enum */ 1541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../header-nav/header-nav.component */ 1855);
/* harmony import */ var _header_navbar_header_navbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header-navbar/header-navbar.component */ 3163);
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/content.component */ 4714);
/* harmony import */ var _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mobile-nav/mobile-nav.component */ 6560);













function HorizontalLayoutComponent_header_navbar_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "header-navbar", 4);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("color", ctx_r0.navMenuColor);
} }
function HorizontalLayoutComponent_mobile_nav_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mobile-nav", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isOpen", ctx_r1.isMobileNavOpen)("color", ctx_r1.navMenuColor);
} }
class HorizontalLayoutComponent {
    constructor(cdr, screenSizeSvc) {
        this.cdr = cdr;
        this.screenSizeSvc = screenSizeSvc;
        this.screenSizeSvc.onResize$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.delay)(0)).subscribe(sizes => {
            const sizeTabletAbove = sizes.includes(_app_shared_types_screen_size_enum__WEBPACK_IMPORTED_MODULE_2__.SCREEN_SIZE.XXL) || sizes.includes(_app_shared_types_screen_size_enum__WEBPACK_IMPORTED_MODULE_2__.SCREEN_SIZE.XL) || sizes.includes(_app_shared_types_screen_size_enum__WEBPACK_IMPORTED_MODULE_2__.SCREEN_SIZE.LG);
            if (sizeTabletAbove) {
                this.isMobile = false;
            }
            else {
                this.isMobile = true;
            }
            this.cdr.markForCheck();
        });
    }
    windowResize(event) {
        this.getScreenWidth(event.target.innerWidth);
    }
    ngOnInit() {
        this.subscription = this.app$.subscribe(app => {
            this.navMenuColor = app.navMenuColor;
            this.headerNavColor = app.headerNavColor;
            this.cdr.markForCheck();
        });
        this.getScreenWidth(window.innerWidth);
    }
    getScreenWidth(size) {
        this.screenSizeSvc.onResize(size);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
HorizontalLayoutComponent.ɵfac = function HorizontalLayoutComponent_Factory(t) { return new (t || HorizontalLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_shared_services_screen_size_service__WEBPACK_IMPORTED_MODULE_1__.ScreenSizeService)); };
HorizontalLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: HorizontalLayoutComponent, selectors: [["horizontal-layout"]], hostVars: 2, hostBindings: function HorizontalLayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("resize", function HorizontalLayoutComponent_resize_HostBindingHandler($event) { return ctx.windowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("horizontal-layout", true);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_app_shared_services_screen_size_service__WEBPACK_IMPORTED_MODULE_1__.ScreenSizeService])], decls: 4, vars: 4, consts: [["layoutType", "horizontal", 3, "color", "isMobile"], [3, "color", 4, "ngIf"], [3, "isOpen", "color", 4, "ngIf"], ["layoutType", "horizontal"], [3, "color"], [3, "isOpen", "color"]], template: function HorizontalLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "header-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, HorizontalLayoutComponent_header_navbar_1_Template, 1, 1, "header-navbar", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, HorizontalLayoutComponent_mobile_nav_2_Template, 1, 2, "mobile-nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "content", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("color", ctx.headerNavColor)("isMobile", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_3__.HeaderNavComponent, _header_navbar_header_navbar_component__WEBPACK_IMPORTED_MODULE_4__.HeaderNavbarComponent, _content_content_component__WEBPACK_IMPORTED_MODULE_5__.ContentComponent, _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_6__.MobileNavComponent], encapsulation: 2, changeDetection: 0 });
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)((state) => state.app)
], HorizontalLayoutComponent.prototype, "app$", void 0);


/***/ }),

/***/ 6560:
/*!**********************************************************************!*\
  !*** ./src/app/layout/components/mobile-nav/mobile-nav.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobileNavComponent": () => (/* binding */ MobileNavComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _app_store_app_config_app_config_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/store/app-config/app-config.action */ 9414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/logo/logo.component */ 8168);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5375);
/* harmony import */ var _vertical_menu_content_vertical_menu_content_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../vertical-menu-content/vertical-menu-content.component */ 7521);










function MobileNavComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MobileNavComponent_div_0_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r1.closeNav()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class MobileNavComponent {
    constructor(cdr, store) {
        this.cdr = cdr;
        this.store = store;
        this.color = 'light';
    }
    ngOnInit() {
        this.subscription = this.app$.subscribe(app => {
            this.isOpen = app.mobileNavCollapse;
            this.cdr.markForCheck();
        });
    }
    closeNav() {
        this.isOpen = false;
        this.store.dispatch(new _app_store_app_config_app_config_action__WEBPACK_IMPORTED_MODULE_1__.UpdateMobileNavCollapse(this.isOpen));
    }
    onClicked() {
        this.closeNav();
    }
}
MobileNavComponent.ɵfac = function MobileNavComponent_Factory(t) { return new (t || MobileNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store)); };
MobileNavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MobileNavComponent, selectors: [["mobile-nav"]], hostVars: 8, hostBindings: function MobileNavComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("mobile-nav", true)("is-open", ctx.isOpen)("nav-menu-light", ctx.color === "light")("nav-menu-dark", ctx.color === "dark");
    } }, inputs: { isOpen: "isOpen", color: "color" }, decls: 8, vars: 3, consts: [["class", "nav-backdrop", 3, "click", 4, "ngIf"], [1, "mobile-nav-panel"], [1, "nav-logo", "d-flex", "align-items-center", "justify-content-between"], [3, "height", "white"], [1, "cursor-pointer", 3, "click"], [1, "feather", "icon-arrow-left", "font-size-lg"], [1, "mobile-nav-panel-content"], [3, "onNavLinkClick"], [1, "nav-backdrop", 3, "click"]], template: function MobileNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MobileNavComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "logo", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MobileNavComponent_Template_div_click_4_listener() { return ctx.closeNav(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "perfect-scrollbar", 6)(7, "vertical-menu-content", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("onNavLinkClick", function MobileNavComponent_Template_vertical_menu_content_onNavLinkClick_7_listener() { return ctx.onClicked(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isOpen);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("height", 70)("white", ctx.color === "dark");
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_2__.LogoComponent, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarComponent, _vertical_menu_content_vertical_menu_content_component__WEBPACK_IMPORTED_MODULE_3__.VerticalMenuContentComponent], encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)((state) => state.app)
], MobileNavComponent.prototype, "app$", void 0);


/***/ }),

/***/ 8041:
/*!**********************************************************************!*\
  !*** ./src/app/layout/components/nav-config/nav-config.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavConfigComponent": () => (/* binding */ NavConfigComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_types_modal_direction__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/types/modal-direction */ 4385);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-bootstrap/modal */ 6528);




function NavConfigComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4)(1, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Quick View");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavConfigComponent_ng_template_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx_r2.modalRef.hide()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 8);
} }
class NavConfigComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    openQuickPanel(template) {
        this.modalRef = this.modalService.show(template, Object.assign({}, { class: `${_app_shared_types_modal_direction__WEBPACK_IMPORTED_MODULE_0__.ModalDirection.Right}` }));
    }
}
NavConfigComponent.ɵfac = function NavConfigComponent_Factory(t) { return new (t || NavConfigComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_1__.BsModalService)); };
NavConfigComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavConfigComponent, selectors: [["nav-config"]], hostVars: 2, hostBindings: function NavConfigComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("header-nav-item", true);
    } }, decls: 5, vars: 0, consts: [[1, "header-nav-item-select", 3, "click"], [1, "toggle-wrapper"], [1, "nav-icon", "feather", "icon-settings"], ["template", ""], [1, "modal-header"], [1, "modal-title", "pull-left"], ["type", "button", "aria-label", "Close", 1, "close", "pull-right", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"]], template: function NavConfigComponent_Template(rf, ctx) { if (rf & 1) {
        const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavConfigComponent_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r4); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵresetView"](ctx.openQuickPanel(_r0)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, NavConfigComponent_ng_template_3_Template, 7, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } }, encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 8159:
/*!******************************************************************!*\
  !*** ./src/app/layout/components/nav-i18n/nav-i18n.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavI18NComponent": () => (/* binding */ NavI18NComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _app_store_app_config_app_config_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/store/app-config/app-config.action */ 9414);
/* harmony import */ var _app_configs_i18n_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/configs/i18n.config */ 1850);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/avatar/avatar.component */ 7871);
/* harmony import */ var _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/dropdown/dropdown.component */ 1875);
/* harmony import */ var _shared_components_dropdown_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/dropdown/dropdown-menu.component */ 519);
/* harmony import */ var _shared_components_dropdown_dropdown_item_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/dropdown/dropdown-item.directive */ 2201);












function NavI18NComponent_a_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NavI18NComponent_a_5_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r4); const language_r2 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r3.setLanguage(language_r2.key)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "avatar", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const language_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 18)("src", "/assets/images/thumbs/" + language_r2.key + ".png");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](language_r2.lang);
} }
class NavI18NComponent {
    constructor(store, translateService) {
        this.store = store;
        this.translateService = translateService;
        this.languageList = [];
    }
    ngOnInit() {
        this.getLanguageList();
        this.app$.subscribe(app => {
            this.currentLang = app.lang;
        });
    }
    getLanguageList() {
        let list = [];
        for (const key in _app_configs_i18n_config__WEBPACK_IMPORTED_MODULE_2__.supportedLanguages) {
            if (Object.prototype.hasOwnProperty.call(_app_configs_i18n_config__WEBPACK_IMPORTED_MODULE_2__.supportedLanguages, key)) {
                const lang = _app_configs_i18n_config__WEBPACK_IMPORTED_MODULE_2__.supportedLanguages[key];
                list.push({
                    key: key,
                    lang: lang
                });
            }
        }
        this.languageList = list;
    }
    setLanguage(language) {
        this.store.dispatch(new _app_store_app_config_app_config_action__WEBPACK_IMPORTED_MODULE_1__.UpdateCurrentLanguage(language));
        this.translateService.use(language);
    }
}
NavI18NComponent.ɵfac = function NavI18NComponent_Factory(t) { return new (t || NavI18NComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslateService)); };
NavI18NComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: NavI18NComponent, selectors: [["nav-i18n"]], hostVars: 2, hostBindings: function NavI18NComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("header-nav-item", true);
    } }, decls: 6, vars: 3, consts: [["dropdownClass", "header-nav-item-select", 3, "click"], [1, "toggle-wrapper"], [3, "size", "src"], ["alignment", "right"], ["navI18n", ""], ["href", "javascript:void(0)", "dropdownItem", "", 3, "click", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", "dropdownItem", "", 3, "click"], [1, "d-flex", "align-items-center"], [1, "ms-2"]], template: function NavI18NComponent_Template(rf, ctx) { if (rf & 1) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function NavI18NComponent_Template_dropdown_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](_r0.toggle($event)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](2, "avatar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "dropdown-menu", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, NavI18NComponent_a_5_Template, 5, 3, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("size", 22)("src", "/assets/images/thumbs/" + ctx.currentLang + ".png");
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.languageList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _shared_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_3__.AvatarComponent, _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_4__.Dropdown, _shared_components_dropdown_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_5__.DropdownMenu, _shared_components_dropdown_dropdown_item_directive__WEBPACK_IMPORTED_MODULE_6__.DropdownItem], encapsulation: 2, changeDetection: 0 });
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)((state) => state.app)
], NavI18NComponent.prototype, "app$", void 0);


/***/ }),

/***/ 5059:
/*!**********************************************************************************!*\
  !*** ./src/app/layout/components/nav-notification/nav-notification.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavNotificationComponent": () => (/* binding */ NavNotificationComponent)
/* harmony export */ });
/* harmony import */ var _app_shared_utils_TimeSince__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/utils/TimeSince */ 2235);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/avatar/avatar.component */ 7871);
/* harmony import */ var _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/dropdown/dropdown.component */ 1875);
/* harmony import */ var _shared_components_dropdown_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/dropdown/dropdown-menu.component */ 519);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5375);







const _c0 = function (a0, a1) { return { img: a0, icon: a1 }; };
function NavNotificationComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](2, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 15)(4, "span")(5, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "span", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](16);
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", item_r6.notificationType === 0 ? _r2 : _r4)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](5, _c0, item_r6.avatar, item_r6.notificationType));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", item_r6.target, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](item_r6.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r1.getTimeDistance(item_r6.date));
} }
function NavNotificationComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "avatar", 20);
} if (rf & 2) {
    const avatar_r7 = ctx.img;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("size", 40)("src", "/assets/images/avatars/" + avatar_r7 + ".jpg");
} }
function NavNotificationComponent_ng_template_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "avatar", 21);
} if (rf & 2) {
    const icon_r8 = ctx.icon;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"]("font-size-lg" + " " + ctx_r5.notificationIconMap[icon_r8] + " " + ctx_r5.notificationColorMap[icon_r8]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("size", 40);
} }
class NavNotificationComponent {
    constructor() {
        this.notificationList = [];
        this.notificationIconMap = {
            0: '',
            1: 'feather icon-info',
            2: 'feather icon-check-circle',
            3: 'feather icon-x-circle'
        };
        this.notificationColorMap = {
            0: '',
            1: 'bg-primary',
            2: 'bg-success',
            3: 'bg-danger'
        };
        this.loadData();
    }
    loadData() {
        console.log('Load Data');
    }
    getTimeDistance(time) {
        return (0,_app_shared_utils_TimeSince__WEBPACK_IMPORTED_MODULE_0__.TimeSince)(time);
    }
    ngOnInit() {
    }
}
NavNotificationComponent.ɵfac = function NavNotificationComponent_Factory(t) { return new (t || NavNotificationComponent)(); };
NavNotificationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NavNotificationComponent, selectors: [["nav-notification"]], hostVars: 2, hostBindings: function NavNotificationComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("header-nav-item", true);
    } }, decls: 19, vars: 1, consts: [["dropdownClass", "header-nav-item-select nav-notification", 3, "click"], [1, "toggle-wrapper"], [1, "header-nav-item-select", "nav-icon", "feather", "icon-bell"], ["alignment", "right"], ["navNotification", ""], [1, "nav-notification-header"], [1, "mb-0"], ["href", "#", 1, "font-size-sm"], [1, "nav-notification-body"], ["class", "nav-notification-item", 4, "ngFor", "ngForOf"], [1, "nav-notification-footer"], ["avatarTpl", ""], ["iconTpl", ""], [1, "nav-notification-item"], [3, "ngTemplateOutlet", "ngTemplateOutletContext"], [1, "ms-2"], [1, "fw-bolder", "text-dark"], [1, "font-size-sm", "fw-bold", "mt-1"], [1, "feather", "icon-clock"], [1, "ms-1"], [3, "size", "src"], [3, "size"]], template: function NavNotificationComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavNotificationComponent_Template_dropdown_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle($event)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "dropdown-menu", 3, 4)(5, "div", 5)(6, "h5", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, "Mark All as Read");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "perfect-scrollbar", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, NavNotificationComponent_div_11_Template, 13, 8, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 10)(13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "View All");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, NavNotificationComponent_ng_template_15_Template, 1, 2, "ng-template", null, 11, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, NavNotificationComponent_ng_template_17_Template, 1, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.notificationList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgTemplateOutlet, _shared_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_1__.AvatarComponent, _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_2__.Dropdown, _shared_components_dropdown_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_3__.DropdownMenu, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_6__.PerfectScrollbarComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 3268:
/*!************************************************************************!*\
  !*** ./src/app/layout/components/nav-profile/nav-profile.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavProfileComponent": () => (/* binding */ NavProfileComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/avatar/avatar.component */ 7871);
/* harmony import */ var _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/dropdown/dropdown.component */ 1875);
/* harmony import */ var _shared_components_dropdown_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/dropdown/dropdown-menu.component */ 519);
/* harmony import */ var _shared_components_dropdown_dropdown_item_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/dropdown/dropdown-item.directive */ 2201);






function NavProfileComponent_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 14)(1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const menuItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", menuItem_r2.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](menuItem_r2.item);
} }
class NavProfileComponent {
    constructor() {
        this.profileMenuList = [
            {
                path: '',
                icon: 'feather icon-user',
                item: 'Profile'
            },
            {
                path: '',
                icon: 'feather icon-settings',
                item: 'Settings'
            },
            {
                path: '',
                icon: 'feather icon-life-buoy',
                item: 'Support'
            },
            {
                path: '',
                icon: 'feather icon-power',
                item: 'Sign Out'
            }
        ];
    }
    ngOnInit() { }
}
NavProfileComponent.ɵfac = function NavProfileComponent_Factory(t) { return new (t || NavProfileComponent)(); };
NavProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NavProfileComponent, selectors: [["nav-profile"]], hostVars: 2, hostBindings: function NavProfileComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("header-nav-item", true);
    } }, decls: 17, vars: 2, consts: [["dropdownClass", "header-nav-item-select nav-profile", 3, "click"], [1, "toggle-wrapper", "d-flex", "align-items-center"], ["src", "/assets/images/avatars/thumb-1.jpg", 3, "size"], [1, "fw-bold", "mx-1"], [1, "feather", "icon-chevron-down"], ["alignment", "right"], ["navProfile", ""], [1, "nav-profile-header"], [1, "d-flex", "align-items-center"], ["src", "/assets/images/avatars/thumb-1.jpg"], [1, "d-flex", "flex-column", "ms-1"], [1, "fw-bold", "text-dark"], [1, "font-size-sm"], ["href", "javascript:void(0)", "dropdownItem", "", 4, "ngFor", "ngForOf"], ["href", "javascript:void(0)", "dropdownItem", ""], [1, "font-size-lg", "ms-2", 3, "ngClass"]], template: function NavProfileComponent_Template(rf, ctx) { if (rf & 1) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "dropdown", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavProfileComponent_Template_dropdown_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](7); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](_r0.toggle($event)); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "avatar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Julio Baker");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "dropdown-menu", 5, 6)(8, "div", 7)(9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "avatar", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 10)(12, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Julio Baker");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "span", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Julio@themenate.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, NavProfileComponent_a_16_Template, 5, 2, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("size", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.profileMenuList);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _shared_components_avatar_avatar_component__WEBPACK_IMPORTED_MODULE_0__.AvatarComponent, _shared_components_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_1__.Dropdown, _shared_components_dropdown_dropdown_menu_component__WEBPACK_IMPORTED_MODULE_2__.DropdownMenu, _shared_components_dropdown_dropdown_item_directive__WEBPACK_IMPORTED_MODULE_3__.DropdownItem], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 1741:
/*!**********************************************************************!*\
  !*** ./src/app/layout/components/nav-toggle/nav-toggle.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavToggleComponent": () => (/* binding */ NavToggleComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _app_store_app_config_app_config_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/store/app-config/app-config.action */ 9414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);







function NavToggleComponent_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 2);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r0.isCollapse ? "icon-arrow-right" : "icon-menu");
} }
function NavToggleComponent_i_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "i", 2);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", ctx_r1.isMobileCollapse ? "icon-arrow-right" : "icon-menu");
} }
class NavToggleComponent {
    constructor(store, cdr) {
        this.store = store;
        this.cdr = cdr;
    }
    ngOnInit() {
        this.app$.subscribe(app => {
            this.isCollapse = app.sideNavCollapse;
            this.isMobileCollapse = app.mobileNavCollapse;
            this.cdr.markForCheck();
        });
    }
    updateSideNavCollapse() {
        this.store.dispatch(new _app_store_app_config_app_config_action__WEBPACK_IMPORTED_MODULE_1__.UpdateSideNavCollapse(this.isCollapse));
    }
    toggleNavCollapse() {
        if (!this.isMobile) {
            this.isCollapse = !this.isCollapse;
            this.store.dispatch(new _app_store_app_config_app_config_action__WEBPACK_IMPORTED_MODULE_1__.UpdateSideNavCollapse(this.isCollapse));
        }
        else {
            this.isMobileCollapse = !this.isMobileCollapse;
            this.store.dispatch(new _app_store_app_config_app_config_action__WEBPACK_IMPORTED_MODULE_1__.UpdateMobileNavCollapse(this.isMobileCollapse));
        }
    }
}
NavToggleComponent.ɵfac = function NavToggleComponent_Factory(t) { return new (t || NavToggleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef)); };
NavToggleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: NavToggleComponent, selectors: [["nav-toggle"]], hostVars: 2, hostBindings: function NavToggleComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("header-nav-item", true);
    } }, inputs: { isMobile: "isMobile" }, decls: 3, vars: 2, consts: [[1, "header-nav-item-select", "cursor-pointer", 3, "click"], ["class", "nav-icon feather", 3, "ngClass", 4, "ngIf"], [1, "nav-icon", "feather", 3, "ngClass"]], template: function NavToggleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function NavToggleComponent_Template_div_click_0_listener() { return ctx.toggleNavCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, NavToggleComponent_i_1_Template, 1, 1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, NavToggleComponent_i_2_Template, 1, 1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobile);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], encapsulation: 2, changeDetection: 0 });
(0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)((state) => state.app)
], NavToggleComponent.prototype, "app$", void 0);


/***/ }),

/***/ 9754:
/*!************************************************************************!*\
  !*** ./src/app/layout/components/page-header/page-header.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PageHeaderComponent": () => (/* binding */ PageHeaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 5722);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 9151);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);






function PageHeaderComponent_h4_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const breadcrumbs_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](breadcrumbs_r2[breadcrumbs_r2.length - 1].label);
  }
}

function PageHeaderComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6)(1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const breadcrumb_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", breadcrumb_r3.url);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", breadcrumb_r3.label, " ");
  }
}

class PageHeaderComponent {
  constructor(router, activatedRoute) {
    this.router = router;
    this.activatedRoute = activatedRoute;
    this.showTitle = true;
  }

  ngOnInit() {
    this.breadcrumbs$ = this.router.events.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.startWith)(new _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd(0, '/', '/')), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.filter)(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(data => this.buildBreadCrumb(this.activatedRoute.root)));
  }

  buildBreadCrumb(route, url = '', breadcrumbs = []) {
    let label = '',
        path = '/';

    if (route.routeConfig) {
      if (route.routeConfig.data && route.routeConfig.data.title) {
        label = route.routeConfig.data['title'];
      } else {
        label = route.routeConfig.path;
      }

      path += route.routeConfig.path;
    } else {
      label = 'Home';
      path += 'dashboard';
    }

    const nextUrl = path && path !== '/dashboard' ? `${url}${path}` : url;
    const breadcrumb = {
      label: label,
      url: nextUrl
    };
    const newBreadcrumbs = label ? [...breadcrumbs, breadcrumb] : [...breadcrumbs];

    if (route.firstChild) {
      return this.buildBreadCrumb(route.firstChild, nextUrl, newBreadcrumbs);
    }

    return newBreadcrumbs;
  }

}

PageHeaderComponent.ɵfac = function PageHeaderComponent_Factory(t) {
  return new (t || PageHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__.ActivatedRoute));
};

PageHeaderComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: PageHeaderComponent,
  selectors: [["page-header"]],
  hostVars: 2,
  hostBindings: function PageHeaderComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("page-header", true);
    }
  },
  inputs: {
    showTitle: "showTitle"
  },
  decls: 7,
  vars: 6,
  consts: [["class", "page-title", 4, "ngIf"], [1, "breadcrumb"], [1, "me-1", "text-gray"], [1, "feather", "icon-home"], ["class", "breadcrumb-item", 4, "ngFor", "ngForOf"], [1, "page-title"], [1, "breadcrumb-item"], [3, "routerLink"]],
  template: function PageHeaderComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PageHeaderComponent_h4_0_Template, 2, 1, "h4", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1)(3, "span", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PageHeaderComponent_div_5_Template, 3, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.showTitle && ctx.breadcrumbs$));
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, ctx.breadcrumbs$));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  encapsulation: 2
});

/***/ }),

/***/ 1023:
/*!*******************************************************************!*\
  !*** ./src/app/layout/components/side-nav/side-nav.components.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideNavComponent": () => (/* binding */ SideNavComponent)
/* harmony export */ });
/* harmony import */ var _app_configs_nav_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/configs/nav.config */ 2651);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/logo/logo.component */ 8168);
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5375);
/* harmony import */ var _vertical_menu_content_vertical_menu_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../vertical-menu-content/vertical-menu-content.component */ 7521);






class SideNavComponent {
    constructor(router) {
        this.router = router;
        this.menu = [];
        this.color = 'light';
    }
    ngOnInit() {
        this.menu = _app_configs_nav_config__WEBPACK_IMPORTED_MODULE_0__.navConfiguration;
    }
}
SideNavComponent.ɵfac = function SideNavComponent_Factory(t) { return new (t || SideNavComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
SideNavComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: SideNavComponent, selectors: [["side-nav"]], hostVars: 10, hostBindings: function SideNavComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("side-nav", true)("nav-menu-collapse", ctx.collapse)("nav-menu-quick-expand", ctx.quickExpand)("nav-menu-light", ctx.color === "light")("nav-menu-dark", ctx.color === "dark");
    } }, inputs: { collapse: "collapse", quickExpand: "quickExpand", color: "color" }, decls: 4, vars: 3, consts: [[1, "nav-logo"], [1, "w-100", 3, "logoType", "height", "white"], [1, "side-nav-content"]], template: function SideNavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "logo", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "perfect-scrollbar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "vertical-menu-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("logoType", !ctx.collapse || ctx.quickExpand ? "logo" : "fold")("height", !ctx.collapse || ctx.quickExpand ? 70 : 40)("white", ctx.color === "dark");
    } }, dependencies: [_shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_1__.LogoComponent, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_5__.PerfectScrollbarComponent, _vertical_menu_content_vertical_menu_content_component__WEBPACK_IMPORTED_MODULE_2__.VerticalMenuContentComponent], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 3148:
/*!**************************************************************************************!*\
  !*** ./src/app/layout/components/theme-configurator/theme-configurator.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ThemeConfiguratorComponent": () => (/* binding */ ThemeConfiguratorComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _app_store_app_config_app_config_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/store/app-config/app-config.action */ 9414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 6615);
/* harmony import */ var _shared_components_switch_switch_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/switch/switch.component */ 6755);









function ThemeConfiguratorComponent_div_24_i_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 13);
} }
const _c0 = function (a0) { return { "text-white": a0 }; };
const _c1 = function (a0) { return { backgroundColor: a0 }; };
function ThemeConfiguratorComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ThemeConfiguratorComponent_div_24_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const color_r1 = restoredCtx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r3.onColorChange(color_r1)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ThemeConfiguratorComponent_div_24_i_1_Template, 1, 0, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const color_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](3, _c0, color_r1 !== "#ffffff"))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, color_r1));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", color_r1 === ctx_r0.config.headerNavColor);
} }
class ThemeConfiguratorComponent {
    constructor(store) {
        this.store = store;
        this.headerNavColors = ['#ffffff', '#11a1fd', '#00c569', '#5a75f9', '#ffc833', '#f46363'];
    }
    ngOnInit() {
        this.subscription = this.app$.subscribe(app => {
            this.config = app;
        });
    }
    configChange() {
        console.log('configChange', this.config);
        this.store.dispatch(new _app_store_app_config_app_config_action__WEBPACK_IMPORTED_MODULE_1__.UpdateConfig(this.config));
    }
    onColorChange(color) {
        this.config.headerNavColor = color;
        this.configChange();
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
ThemeConfiguratorComponent.ɵfac = function ThemeConfiguratorComponent_Factory(t) { return new (t || ThemeConfiguratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Store)); };
ThemeConfiguratorComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ThemeConfiguratorComponent, selectors: [["theme-configurator"]], decls: 25, vars: 4, consts: [[1, "d-flex", "align-items-center", "justify-content-between", "mb-4"], [1, "fw-bold", "text-dark"], ["btnRadioGroup", "", "ngDefaultControl", "", 1, "btn-group", "btn-group-sm", 3, "ngModel", "ngModelChange"], ["btnRadio", "light", 1, "btn", "btn-outline-primary"], ["btnRadio", "dark", 1, "btn", "btn-outline-primary"], ["btnRadio", "vertical", 1, "btn", "btn-outline-primary"], ["btnRadio", "horizontal", 1, "btn", "btn-outline-primary"], ["name", "basicSwitch", 3, "ngModel", "ngModelChange"], [1, "mb-4"], [1, "mt-3", "d-flex"], ["class", "color-selector ms-2", 3, "ngClass", "ngStyle", "click", 4, "ngFor", "ngForOf"], [1, "color-selector", "ms-2", 3, "ngClass", "ngStyle", "click"], ["class", "feather icon-check", 4, "ngIf"], [1, "feather", "icon-check"]], template: function ThemeConfiguratorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "Side nav color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ThemeConfiguratorComponent_Template_div_ngModelChange_3_listener($event) { return ctx.config.navMenuColor = $event; })("ngModelChange", function ThemeConfiguratorComponent_Template_div_ngModelChange_3_listener() { return ctx.configChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "label", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 0)(9, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Layout Type:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ThemeConfiguratorComponent_Template_div_ngModelChange_11_listener($event) { return ctx.config.layoutType = $event; })("ngModelChange", function ThemeConfiguratorComponent_Template_div_ngModelChange_11_listener() { return ctx.configChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "Horizontal");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 0)(17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18, "Side nav collapse:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "switch", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ThemeConfiguratorComponent_Template_switch_ngModelChange_19_listener($event) { return ctx.config.sideNavCollapse = $event; })("ngModelChange", function ThemeConfiguratorComponent_Template_switch_ngModelChange_19_listener() { return ctx.configChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 8)(21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "Header nav color:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](24, ThemeConfiguratorComponent_div_24_Template, 2, 7, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.config.navMenuColor);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.config.layoutType);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.config.sideNavCollapse);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.headerNavColors);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgStyle, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_2__.ButtonRadioDirective, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_2__.ButtonRadioGroupDirective, _shared_components_switch_switch_component__WEBPACK_IMPORTED_MODULE_3__.SwitchComponent], encapsulation: 2 });
(0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)((state) => state.app)
], ThemeConfiguratorComponent.prototype, "app$", void 0);


/***/ }),

/***/ 3166:
/*!********************************************************************************!*\
  !*** ./src/app/layout/components/vertical-layout/vertical-layout.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalLayoutComponent": () => (/* binding */ VerticalLayoutComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _app_shared_services_screen_size_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/services/screen-size.service */ 5836);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 5843);
/* harmony import */ var _app_shared_types_screen_size_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/types/screen-size.enum */ 1541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _side_nav_side_nav_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../side-nav/side-nav.components */ 1023);
/* harmony import */ var _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../header-nav/header-nav.component */ 1855);
/* harmony import */ var _content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../content/content.component */ 4714);
/* harmony import */ var _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mobile-nav/mobile-nav.component */ 6560);













function VerticalLayoutComponent_side_nav_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "side-nav", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mouseenter", function VerticalLayoutComponent_side_nav_1_Template_side_nav_mouseenter_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r2.mouseEnterExpand()); })("mouseleave", function VerticalLayoutComponent_side_nav_1_Template_side_nav_mouseleave_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.mouseLeaveCollapse()); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("color", ctx_r0.navMenuColor)("quickExpand", ctx_r0.quickExpand)("collapse", ctx_r0.isCollapse);
} }
function VerticalLayoutComponent_mobile_nav_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "mobile-nav", 5);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("isOpen", ctx_r1.isMobileNavOpen)("color", ctx_r1.navMenuColor);
} }
class VerticalLayoutComponent {
    constructor(cdr, screenSizeSvc) {
        this.cdr = cdr;
        this.screenSizeSvc = screenSizeSvc;
        this.screenSizeSvc.onResize$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.delay)(0)).subscribe(sizes => {
            const sizeTabletAbove = sizes.includes(_app_shared_types_screen_size_enum__WEBPACK_IMPORTED_MODULE_2__.SCREEN_SIZE.XXL) || sizes.includes(_app_shared_types_screen_size_enum__WEBPACK_IMPORTED_MODULE_2__.SCREEN_SIZE.XL) || sizes.includes(_app_shared_types_screen_size_enum__WEBPACK_IMPORTED_MODULE_2__.SCREEN_SIZE.LG);
            if (sizeTabletAbove) {
                this.isMobile = false;
            }
            else {
                this.isMobile = true;
            }
            this.cdr.markForCheck();
        });
    }
    windowResize(event) {
        this.getScreenWidth(event.target.innerWidth);
    }
    ngOnInit() {
        this.subscription = this.app$.subscribe(app => {
            this.isCollapse = app.sideNavCollapse;
            this.isMobileNavOpen = app.mobileNavCollapse;
            this.navMenuColor = app.navMenuColor;
            this.headerNavColor = app.headerNavColor;
            this.cdr.markForCheck();
        });
        this.getScreenWidth(window.innerWidth);
    }
    mouseEnterExpand() {
        if (this.isCollapse) {
            this.quickExpand = true;
        }
    }
    mouseLeaveCollapse() {
        if (this.isCollapse) {
            this.quickExpand = false;
        }
    }
    getScreenWidth(size) {
        this.screenSizeSvc.onResize(size);
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
VerticalLayoutComponent.ɵfac = function VerticalLayoutComponent_Factory(t) { return new (t || VerticalLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_app_shared_services_screen_size_service__WEBPACK_IMPORTED_MODULE_1__.ScreenSizeService)); };
VerticalLayoutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: VerticalLayoutComponent, selectors: [["vertical-layout"]], hostVars: 2, hostBindings: function VerticalLayoutComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("resize", function VerticalLayoutComponent_resize_HostBindingHandler($event) { return ctx.windowResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveWindow"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵclassProp"]("vertical-layout", true);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵProvidersFeature"]([_app_shared_services_screen_size_service__WEBPACK_IMPORTED_MODULE_1__.ScreenSizeService])], decls: 4, vars: 6, consts: [["layoutType", "vertical", 3, "collapse", "color", "isMobile"], [3, "color", "quickExpand", "collapse", "mouseenter", "mouseleave", 4, "ngIf"], [3, "isOpen", "color", 4, "ngIf"], [3, "collapse"], [3, "color", "quickExpand", "collapse", "mouseenter", "mouseleave"], [3, "isOpen", "color"]], template: function VerticalLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "header-nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, VerticalLayoutComponent_side_nav_1_Template, 1, 3, "side-nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, VerticalLayoutComponent_mobile_nav_2_Template, 1, 2, "mobile-nav", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](3, "content", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collapse", ctx.isCollapse)("color", ctx.headerNavColor)("isMobile", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", !ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("collapse", ctx.isCollapse);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _side_nav_side_nav_components__WEBPACK_IMPORTED_MODULE_3__.SideNavComponent, _header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_4__.HeaderNavComponent, _content_content_component__WEBPACK_IMPORTED_MODULE_5__.ContentComponent, _mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_6__.MobileNavComponent], encapsulation: 2, changeDetection: 0 });
(0,tslib__WEBPACK_IMPORTED_MODULE_10__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Select)((state) => state.app)
], VerticalLayoutComponent.prototype, "app$", void 0);


/***/ }),

/***/ 7521:
/*!********************************************************************************************!*\
  !*** ./src/app/layout/components/vertical-menu-content/vertical-menu-content.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerticalMenuContentComponent": () => (/* binding */ VerticalMenuContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_configs_nav_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/configs/nav.config */ 2651);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _shared_components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/components/nav-menu/nav-menu.component */ 9335);
/* harmony import */ var _shared_components_nav_menu_nav_submenu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/nav-menu/nav-submenu.component */ 8255);
/* harmony import */ var _shared_components_nav_menu_nav_menu_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/nav-menu/nav-menu-item.component */ 5001);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 3935);









function VerticalMenuContentComponent_ng_container_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, item_r3.translateKey) || item_r3.title);
} }
function VerticalMenuContentComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_1_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
const _c0 = function (a0, a1) { return { type: a0, icon: a1 }; };
function VerticalMenuContentComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, VerticalMenuContentComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_1_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const firstLevel_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](5, _c0, firstLevel_r10.iconType, firstLevel_r10.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, firstLevel_r10.translateKey) || firstLevel_r10.title);
} }
function VerticalMenuContentComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_1_nav_menu_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav-menu-item", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VerticalMenuContentComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_1_nav_menu_item_4_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const secondLevel_r18 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r19.onLinkClick(secondLevel_r18.path)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const secondLevel_r18 = ctx.$implicit;
    const firstLevel_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("index", firstLevel_r10.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", secondLevel_r18.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, secondLevel_r18.translateKey) || secondLevel_r18.title, " ");
} }
function VerticalMenuContentComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nav-submenu", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VerticalMenuContentComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_1_ng_template_2_Template, 4, 8, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, VerticalMenuContentComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_1_nav_menu_item_4_Template, 5, 5, "nav-menu-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const firstLevel_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("index", firstLevel_r10.key)("defaultOpen", ctx_r11.isSubNavOpen(firstLevel_r10.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", firstLevel_r10.submenu);
} }
function VerticalMenuContentComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_2_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function VerticalMenuContentComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nav-menu-item", 10)(2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VerticalMenuContentComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_2_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r26); const firstLevel_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r24.onLinkClick(firstLevel_r10.path)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, VerticalMenuContentComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_2_ng_container_3_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const firstLevel_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("index", firstLevel_r10.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", firstLevel_r10.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](7, _c0, firstLevel_r10.iconType, firstLevel_r10.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 5, firstLevel_r10.translateKey) || item_r3.title, " ");
} }
function VerticalMenuContentComponent_ng_container_1_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VerticalMenuContentComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_1_Template, 5, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VerticalMenuContentComponent_ng_container_1_ng_container_1_ng_container_2_ng_container_2_Template, 7, 10, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const firstLevel_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", firstLevel_r10.submenu.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", firstLevel_r10.submenu.length === 0);
} }
function VerticalMenuContentComponent_ng_container_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VerticalMenuContentComponent_ng_container_1_ng_container_1_div_1_Template, 3, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VerticalMenuContentComponent_ng_container_1_ng_container_1_ng_container_2_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r3.type === "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r3.submenu);
} }
function VerticalMenuContentComponent_ng_container_1_ng_container_2_ng_template_2_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function VerticalMenuContentComponent_ng_container_1_ng_container_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, VerticalMenuContentComponent_ng_container_1_ng_container_2_ng_template_2_ng_container_0_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](5, _c0, item_r3.iconType, item_r3.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 3, item_r3.translateKey) || item_r3.title);
} }
function VerticalMenuContentComponent_ng_container_1_ng_container_2_ng_container_4_ng_container_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const firstLevel_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, firstLevel_r35.translateKey) || item_r3.title);
} }
function VerticalMenuContentComponent_ng_container_1_ng_container_2_ng_container_4_ng_container_1_nav_menu_item_4_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav-menu-item", 10)(1, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VerticalMenuContentComponent_ng_container_1_ng_container_2_ng_container_4_ng_container_1_nav_menu_item_4_Template_a_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r45); const itemLv3_r43 = restoredCtx.$implicit; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r44.onLinkClick(itemLv3_r43.path)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const itemLv3_r43 = ctx.$implicit;
    const firstLevel_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("index", firstLevel_r35.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", itemLv3_r43.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, itemLv3_r43.translateKey) || item_r3.title, " ");
} }
function VerticalMenuContentComponent_ng_container_1_ng_container_2_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nav-submenu", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VerticalMenuContentComponent_ng_container_1_ng_container_2_ng_container_4_ng_container_1_ng_template_2_Template, 3, 3, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, VerticalMenuContentComponent_ng_container_1_ng_container_2_ng_container_4_ng_container_1_nav_menu_item_4_Template, 5, 5, "nav-menu-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const firstLevel_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("index", firstLevel_r35.key)("defaultOpen", ctx_r36.isSubNavOpen(firstLevel_r35.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", firstLevel_r35.submenu);
} }
function VerticalMenuContentComponent_ng_container_1_ng_container_2_ng_container_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nav-menu-item", 10)(2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VerticalMenuContentComponent_ng_container_1_ng_container_2_ng_container_4_ng_container_2_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r51); const firstLevel_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r49.onLinkClick(firstLevel_r35.path)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const firstLevel_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("index", firstLevel_r35.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", firstLevel_r35.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 3, firstLevel_r35.translateKey) || item_r3.title, " ");
} }
function VerticalMenuContentComponent_ng_container_1_ng_container_2_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VerticalMenuContentComponent_ng_container_1_ng_container_2_ng_container_4_ng_container_1_Template, 5, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VerticalMenuContentComponent_ng_container_1_ng_container_2_ng_container_4_ng_container_2_Template, 6, 5, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const firstLevel_r35 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", firstLevel_r35.submenu.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", firstLevel_r35.submenu.length === 0);
} }
function VerticalMenuContentComponent_ng_container_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nav-submenu", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VerticalMenuContentComponent_ng_container_1_ng_container_2_ng_template_2_Template, 4, 8, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, VerticalMenuContentComponent_ng_container_1_ng_container_2_ng_container_4_Template, 3, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("index", item_r3.key)("defaultOpen", ctx_r5.isSubNavOpen(item_r3.key));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", item_r3.submenu);
} }
function VerticalMenuContentComponent_ng_container_1_ng_container_3_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainer"](0);
} }
function VerticalMenuContentComponent_ng_container_1_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "nav-menu-item", 10)(2, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VerticalMenuContentComponent_ng_container_1_ng_container_3_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r58); const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresetView"](ctx_r56.onLinkClick(item_r3.path)); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, VerticalMenuContentComponent_ng_container_1_ng_container_3_ng_container_3_Template, 1, 0, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("index", item_r3.key);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", item_r3.path);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngTemplateOutlet", _r1)("ngTemplateOutletContext", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](7, _c0, item_r3.iconType, item_r3.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 5, item_r3.translateKey) || item_r3.title, " ");
} }
function VerticalMenuContentComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VerticalMenuContentComponent_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VerticalMenuContentComponent_ng_container_1_ng_container_2_Template, 5, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, VerticalMenuContentComponent_ng_container_1_ng_container_3_Template, 7, 10, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r3.submenu.length > 0 && item_r3.type === "title");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r3.submenu.length > 0 && item_r3.type === "collapse");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", item_r3.submenu.length === 0 && item_r3.type === "item");
} }
const _c1 = function (a0, a1, a2) { return [a0, a1, a2]; };
function VerticalMenuContentComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "i", 13);
} if (rf & 2) {
    const iconType_r60 = ctx.type;
    const icon_r61 = ctx.icon;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction3"](1, _c1, iconType_r60 === "line-awesome" ? "lar las lab" : "", iconType_r60 === "feather" ? "feather" : "", icon_r61));
} }
class VerticalMenuContentComponent {
    constructor(router) {
        this.router = router;
        this.menu = [];
        this.onNavLinkClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
    }
    ngOnInit() {
        this.menu = _app_configs_nav_config__WEBPACK_IMPORTED_MODULE_0__.navConfiguration;
    }
    onLinkClick(path) {
        this.onNavLinkClick.emit(path);
    }
    isSubNavOpen(key) {
        const currentRouteTree = this.getRouteTreeInfo(this.menu);
        return this.isExisted(currentRouteTree, key);
    }
    isExisted(navTree, key) {
        if (!navTree) {
            return navTree;
        }
        if (navTree.key === key) {
            return true;
        }
        let treeNode;
        for (let p in navTree) {
            if (navTree.hasOwnProperty(p) && typeof navTree[p] === 'object') {
                treeNode = this.isExisted(navTree[p], key);
                if (treeNode) {
                    return treeNode;
                }
            }
        }
        return treeNode;
    }
    getRouteTreeInfo(nodes) {
        let result;
        let found;
        nodes.some((o) => {
            let submenu;
            if (o.path === this.router.url) {
                found = true;
                return result = o;
            }
            if (o.submenu && (submenu = this.getRouteTreeInfo(o.submenu))) {
                return result = Object.assign({}, o, { submenu });
            }
        });
        return result;
    }
}
VerticalMenuContentComponent.ɵfac = function VerticalMenuContentComponent_Factory(t) { return new (t || VerticalMenuContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
VerticalMenuContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VerticalMenuContentComponent, selectors: [["vertical-menu-content"]], outputs: { onNavLinkClick: "onNavLinkClick" }, decls: 4, vars: 2, consts: [[3, "border"], [4, "ngFor", "ngForOf"], ["iconTemplate", ""], [4, "ngIf"], ["class", "nav-group-title", 4, "ngIf"], [1, "nav-group-title"], [3, "index", "defaultOpen"], ["title", ""], [3, "index", 4, "ngFor", "ngForOf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "index"], ["routerLinkActive", "router-link-active", 3, "routerLink", "click"], [1, "nav-menu-item-title"], [3, "ngClass"]], template: function VerticalMenuContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "nav-menu", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, VerticalMenuContentComponent_ng_container_1_Template, 4, 3, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, VerticalMenuContentComponent_ng_template_2_Template, 1, 5, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("border", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.menu);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgTemplateOutlet, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkActive, _shared_components_nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_1__.NavMenu, _shared_components_nav_menu_nav_submenu_component__WEBPACK_IMPORTED_MODULE_2__.NavSubmenu, _shared_components_nav_menu_nav_menu_item_component__WEBPACK_IMPORTED_MODULE_3__.NavMenuItem, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 4805:
/*!*****************************************!*\
  !*** ./src/app/layout/layout.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LayoutModule": () => (/* binding */ LayoutModule)
/* harmony export */ });
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-perfect-scrollbar */ 5375);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/shared.module */ 4466);
/* harmony import */ var _app_shared_components_logo_logo_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/components/logo/logo.module */ 4079);
/* harmony import */ var _app_shared_components_nav_menu_nav_menu_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/components/nav-menu/nav-menu.module */ 3792);
/* harmony import */ var _app_shared_components_avatar_avatar_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/shared/components/avatar/avatar.module */ 8900);
/* harmony import */ var _app_shared_components_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/shared/components/dropdown/dropdown.module */ 2563);
/* harmony import */ var _app_shared_components_switch_switch_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/shared/components/switch/switch.module */ 6074);
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ 6528);
/* harmony import */ var ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/buttons */ 6615);
/* harmony import */ var _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-layout/app-layout-component */ 8058);
/* harmony import */ var _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./auth-layout/auth-layout.component */ 1201);
/* harmony import */ var _components_horizontal_layout_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/horizontal-layout/horizontal-layout.component */ 9799);
/* harmony import */ var _components_vertical_layout_vertical_layout_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/vertical-layout/vertical-layout.component */ 3166);
/* harmony import */ var _components_side_nav_side_nav_components__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/side-nav/side-nav.components */ 1023);
/* harmony import */ var _components_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/header-nav/header-nav.component */ 1855);
/* harmony import */ var _components_header_navbar_header_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/header-navbar/header-navbar.component */ 3163);
/* harmony import */ var _components_nav_toggle_nav_toggle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/nav-toggle/nav-toggle.component */ 1741);
/* harmony import */ var _components_content_content_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/content/content.component */ 4714);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/footer/footer.component */ 2223);
/* harmony import */ var _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/page-header/page-header.component */ 9754);
/* harmony import */ var _components_nav_notification_nav_notification_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/nav-notification/nav-notification.component */ 5059);
/* harmony import */ var _components_nav_i18n_nav_i18n_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/nav-i18n/nav-i18n.component */ 8159);
/* harmony import */ var _components_nav_profile_nav_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/nav-profile/nav-profile.component */ 3268);
/* harmony import */ var _components_nav_config_nav_config_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/nav-config/nav-config.component */ 8041);
/* harmony import */ var _components_theme_configurator_theme_configurator_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/theme-configurator/theme-configurator.component */ 3148);
/* harmony import */ var _components_vertical_menu_content_vertical_menu_content_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/vertical-menu-content/vertical-menu-content.component */ 7521);
/* harmony import */ var _components_mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/mobile-nav/mobile-nav.component */ 6560);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 2560);































const mandatoryComponents = [
    _app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_8__.AppLayoutComponent,
    _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__.AuthLayoutComponent,
    _components_vertical_layout_vertical_layout_component__WEBPACK_IMPORTED_MODULE_11__.VerticalLayoutComponent,
    _components_horizontal_layout_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_10__.HorizontalLayoutComponent,
    _components_side_nav_side_nav_components__WEBPACK_IMPORTED_MODULE_12__.SideNavComponent,
    _components_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_13__.HeaderNavComponent,
    _components_header_navbar_header_navbar_component__WEBPACK_IMPORTED_MODULE_14__.HeaderNavbarComponent,
    _components_nav_toggle_nav_toggle_component__WEBPACK_IMPORTED_MODULE_15__.NavToggleComponent,
    _components_content_content_component__WEBPACK_IMPORTED_MODULE_16__.ContentComponent,
    _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__.FooterComponent,
    _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_18__.PageHeaderComponent,
    _components_vertical_menu_content_vertical_menu_content_component__WEBPACK_IMPORTED_MODULE_24__.VerticalMenuContentComponent,
    _components_mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_25__.MobileNavComponent
];
const optionalComponents = [
    _components_nav_notification_nav_notification_component__WEBPACK_IMPORTED_MODULE_19__.NavNotificationComponent,
    _components_nav_profile_nav_profile_component__WEBPACK_IMPORTED_MODULE_21__.NavProfileComponent,
    _components_nav_i18n_nav_i18n_component__WEBPACK_IMPORTED_MODULE_20__.NavI18NComponent,
    _components_nav_config_nav_config_component__WEBPACK_IMPORTED_MODULE_22__.NavConfigComponent,
    _components_theme_configurator_theme_configurator_component__WEBPACK_IMPORTED_MODULE_23__.ThemeConfiguratorComponent
];
class LayoutModule {
}
LayoutModule.ɵfac = function LayoutModule_Factory(t) { return new (t || LayoutModule)(); };
LayoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineNgModule"]({ type: LayoutModule });
LayoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineInjector"]({ imports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule,
        _app_shared_components_logo_logo_module__WEBPACK_IMPORTED_MODULE_1__.LogoModule,
        _app_shared_components_nav_menu_nav_menu_module__WEBPACK_IMPORTED_MODULE_2__.NavMenuModule,
        _app_shared_components_avatar_avatar_module__WEBPACK_IMPORTED_MODULE_3__.AvatarModule,
        ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.ModalModule.forRoot(),
        ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_7__.ButtonsModule.forRoot(),
        _app_shared_components_switch_switch_module__WEBPACK_IMPORTED_MODULE_5__.SwitchModule,
        _app_shared_components_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_4__.DropdownModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_28__.PerfectScrollbarModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵsetNgModuleScope"](LayoutModule, { declarations: [_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_8__.AppLayoutComponent,
        _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__.AuthLayoutComponent,
        _components_vertical_layout_vertical_layout_component__WEBPACK_IMPORTED_MODULE_11__.VerticalLayoutComponent,
        _components_horizontal_layout_horizontal_layout_component__WEBPACK_IMPORTED_MODULE_10__.HorizontalLayoutComponent,
        _components_side_nav_side_nav_components__WEBPACK_IMPORTED_MODULE_12__.SideNavComponent,
        _components_header_nav_header_nav_component__WEBPACK_IMPORTED_MODULE_13__.HeaderNavComponent,
        _components_header_navbar_header_navbar_component__WEBPACK_IMPORTED_MODULE_14__.HeaderNavbarComponent,
        _components_nav_toggle_nav_toggle_component__WEBPACK_IMPORTED_MODULE_15__.NavToggleComponent,
        _components_content_content_component__WEBPACK_IMPORTED_MODULE_16__.ContentComponent,
        _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_17__.FooterComponent,
        _components_page_header_page_header_component__WEBPACK_IMPORTED_MODULE_18__.PageHeaderComponent,
        _components_vertical_menu_content_vertical_menu_content_component__WEBPACK_IMPORTED_MODULE_24__.VerticalMenuContentComponent,
        _components_mobile_nav_mobile_nav_component__WEBPACK_IMPORTED_MODULE_25__.MobileNavComponent, _components_nav_notification_nav_notification_component__WEBPACK_IMPORTED_MODULE_19__.NavNotificationComponent,
        _components_nav_profile_nav_profile_component__WEBPACK_IMPORTED_MODULE_21__.NavProfileComponent,
        _components_nav_i18n_nav_i18n_component__WEBPACK_IMPORTED_MODULE_20__.NavI18NComponent,
        _components_nav_config_nav_config_component__WEBPACK_IMPORTED_MODULE_22__.NavConfigComponent,
        _components_theme_configurator_theme_configurator_component__WEBPACK_IMPORTED_MODULE_23__.ThemeConfiguratorComponent], imports: [_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_27__.RouterModule,
        _app_shared_components_logo_logo_module__WEBPACK_IMPORTED_MODULE_1__.LogoModule,
        _app_shared_components_nav_menu_nav_menu_module__WEBPACK_IMPORTED_MODULE_2__.NavMenuModule,
        _app_shared_components_avatar_avatar_module__WEBPACK_IMPORTED_MODULE_3__.AvatarModule, ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__.ModalModule, ngx_bootstrap_buttons__WEBPACK_IMPORTED_MODULE_7__.ButtonsModule, _app_shared_components_switch_switch_module__WEBPACK_IMPORTED_MODULE_5__.SwitchModule,
        _app_shared_components_dropdown_dropdown_module__WEBPACK_IMPORTED_MODULE_4__.DropdownModule,
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_28__.PerfectScrollbarModule], exports: [_app_layout_app_layout_component__WEBPACK_IMPORTED_MODULE_8__.AppLayoutComponent,
        _auth_layout_auth_layout_component__WEBPACK_IMPORTED_MODULE_9__.AuthLayoutComponent] }); })();


/***/ }),

/***/ 2471:
/*!*********************************************!*\
  !*** ./src/app/routes/app-layout.routes.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "APP_LAYOUT_ROUTES": () => (/* binding */ APP_LAYOUT_ROUTES)
/* harmony export */ });
const APP_LAYOUT_ROUTES = [
    //Dashboard
    {
        path: 'dashboard',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_dashboard_dashboard_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../views/dashboard/dashboard.module */ 4727)).then(m => m.DashboardModule),
    }
];


/***/ }),

/***/ 3133:
/*!**********************************************!*\
  !*** ./src/app/routes/auth-layout.routes.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AUTH_LAYOUT_ROUTES": () => (/* binding */ AUTH_LAYOUT_ROUTES)
/* harmony export */ });
const AUTH_LAYOUT_ROUTES = [
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_auth_auth_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../views/auth/auth.module */ 412)).then(m => m.AuthModule),
    },
    {
        path: '',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_views_errors_errors_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ../views/errors/errors.module */ 7254)).then(m => m.ErrorsModule),
    }
];


/***/ }),

/***/ 7871:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/avatar/avatar.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarComponent": () => (/* binding */ AvatarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);



const _c0 = ["textEl"];
function AvatarComponent_i_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "i");
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r0.icon);
} }
function AvatarComponent_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 3);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("alt", ctx_r1.alt);
} }
function AvatarComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.text);
} }
class AvatarComponent {
    constructor(cdr, elementRef) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.shape = 'circle';
        this.size = 'default';
        this.isText = false;
        this.isImg = true;
        this.isIcon = false;
        this.textStyles = {};
        this.customSize = null;
        this.el = this.elementRef.nativeElement;
    }
    ngOnInit() { }
    ngOnChanges() {
        this.isText = !this.src && !!this.text;
        this.isIcon = !this.src && !!this.icon;
        this.isImg = !!this.src;
        this.setSizeStyle();
        this.calcStringSize();
    }
    setSizeStyle() {
        if (typeof this.size === 'number') {
            this.customSize = `${this.size}px`;
        }
        else {
            this.customSize = null;
        }
        this.cdr.markForCheck();
    }
    calcStringSize() {
        if (!this.isText) {
            return;
        }
        const childrenWidth = this.textEl.nativeElement.offsetWidth;
        const avatarWidth = this.el.getBoundingClientRect().width;
        const scale = avatarWidth - 8 < childrenWidth ? (avatarWidth - 8) / childrenWidth : 1;
        this.textStyles = {
            transform: `scale(${scale}) translateX(-50%)`
        };
        if (this.customSize) {
            Object.assign(this.textStyles, {
                lineHeight: this.customSize
            });
        }
        this.cdr.detectChanges();
    }
}
AvatarComponent.ɵfac = function AvatarComponent_Factory(t) { return new (t || AvatarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
AvatarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AvatarComponent, selectors: [["avatar"]], viewQuery: function AvatarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textEl = _t.first);
    } }, hostVars: 22, hostBindings: function AvatarComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.customSize)("height", ctx.customSize)("line-height", ctx.customSize)("font-size", ctx.isIcon && ctx.customSize ? ctx.size / 2 : null, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("avatar", true)("avatar-lg", ctx.size === "large")("avatar-sm", ctx.size === "small")("avatar-square", ctx.shape === "square")("avatar-circle", ctx.shape === "circle")("avatar-icon", ctx.icon)("avatar-image", ctx.isImg);
    } }, inputs: { shape: "shape", size: "size", text: "text", src: "src", alt: "alt", icon: "icon" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [[3, "class", 4, "ngIf"], [3, "src", 4, "ngIf"], ["class", "avatar-text", 4, "ngIf"], [3, "src"], [1, "avatar-text"], ["textEl", ""]], template: function AvatarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AvatarComponent_i_0_Template, 1, 2, "i", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AvatarComponent_img_1_Template, 1, 2, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AvatarComponent_span_2_Template, 3, 1, "span", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.icon && ctx.isIcon);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.src && ctx.isImg);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.text && ctx.isText);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 8900:
/*!***********************************************************!*\
  !*** ./src/app/shared/components/avatar/avatar.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AvatarModule": () => (/* binding */ AvatarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _avatar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./avatar.component */ 7871);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class AvatarModule {
}
AvatarModule.ɵfac = function AvatarModule_Factory(t) { return new (t || AvatarModule)(); };
AvatarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AvatarModule });
AvatarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AvatarModule, { declarations: [_avatar_component__WEBPACK_IMPORTED_MODULE_0__.AvatarComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_avatar_component__WEBPACK_IMPORTED_MODULE_0__.AvatarComponent] }); })();


/***/ }),

/***/ 2201:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/dropdown/dropdown-item.directive.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownItem": () => (/* binding */ DropdownItem)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


class DropdownItem {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this._disabled = false;
        this._active = false;
    }
    set disabled(value) {
        this._disabled = value === '' || value === true;
    }
    get disabled() { return this._disabled; }
    set active(value) {
        this._active = value === '' || value === true;
    }
    get active() { return this._active; }
}
DropdownItem.ɵfac = function DropdownItem_Factory(t) { return new (t || DropdownItem)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef)); };
DropdownItem.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: DropdownItem, selectors: [["", "dropdownItem", ""]], hostAttrs: [1, "dropdown-item"], hostVars: 4, hostBindings: function DropdownItem_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("disabled", ctx.disabled)("active", ctx.active);
    } }, inputs: { disabled: "disabled", active: "active" } });


/***/ }),

/***/ 519:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/dropdown/dropdown-menu.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownMenu": () => (/* binding */ DropdownMenu)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _dropdown_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.service */ 5801);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);




function DropdownMenu_ng_template_0_Template(rf, ctx) { }
function DropdownMenu_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
} }
const _c0 = ["*"];
class DropdownMenu {
    constructor(el, renderer, cd) {
        this.el = el;
        this.renderer = renderer;
        this.cd = cd;
        this.dropdownMenuClass = '';
        this.alignment = 'left';
        this.onShow = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.onHide = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    toggle(event) {
        if (this.visible)
            this.hide();
        else
            this.show(event);
        this.preventDocDefault = true;
    }
    hide() {
        this.visible = false;
        this.onOverlayHide();
        this.onHide.emit({});
        this.cd.markForCheck();
    }
    show(event) {
        this.target = event.currentTarget;
        this.visible = true;
        this.preventDocDefault = true;
        this.bindDocClickListener();
        this.bindDocResizeListener();
        this.onShow.emit({});
        this.cd.markForCheck();
    }
    restoreOverlayAppend() {
        if (this.container && this.appendTo) {
            this.el.nativeElement.appendChild(this.container);
        }
    }
    unbindDocClickListener() {
        if (this.docClickListener) {
            this.docClickListener();
            this.docClickListener = null;
        }
    }
    unbindDocResizeListener() {
        if (this.documentResizeListener) {
            window.removeEventListener('resize', this.documentResizeListener);
            this.documentResizeListener = null;
        }
    }
    bindDocClickListener() {
        if (!this.docClickListener) {
            const documentTarget = this.el ? this.el.nativeElement.ownerDocument : 'document';
            this.docClickListener = this.renderer.listen(documentTarget, 'click', () => {
                if (!this.preventDocDefault) {
                    this.hide();
                }
                this.preventDocDefault = false;
            });
        }
    }
    bindDocResizeListener() {
        this.documentResizeListener = this.onWindowResize.bind(this);
        window.addEventListener('resize', this.documentResizeListener);
    }
    onWindowResize() {
        this.hide();
    }
    onOverlayHide() {
        this.unbindDocClickListener();
        this.unbindDocResizeListener();
        this.preventDocDefault = false;
        this.target = null;
    }
    ngOnDestroy() {
        this.restoreOverlayAppend();
        this.onOverlayHide();
    }
}
DropdownMenu.ɵfac = function DropdownMenu_Factory(t) { return new (t || DropdownMenu)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
DropdownMenu.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: DropdownMenu, selectors: [["dropdown-menu"]], hostVars: 6, hostBindings: function DropdownMenu_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"]("dropdown-menu-" + ctx.alignment + " " + ctx.dropdownMenuClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("dropdown-menu", true)("show", ctx.visible);
    } }, inputs: { appendTo: "appendTo", dropdownMenuClass: "dropdownMenuClass", alignment: "alignment" }, outputs: { onShow: "onShow", onHide: "onHide" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            _dropdown_service__WEBPACK_IMPORTED_MODULE_0__.DocumentWrapper
        ])], ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[3, "ngTemplateOutlet"], ["content", ""]], template: function DropdownMenu_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, DropdownMenu_ng_template_0_Template, 0, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DropdownMenu_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 1875:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/dropdown/dropdown.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Dropdown": () => (/* binding */ Dropdown)
/* harmony export */ });
/* harmony import */ var _dropdown_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.service */ 5801);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);



function Dropdown_ng_template_0_Template(rf, ctx) { }
function Dropdown_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](0);
} }
const _c0 = ["*"];
class Dropdown {
    constructor() {
        this.dropDirection = 'dropdown';
        this.dropdownClass = '';
    }
    ngOnInit() { }
}
Dropdown.ɵfac = function Dropdown_Factory(t) { return new (t || Dropdown)(); };
Dropdown.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: Dropdown, selectors: [["dropdown"]], hostVars: 4, hostBindings: function Dropdown_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx.dropDirection + " " + ctx.dropdownClass);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("show", ctx.showMenu);
    } }, inputs: { dropDirection: "dropDirection", dropdownClass: "dropdownClass" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([
            _dropdown_service__WEBPACK_IMPORTED_MODULE_0__.DocumentWrapper
        ])], ngContentSelectors: _c0, decls: 3, vars: 1, consts: [[3, "ngTemplateOutlet"], ["dropdown", ""]], template: function Dropdown_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, Dropdown_ng_template_0_Template, 0, 0, "ng-template", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, Dropdown_ng_template_1_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", _r1);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgTemplateOutlet], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 2563:
/*!***************************************************************!*\
  !*** ./src/app/shared/components/dropdown/dropdown.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DropdownModule": () => (/* binding */ DropdownModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _dropdown_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dropdown.component */ 1875);
/* harmony import */ var _dropdown_menu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dropdown-menu.component */ 519);
/* harmony import */ var _dropdown_item_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dropdown-item.directive */ 2201);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class DropdownModule {
}
DropdownModule.ɵfac = function DropdownModule_Factory(t) { return new (t || DropdownModule)(); };
DropdownModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DropdownModule });
DropdownModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DropdownModule, { declarations: [_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.Dropdown,
        _dropdown_menu_component__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu,
        _dropdown_item_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownItem], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule], exports: [_dropdown_component__WEBPACK_IMPORTED_MODULE_0__.Dropdown,
        _dropdown_menu_component__WEBPACK_IMPORTED_MODULE_1__.DropdownMenu,
        _dropdown_item_directive__WEBPACK_IMPORTED_MODULE_2__.DropdownItem] }); })();


/***/ }),

/***/ 5801:
/*!****************************************************************!*\
  !*** ./src/app/shared/components/dropdown/dropdown.service.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DocumentWrapper": () => (/* binding */ DocumentWrapper)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);

class DocumentWrapper extends Document {
}
DocumentWrapper.ɵfac = /*@__PURE__*/ function () { let ɵDocumentWrapper_BaseFactory; return function DocumentWrapper_Factory(t) { return (ɵDocumentWrapper_BaseFactory || (ɵDocumentWrapper_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](DocumentWrapper)))(t || DocumentWrapper); }; }();
DocumentWrapper.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DocumentWrapper, factory: DocumentWrapper.ɵfac });


/***/ }),

/***/ 8168:
/*!**********************************************************!*\
  !*** ./src/app/shared/components/logo/logo.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoComponent": () => (/* binding */ LogoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);


const _c0 = function (a0) { return { "height": a0 }; };
class LogoComponent {
    constructor() {
        this.logoType = 'logo';
        this.white = false;
        this._height = 70;
    }
    set height(val) {
        this._height = val;
    }
    get height() {
        return this._height + 'px';
    }
    ngOnInit() { }
    getLogoTypeUrl() {
        const chain = ['logo'];
        const urlPrefix = '/assets/images/logo/';
        if (this.logoType === 'fold') {
            chain.push('fold');
        }
        if (this.white) {
            chain.push('white');
        }
        let logoUrl = `${urlPrefix}${chain.join('-')}.png`;
        return logoUrl;
    }
}
LogoComponent.ɵfac = function LogoComponent_Factory(t) { return new (t || LogoComponent)(); };
LogoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoComponent, selectors: [["logo"]], hostVars: 2, hostBindings: function LogoComponent_HostBindings(rf, ctx) { if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("logo", true);
    } }, inputs: { logoType: "logoType", white: "white", height: "height" }, decls: 1, vars: 4, consts: [["alt", "logo", 1, "img-fluid", 3, "ngStyle", "src"]], template: function LogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.height))("src", ctx.getLogoTypeUrl(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgStyle], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 4079:
/*!*******************************************************!*\
  !*** ./src/app/shared/components/logo/logo.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LogoModule": () => (/* binding */ LogoModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logo.component */ 8168);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);



class LogoModule {
}
LogoModule.ɵfac = function LogoModule_Factory(t) { return new (t || LogoModule)(); };
LogoModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LogoModule });
LogoModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LogoModule, { declarations: [_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule], exports: [_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent] }); })();


/***/ }),

/***/ 1291:
/*!*****************************************************************************!*\
  !*** ./src/app/shared/components/nav-menu/nav-menu-item-group.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavMenuItemGroup": () => (/* binding */ NavMenuItemGroup)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _nav_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-menu.component */ 9335);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





const _c0 = ["title"];
function NavMenuItemGroup_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.title, " ");
} }
function NavMenuItemGroup_ng_container_4_ng_template_1_Template(rf, ctx) { }
function NavMenuItemGroup_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NavMenuItemGroup_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.titleTmp);
} }
const _c1 = ["*"];
class NavMenuItemGroup {
    constructor(rootMenu, sanitizer) {
        this.rootMenu = rootMenu;
        this.sanitizer = sanitizer;
        this.title = '';
    }
    paddingStyle() {
        return this.sanitizer.bypassSecurityTrustStyle('padding-left: 20px');
    }
    ngOnInit() {
    }
}
NavMenuItemGroup.ɵfac = function NavMenuItemGroup_Factory(t) { return new (t || NavMenuItemGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__.NavMenu, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__.DomSanitizer)); };
NavMenuItemGroup.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavMenuItemGroup, selectors: [["nav-menu-item-group"]], contentQueries: function NavMenuItemGroup_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.titleTmp = _t.first);
    } }, inputs: { title: "title" }, ngContentSelectors: _c1, decls: 7, vars: 4, consts: [[1, "nav-menu-item-group"], [1, "nav-menu-item-group-title"], ["groupTitle", ""], [4, "ngIf"], [3, "ngTemplateOutlet"]], template: function NavMenuItemGroup_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 0)(1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NavMenuItemGroup_ng_container_3_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NavMenuItemGroup_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleMap"](ctx.paddingStyle());
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.titleTmp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.titleTmp);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet], encapsulation: 2 });


/***/ }),

/***/ 5001:
/*!***********************************************************************!*\
  !*** ./src/app/shared/components/nav-menu/nav-menu-item.component.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavMenuItem": () => (/* binding */ NavMenuItem)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_shared_utils_RemoveNgTag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @app/shared/utils/RemoveNgTag */ 8206);
/* harmony import */ var _app_shared_utils_IsParentTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/utils/IsParentTag */ 9370);
/* harmony import */ var _nav_menu_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-menu.component */ 9335);
/* harmony import */ var _nav_submenu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-submenu.component */ 8255);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 124);








const _c0 = ["*"];
class NavMenuItem {
    constructor(rootMenu, subMenu, sanitizer, el, router) {
        this.rootMenu = rootMenu;
        this.subMenu = subMenu;
        this.sanitizer = sanitizer;
        this.el = el;
        this.router = router;
        this.navItemDisabled = false;
        this.title = '';
        this.extras = {};
        this.onNavItemClick = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.inSubmenu = false;
    }
    clickHandle() {
        const comRef = this.subMenu || this.rootMenu;
        comRef.selectHandle(this.index);
        const nextBorderIndex = (this.inSubmenu && this.subMenu) ? this.subMenu.index : this.index;
        this.rootMenu.showBorderIndex = nextBorderIndex;
        this.to && this.router.navigateByUrl(this.to, this.extras);
        this.onNavItemClick.emit();
    }
    ngOnInit() {
        this.inSubmenu = (0,_app_shared_utils_IsParentTag__WEBPACK_IMPORTED_MODULE_1__.IsParentTag)(this.el.nativeElement, 'nav-submenu');
        (0,_app_shared_utils_RemoveNgTag__WEBPACK_IMPORTED_MODULE_0__.RemoveNgTag)(this.el.nativeElement);
    }
}
NavMenuItem.ɵfac = function NavMenuItem_Factory(t) { return new (t || NavMenuItem)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nav_menu_component__WEBPACK_IMPORTED_MODULE_2__.NavMenu, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_nav_submenu_component__WEBPACK_IMPORTED_MODULE_3__.NavSubmenu, 8), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.DomSanitizer), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
NavMenuItem.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: NavMenuItem, selectors: [["nav-menu-item"]], inputs: { navItemDisabled: "navItemDisabled", index: "index", title: "title", to: "to", extras: "extras" }, outputs: { onNavItemClick: "onNavItemClick" }, ngContentSelectors: _c0, decls: 3, vars: 2, consts: [[1, "nav-menu-item", 3, "click"], ["list", ""]], template: function NavMenuItem_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "li", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function NavMenuItem_Template_li_click_0_listener() { return ctx.clickHandle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassProp"]("is-disabled", ctx.navItemDisabled);
    } }, encapsulation: 2 });


/***/ }),

/***/ 9335:
/*!******************************************************************!*\
  !*** ./src/app/shared/components/nav-menu/nav-menu.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavMenu": () => (/* binding */ NavMenu)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);


const _c0 = ["*"];
class NavMenu {
    constructor() {
        this.mode = 'vertical';
        this.uniqueOpened = false;
        this.menuTrigger = 'hover';
        this.border = true;
        this.modelChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.openedMenus = this.getDefaultOpen();
    }
    openMenu(index) {
        const openedMenus = this.openedMenus;
        if (openedMenus.indexOf(index) !== -1)
            return;
        this.openedMenus.push(index);
    }
    closeMenu(index) {
        this.openedMenus.splice(this.openedMenus.indexOf(index), 1);
    }
    selectHandle(index, path) {
        const main = path || index;
        this.model = main;
        this.modelChange.emit(main);
    }
    getDefaultOpen() {
        return this.defaultOpeneds ? this.defaultOpeneds.slice(0) : [];
    }
}
NavMenu.ɵfac = function NavMenu_Factory(t) { return new (t || NavMenu)(); };
NavMenu.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavMenu, selectors: [["nav-menu"]], inputs: { mode: "mode", model: "model", nativeClass: ["class", "nativeClass"], defaultOpeneds: "defaultOpeneds", uniqueOpened: "uniqueOpened", menuTrigger: "menuTrigger", border: "border" }, outputs: { modelChange: "modelChange" }, ngContentSelectors: _c0, decls: 2, vars: 6, template: function NavMenu_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"]("nav-menu " + (ctx.nativeClass ? ctx.nativeClass : ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("nav-menu-horizontal", ctx.mode === "horizontal")("with-border", ctx.border);
    } }, encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 3792:
/*!***************************************************************!*\
  !*** ./src/app/shared/components/nav-menu/nav-menu.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavMenuModule": () => (/* binding */ NavMenuModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _nav_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-menu.component */ 9335);
/* harmony import */ var _nav_submenu_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav-submenu.component */ 8255);
/* harmony import */ var _nav_menu_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./nav-menu-item.component */ 5001);
/* harmony import */ var _nav_menu_item_group_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nav-menu-item-group.component */ 1291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);






class NavMenuModule {
}
NavMenuModule.ɵfac = function NavMenuModule_Factory(t) { return new (t || NavMenuModule)(); };
NavMenuModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: NavMenuModule });
NavMenuModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](NavMenuModule, { declarations: [_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__.NavMenu,
        _nav_submenu_component__WEBPACK_IMPORTED_MODULE_1__.NavSubmenu,
        _nav_menu_item_component__WEBPACK_IMPORTED_MODULE_2__.NavMenuItem,
        _nav_menu_item_group_component__WEBPACK_IMPORTED_MODULE_3__.NavMenuItemGroup], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule], exports: [_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__.NavMenu,
        _nav_submenu_component__WEBPACK_IMPORTED_MODULE_1__.NavSubmenu,
        _nav_menu_item_component__WEBPACK_IMPORTED_MODULE_2__.NavMenuItem,
        _nav_menu_item_group_component__WEBPACK_IMPORTED_MODULE_3__.NavMenuItemGroup] }); })();


/***/ }),

/***/ 8255:
/*!*********************************************************************!*\
  !*** ./src/app/shared/components/nav-menu/nav-submenu.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavSubmenu": () => (/* binding */ NavSubmenu)
/* harmony export */ });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/animations */ 4851);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _nav_menu_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./nav-menu.component */ 9335);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);





const _c0 = ["title"];
function NavSubmenu_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1.title, " ");
} }
function NavSubmenu_ng_container_4_ng_template_1_Template(rf, ctx) { }
function NavSubmenu_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, NavSubmenu_ng_container_4_ng_template_1_Template, 0, 0, "ng-template", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngTemplateOutlet", ctx_r2.titleTmp);
} }
const _c1 = function () { return { paddingLeft: "20px;" }; };
const _c2 = ["*"];
const dropAnimation = (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.trigger)('dropAnimation', [
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('*', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        opacity: 0,
        height: 0,
        border: 0,
        padding: 0,
        visibility: 'hidden',
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('false', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        opacity: 0,
        height: 0,
        border: 0,
        padding: 0,
        visibility: 'hidden',
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.state)('true', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.style)({
        opacity: 1,
        height: '*',
        border: '*',
        padding: '*',
        visibility: 'inherit',
    })),
    (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.transition)('* => *', (0,_angular_animations__WEBPACK_IMPORTED_MODULE_2__.animate)(`150ms ease-out`)),
]);
class NavSubmenu {
    constructor(rootMenu, cdr) {
        this.rootMenu = rootMenu;
        this.cdr = cdr;
        this.opened = false;
        this.active = false;
        this.subActive = false;
        this.disableHover = false;
    }
    mouseenterHandle() {
        this.active = true;
        if (this.disableHover)
            return;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.rootMenu.openMenu(this.index);
            this.updateOpened();
            clearTimeout(this.timer);
        }, 150);
    }
    mouseleaveHandle() {
        this.active = false;
        if (this.disableHover)
            return;
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
            this.rootMenu.closeMenu(this.index);
            this.updateOpened();
            clearTimeout(this.timer);
        }, 150);
    }
    selectHandle(path) {
        this.rootMenu.selectHandle(this.index, path);
        if (this.rootMenu.mode !== 'vertical') {
            this.rootMenu.closeMenu(this.index);
        }
        this.updateOpened();
    }
    updateOpened() {
        this.opened = this.rootMenu.openedMenus.indexOf(this.index) > -1;
        this.cdr.markForCheck();
    }
    clickHandle() {
        if (!this.disableHover)
            return;
        if (this.opened) {
            this.rootMenu.closeMenu(this.index);
        }
        else {
            this.rootMenu.openMenu(this.index);
        }
        this.updateOpened();
    }
    ngOnInit() {
        if (this.defaultOpen) {
            this.rootMenu.openMenu(this.index);
        }
        this.updateOpened();
        this.active = this.index === this.rootMenu.model;
        this.disableHover = this.rootMenu.mode === 'vertical' || this.rootMenu.menuTrigger !== 'hover';
    }
}
NavSubmenu.ɵfac = function NavSubmenu_Factory(t) { return new (t || NavSubmenu)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_nav_menu_component__WEBPACK_IMPORTED_MODULE_0__.NavMenu, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__.ChangeDetectorRef)); };
NavSubmenu.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NavSubmenu, selectors: [["nav-submenu"]], contentQueries: function NavSubmenu_ContentQueries(rf, ctx, dirIndex) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵcontentQuery"](dirIndex, _c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.titleTmp = _t.first);
    } }, inputs: { index: "index", title: "title", defaultOpen: "defaultOpen" }, ngContentSelectors: _c2, decls: 8, vars: 15, consts: [[3, "mouseenter", "mouseleave"], [1, "nav-submenu-title", 3, "ngStyle", "click"], ["subTitle", ""], [4, "ngIf"], [1, "nav-submenu-arrow"], [1, "nav-menu"], [3, "ngTemplateOutlet"]], template: function NavSubmenu_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("mouseenter", function NavSubmenu_Template_li_mouseenter_0_listener() { return ctx.mouseenterHandle(); })("mouseleave", function NavSubmenu_Template_li_mouseleave_0_listener() { return ctx.mouseleaveHandle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function NavSubmenu_Template_div_click_1_listener() { return ctx.clickHandle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, NavSubmenu_ng_container_3_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, NavSubmenu_ng_container_4_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵprojection"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("nav-submenu", true)("is-active", ctx.active)("is-opened", ctx.opened);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx.titleTmp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.titleTmp);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("el-icon-caret-bottom", ctx.rootMenu.mode === "horizontal")("el-icon-arrow-down", ctx.rootMenu.mode === "vertical");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@dropAnimation", ctx.opened);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgTemplateOutlet, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgStyle], encapsulation: 2, data: { animation: [dropAnimation] }, changeDetection: 0 });


/***/ }),

/***/ 6755:
/*!**************************************************************!*\
  !*** ./src/app/shared/components/switch/switch.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchComponent": () => (/* binding */ SwitchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);



const _c0 = ["switch"];
const _c1 = ["*"];
class SwitchComponent {
    constructor(cd) {
        this.cd = cd;
        this.inline = false;
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.onModelChange = () => { };
        this.onModelTouched = () => { };
    }
    onClick(event, cb) {
        if (!this.disabled) {
            event.preventDefault();
            this.toggle(event);
            cb.focus();
        }
    }
    onInputChange(event) {
        if (!this.disabled) {
            const inputChecked = event.target.checked;
            this.updateModel(event, inputChecked);
        }
    }
    toggle(event) {
        this.updateModel(event, !this.checked);
    }
    updateModel(event, value) {
        this.checked = value;
        this.onModelChange(this.checked);
        this.onChange.emit({
            originalEvent: event,
            checked: this.checked
        });
    }
    onFocus(event) {
        this.focused = true;
    }
    onBlur(event) {
        this.focused = false;
        this.onModelTouched();
    }
    writeValue(checked) {
        this.checked = checked;
        this.cd.markForCheck();
    }
    registerOnChange(fn) {
        this.onModelChange = fn;
    }
    registerOnTouched(fn) {
        this.onModelTouched = fn;
    }
    setDisabledState(val) {
        this.disabled = val;
        this.cd.markForCheck();
    }
}
SwitchComponent.ɵfac = function SwitchComponent_Factory(t) { return new (t || SwitchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef)); };
SwitchComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SwitchComponent, selectors: [["switch"]], viewQuery: function SwitchComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.el = _t.first);
    } }, inputs: { value: "value", name: "name", disabled: "disabled", inputId: "inputId", inline: "inline" }, outputs: { onChange: "onChange" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([
            {
                provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
                useExisting: (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(() => SwitchComponent),
                multi: true
            }
        ])], ngContentSelectors: _c1, decls: 6, vars: 6, consts: [[1, "form-check", "form-switch"], ["role", "checkbox", 1, "form-check-label"], ["type", "checkbox", "role", "switch", 1, "form-check-input", 3, "checked", "disabled", "change", "focus", "blur"], ["switch", ""], [1, "ms-1"]], template: function SwitchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "label", 1)(2, "input", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SwitchComponent_Template_input_change_2_listener($event) { return ctx.onInputChange($event); })("focus", function SwitchComponent_Template_input_focus_2_listener($event) { return ctx.onFocus($event); })("blur", function SwitchComponent_Template_input_blur_2_listener($event) { return ctx.onBlur($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("form-check-inline", ctx.inline);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("checked", ctx.checked)("disabled", ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", ctx.inputId)("name", ctx.name);
    } }, encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 6074:
/*!***********************************************************!*\
  !*** ./src/app/shared/components/switch/switch.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SwitchModule": () => (/* binding */ SwitchModule)
/* harmony export */ });
/* harmony import */ var _switch_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./switch.component */ 6755);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 2560);


class SwitchModule {
}
SwitchModule.ɵfac = function SwitchModule_Factory(t) { return new (t || SwitchModule)(); };
SwitchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SwitchModule });
SwitchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({});
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SwitchModule, { declarations: [_switch_component__WEBPACK_IMPORTED_MODULE_0__.SwitchComponent], exports: [_switch_component__WEBPACK_IMPORTED_MODULE_0__.SwitchComponent] }); })();


/***/ }),

/***/ 5836:
/*!********************************************************!*\
  !*** ./src/app/shared/services/screen-size.service.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenSizeService": () => (/* binding */ ScreenSizeService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 2218);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 3298);
/* harmony import */ var _types_screen_size_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../types/screen-size.enum */ 1541);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);





class ScreenSizeService {
    constructor(elementRef) {
        this.elementRef = elementRef;
        this.sizes = [
            {
                id: _types_screen_size_enum__WEBPACK_IMPORTED_MODULE_0__.SCREEN_SIZE.XS, name: 'xs', size: 0
            },
            {
                id: _types_screen_size_enum__WEBPACK_IMPORTED_MODULE_0__.SCREEN_SIZE.SM, name: 'sm', size: 576
            },
            {
                id: _types_screen_size_enum__WEBPACK_IMPORTED_MODULE_0__.SCREEN_SIZE.MD, name: 'md', size: 768
            },
            {
                id: _types_screen_size_enum__WEBPACK_IMPORTED_MODULE_0__.SCREEN_SIZE.LG, name: 'lg', size: 992
            },
            {
                id: _types_screen_size_enum__WEBPACK_IMPORTED_MODULE_0__.SCREEN_SIZE.XL, name: 'xl', size: 1200
            },
            {
                id: _types_screen_size_enum__WEBPACK_IMPORTED_MODULE_0__.SCREEN_SIZE.XXL, name: 'xxl', size: 1440
            }
        ];
        this.resizeSubject = new rxjs__WEBPACK_IMPORTED_MODULE_1__.Subject();
    }
    get onResize$() {
        return this.resizeSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.distinctUntilChanged)());
    }
    onResize(size) {
        const currentSize = this.sizes.filter(elm => {
            return elm.size <= size;
        });
        const sizeArr = [];
        for (let i = 0; i < currentSize.length; i++) {
            sizeArr.push(currentSize[i].id);
        }
        this.resizeSubject.next(sizeArr);
    }
}
ScreenSizeService.ɵfac = function ScreenSizeService_Factory(t) { return new (t || ScreenSizeService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__.ElementRef)); };
ScreenSizeService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ScreenSizeService, factory: ScreenSizeService.ɵfac });


/***/ }),

/***/ 4466:
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SharedModule": () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 3935);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);





class SharedModule {
}
SharedModule.ɵfac = function SharedModule_Factory(t) { return new (t || SharedModule)(); };
SharedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: SharedModule });
SharedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientJsonpModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, { exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.CommonModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__.ReactiveFormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClientJsonpModule,
        _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateModule] }); })();


/***/ }),

/***/ 4385:
/*!*************************************************!*\
  !*** ./src/app/shared/types/modal-direction.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ModalDirection": () => (/* binding */ ModalDirection)
/* harmony export */ });
var ModalDirection;
(function (ModalDirection) {
    ModalDirection["Up"] = "up";
    ModalDirection["Down"] = "down";
    ModalDirection["Left"] = "left";
    ModalDirection["Right"] = "right";
})(ModalDirection || (ModalDirection = {}));


/***/ }),

/***/ 1541:
/*!**************************************************!*\
  !*** ./src/app/shared/types/screen-size.enum.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SCREEN_SIZE": () => (/* binding */ SCREEN_SIZE)
/* harmony export */ });
var SCREEN_SIZE;
(function (SCREEN_SIZE) {
    SCREEN_SIZE[SCREEN_SIZE["XS"] = 0] = "XS";
    SCREEN_SIZE[SCREEN_SIZE["SM"] = 1] = "SM";
    SCREEN_SIZE[SCREEN_SIZE["MD"] = 2] = "MD";
    SCREEN_SIZE[SCREEN_SIZE["LG"] = 3] = "LG";
    SCREEN_SIZE[SCREEN_SIZE["XL"] = 4] = "XL";
    SCREEN_SIZE[SCREEN_SIZE["XXL"] = 5] = "XXL";
})(SCREEN_SIZE || (SCREEN_SIZE = {}));


/***/ }),

/***/ 4712:
/*!***********************************************!*\
  !*** ./src/app/shared/utils/ColorContrast.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ColorContrast": () => (/* binding */ ColorContrast)
/* harmony export */ });
const ColorContrast = (hex) => {
    if (!hex) {
        return 'dark';
    }
    const threshold = 130;
    const hRed = hexToR(hex);
    const hGreen = hexToG(hex);
    const hBlue = hexToB(hex);
    function hexToR(h) { return parseInt((cutHex(h)).substring(0, 2), 16); }
    function hexToG(h) { return parseInt((cutHex(h)).substring(2, 4), 16); }
    function hexToB(h) { return parseInt((cutHex(h)).substring(4, 6), 16); }
    function cutHex(h) { return (h.charAt(0) === '#') ? h.substring(1, 7) : h; }
    const cBrightness = ((hRed * 299) + (hGreen * 587) + (hBlue * 114)) / 1000;
    if (cBrightness > threshold) {
        return 'dark';
    }
    else {
        return 'light';
    }
};


/***/ }),

/***/ 9370:
/*!*********************************************!*\
  !*** ./src/app/shared/utils/IsParentTag.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "IsParentTag": () => (/* binding */ IsParentTag)
/* harmony export */ });
const IsParentTag = (nativeElement, parentTag) => {
    let parentIsTag = false;
    let parent = nativeElement.parentElement;
    let findLen = 3, lowerName = '';
    while (findLen) {
        lowerName = parent.localName.toLowerCase();
        if (lowerName.indexOf('el') > -1) {
            parentIsTag = lowerName === parentTag;
            findLen = 0;
        }
        else {
            parent = parent.parentElement;
            findLen--;
        }
    }
    return parentIsTag;
};


/***/ }),

/***/ 8206:
/*!*********************************************!*\
  !*** ./src/app/shared/utils/RemoveNgTag.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RemoveNgTag": () => (/* binding */ RemoveNgTag)
/* harmony export */ });
const RemoveNgTag = (nativeElement) => {
    const parentElement = nativeElement.parentElement;
    if (!parentElement || !parentElement.insertBefore)
        return;
    while (nativeElement.firstChild) {
        parentElement.insertBefore(nativeElement.firstChild, nativeElement);
    }
    parentElement.removeChild(nativeElement);
};


/***/ }),

/***/ 2235:
/*!*******************************************!*\
  !*** ./src/app/shared/utils/TimeSince.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeSince": () => (/* binding */ TimeSince)
/* harmony export */ });
function TimeSince(val) {
    let time;
    switch (typeof val) {
        case 'number':
            time = val;
        case 'string':
            time = +new Date(val);
            break;
        case 'object':
            if (val.constructor === Date)
                time = val.getTime();
            break;
        default:
            time = +new Date();
    }
    const time_formats = [
        [60, 'seconds', 1],
        [120, '1 minute ago', '1 minute from now'],
        [3600, 'minutes', 60],
        [7200, '1 hour ago', '1 hour from now'],
        [86400, 'hours', 3600],
        [172800, 'Yesterday', 'Tomorrow'],
        [604800, 'days', 86400],
        [1209600, 'Last week', 'Next week'],
        [2419200, 'weeks', 604800],
        [4838400, 'Last month', 'Next month'],
        [29030400, 'months', 2419200],
        [58060800, 'Last year', 'Next year'],
        [2903040000, 'years', 29030400],
        [5806080000, 'Last century', 'Next century'],
        [58060800000, 'centuries', 2903040000] // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    let seconds = (+new Date() - time) / 1000;
    let token = 'ago';
    let list_choice = 1;
    if (seconds == 0) {
        return 'Just now';
    }
    if (seconds < 0) {
        seconds = Math.abs(seconds);
        token = 'from now';
        list_choice = 2;
    }
    let i = 0;
    let format;
    while (format = time_formats[i++])
        if (seconds < format[0]) {
            if (typeof format[2] == 'string')
                return format[list_choice];
            else
                return Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token;
        }
    return time;
}


/***/ }),

/***/ 9414:
/*!*******************************************************!*\
  !*** ./src/app/store/app-config/app-config.action.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpdateConfig": () => (/* binding */ UpdateConfig),
/* harmony export */   "UpdateCurrentLanguage": () => (/* binding */ UpdateCurrentLanguage),
/* harmony export */   "UpdateMobileNavCollapse": () => (/* binding */ UpdateMobileNavCollapse),
/* harmony export */   "UpdateSideNavCollapse": () => (/* binding */ UpdateSideNavCollapse)
/* harmony export */ });
class UpdateConfig {
    constructor(payload) {
        this.payload = payload;
    }
}
UpdateConfig.type = '[AppConfig] Update Config';
class UpdateSideNavCollapse {
    constructor(sideNavCollapse) {
        this.sideNavCollapse = sideNavCollapse;
    }
}
UpdateSideNavCollapse.type = '[AppConfig] Update Side Nav Collapse';
class UpdateMobileNavCollapse {
    constructor(mobileNavCollapse) {
        this.mobileNavCollapse = mobileNavCollapse;
    }
}
UpdateMobileNavCollapse.type = '[AppConfig] Update Mobile Nav Collapse';
class UpdateCurrentLanguage {
    constructor(lang) {
        this.lang = lang;
    }
}
UpdateCurrentLanguage.type = '[AppConfig] Update Current Language';


/***/ }),

/***/ 7503:
/*!******************************************************!*\
  !*** ./src/app/store/app-config/app-config.state.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppConfigState": () => (/* binding */ AppConfigState)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ngxs_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngxs/store */ 5508);
/* harmony import */ var _app_config_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app-config.action */ 9414);
/* harmony import */ var _app_configs_app_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/configs/app.config */ 6626);




let AppConfigState = class AppConfigState {
    static getUsers(state) {
        return state.layoutType;
    }
    updateConfig({ getState, patchState }, { payload }) {
        const state = getState();
        patchState({
            ...state,
            ...payload
        });
    }
    changeSideNavCollapse({ getState, patchState }, { sideNavCollapse }) {
        const state = getState();
        patchState({
            ...state,
            sideNavCollapse
        });
    }
    changeMobileNavCollapse({ getState, patchState }, { mobileNavCollapse }) {
        const state = getState();
        patchState({
            ...state,
            mobileNavCollapse
        });
    }
    changeCurrentLanguage({ getState, patchState }, { lang }) {
        const state = getState();
        patchState({
            ...state,
            lang
        });
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_app_config_action__WEBPACK_IMPORTED_MODULE_1__.UpdateConfig)
], AppConfigState.prototype, "updateConfig", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_app_config_action__WEBPACK_IMPORTED_MODULE_1__.UpdateSideNavCollapse)
], AppConfigState.prototype, "changeSideNavCollapse", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_app_config_action__WEBPACK_IMPORTED_MODULE_1__.UpdateMobileNavCollapse)
], AppConfigState.prototype, "changeMobileNavCollapse", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Action)(_app_config_action__WEBPACK_IMPORTED_MODULE_1__.UpdateCurrentLanguage)
], AppConfigState.prototype, "changeCurrentLanguage", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.Selector)()
], AppConfigState, "getUsers", null);
AppConfigState = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_ngxs_store__WEBPACK_IMPORTED_MODULE_0__.State)({
        name: 'app',
        defaults: _app_configs_app_config__WEBPACK_IMPORTED_MODULE_2__.AppConfiguration
    })
], AppConfigState);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 4497);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map