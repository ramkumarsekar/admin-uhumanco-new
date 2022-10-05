import { Injectable } from "@angular/core";
import {
    ActivatedRouteSnapshot,
    CanActivate,
    Router,
    RouterStateSnapshot,
    UrlTree
} from "@angular/router";

@Injectable({
    providedIn : 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private router: Router) { }
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): boolean | Promise<boolean> {
        const token: string = localStorage.getItem('is_logged');
        var isAuthenticated = token ? true : false;
        if (!isAuthenticated) {
            this.router.navigate(['/']);
        }
        return isAuthenticated;
    }
}
