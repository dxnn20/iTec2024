import {inject, Injectable} from '@angular/core';
import {SecurityService} from './security.service';
import {ActivatedRouteSnapshot, CanActivateFn, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {of} from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root',
})
class AuthGuard {
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return inject(SecurityService).isAuthenticated();
  }
}

export const isAdminGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {

  if (!inject(SecurityService).isAuthenticated()) {
    return inject(Router).parseUrl('/login-page');
  }

  return inject(AuthGuard).canActivate(route, state)
}
