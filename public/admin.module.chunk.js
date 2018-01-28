webpackJsonp(["admin.module" ],{

/***/ "../../../../../src/app/features/admin/admin-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2____ = __webpack_require__("../../../../../src/app/features/admin/index.ts");
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
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }
];
var AdminRoutingModule = /** @class */ (function () {
    function AdminRoutingModule() {
    }
    AdminRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(routes)],
        })
    ], AdminRoutingModule);
    return AdminRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/admin/admin.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/features/admin/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_routing_module__ = __webpack_require__("../../../../../src/app/features/admin/admin-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_sidebar__ = __webpack_require__("../../../../ng-sidebar/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng_sidebar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng_sidebar__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AdminModule = /** @class */ (function () {
    function AdminModule() {
    }
    AdminModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_3__admin_routing_module__["a" /* AdminRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_4_ng_sidebar__["SidebarModule"],
            ],
            declarations: [__WEBPACK_IMPORTED_MODULE_2__dashboard_dashboard_component__["a" /* DashboardComponent */]]
        })
    ], AdminModule);
    return AdminModule;
}());



/***/ }),

/***/ "../../../../../src/app/features/admin/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Container for sidebar(s) + page content -->\n<ng-sidebar-container class='mt-nav container'>\n\n  <!-- A sidebar -->\n  <ng-sidebar\n    [opened]=\"_opened\"\n    [mode]=\"'push'\"\n    [autoCollapseWidth]=\"500\"\n    [position]=\"'left'\"\n    [dock]=\"true\">\n    <div id=\"slide-out\" class=\"side-nav fixed\">\n      <ul class=\"custom-scrollbar list-unstyled\">\n        <!--Search Form-->\n        <li>\n          <form class=\"search-form\" role=\"search\">\n            <div class=\"form-group waves-light\">\n              <input type=\"text\" class=\"form-control\" placeholder=\"Search\">\n            </div>\n          </form>\n        </li>\n        <!--/.Search Form-->\n        <!-- Side navigation links -->\n        <li>\n          <ul class=\"collapsible collapsible-accordion\">\n            <li>\n              <a class=\"collapsible-header waves-effect arrow-r\">\n                <i class=\"fa fa-chevron-right\"></i> Submit blog\n                <i class=\"fa fa-angle-down rotate-icon\"></i>\n              </a>\n              <div class=\"collapsible-body\">\n                <ul>\n                  <li>\n                    <a href=\"#\" class=\"waves-effect\">Submit listing</a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"waves-effect\">Registration form</a>\n                  </li>\n                </ul>\n              </div>\n            </li>\n            <li>\n              <a class=\"collapsible-header waves-effect arrow-r\">\n                <i class=\"fa fa-hand-pointer-o\"></i> Instruction\n                <i class=\"fa fa-angle-down rotate-icon\"></i>\n              </a>\n              <div class=\"collapsible-body\">\n                <ul>\n                  <li>\n                    <a href=\"#\" class=\"waves-effect\">For bloggers</a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"waves-effect\">For authors</a>\n                  </li>\n                </ul>\n              </div>\n            </li>\n            <li>\n              <a class=\"collapsible-header waves-effect arrow-r\">\n                <i class=\"fa fa-eye\"></i> About\n                <i class=\"fa fa-angle-down rotate-icon\"></i>\n              </a>\n              <div class=\"collapsible-body\">\n                <ul>\n                  <li>\n                    <a href=\"#\" class=\"waves-effect\">Introduction</a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"waves-effect\">Monthly meetings</a>\n                  </li>\n                </ul>\n              </div>\n            </li>\n            <li>\n              <a class=\"collapsible-header waves-effect arrow-r\">\n                <i class=\"fa fa-envelope-o\"></i> Contact me\n                <i class=\"fa fa-angle-down rotate-icon\"></i>\n              </a>\n              <div class=\"collapsible-body\">\n                <ul>\n                  <li>\n                    <a href=\"#\" class=\"waves-effect\">FAQ</a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"waves-effect\">Write a message</a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"waves-effect\">FAQ</a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"waves-effect\">Write a message</a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"waves-effect\">FAQ</a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"waves-effect\">Write a message</a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"waves-effect\">FAQ</a>\n                  </li>\n                  <li>\n                    <a href=\"#\" class=\"waves-effect\">Write a message</a>\n                  </li>\n                </ul>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <!--/. Side navigation links -->\n      </ul>\n    </div>\n    <!--/. Sidebar navigation -->\n  </ng-sidebar>\n\n  <!-- Page content -->\n  <div ng-sidebar-content>\n    <button class=\"btn btn-primary\" (click)=\"_toggleSidebar()\">Toggle sidebar</button>\n  </div>\n\n</ng-sidebar-container>\n"

/***/ }),

/***/ "../../../../../src/app/features/admin/dashboard/dashboard.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*\n* @Author: Mengwei Choong\n* @Date:   2018-01-24 12:58:29\n* @Last Modified by:   Mengwei Choong

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/features/admin/dashboard/dashboard.component.ts":
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
        this._opened = true;
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent.prototype._toggleSidebar = function () {
        this._opened = !this._opened;
    };
    DashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__("../../../../../src/app/features/admin/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("../../../../../src/app/features/admin/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/features/admin/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/features/admin/dashboard/dashboard.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard_component__["a"]; });



/***/ })

});
//# sourceMappingURL=admin.module.chunk.js.map