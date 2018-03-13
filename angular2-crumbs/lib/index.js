"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var breadcrumb_component_1 = require("./src/breadcrumb.component");
var breadcrumb_service_1 = require("./src/breadcrumb.service");
__export(require("./src/breadcrumb.component"));
__export(require("./src/breadcrumb.service"));
var BreadcrumbModule = (function () {
    function BreadcrumbModule() {
    }
    BreadcrumbModule_1 = BreadcrumbModule;
    BreadcrumbModule.forRoot = function () {
        return {
            ngModule: BreadcrumbModule_1,
            providers: [breadcrumb_service_1.BreadcrumbService]
        };
    };
    BreadcrumbModule = BreadcrumbModule_1 = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                router_1.RouterModule
            ],
            declarations: [breadcrumb_component_1.BreadcrumbComponent],
            exports: [breadcrumb_component_1.BreadcrumbComponent],
            providers: [breadcrumb_service_1.BreadcrumbService]
        })
    ], BreadcrumbModule);
    return BreadcrumbModule;
    var BreadcrumbModule_1;
}());
exports.BreadcrumbModule = BreadcrumbModule;
//# sourceMappingURL=index.js.map