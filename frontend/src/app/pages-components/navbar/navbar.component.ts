import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {SecurityService} from "../../security/security.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    NgIf
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(http: HttpClient, private securityService: SecurityService) {
  }

  isLogged(){
    return this.securityService.isAuthenticated();
  }

}
