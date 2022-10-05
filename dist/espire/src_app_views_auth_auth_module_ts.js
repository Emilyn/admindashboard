"use strict";
(self["webpackChunkespire"] = self["webpackChunkespire"] || []).push([["src_app_views_auth_auth_module_ts"],{

/***/ 1887:
/*!***************************************************!*\
  !*** ./src/app/views/auth/auth-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthRoutingModule": () => (/* binding */ AuthRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ 2783);
/* harmony import */ var _login_v2_login_v2_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-v2/login-v2.component */ 8182);
/* harmony import */ var _login_v3_login_v3_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login-v3/login-v3.component */ 8977);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./register/register.component */ 6301);
/* harmony import */ var _register_v2_register_v2_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register-v2/register-v2.component */ 9372);
/* harmony import */ var _register_v3_register_v3_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register-v3/register-v3.component */ 411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 2560);









const routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
    },
    {
        path: 'login/v2',
        component: _login_v2_login_v2_component__WEBPACK_IMPORTED_MODULE_1__.LoginV2Component
    },
    {
        path: 'login/v3',
        component: _login_v3_login_v3_component__WEBPACK_IMPORTED_MODULE_2__.LoginV3Component
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_3__.RegisterComponent
    },
    {
        path: 'register/v2',
        component: _register_v2_register_v2_component__WEBPACK_IMPORTED_MODULE_4__.RegisterV2Component
    },
    {
        path: 'register/v3',
        component: _register_v3_register_v3_component__WEBPACK_IMPORTED_MODULE_5__.RegisterV3Component
    },
];
class AuthRoutingModule {
}
AuthRoutingModule.ɵfac = function AuthRoutingModule_Factory(t) { return new (t || AuthRoutingModule)(); };
AuthRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: AuthRoutingModule });
AuthRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](AuthRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterModule] }); })();


/***/ }),

/***/ 412:
/*!*******************************************!*\
  !*** ./src/app/views/auth/auth.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthModule": () => (/* binding */ AuthModule)
/* harmony export */ });
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth-routing.module */ 1887);
/* harmony import */ var _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @app/shared/shared.module */ 4466);
/* harmony import */ var _app_shared_components_logo_logo_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/shared/components/logo/logo.module */ 4079);
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-bootstrap-form-validation */ 7600);
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/login-form/login-form.component */ 2771);
/* harmony import */ var _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/register-form/register-form.component */ 7427);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ 2783);
/* harmony import */ var _login_v2_login_v2_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login-v2/login-v2.component */ 8182);
/* harmony import */ var _login_v3_login_v3_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login-v3/login-v3.component */ 8977);
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./register/register.component */ 6301);
/* harmony import */ var _register_v2_register_v2_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./register-v2/register-v2.component */ 9372);
/* harmony import */ var _register_v3_register_v3_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./register-v3/register-v3.component */ 411);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 2560);














class AuthModule {
}
AuthModule.ɵfac = function AuthModule_Factory(t) { return new (t || AuthModule)(); };
AuthModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: AuthModule });
AuthModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [_auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _app_shared_components_logo_logo_module__WEBPACK_IMPORTED_MODULE_2__.LogoModule,
        _app_shared_components_logo_logo_module__WEBPACK_IMPORTED_MODULE_2__.LogoModule,
        ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_12__.NgBootstrapFormValidationModule.forRoot()] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](AuthModule, { declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
        _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_4__.RegisterFormComponent,
        _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__.LoginFormComponent,
        _login_v2_login_v2_component__WEBPACK_IMPORTED_MODULE_6__.LoginV2Component,
        _login_v3_login_v3_component__WEBPACK_IMPORTED_MODULE_7__.LoginV3Component,
        _register_register_component__WEBPACK_IMPORTED_MODULE_8__.RegisterComponent,
        _register_v2_register_v2_component__WEBPACK_IMPORTED_MODULE_9__.RegisterV2Component,
        _register_v3_register_v3_component__WEBPACK_IMPORTED_MODULE_10__.RegisterV3Component], imports: [_auth_routing_module__WEBPACK_IMPORTED_MODULE_0__.AuthRoutingModule,
        _app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        _app_shared_components_logo_logo_module__WEBPACK_IMPORTED_MODULE_2__.LogoModule,
        _app_shared_components_logo_logo_module__WEBPACK_IMPORTED_MODULE_2__.LogoModule, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_12__.NgBootstrapFormValidationModule] }); })();


/***/ }),

