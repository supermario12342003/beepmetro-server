webpackJsonp(["user.module"],{

/***/ "../../../../../src/app/features/user/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Main container-->\n<div class=\"container mt-nav\">\n  <!--Space from top-->\n  <div class=\"pt-5\"></div>\n  <!--Space from top-->\n  <!--Form without header-->\n    <div class=\"card mx-auto\" style=\"width: 25rem;\">\n\n        <div class=\"card-body mx-4\">\n\n            <!--Header-->\n            <div class=\"text-center\">\n                <h3 class=\"dark-grey-text mb-5\"><strong>Sign in</strong></h3>\n            </div>\n\n            <!--Body-->\n            <div class=\"md-form\">\n                <input type=\"text\" id=\"Form-email1\" class=\"form-control\">\n                <label for=\"Form-email1\">Your email</label>\n            </div>\n\n            <div class=\"md-form pb-3\">\n                <input type=\"password\" id=\"Form-pass1\" class=\"form-control\">\n                <label for=\"Form-pass1\">Your password</label>\n                <p class=\"font-small blue-text d-flex justify-content-end\">Forgot <a href=\"#\" class=\"blue-text ml-1\"> Password?</a></p>\n            </div>\n\n            <div class=\"text-center mb-3\">\n                <button type=\"button\" class=\"btn btn-danger btn-block z-depth-2\">Log in</button>\n            </div>\n            <p class=\"font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2\"> or Sign in with:</p>\n\n                <div class=\"row my-3 d-flex justify-content-center\">\n                    <!--Facebook-->\n                    <button type=\"button\" class=\"btn btn-white btn-rounded mr-md-3 z-depth-1a\"><i class=\"fa fa-facebook blue-text text-center\"></i></button>\n                    <!--Twitter-->\n                    <button type=\"button\" class=\"btn btn-white btn-rounded mr-md-3 z-depth-1a\"><i class=\"fa fa-twitter blue-text\"></i></button>\n                    <!--Google +-->\n                    <button type=\"button\" class=\"btn btn-white btn-rounded z-depth-1a\"><i class=\"fa fa-google-plus blue-text\"></i></button>\n                </div>\n\n        </div>\n\n        <!--Footer-->\n        <div class=\"modal-footer mx-5 pt-3 mb-1\">\n            <p class=\"font-small grey-text d-flex justify-content-end\">Not a member? <a href=\"#\" class=\"blue-text ml-1\"> Sign Up</a></p>\n        </div>\n\n    </div>\n    <!--/Form without header-->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/user/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n* @Author: Mengwei Choong\n* @Date:   2018-01-23 16:48:22\n* @Last Modified by:   Mengwei Choong\n* @Last Modified time: 2018-01-24 21:34:02\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/user/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/features/user/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/user/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/user/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/features/user/dashboard/dashboard.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__login_login_component__ = __webpack_require__("../../../../../src/app/features/user/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__login_login_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register_register_component__ = __webpack_require__("../../../../../src/app/features/user/register/register.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_2__register_register_component__["a"]; });





/***/ }),

/***/ "../../../../../src/app/features/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Main container-->\n<div class=\"container mt-nav\">\n  <!--Space from top-->\n  <div class=\"pt-5\"></div>\n  <!--Space from top-->\n  <!--Form without header-->\n    <div class=\"card mx-auto\" style=\"width: 25rem;\">\n\n        <div class=\"card-body mx-4\">\n\n            <!--Header-->\n            <div class=\"text-center\">\n                <h3 class=\"dark-grey-text mb-5\"><strong>{{'USER.LOGIN.LOGIN' | translate }}</strong></h3>\n            </div>\n\n            <!--Body-->\n            <div class=\"md-form\">\n                <input type=\"text\" id=\"Form-email1\" class=\"form-control\">\n                <label for=\"Form-email1\">Your email</label>\n            </div>\n\n            <div class=\"md-form pb-3\">\n                <input type=\"password\" id=\"Form-pass1\" class=\"form-control\">\n                <label for=\"Form-pass1\">Your password</label>\n                <p class=\"font-small blue-text d-flex justify-content-end\">Forgot <a href=\"#\" class=\"blue-text ml-1\"> Password?</a></p>\n            </div>\n\n            <div class=\"text-center mb-3\">\n                <button type=\"button\" class=\"btn btn-danger btn-block z-depth-2\">Log in</button>\n            </div>\n            <p class=\"font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2\"> or Sign in with:</p>\n\n                <div class=\"row my-3 d-flex justify-content-center\">\n                    <!--Facebook-->\n                    <button type=\"button\" class=\"btn btn-white btn-rounded mr-md-3 z-depth-1a\"><i class=\"fa fa-facebook blue-text text-center\"></i></button>\n                    <!--Twitter-->\n                    <button type=\"button\" class=\"btn btn-white btn-rounded mr-md-3 z-depth-1a\"><i class=\"fa fa-twitter blue-text\"></i></button>\n                    <!--Google +-->\n                    <button type=\"button\" class=\"btn btn-white btn-rounded z-depth-1a\"><i class=\"fa fa-google-plus blue-text\"></i></button>\n                </div>\n\n        </div>\n\n        <!--Footer-->\n        <div class=\"modal-footer mx-5 pt-3 mb-1\">\n            <p class=\"font-small grey-text d-flex justify-content-end\">Not a member? <a href=\"#\" class=\"blue-text ml-1\"> Sign Up</a></p>\n        </div>\n\n    </div>\n    <!--/Form without header-->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/user/login/login.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/features/user/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/user/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/user/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Main container-->\n<div class=\"container mt-nav\">\n  <!--Space from top-->\n  <div class=\"pt-5\"></div>\n  <!--Space from top-->\n  <!--Form without header-->\n    <div class=\"card mx-auto\" style=\"width: 25rem;\">\n\n        <div class=\"card-body mx-4\">\n\n            <!--Header-->\n            <div class=\"text-center\">\n                <h3 class=\"dark-grey-text mb-5\"><strong>{{ 'USER.REGISTER.REGISTER' | translate }}</strong></h3>\n            </div>\n\n            <!--Body-->\n            <div class=\"md-form\">\n                <input type=\"text\" id=\"Form-email1\" class=\"form-control\">\n                <label for=\"Form-email1\">Your email</label>\n            </div>\n\n            <div class=\"md-form\">\n                <input type=\"password\" id=\"Form-pass1\" class=\"form-control\">\n                <label for=\"Form-pass1\">Your password</label>\n            </div>\n\n            <div class=\"md-form\">\n                <input type=\"password\" id=\"Form-pass2\" class=\"form-control\">\n                <label for=\"Form-pass2\">Your password</label>\n            </div>\n\n            <div class=\"text-center mb-3\">\n                <button type=\"button\" class=\"btn btn-danger btn-block z-depth-2\">Register</button>\n            </div>\n            <p class=\"font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2\"> or Register with:</p>\n\n                <div class=\"row my-3 d-flex justify-content-center\">\n                    <!--Facebook-->\n                    <button type=\"button\" class=\"btn btn-white btn-rounded mr-md-3 z-depth-1a\"><i class=\"fa fa-facebook blue-text text-center\"></i></button>\n                    <!--Twitter-->\n                    <button type=\"button\" class=\"btn btn-white btn-rounded mr-md-3 z-depth-1a\"><i class=\"fa fa-twitter blue-text\"></i></button>\n                    <!--Google +-->\n                    <button type=\"button\" class=\"btn btn-white btn-rounded z-depth-1a\"><i class=\"fa fa-google-plus blue-text\"></i></button>\n                </div>\n\n        </div>\n\n        <!--Footer-->\n        <div class=\"modal-footer mx-5 pt-3 mb-1\">\n            <p class=\"font-small grey-text d-flex justify-content-end\">Already has an account?<a href=\"#\" class=\"blue-text ml-1\"> Sign In</a></p>\n        </div>\n\n    </div>\n    <!--/Form without header-->\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/features/user/register/register.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n* @Author: Mengwei Choong\n* @Date:   2018-01-24 21:42:41\n* @Last Modified by:   Mengwei Choong\n* @Last Modified time: 2018-01-24 21:47:43\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/user/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent() {
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-register',
            template: __webpack_require__("../../../../../src/app/features/user/register/register.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/user/register/register.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/user/user-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__("../../../../../src/app/features/user/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    {
        path: 'dashboard',
        component: __WEBPACK_IMPORTED_MODULE_2____["a" /* DashboardComponent */],
    },
    {
        path: 'login',
        component: __WEBPACK_IMPORTED_MODULE_2____["b" /* LoginComponent */],
    },
    {
        path: 'register',
        component: __WEBPACK_IMPORTED_MODULE_2____["c" /* RegisterComponent */],
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
var UserRoutingModule = /** @class */ (function () {
    function UserRoutingModule() {
    }
    UserRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], UserRoutingModule);
    return UserRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/features/user/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_routing_module__ = __webpack_require__("../../../../../src/app/features/user/user-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_sidebar__ = __webpack_require__("../../../../ng-sidebar/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("../../../../../src/app/features/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register_component__ = __webpack_require__("../../../../../src/app/features/user/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__app_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_3__user_routing_module__["a" /* UserRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng_sidebar__["SidebarModule"],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */], __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_6__register_register_component__["a" /* RegisterComponent */]],
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map