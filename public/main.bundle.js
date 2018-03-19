webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/features/admin/admin.module": [
		"../../../../../src/app/features/admin/admin.module.ts",
		"admin.module"
	],
	"app/features/user/user.module": [
		"../../../../../src/app/features/user/user.module.ts",
		"user.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_pages__ = __webpack_require__("../../../../../src/app/pages/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_2__app_pages__["a" /* LandingComponent */],
    },
    {
        path: 'sample',
        component: __WEBPACK_IMPORTED_MODULE_2__app_pages__["c" /* SampleComponent */],
    },
    {
        path: 'user',
        loadChildren: 'app/features/user/user.module#UserModule'
    },
    {
        path: 'admin',
        loadChildren: 'app/features/admin/admin.module#AdminModule',
    },
    {
        path: '**',
        component: __WEBPACK_IMPORTED_MODULE_2__app_pages__["b" /* NotFoundComponent */],
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes)],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n  <app-footer></app-footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(translate) {
        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        translate.use('en');
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ngx_translate_core__["c" /* TranslateService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_core_core_module__ = __webpack_require__("../../../../../src/app/core/core.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_pages_pages_module__ = __webpack_require__("../../../../../src/app/pages/pages.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_sidebar__ = __webpack_require__("../../../../ng-sidebar/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_ng_sidebar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__ = __webpack_require__("../../../../@ngx-translate/http-loader/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__env_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};












// AoT requires an exported function for factories
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_9__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, '../assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
        console.log("current mode ", __WEBPACK_IMPORTED_MODULE_11__env_environment__["a" /* environment */].mode);
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_3__app_core_core_module__["a" /* CoreModule */],
                __WEBPACK_IMPORTED_MODULE_4__app_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_5__app_pages_pages_module__["a" /* PagesModule */],
                __WEBPACK_IMPORTED_MODULE_6__agm_core__["a" /* AgmCoreModule */].forRoot({ apiKey: __WEBPACK_IMPORTED_MODULE_11__env_environment__["a" /* environment */].googleMapApiKey, }),
                __WEBPACK_IMPORTED_MODULE_7_ng_sidebar__["SidebarModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_8__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: (createTranslateLoader),
                        deps: [__WEBPACK_IMPORTED_MODULE_10__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1__app_component__["a" /* AppComponent */]],
        }),
        __metadata("design:paramtypes", [])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/core.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CoreModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services__ = __webpack_require__("../../../../../src/app/core/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};





var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
            ],
            declarations: [],
            exports: [
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["a" /* BrowserModule */],
            ],
            providers: [
                //all service here
                __WEBPACK_IMPORTED_MODULE_4__services__["a" /* UserService */],
                __WEBPACK_IMPORTED_MODULE_4__services__["b" /* WebsocketService */]
            ]
        }),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Optional"])()), __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__websocket_service__ = __webpack_require__("../../../../../src/app/core/services/websocket.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__websocket_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/core/services/user.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_1__user_service__["a"]; });




/***/ }),

/***/ "../../../../../src/app/core/services/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
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