/***/ 2771:
/*!**************************************************************************!*\
  !*** ./src/app/views/auth/components/login-form/login-form.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginFormComponent": () => (/* binding */ LoginFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-bootstrap-form-validation */ 7600);





function LoginFormComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 14);
} }
function LoginFormComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div")(1, "div", 15)(2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "or login with");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 17)(5, "div", 18)(6, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 18)(9, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 18)(12, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} }
class LoginFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.showResult = false;
        this.showPassword = false;
        this.thirPartyLogin = true;
    }
    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            username: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required
                ]]
        });
    }
    login() {
        console.log(this.formGroup);
    }
    onShowPasswordClick() {
        this.showPassword = !this.showPassword;
    }
    onReset() {
        this.formGroup.reset();
    }
}
LoginFormComponent.ɵfac = function LoginFormComponent_Factory(t) { return new (t || LoginFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder)); };
LoginFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginFormComponent, selectors: [["login-form"]], inputs: { thirPartyLogin: "thirPartyLogin" }, decls: 20, vars: 5, consts: [["class", "alert alert-danger", 4, "ngIf"], [3, "formGroup", "validSubmit"], [1, "form-group", "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "username", 1, "form-control", "no-validation-icon", "no-success-validation"], [1, "mb-3"], [1, "form-label", "d-flex", "justify-content-between"], ["href", "", 1, "text-primary", "font"], [1, "form-group", "input-affix", "flex-column"], [1, "d-none"], ["formControlName", "password", 1, "form-control", "no-validation-icon", "no-success-validation", 3, "type"], [1, "suffix-icon", "feather", "cursor-pointer", "text-dark", 3, "ngClass", "click"], ["type", "submit", 1, "btn", "btn-primary", "w-100"], [4, "ngIf"], [1, "alert", "alert-danger"], [1, "divider"], [1, "divider-text", "text-muted"], [1, "row"], [1, "col", "px-1"], [1, "btn", "btn-outline-secondary", "w-100"], ["src", "/assets/images/thumbs/thumb-1.png", "alt", "", 2, "max-width", "20px"], ["src", "/assets/images/thumbs/thumb-2.png", "alt", "", 2, "max-width", "20px"], ["src", "/assets/images/thumbs/thumb-3.png", "alt", "", 2, "max-width", "20px"]], template: function LoginFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, LoginFormComponent_div_0_Template, 1, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("validSubmit", function LoginFormComponent_Template_form_validSubmit_1_listener() { return ctx.login(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2)(3, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5)(7, "label", 6)(8, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Forget Password?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 8)(13, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginFormComponent_Template_i_click_16_listener() { return ctx.onShowPasswordClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Log In");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, LoginFormComponent_div_19_Template, 14, 0, "div", 13);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showResult);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("type", ctx.showPassword ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx.showPassword ? "icon-eye-off" : "icon-eye");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.thirPartyLogin);
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__.FormValidationDirective, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__.FormGroupComponent, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective], encapsulation: 2 });


/***/ }),

/***/ 7427:
/*!********************************************************************************!*\
  !*** ./src/app/views/auth/components/register-form/register-form.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterFormComponent": () => (/* binding */ RegisterFormComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-bootstrap-form-validation */ 7600);





function RegisterFormComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Password not match");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class RegisterFormComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.confirmationValidator = (control) => {
            if (!control.value) {
                return { required: true };
            }
            else if (control.value !== this.formGroup.controls.password.value) {
                return { confirm: true, error: true };
            }
            return {};
        };
    }
    ngOnInit() {
        this.formGroup = this.formBuilder.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.email]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required]],
            confirmPassword: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.Validators.required, this.confirmationValidator]]
        });
    }
    register() {
        console.log(this.formGroup);
    }
}
RegisterFormComponent.ɵfac = function RegisterFormComponent_Factory(t) { return new (t || RegisterFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.UntypedFormBuilder)); };
RegisterFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterFormComponent, selectors: [["register-form"]], decls: 20, vars: 2, consts: [[3, "formGroup", "validSubmit"], [1, "form-group", "mb-3"], [1, "form-label"], ["type", "text", "formControlName", "username", 1, "form-control", "no-validation-icon", "no-success-validation"], ["type", "email", "formControlName", "email", 1, "form-control", "no-validation-icon", "no-success-validation"], ["type", "password", "formControlName", "password", 1, "form-control", "no-validation-icon", "no-success-validation"], ["type", "password", "formControlName", "confirmPassword", 1, "form-control", "no-validation-icon", "no-success-validation"], [4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", "d-block", "w-100"], [1, "invalid-feedback"]], template: function RegisterFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("validSubmit", function RegisterFormComponent_Template_form_validSubmit_0_listener() { return ctx.register(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Username");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1)(6, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1)(10, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1)(14, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Confirm Password");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, RegisterFormComponent_ng_container_17_Template, 3, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formGroup.get("confirmPassword").hasError("confirm"));
    } }, dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__.FormValidationDirective, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__.FormGroupComponent, ng_bootstrap_form_validation__WEBPACK_IMPORTED_MODULE_3__.FormControlDirective], encapsulation: 2 });


