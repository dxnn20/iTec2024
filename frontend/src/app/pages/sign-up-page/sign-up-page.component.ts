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
import {HomePageComponent} from "../home-page/home-page.component";
import {User} from "../../security/User";

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
    RouterLink
  ],
  templateUrl: './sign-up-page.component.html',
  styleUrl: './sign-up-page.component.scss'
})
export class SignUpPageComponent {
  user : User = new User()
  constructor(private http: HttpClient, private router: Router, private securityService: SecurityService) {
  }

  signUp()
  {
    console.log(this.user);
    this.http.post("http://localhost:1201/security/sign-up",this.user).subscribe();
  }
}