var UserService = /** @class */ (function () {
    function UserService() {
    }
    UserService.prototype.getUser = function () {
        return "dummy user";
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "../../../../../src/app/core/services/websocket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WebsocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__node_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__env_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
        if (__WEBPACK_IMPORTED_MODULE_2__env_environment__["a" /* environment */].websocketHost) {
            var socket = __WEBPACK_IMPORTED_MODULE_1__node_socket_io_client__["connect"](__WEBPACK_IMPORTED_MODULE_2__env_environment__["a" /* environment */].websocketHost);
        }
        else {
            var socket = __WEBPACK_IMPORTED_MODULE_1__node_socket_io_client__();
        }
    }
    WebsocketService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "../../../../../src/app/pages/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__landing_landing_component__ = __webpack_require__("../../../../../src/app/pages/landing/landing.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__landing_landing_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__sample_sample_component__ = __webpack_require__("../../../../../src/app/pages/sample/sample.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_1__sample_sample_component__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/pages/not-found/not-found.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_2__not_found_not_found_component__["a"]; });





/***/ }),

/***/ "../../../../../src/app/pages/landing/landing.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Mask-->\n  <div id=\"intro\" class=\"view hm-black-strong\">\n\n    <div class=\" container-fluid full-bg-img d-flex align-items-center justify-content-center pt-5\">\n\n      <div class=\"row d-flex justify-content-center\">\n\n        <div class=\"col-md-10 text-center\">\n\n          <!-- Heading -->\n          <h2 class=\"display-3 font-bold white-text mb-2\">Fck</h2>\n\n          <!-- Divider -->\n          <hr class=\"hr-light\">\n\n          <!-- Description -->\n          <h4 class=\"white-text my-4\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti consequuntur.</h4>\n          <button type=\"button\" class=\"btn btn-outline-white\">Read more<i class=\"fa fa-book ml-2\"></i></button>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n  <!--/.Mask-->\n<!--Main layout-->\n<main class=\"mt-5 \">\n  <div class=\"container\">\n\n\n    <!--Section: Best Features-->\n    <section id=\"best-features\" class=\"text-center\">\n\n      <!-- Heading -->\n      <h2 class=\"mb-4 font-weight-bold\">Best Features</h2>\n\n      <!--Grid row-->\n      <div class=\"row d-flex justify-content-center mb-4\">\n\n        <!--Grid column-->\n        <div class=\"col-md-8\">\n\n          <!-- Description -->\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi voluptate hic provident nulla repellat\n            facere esse molestiae ipsa labore porro minima quam quaerat rem, natus repudiandae debitis est\n          sit pariatur.</p>\n\n        </div>\n        <!--Grid column-->\n\n      </div>\n      <!--Grid row-->\n\n      <!--Grid row-->\n      <div class=\"row\">\n\n        <!--Grid column-->\n        <div class=\"col-md-4 mb-5\">\n          <i class=\"fa fa-camera-retro fa-4x orange-text\"></i>\n          <h4 class=\"my-4 font-weight-bold\">Experience</h4>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima\n          assumenda deleniti hic.</p>\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-md-4 mb-1\">\n          <i class=\"fa fa-heart fa-4x orange-text\"></i>\n          <h4 class=\"my-4 font-weight-bold\">Happiness</h4>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima\n          assumenda deleniti hic.</p>\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-md-4 mb-1\">\n          <i class=\"fa fa-bicycle fa-4x orange-text\"></i>\n          <h4 class=\"my-4 font-weight-bold\">Adventure</h4>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima\n          assumenda deleniti hic.</p>\n        </div>\n        <!--Grid column-->\n\n      </div>\n      <!--Grid row-->\n\n    </section>\n    <!--Section: Best Features-->\n\n    <hr class=\"my-5\">\n\n    <!--Section: Examples-->\n    <section id=\"examples\" class=\"text-center\">\n\n      <!-- Heading -->\n      <h2 class=\"mb-5 font-weight-bold\">Stunning Examples</h2>\n\n      <!--Grid row-->\n      <div class=\"row\">\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-12 mb-4\">\n\n          <div class=\"view overlay hm-white-slight z-depth-1-half\">\n            <img src=\"https://mdbootstrap.com/img/Photos/Others/images/48.jpg\" class=\"img-fluid\" alt=\"\">\n            <a href=\"https://mdbootstrap.com/\">\n              <div class=\"mask\"></div>\n            </a>\n          </div>\n\n          <h4 class=\"my-4 font-weight-bold\">Heading</h4>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima\n          assumenda deleniti hic.</p>\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-6 mb-4\">\n\n          <div class=\"view overlay hm-white-slight z-depth-1-half\">\n            <img src=\"https://mdbootstrap.com/img/Photos/Others/images/49.jpg\" class=\"img-fluid\" alt=\"\">\n            <div class=\"mask\"></div>\n          </div>\n\n          <h4 class=\"my-4 font-weight-bold\">Heading</h4>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima\n          assumenda deleniti hic.</p>\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-6 mb-4\">\n\n          <div class=\"view overlay hm-white-slight z-depth-1-half\">\n            <img src=\"https://mdbootstrap.com/img/Photos/Others/images/29.jpg\" class=\"img-fluid\" alt=\"\">\n            <div class=\"mask\"></div>\n          </div>\n\n          <h4 class=\"my-4 font-weight-bold\">Heading</h4>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima\n          assumenda deleniti hic.</p>\n\n        </div>\n        <!--Grid column-->\n\n      </div>\n      <!--Grid row-->\n\n      <!--Grid row-->\n      <div class=\"row\">\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-12 mb-4\">\n\n          <div class=\"view overlay hm-white-slight z-depth-1-half\">\n            <img src=\"https://mdbootstrap.com/img/Photos/Others/images/10.jpg\" class=\"img-fluid\" alt=\"\">\n            <div class=\"mask\"></div>\n          </div>\n\n          <h4 class=\"my-4 font-weight-bold\">Heading</h4>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima\n          assumenda deleniti hic.</p>\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-6 mb-4\">\n\n          <div class=\"view overlay hm-white-slight z-depth-1-half\">\n            <img src=\"https://mdbootstrap.com/img/Photos/Others/images/11.jpg\" class=\"img-fluid\" alt=\"\">\n            <div class=\"mask\"></div>\n          </div>\n\n          <h4 class=\"my-4 font-weight-bold\">Heading</h4>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima\n          assumenda deleniti hic.</p>\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-6 mb-4\">\n\n          <div class=\"view overlay hm-white-slight z-depth-1-half\">\n            <img src=\"https://mdbootstrap.com/img/Photos/Others/images/13.jpg\" class=\"img-fluid\" alt=\"\">\n            <div class=\"mask\"></div>\n          </div>\n\n          <h4 class=\"my-4 font-weight-bold\">Heading</h4>\n          <p class=\"grey-text\">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit maiores nam, aperiam minima\n          assumenda deleniti hic.</p>\n\n        </div>\n        <!--Grid column-->\n\n      </div>\n      <!--Grid row-->\n\n    </section>\n    <!--Section: Examples-->\n\n    <hr class=\"my-5\">\n\n    <!--Section: Gallery-->\n    <section id=\"gallery\">\n\n      <!-- Heading -->\n      <h2 class=\"mb-5 font-weight-bold text-center\">Gallery heading</h2>\n\n      <!--Grid row-->\n      <div class=\"row\">\n\n        <!--Grid column-->\n        <div class=\"col-md-6\">\n\n          <!--Carousel Wrapper-->\n          <div id=\"carousel-example-1z\" class=\"carousel slide carousel-fade\" data-ride=\"carousel\">\n            <!--Indicators-->\n            <ol class=\"carousel-indicators\">\n              <li data-target=\"#carousel-example-1z\" data-slide-to=\"0\" class=\"active\"></li>\n              <li data-target=\"#carousel-example-1z\" data-slide-to=\"1\"></li>\n              <li data-target=\"#carousel-example-1z\" data-slide-to=\"2\"></li>\n            </ol>\n            <!--/.Indicators-->\n            <!--Slides-->\n            <div class=\"carousel-inner z-depth-1-half\" role=\"listbox\">\n              <!--First slide-->\n              <div class=\"carousel-item active\">\n                <img class=\"d-block w-100\" src=\"https://mdbootstrap.com/img/Photos/Others/images/84.jpg\" alt=\"First slide\">\n              </div>\n              <!--/First slide-->\n              <!--Second slide-->\n              <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" src=\"https://mdbootstrap.com/img/Photos/Others/images/85.jpg\" alt=\"Second slide\">\n              </div>\n              <!--/Second slide-->\n              <!--Third slide-->\n              <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" src=\"https://mdbootstrap.com/img/Photos/Others/images/86.jpg\" alt=\"Third slide\">\n              </div>\n              <!--/Third slide-->\n            </div>\n            <!--/.Slides-->\n            <!--Controls-->\n            <a class=\"carousel-control-prev\" href=\"#carousel-example-1z\" role=\"button\" data-slide=\"prev\">\n              <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Previous</span>\n            </a>\n            <a class=\"carousel-control-next\" href=\"#carousel-example-1z\" role=\"button\" data-slide=\"next\">\n              <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n              <span class=\"sr-only\">Next</span>\n            </a>\n            <!--/.Controls-->\n          </div>\n          <!--/.Carousel Wrapper-->\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-md-6\">\n\n          <!--Excerpt-->\n          <a href=\"\" class=\"teal-text\">\n            <h6 class=\"pb-1\"><i class=\"fa fa-heart\"></i><strong> Lifestyle </strong></h6>\n          </a>\n          <h4 class=\"mb-3\"><strong>This is title of the news</strong></h4>\n          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime\n            placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis\n          debitis aut rerum.</p>\n\n          <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime\n            placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis\n          debitis aut rerum.</p>\n          <p>by <a><strong>Jessica Clark</strong></a>, 26/08/2016</p>\n          <a class=\"btn btn-primary btn-md waves-effect waves-light\">Read more</a>\n\n        </div>\n        <!--Grid column-->\n\n      </div>\n      <!--Grid row-->\n\n    </section>\n    <!--Section: Gallery-->\n\n    <hr class=\"my-5\">\n\n    <!--Section: Contact-->\n    <section id=\"contact\">\n\n      <!-- Heading -->\n      <h2 class=\"mb-5 font-weight-bold text-center\">Contact us</h2>\n\n      <!--Grid row-->\n      <div class=\"row\">\n\n        <!--Grid column-->\n        <div class=\"col-lg-5 col-md-12\">\n\n          <!-- Form contact -->\n          <form class=\"p-5\">\n\n            <div class=\"md-form form-sm\">\n              <i class=\"fa fa-user prefix grey-text\"></i>\n              <input type=\"text\" id=\"form3\" class=\"form-control\">\n              <label for=\"form3\">Your name</label>\n            </div>\n\n            <div class=\"md-form form-sm\">\n              <i class=\"fa fa-envelope prefix grey-text\"></i>\n              <input type=\"text\" id=\"form2\" class=\"form-control\">\n              <label for=\"form2\">Your email</label>\n            </div>\n\n            <div class=\"md-form form-sm\">\n              <i class=\"fa fa-tag prefix grey-text\"></i>\n              <input type=\"text\" id=\"form32\" class=\"form-control\">\n              <label for=\"form34\">Subject</label>\n            </div>\n\n            <div class=\"md-form form-sm\">\n              <i class=\"fa fa-pencil prefix grey-text\"></i>\n              <textarea type=\"text\" id=\"form8\" class=\"md-textarea\" style=\"height: 100px\"></textarea>\n              <label for=\"form8\">Your message</label>\n            </div>\n\n            <div class=\"text-center\">\n              <button class=\"btn btn-primary\">Send <i class=\"fa fa-paper-plane-o ml-1\"></i></button>\n            </div>\n\n          </form>\n          <!-- Form contact -->\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-7 col-md-12\">\n          <!--Grid row-->\n          <div class=\"row text-center\">\n\n            <!--Grid column-->\n            <div class=\"col-lg-4 col-md-12 mb-3\">\n\n              <p><i class=\"fa fa-map fa-1x mr-2 grey-text\"></i>New York, NY 10012</p>\n\n            </div>\n            <!--Grid column-->\n\n            <!--Grid column-->\n            <div class=\"col-lg-4 col-md-6 mb-3\">\n\n              <p><i class=\"fa fa-building fa-1x mr-2 grey-text\"></i>Mon - Fri, 8:00-22:00</p>\n\n            </div>\n            <!--Grid column-->\n\n            <!--Grid column-->\n            <div class=\"col-lg-4 col-md-6 mb-3\">\n\n              <p><i class=\"fa fa-phone fa-1x mr-2 grey-text\"></i>+ 01 234 567 89</p>\n\n            </div>\n            <!--Grid column-->\n\n          </div>\n          <!--Grid row-->\n          <!--Google map-->\n          <div id=\"map-container\" class=\"z-depth-1-half map-container\" style=\"height: 400px\">\n            <agm-map [latitude]=\"lat\" [longitude]=\"lng\" style=\"height: 400px;\">\n              <agm-marker [latitude]=\"lat\" [longitude]=\"lng\"></agm-marker>\n            </agm-map>\n          </div>\n\n\n        </div>\n        <!--Grid column-->\n\n      </div>\n      <!--Grid row-->\n\n    </section>\n    <!--Section: Contact-->\n  </div>\n</main>\n<!--Main layout-->\n\n"

/***/ }),