/***/ }),

/***/ 8182:
/*!***********************************************************!*\
  !*** ./src/app/views/auth/login-v2/login-v2.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginV2Component": () => (/* binding */ LoginV2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/logo/logo.component */ 8168);
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/login-form/login-form.component */ 2771);



class LoginV2Component {
    constructor() { }
    ngOnInit() { }
}
LoginV2Component.ɵfac = function LoginV2Component_Factory(t) { return new (t || LoginV2Component)(); };
LoginV2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginV2Component, selectors: [["login-v2"]], decls: 25, vars: 0, consts: [[1, "auth-full-height"], [1, "row", "m-0"], [1, "col", "p-0", "auth-full-height", 2, "background-image", "url('/assets/images/others/bg-1.jpg')"], [1, "d-flex", "justify-content-between", "flex-column", "h-100", "px-5", "py-3"], [1, "w-100"], [1, "display-4", "text-white", "mb-4"], [1, "text-white", "lead", 2, "max-width", "630px"], [1, "d-flex", "justify-content-between"], [1, "text-white"], ["href", "", 1, "text-white", "text-link", "me-3"], ["href", "", 1, "text-white", "text-link"], [1, "col-12", "p-0", "auth-full-height", "bg-white", 2, "max-width", "450px"], [1, "d-flex", "h-100", "align-items-center", "p-5"], [1, "d-flex", "justify-content-center", "mt-3"], [1, "text-center"], [1, "mt-4"]], template: function LoginV2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Start with Espire");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "\u00A9 2021 ThemeNate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div")(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Legal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 11)(19, "div", 12)(20, "div", 4)(21, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](22, "logo", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](24, "login-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent, _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__.LoginFormComponent], encapsulation: 2 });


/***/ }),

/***/ 8977:
/*!***********************************************************!*\
  !*** ./src/app/views/auth/login-v3/login-v3.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginV3Component": () => (/* binding */ LoginV3Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/logo/logo.component */ 8168);
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/login-form/login-form.component */ 2771);



class LoginV3Component {
    constructor() { }
    ngOnInit() { }
}
LoginV3Component.ɵfac = function LoginV3Component_Factory(t) { return new (t || LoginV3Component)(); };
LoginV3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginV3Component, selectors: [["login-v3"]], decls: 19, vars: 2, consts: [[1, "auth-full-height", "container", "d-flex", "flex-column", "justify-content-center"], [1, "row", "justify-content-center"], [1, "col-md-9"], [1, "card", "row", "mx-0", "flex-row", "overflow-hidden"], [1, "col-md-4", "bg-size-cover", "d-flex", "align-items-center", "p-4", 2, "background-image", "url('/assets/images/others/bg-2.jpg')"], [1, "mb-5"], [3, "white", "height"], [1, "text-white"], [1, "text-white", "mt-4", "mb-5", "o-75"], [1, "col-md-8", "px-0"], [1, "card-body"], [1, "my-5", "mx-auto", 2, "max-width", "350px"], [1, "mb-3"]], template: function LoginV3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "logo", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Make your work easier");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Climb leg rub face on everything give attitude under the bed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Login");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "login-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("white", true)("height", 50);
    } }, dependencies: [_shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent, _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__.LoginFormComponent], encapsulation: 2 });


/***/ }),

/***/ 2783:
/*!*****************************************************!*\
  !*** ./src/app/views/auth/login/login.component.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/logo/logo.component */ 8168);
/* harmony import */ var _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/login-form/login-form.component */ 2771);



class LoginComponent {
    constructor() { }
    ngOnInit() { }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["login"]], decls: 20, vars: 0, consts: [[1, "auth-full-height", "d-flex", "flex-row", "align-items-center"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-4"], [1, "card"], [1, "card-body"], [1, "m-2"], [1, "d-flex", "justify-content-center", "mt-3"], ["logoType", "fold", 1, "text-center"], [1, "text-center", "mt-3"], [1, "fw-bolder"], [1, "text-muted"], [1, "text-center", "mt-4"], ["href", "/auth/register-1"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "logo", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9)(10, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Sign In");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Sign in your account to continue");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "login-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 12)(16, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Don't have an account yet? ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()()()();
    } }, dependencies: [_shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent, _components_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__.LoginFormComponent], encapsulation: 2 });


