import { EventEmitter } from "@angular/core";
import { Router, ActivatedRouteSnapshot } from "@angular/router";
export declare class Breadcrumb {
    displayName: string;
    terminal: boolean;
    url: string;
}
export declare class BreadcrumbService {
    private router;
    onBreadcrumbChange: EventEmitter<Breadcrumb[]>;
    private breadcrumbs;
    constructor(router: Router);
    changeBreadcrumb(route: ActivatedRouteSnapshot, name: string): void;
    private createBreadcrumb(route, url);
    private createUrl(route);
    private createRootUrl(route);
}