/***/ "../../../../../src/app/pages/landing/landing.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n* @Author: Mengwei Choong\n* @Date:   2018-01-23 17:51:13\n* @Last Modified by:   Mengwei Choong\n* @Last Modified time: 2018-01-24 15:15:47\n*/\n#intro {\n  background: url(\"/assets/cover.jpg\") no-repeat center center fixed;\n  background-size: cover; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/landing/landing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_core_services__ = __webpack_require__("../../../../../src/app/core/services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LandingComponent = /** @class */ (function () {
    function LandingComponent(userService) {
        this.userService = userService;
        this.lat = 51.678418;
        this.lng = 7.809007;
    }
    LandingComponent.prototype.ngOnInit = function () {
        this.user = this.userService.getUser();
    };
    LandingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-landing',
            template: __webpack_require__("../../../../../src/app/pages/landing/landing.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/landing/landing.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__app_core_services__["a" /* UserService */]])
    ], LandingComponent);
    return LandingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-12\">\n            <div class=\"error-template\">\n                <h1>\n                    Oops!</h1>\n                <h2>\n                    404 Not Found</h2>\n                <div class=\"error-details\">\n                    Sorry, an error has occured, Requested page not found!\n                </div>\n                <div class=\"error-actions\">\n                    <a href=\"http://www.jquery2dotnet.com\" class=\"btn btn-primary btn-lg\"><span class=\"glyphicon glyphicon-home\"></span>\n                        Take Me Home </a><a href=\"http://www.jquery2dotnet.com\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-envelope\"></span> Contact Support </a>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/pages/not-found/not-found.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n* @Author: Mengwei Choong\n* @Date:   2018-01-23 18:07:44\n* @Last Modified by:   Mengwei Choong\n* @Last Modified time: 2018-01-24 15:20:09\n*/\n.error-template {\n  padding: 40px 15px;\n  text-align: center; }\n.error-actions {\n  margin-top: 15px;\n  margin-bottom: 15px; }\n.error-actions .btn {\n  margin-right: 10px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/pages/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/pages/pages.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PagesModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__agm_core__ = __webpack_require__("../../../../@agm/core/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__ = __webpack_require__("../../../../../src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__ = __webpack_require__("../../../../../src/app/pages/landing/landing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__sample_sample_component__ = __webpack_require__("../../../../../src/app/pages/sample/sample.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PagesModule = /** @class */ (function () {
    function PagesModule() {
    }
    PagesModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__app_shared_shared_module__["a" /* SharedModule */],
                __WEBPACK_IMPORTED_MODULE_1__agm_core__["a" /* AgmCoreModule */],
            ],
            declarations: [
                //all pages goes here
                __WEBPACK_IMPORTED_MODULE_3__landing_landing_component__["a" /* LandingComponent */],
                __WEBPACK_IMPORTED_MODULE_4__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_5__sample_sample_component__["a" /* SampleComponent */],
            ],
            exports: []
        })
    ], PagesModule);
    return PagesModule;
}());