/***/ }),

/***/ 9372:
/*!*****************************************************************!*\
  !*** ./src/app/views/auth/register-v2/register-v2.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterV2Component": () => (/* binding */ RegisterV2Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/logo/logo.component */ 8168);
/* harmony import */ var _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/register-form/register-form.component */ 7427);



class RegisterV2Component {
    constructor() { }
    ngOnInit() { }
}
RegisterV2Component.ɵfac = function RegisterV2Component_Factory(t) { return new (t || RegisterV2Component)(); };
RegisterV2Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterV2Component, selectors: [["register-v2"]], decls: 29, vars: 0, consts: [[1, "auth-full-height"], [1, "row", "m-0"], [1, "col", "p-0", "auth-full-height", 2, "background-image", "url('/assets/images/others/bg-4.jpg')"], [1, "d-flex", "justify-content-between", "flex-column", "h-100", "px-5", "py-3"], [1, "w-100", "text-center"], ["src", "/assets/images/others/img-1.png", "alt", "", 1, "img-fluid", 2, "max-height", "430px"], [1, "display-4", "mt-5", "mb-4"], [1, "lead", "mx-auto", "text-muted", 2, "max-width", "630px"], [1, "d-flex", "justify-content-between"], ["href", "", 1, "text-link", "ms-3"], ["href", "", 1, "text-link"], [1, "col-12", "p-0", "auth-full-height", "bg-white", 2, "max-width", "450px"], [1, "d-flex", "h-100", "align-items-center", "p-5"], [1, "w-100"], [1, "d-flex", "justify-content-center", "mt-3"], ["logoType", "fold", 1, "text-center"], [1, "text-center", "mt-4"], [1, "mt-4"]], template: function RegisterV2Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Sign up with Espire");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "Climb leg rub face on everything give attitude nap all day for under the bed. Chase mice attack feet but rub face on everything hopped up.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 8)(12, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "\u00A9 2021 ThemeNate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div")(15, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Legal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](18, "Privacy");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11)(20, "div", 12)(21, "div", 13)(22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "logo", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 16)(25, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Create Account");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "register-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
    } }, dependencies: [_shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent, _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_1__.RegisterFormComponent], encapsulation: 2 });


/***/ }),

/***/ 411:
/*!*****************************************************************!*\
  !*** ./src/app/views/auth/register-v3/register-v3.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterV3Component": () => (/* binding */ RegisterV3Component)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/logo/logo.component */ 8168);
/* harmony import */ var _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/register-form/register-form.component */ 7427);



class RegisterV3Component {
    constructor() { }
    ngOnInit() { }
}
RegisterV3Component.ɵfac = function RegisterV3Component_Factory(t) { return new (t || RegisterV3Component)(); };
RegisterV3Component.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterV3Component, selectors: [["register-v3"]], decls: 19, vars: 2, consts: [[1, "auth-full-height", "container", "d-flex", "flex-column", "justify-content-center"], [1, "row", "justify-content-center"], [1, "col-md-9"], [1, "card", "row", "mx-0", "flex-row", "overflow-hidden"], [1, "col-md-4", "bg-size-cover", "d-flex", "align-items-center", "p-4", 2, "background-image", "url('/assets/images/others/bg-3.jpg')"], [1, "mb-5"], [3, "white", "height"], [1, "text-white"], [1, "text-white", "mt-4", "mb-5", "o-75"], [1, "col-md-8", "px-0"], [1, "card-body"], [1, "my-5", "mx-auto", 2, "max-width", "350px"], [1, "mb-3"]], template: function RegisterV3Component_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div")(6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "logo", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h3", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Make your work easier");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Climb leg rub face on everything give attitude under the bed.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9)(13, "div", 10)(14, "div", 11)(15, "div", 12)(16, "h3", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "register-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("white", true)("height", 50);
    } }, dependencies: [_shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent, _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_1__.RegisterFormComponent], encapsulation: 2 });


/***/ }),

/***/ 6301:
/*!***********************************************************!*\
  !*** ./src/app/views/auth/register/register.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterComponent": () => (/* binding */ RegisterComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/components/logo/logo.component */ 8168);
