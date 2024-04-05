import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {securityInterceptorInterceptor} from "./security/security-interceptor.interceptor";
import {SecurityService} from "./security/security.service";
import {SignUpPageComponent} from "./pages/sign-up-page/sign-up-page.component";
import {isAdminGuard} from "./security/auth-guard.service";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";

export const routes: Routes = [
  {path: '' , component: LoginPageComponent},
  {path: 'home-page' , component: HomePageComponent},
  {path: 'login-page' , component: LoginPageComponent},
  {path: 'sign-up-page' , component: SignUpPageComponent},
  {path: 'dashboard-page' , component: DashboardPageComponent, canActivate: [isAdminGuard]},

];
