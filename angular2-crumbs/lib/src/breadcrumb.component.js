"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var breadcrumb_service_1 = require("./breadcrumb.service");
var BreadcrumbComponent = (function () {
    function BreadcrumbComponent(breadcrumbService) {
        var _this = this;
        this.breadcrumbService = breadcrumbService;
        breadcrumbService.onBreadcrumbChange.subscribe(function (crumbs) {
            _this.breadcrumbs = crumbs;
        });
    }
    BreadcrumbComponent = __decorate([
        core_1.Component({
            selector: "breadcrumb",
            template: "<div #template>\n    <ng-content></ng-content>\n</div>    \n<div class=\"container\" *ngIf=\"template.children.length == 0\">\n    <div class=\"nav-wrapper\">\n        <div class=\"breadcrumb\" *ngFor=\"let route of breadcrumbs\" [ngClass]=\"{'last': route.terminal}\">\n            <!-- disable link of last item -->\n            <a href=\"\" *ngIf=\"!route.terminal\" [routerLink]=\"[route.url]\">{{ route.displayName }}</a>\n            <span *ngIf=\"route.terminal\">{{ route.displayName }}</span>\n        </div>\n    </div>\n</div>"
        }),
        __metadata("design:paramtypes", [breadcrumb_service_1.BreadcrumbService])
    ], BreadcrumbComponent);
    return BreadcrumbComponent;
}());
exports.BreadcrumbComponent = BreadcrumbComponent;
//# sourceMappingURL=breadcrumb.component.js.map