/* harmony import */ var _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/register-form/register-form.component */ 7427);



class RegisterComponent {
    constructor() { }
    ngOnInit() { }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(); };
RegisterComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["register"]], decls: 15, vars: 0, consts: [[1, "auth-full-height", "d-flex", "flex-row", "align-items-center"], [1, "container"], [1, "row", "justify-content-center"], [1, "col-md-4"], [1, "card"], [1, "card-body"], [1, "m-2"], [1, "d-flex", "justify-content-center", "mt-3"], ["logoType", "fold", 1, "text-center"], [1, "text-center", "mt-3"], [1, "fw-bolder"], [1, "text-muted"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5)(6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "logo", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 9)(10, "h3", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "Sign Up");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Sign up account to get free reward!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "register-form");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
    } }, dependencies: [_shared_components_logo_logo_component__WEBPACK_IMPORTED_MODULE_0__.LogoComponent, _components_register_form_register_form_component__WEBPACK_IMPORTED_MODULE_1__.RegisterFormComponent], encapsulation: 2 });


/***/ }),

/***/ 7600:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/ng-bootstrap-form-validation/__ivy_ngcc__/fesm2015/ng-bootstrap-form-validation.js ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOOTSTRAP_VERSION": () => (/* binding */ BOOTSTRAP_VERSION),
/* harmony export */   "BootstrapVersion": () => (/* binding */ BootstrapVersion),
/* harmony export */   "CUSTOM_ERROR_MESSAGES": () => (/* binding */ CUSTOM_ERROR_MESSAGES),
/* harmony export */   "FormControlDirective": () => (/* binding */ FormControlDirective),
/* harmony export */   "FormGroupComponent": () => (/* binding */ FormGroupComponent),
/* harmony export */   "FormValidationDirective": () => (/* binding */ FormValidationDirective),
/* harmony export */   "MessagesComponent": () => (/* binding */ MessagesComponent),
/* harmony export */   "NgBootstrapFormValidationModule": () => (/* binding */ NgBootstrapFormValidationModule),
/* harmony export */   "ɵa": () => (/* binding */ ErrorMessageService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 2130);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 4666);








function MessagesComponent_span_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const message_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", ctx_r0.className);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](message_r1);
  }
}

const _c0 = ["class", "form-group"];

function FormGroupComponent_bfv_messages_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "bfv-messages", 1);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("messages", ctx_r0.messages);
  }
}

const _c1 = ["*"];
var BootstrapVersion;

(function (BootstrapVersion) {
  BootstrapVersion[BootstrapVersion["Three"] = 0] = "Three";
  BootstrapVersion[BootstrapVersion["Four"] = 1] = "Four";
})(BootstrapVersion || (BootstrapVersion = {}));

const CUSTOM_ERROR_MESSAGES = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("ng-bootstrap-form-validation custom error messages");
const BOOTSTRAP_VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken("ng-bootstrap-form-validation module options");

function controlPath(name, parent) {
  // tslint:disable-next-line:no-non-null-assertion
  return [...parent.path, name];
}

let FormControlDirective = class FormControlDirective {
  constructor( // this value might be null, but we union type it as such until
  // this issue is resolved: https://github.com/angular/angular/issues/25544
  parent, bootstrapVersion) {
    this.parent = parent;
    this.bootstrapVersion = bootstrapVersion;
  }

  get validClass() {
    if (!this.control) {
      return false;
    }

    return this.bootstrapFour && this.control.valid && (this.control.touched || this.control.dirty);
  }

  get invalidClass() {
    if (!this.control) {
      return false;
    }

    return this.bootstrapFour && this.control.invalid && this.control.touched && this.control.dirty;
  }

  get path() {
    return controlPath(this.formControlName, this.parent);
  }

  get control() {
    return this.formDirective && this.formDirective.getControl(this);
  }

  get formDirective() {
    return this.parent ? this.parent.formDirective : null;
  }

  get bootstrapFour() {
    return this.bootstrapVersion === BootstrapVersion.Four;
  }

};

FormControlDirective.ɵfac = function FormControlDirective_Factory(t) {
  return new (t || FormControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BOOTSTRAP_VERSION));
};

FormControlDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: FormControlDirective,
  selectors: [["", 8, "form-control"], ["", 8, "form-check-input"], ["", 8, "custom-control-input"]],
  hostVars: 4,
  hostBindings: function FormControlDirective_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("is-valid", ctx.validClass)("is-invalid", ctx.invalidClass);
    }
  },
  inputs: {
    formControlName: "formControlName",
    formControl: "formControl"
  }
});

