import { Component } from '@angular/core';
import {Route, RouterLink} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {SecurityService} from "../../security/security.service";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {DashboardPageComponent} from "../dashboard-page/dashboard-page.component";
import {HomePageComponent} from "../home-page/home-page.component";

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
    MatInput,
    MatButton,
    MatFormField,
    MatOption,
    MatSelect,
    MatInputModule,
    MatSelectModule,
    MatFormFieldModule,
    HomePageComponent,
    RouterLink,
    DashboardPageComponent
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  username : string
  password : string
  role : string
  constructor(private http: HttpClient, private router: Router, private securityService: SecurityService) {
  }

  login()
  {
    const formData : FormData=new FormData();
    formData.append('username',this.username);
    formData.append('password',this.password);
    this.http.post('http://localhost:1201/login',formData).subscribe(
      (response: any)=>{
        if(response.loggedin != 'no') {
          this.securityService.setUser(response);
          this.router.navigateByUrl('/dashboard-page').then(r => console.log('Navigated to dashboard'));
        }
        else {
          alert("Invalid credentials");
        }

      }
    );
  }
}