/***/ }),

/***/ "../../../../../src/app/pages/sample/sample.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Main container-->\n<div class=\"container mt-nav\">\n\n    <!--Grid row-->\n    <div class=\"row\">\n\n    <!--Grid column-->\n    <div class=\"col-md-7 mb-4\">\n\n        <div class=\"view overlay hm-white-light z-depth-1-half\">\n          <img src=\"https://mdbootstrap.com/img/Photos/Slides/img%20(70).jpg\" class=\"img-fluid \" alt=\"\">\n          <div class=\"mask\"></div>\n        </div>\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-md-5 mb-4\">\n\n            <h2>Some awesome heading</h2>\n            <hr>\n            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis pariatur quod ipsum atque quam dolorem\n                voluptate officia sunt placeat consectetur alias fugit cum praesentium ratione sint mollitia, perferendis\n                natus quaerat!</p>\n            <a href=\"https://mdbootstrap.com/\" class=\"btn btn-primary\">Get it now!</a>\n\n        </div>\n        <!--Grid column-->\n\n\n    </div>\n    <!--Grid row-->\n\n    <!--Grid row-->\n    <div class=\"row\">\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-12 mb-4\">\n\n            <!--Card-->\n            <div class=\"card\">\n\n                <!--Card image-->\n                <div class=\"view overlay hm-white-slight\">\n                    <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(72).jpg\" class=\"img-fluid\" alt=\"\">\n                    <a href=\"#\">\n                        <div class=\"mask\"></div>\n                    </a>\n                </div>\n\n                <!--Card content-->\n                <div class=\"card-body\">\n                    <!--Title-->\n                    <h4 class=\"card-title\">Card title</h4>\n                    <!--Text-->\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    <a href=\"#\" class=\"btn btn-primary\">Button</a>\n                </div>\n\n            </div>\n            <!--/.Card-->\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-6 mb-4\">\n\n            <!--Card-->\n            <div class=\"card\">\n\n                <!--Card image-->\n                <div class=\"view overlay hm-white-slight\">\n                    <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(74).jpg\" class=\"img-fluid\" alt=\"\">\n                    <a href=\"#\">\n                        <div class=\"mask\"></div>\n                    </a>\n                </div>\n\n                <!--Card content-->\n                <div class=\"card-body\">\n                    <!--Title-->\n                    <h4 class=\"card-title\">Card title</h4>\n                    <!--Text-->\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    <a href=\"#\" class=\"btn btn-primary\">Button</a>\n                </div>\n\n            </div>\n            <!--/.Card-->\n\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-lg-4 col-md-6\">\n\n            <!--Card-->\n            <div class=\"card\">\n\n                <!--Card image-->\n                <div class=\"view overlay hm-white-slight\">\n                    <img src=\"https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20(75).jpg\" class=\"img-fluid\" alt=\"\">\n                    <a href=\"#\">\n                        <div class=\"mask\"></div>\n                    </a>\n                </div>\n\n                <!--Card content-->\n                <div class=\"card-body\">\n                    <!--Title-->\n                    <h4 class=\"card-title\">Card title</h4>\n                    <!--Text-->\n                    <p class=\"card-text\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\n                    <a href=\"#\" class=\"btn btn-primary\">Button</a>\n                </div>\n\n            </div>\n            <!--/.Card-->\n\n        </div>\n        <!--Grid column-->\n\n    </div>\n    <!--Grid row-->\n\n\n</div>\n<!--Main container-->\n"