FormControlDirective.ctorParameters = () => [{
  type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ControlContainer,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
  }, {
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
  }]
}, {
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [BOOTSTRAP_VERSION]
  }]
}];

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)], FormControlDirective.prototype, "formControlName", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", String)], FormControlDirective.prototype, "formControl", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding)("class.is-valid"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])], FormControlDirective.prototype, "validClass", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding)("class.is-invalid"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])], FormControlDirective.prototype, "invalidClass", null);

FormControlDirective = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional)()), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Host)()), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf)()), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__param)(1, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject)(BOOTSTRAP_VERSION)), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.ControlContainer, Number])], FormControlDirective);
let FormValidationDirective = class FormValidationDirective {
  constructor() {
    this.validSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
  }

  onSubmit() {
    this.markAsTouchedAndDirty(this.formGroup);

    if (this.formGroup.valid) {
      this.validSubmit.emit(this.formGroup.value);
    }
  }

  markAsTouchedAndDirty(control) {
    if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup) {
      Object.keys(control.controls).forEach(key => this.markAsTouchedAndDirty(control.controls[key]));
    } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormArray) {
      control.controls.forEach(c => this.markAsTouchedAndDirty(c));
    } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControl && control.enabled) {
      control.markAsDirty();
      control.markAsTouched();
      control.updateValueAndValidity();
    }
  }

};

FormValidationDirective.ɵfac = function FormValidationDirective_Factory(t) {
  return new (t || FormValidationDirective)();
};

FormValidationDirective.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
  type: FormValidationDirective,
  selectors: [["", "formGroup", ""]],
  hostBindings: function FormValidationDirective_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function FormValidationDirective_submit_HostBindingHandler() {
        return ctx.onSubmit();
      });
    }
  },
  inputs: {
    formGroup: "formGroup"
  },
  outputs: {
    validSubmit: "validSubmit"
  }
});

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormGroup)], FormValidationDirective.prototype, "formGroup", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Output)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], FormValidationDirective.prototype, "validSubmit", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener)("submit"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Function), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", []), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:returntype", void 0)], FormValidationDirective.prototype, "onSubmit", null);

let MessagesComponent = class MessagesComponent {
  constructor(bootstrapVersion) {
    this.bootstrapVersion = bootstrapVersion;

    this.messages = () => [];
  }

  get className() {
    switch (this.bootstrapVersion) {
      case BootstrapVersion.Three:
        return "help-block";

      case BootstrapVersion.Four:
        return "invalid-feedback";
    }
  }

};

MessagesComponent.ɵfac = function MessagesComponent_Factory(t) {
  return new (t || MessagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](BOOTSTRAP_VERSION));
};

MessagesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: MessagesComponent,
  selectors: [["bfv-messages"]],
  inputs: {
    messages: "messages"
  },
  decls: 1,
  vars: 1,
  consts: [[3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass"]],
  template: function MessagesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MessagesComponent_span_0_Template, 2, 2, "span", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.messages());
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf],
  styles: [".invalid-feedback[_ngcontent-%COMP%], .valid-feedback[_ngcontent-%COMP%] {\n        display: block;\n      }"]
});

MessagesComponent.ctorParameters = () => [{
  type: undefined,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [BOOTSTRAP_VERSION]
  }]
}];

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], MessagesComponent.prototype, "messages", void 0);

MessagesComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject)(BOOTSTRAP_VERSION)), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Number])], MessagesComponent);

const ɵ0 = label => `${label} is required`,
      ɵ1 = label => `${label} is invalid`,
      ɵ2 = (label, error) => `${label} must be at least ${error.requiredLength} characters`,
      ɵ3 = (label, error) => `${label} must be no longer than ${error.requiredLength} characters`,
      ɵ4 = (label, error) => `${label} is required`,
      ɵ5 = (label, error) => `Invalid email address`,
      ɵ6 = (label, error) => `${label} must be no greater than ${error.max}`,
      ɵ7 = (label, error) => `${label} must be no less than ${error.min}`;

const DEFAULT_ERRORS = [{
  error: "required",
  format: ɵ0
}, {
  error: "pattern",
  format: ɵ1
}, {
  error: "minlength",
  format: ɵ2
}, {
  error: "maxlength",
  format: ɵ3
}, {
  error: "requiredTrue",
  format: ɵ4
}, {
  error: "email",
  format: ɵ5
}, {
  error: "max",
  format: ɵ6
}, {
  error: "min",
  format: ɵ7
}];
let ErrorMessageService = class ErrorMessageService {
  constructor(customErrorMessages) {
    this.customErrorMessages = customErrorMessages;
    this.defaultErrors = DEFAULT_ERRORS;
    this.errorMessages = customErrorMessages.reduce((acc, cur) => acc.concat(cur), this.defaultErrors);
  }

};

