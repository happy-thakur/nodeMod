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
var router_1 = require("@angular/router");
var Breadcrumb = (function () {
    function Breadcrumb() {
    }
    return Breadcrumb;
}());
exports.Breadcrumb = Breadcrumb;
var BreadcrumbService = (function () {
    function BreadcrumbService(router) {
        var _this = this;
        this.router = router;
        this.onBreadcrumbChange = new core_1.EventEmitter(false);
        this.breadcrumbs = [];
        this.router.events.subscribe(function (routeEvent) {
            if (!(routeEvent instanceof router_1.NavigationEnd))
                return;
            var route = _this.router.routerState.root.snapshot;
            var url = "";
            _this.breadcrumbs = [];
            while (route.children.length) {
                route = route.firstChild;
                if (!route.routeConfig.path)
                    continue;
                url += "/" + _this.createUrl(route);
                if (!route.data["breadcrumb"])
                    continue;
                _this.breadcrumbs.push(_this.createBreadcrumb(route, url));
            }
            _this.onBreadcrumbChange.emit(_this.breadcrumbs);
        });
    }
    BreadcrumbService.prototype.changeBreadcrumb = function (route, name) {
        var rootUrl = this.createRootUrl(route);
        var breadcrumb = this.breadcrumbs.find(function (bc) { return bc.url === rootUrl; });
        breadcrumb.displayName = name;
        this.onBreadcrumbChange.emit(this.breadcrumbs);
    };
    BreadcrumbService.prototype.createBreadcrumb = function (route, url) {
        return {
            displayName: route.data["breadcrumb"],
            terminal: route.children.length === 0 || !route.firstChild.routeConfig.path,
            url: url
        };
    };
    BreadcrumbService.prototype.createUrl = function (route) {
        return route.url.map(function (s) { return s.toString(); }).join('/');
    };
    BreadcrumbService.prototype.createRootUrl = function (route) {
        var url = "";
        var next = route.root;
        while (next.firstChild !== route) {
            next = next.firstChild;
            if (!next.routeConfig.path)
                continue;
            url += "/" + this.createUrl(next);
        }
        url += "/" + this.createUrl(route);
        return url;
    };
    BreadcrumbService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router])
    ], BreadcrumbService);
    return BreadcrumbService;
}());
exports.BreadcrumbService = BreadcrumbService;
//# sourceMappingURL=breadcrumb.service.js.map