/***/ }),

/***/ "../../../../../src/app/pages/sample/sample.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n* @Author: Mengwei Choong\n* @Date:   2018-01-23 23:56:14\n* @Last Modified by:   Mengwei Choong\n* @Last Modified time: 2018-01-24 14:58:30\n*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/pages/sample/sample.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SampleComponent; });
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

var SampleComponent = /** @class */ (function () {
    function SampleComponent() {
    }
    SampleComponent.prototype.ngOnInit = function () {
    };
    SampleComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-sample',
            template: __webpack_require__("../../../../../src/app/pages/sample/sample.component.html"),
            styles: [__webpack_require__("../../../../../src/app/pages/sample/sample.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], SampleComponent);
    return SampleComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Footer-->\n<footer *ngIf=\"!isAdmin\" class=\"page-footer center-on-small-only unique-color-dark pt-0\">\n  <!-- Social buttons -->\n  <div class=\"primary-color\">\n    <div class=\"container\">\n      <!--Grid row-->\n      <div class=\"row py-4 d-flex align-items-center\">\n\n        <!--Grid column-->\n        <div class=\"col-md-6 col-lg-5\">\n          <h6 class=\"mb-0 white-text my-2\">Get connected with us on social networks!</h6>\n        </div>\n        <!--Grid column-->\n\n        <!--Grid column-->\n        <div class=\"col-md-6 col-lg-7 text-md-right\">\n          <!--Facebook-->\n          <a class=\"icons-sm fb-ic\"><i class=\"fa fa-facebook white-text mr-4\"> </i></a>\n          <!--Twitter-->\n          <a class=\"icons-sm tw-ic\"><i class=\"fa fa-twitter white-text mr-4\"> </i></a>\n          <!--Google +-->\n          <a class=\"icons-sm gplus-ic\"><i class=\"fa fa-google-plus white-text mr-4\"> </i></a>\n          <!--Linkedin-->\n          <a class=\"icons-sm li-ic\"><i class=\"fa fa-linkedin white-text mr-4\"> </i></a>\n          <!--Instagram-->\n          <a class=\"icons-sm ins-ic\"><i class=\"fa fa-instagram white-text mr-4\"> </i></a>\n        </div>\n        <!--Grid column-->\n\n      </div>\n\n      <!--Grid row-->\n    </div>\n  </div>\n  <!-- Social buttons -->\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(_router) {
        this._router = _router;
        this.router = _router;
    }
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]) {
                _this.isAdmin = _this.router.isActive('/admin', false);
            }
        });
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/shared/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<!--Main Navigation-->\n<div *ngIf=\"!isAdmin\">\n  <!--Navbar-->\n  <nav class=\"navbar navbar-expand-lg navbar-dark fixed-top\" [ngClass]=\"{'scrolling-navbar': isLanding, 'indigo': !isLanding}\">\n    <div class=\"container\">\n\n      <!-- Navbar brand -->\n      <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n\n      <!-- Collapse button -->\n      <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n      aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button>\n\n      <!-- Collapsible content -->\n      <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n        <!-- Links -->\n        <ul class=\"navbar-nav mr-auto smooth-scroll\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#intro\">Home</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" routerLink=\"/user/login\" routerLinkActive=\"active\">Login</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#examples\">Examples</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#gallery\">Gallery</a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\" href=\"#contact\">Contact</a>\n          </li>\n        </ul>\n        <!-- Links -->\n\n        <!-- Social Icon  -->\n        <ul class=\"navbar-nav nav-flex-icons\">\n          <li class=\"nav-item\">\n            <a class=\"nav-link\"><i class=\"fa fa-facebook\"></i></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\"><i class=\"fa fa-twitter\"></i></a>\n          </li>\n          <li class=\"nav-item\">\n            <a class=\"nav-link\"><i class=\"fa fa-instagram\"></i></a>\n          </li>\n        </ul>\n      </div>\n      <!-- Collapsible content -->\n\n    </div>\n  </nav>\n  <!--/.Navbar-->\n\n  <!--Main Navigation-->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n* @Author: Mengwei Choong\n* @Date:   2018-01-23 18:36:25\n* @Last Modified by:   Mengwei Choong\n* @Last Modified time: 2018-01-24 20:47:31\n*/\n.top-nav-collapse {\n  background-color: #24355C; }\n.navbar {\n  min-height: 50px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(_router) {
        this._router = _router;
        this.router = _router;
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* NavigationEnd */]) {
                _this.isLanding = _this.router.isActive('/', true);
                _this.isAdmin = _this.router.isActive('/admin', false);
            }
        });
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/navbar/navbar.component.scss")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__test_test_component__ = __webpack_require__("../../../../../src/app/shared/test/test.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__ = __webpack_require__("../../../../../src/app/shared/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__("../../../../@ngx-translate/core/@ngx-translate/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forChild(),
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_5__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */],
            ],
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "../../../../../src/app/shared/test/test.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  TTTT {{str}} TTTT\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/shared/test/test.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/shared/test/test.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TestComponent; });
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

var TestComponent = /** @class */ (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], TestComponent.prototype, "str", void 0);
    TestComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-test',
            template: __webpack_require__("../../../../../src/app/shared/test/test.component.html"),
            styles: [__webpack_require__("../../../../../src/app/shared/test/test.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestComponent);
    return TestComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false,
    googleMapApiKey: 'AIzaSyDiPfGjTZJoTeKC0cdgz5sDHdEkynZkqng',
    websocketHost: "localhost:8080",
    mode: "dev",
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map