ErrorMessageService.ɵfac = function ErrorMessageService_Factory(t) {
  return new (t || ErrorMessageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](CUSTOM_ERROR_MESSAGES));
};

ErrorMessageService.ctorParameters = () => [{
  type: Array,
  decorators: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
    args: [CUSTOM_ERROR_MESSAGES]
  }]
}];

ErrorMessageService.ɵprov = (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
  factory: function ErrorMessageService_Factory() {
    return new ErrorMessageService((0,_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(CUSTOM_ERROR_MESSAGES));
  },
  token: ErrorMessageService,
  providedIn: "root"
});
ErrorMessageService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__param)(0, (0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject)(CUSTOM_ERROR_MESSAGES)), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [Array])], ErrorMessageService);
let FormGroupComponent = class FormGroupComponent {
  constructor(elRef, errorMessageService) {
    this.elRef = elRef;
    this.errorMessageService = errorMessageService;
    this.customErrorMessages = [];
    this.validationDisabled = false;

    this.messages = () => this.getMessages();
  }

  get hasErrors() {
    return this.FormControlNames.some(c => !c.valid && c.dirty && c.touched) && !this.validationDisabled;
  }

  get hasSuccess() {
    return !this.FormControlNames.some(c => !c.valid) && this.FormControlNames.some(c => c.dirty && c.touched) && !this.validationDisabled;
  }

  ngAfterContentInit() {
    if (this.messagesBlock) {
      this.messagesBlock.messages = this.messages;
    }
  }

  ngOnInit() {
    this.errorMessages = this.errorMessageService.errorMessages.concat(this.customErrorMessages).reverse();
  }

  get label() {
    const label = this.elRef.nativeElement.querySelector("label");
    return label && label.textContent ? label.textContent.trim() : "This field";
  }

  get isDirtyAndTouched() {
    return this.FormControlNames.some(c => c.dirty && c.touched);
  }

  getMessages() {
    const messages = [];

    if (!this.isDirtyAndTouched || this.validationDisabled) {
      return messages;
    }

    const names = this.FormControlNames.map(f => f.name);
    this.FormControlNames.filter((c, i) => !c.valid && !!c.errors && // filter out FormControlNames that share the same name - usually for radio buttons
    names.indexOf(c.name) === i).forEach(control => {
      Object.keys(control.errors).forEach(key => {
        const error = this.errorMessages.find(err => err.error === key);

        if (!error) {
          return;
        }

        messages.push(error.format(this.label, control.errors[key]));
      });
    });
    return messages;
  }

};

FormGroupComponent.ɵfac = function FormGroupComponent_Factory(t) {
  return new (t || FormGroupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ErrorMessageService));
};

FormGroupComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
  type: FormGroupComponent,
  selectors: [["", 8, "form-group"]],
  contentQueries: function FormGroupComponent_ContentQueries(rf, ctx, dirIndex) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, MessagesComponent, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵcontentQuery"](dirIndex, _angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.messagesBlock = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.FormControlNames = _t);
    }
  },
  hostVars: 4,
  hostBindings: function FormGroupComponent_HostBindings(rf, ctx) {
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("has-error", ctx.hasErrors)("has-success", ctx.hasSuccess);
    }
  },
  inputs: {
    customErrorMessages: "customErrorMessages",
    validationDisabled: "validationDisabled"
  },
  attrs: _c0,
  ngContentSelectors: _c1,
  decls: 2,
  vars: 1,
  consts: [[3, "messages", 4, "ngIf"], [3, "messages"]],
  template: function FormGroupComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](0);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, FormGroupComponent_bfv_messages_1_Template, 1, 1, "bfv-messages", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.messagesBlock);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, MessagesComponent],
  encapsulation: 2
});

FormGroupComponent.ctorParameters = () => [{
  type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
}, {
  type: ErrorMessageService
}];

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren)(_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, {
  descendants: true
}), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__.QueryList)], FormGroupComponent.prototype, "FormControlNames", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Array)], FormGroupComponent.prototype, "customErrorMessages", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.Input)(), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object)], FormGroupComponent.prototype, "validationDisabled", void 0);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding)("class.has-error"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])], FormGroupComponent.prototype, "hasErrors", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding)("class.has-success"), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", Object), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [])], FormGroupComponent.prototype, "hasSuccess", null);

