import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {securityInterceptorInterceptor} from "./security/security-interceptor.interceptor";
import {SecurityService} from "./security/security.service";
import {SignUpPageComponent} from "./pages/sign-up-page/sign-up-page.component";

export const routes: Routes = [
  {path: '' , component: LoginPageComponent},
  {path: 'home-page' , component: HomePageComponent, canActivate: [SecurityService]},
  {path: 'login-page' , component: LoginPageComponent},
  {path: 'sign-up-page' , component: SignUpPageComponent},
];
