import { Routes } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {securityInterceptorInterceptor} from "./security/security-interceptor.interceptor";
import {SecurityService} from "./security/security.service";
import {SignUpPageComponent} from "./pages/sign-up-page/sign-up-page.component";
import {isAdminGuard} from "./security/auth-guard.service";
import {DashboardPageComponent} from "./pages/dashboard-page/dashboard-page.component";
import {AddEndpointComponent} from "./pages/add-endpoint/add-endpoint.component";
import {ViewEndpointsComponent} from "./pages/view-endpoints/view-endpoints.component";
import {ReportsPageComponent} from "./pages/reports-page/reports-page.component";

export const routes: Routes = [
  {path: '' , component: HomePageComponent},
  {path: 'home-page' , component: HomePageComponent},
  {path: 'login-page' , component: LoginPageComponent},
  {path: 'sign-up-page' , component: SignUpPageComponent},
  {path: 'dashboard-page' , component: DashboardPageComponent, canActivate: [isAdminGuard]},
  {path: 'app-add-endpoint/:id' , component: AddEndpointComponent, canActivate: [isAdminGuard]},
  {path: 'app-add-endpoint/' , component: AddEndpointComponent, canActivate: [isAdminGuard]},
  {path: 'view-endpoints/:id' , component: ViewEndpointsComponent},
  {path: 'reports-page', component: ReportsPageComponent, canActivate: [isAdminGuard]},
];