(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild)(MessagesComponent), (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:type", MessagesComponent)], FormGroupComponent.prototype, "messagesBlock", void 0);

FormGroupComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__metadata)("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef, ErrorMessageService])], FormGroupComponent);
var NgBootstrapFormValidationModule_1;
let NgBootstrapFormValidationModule = NgBootstrapFormValidationModule_1 = class NgBootstrapFormValidationModule {
  static forRoot(userOptions = {
    bootstrapVersion: BootstrapVersion.Four
  }) {
    return {
      ngModule: NgBootstrapFormValidationModule_1,
      providers: [{
        provide: CUSTOM_ERROR_MESSAGES,
        useValue: userOptions.customErrorMessages || [],
        multi: true
      }, {
        provide: BOOTSTRAP_VERSION,
        useValue: userOptions.bootstrapVersion
      }, ErrorMessageService]
    };
  }

};

NgBootstrapFormValidationModule.ɵfac = function NgBootstrapFormValidationModule_Factory(t) {
  return new (t || NgBootstrapFormValidationModule)();
};

NgBootstrapFormValidationModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: NgBootstrapFormValidationModule
});
NgBootstrapFormValidationModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormControlDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // tslint:disable-next-line:directive-selector
      selector: ".form-control,.form-check-input,.custom-control-input"
    }]
  }], function () {
    return [{
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.ControlContainer,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
      }]
    }, {
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [BOOTSTRAP_VERSION]
      }]
    }];
  }, {
    validClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["class.is-valid"]
    }],
    invalidClass: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["class.is-invalid"]
    }],
    formControlName: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    formControl: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormValidationDirective, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
    args: [{
      // tslint:disable-next-line:directive-selector
      selector: "[formGroup]"
    }]
  }], function () {
    return [];
  }, {
    validSubmit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
    }],
    onSubmit: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostListener,
      args: ["submit"]
    }],
    formGroup: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MessagesComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      selector: "bfv-messages",
      template: `
    <span [ngClass]="className" *ngFor="let message of messages()">{{message}}</span>
  `,
      styles: ["\n      .invalid-feedback,\n      .valid-feedback {\n        display: block;\n      }\n    "]
    }]
  }], function () {
    return [{
      type: undefined,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [BOOTSTRAP_VERSION]
      }]
    }];
  }, {
    messages: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ErrorMessageService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
    args: [{
      providedIn: "root"
    }]
  }], function () {
    return [{
      type: Array,
      decorators: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
        args: [CUSTOM_ERROR_MESSAGES]
      }]
    }];
  }, null);
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormGroupComponent, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
    args: [{
      // tslint:disable:component-selector
      selector: ".form-group",
      template: `
    <ng-content></ng-content>
    <bfv-messages *ngIf="!messagesBlock" [messages]="messages"></bfv-messages>
  `
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
    }, {
      type: ErrorMessageService
    }];
  }, {
    customErrorMessages: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    validationDisabled: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
    }],
    hasErrors: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["class.has-error"]
    }],
    hasSuccess: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.HostBinding,
      args: ["class.has-success"]
    }],
    FormControlNames: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChildren,
      args: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__.FormControlName, {
        descendants: true
      }]
    }],
    messagesBlock: [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ContentChild,
      args: [MessagesComponent]
    }]
  });
})();

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgBootstrapFormValidationModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
    args: [{
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule],
      declarations: [FormValidationDirective, FormGroupComponent, MessagesComponent, FormControlDirective],
      exports: [FormValidationDirective, FormGroupComponent, MessagesComponent, FormControlDirective]
    }]
  }], null, null);
})();

(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgBootstrapFormValidationModule, {
    declarations: function () {
      return [FormValidationDirective, FormGroupComponent, MessagesComponent, FormControlDirective];
    },
    imports: function () {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule];
    },
    exports: function () {
      return [FormValidationDirective, FormGroupComponent, MessagesComponent, FormControlDirective];
    }
  });
})();
/*
 * Public API Surface of ng-bootstrap-form-validation
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ }),

/***/ 2130:
/*!***********************************************************************************!*\
  !*** ./node_modules/ng-bootstrap-form-validation/node_modules/tslib/tslib.es6.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__values": () => (/* binding */ __values)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ })

}]);
//# sourceMappingURL=src_app_views_auth_auth_module_ts.js.map