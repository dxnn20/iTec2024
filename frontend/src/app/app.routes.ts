import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {securityInterceptorInterceptor} from "./security/security-interceptor.interceptor";
import {SecurityService} from "./security/security.service";

export const routes: Routes = [
  {path: '' , component: LoginPageComponent},
  {path: 'home-page' , component: HomePageComponent, canActivate: [securityInterceptorInterceptor]}
];
