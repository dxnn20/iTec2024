import {Component, Input} from '@angular/core';
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {HttpClient} from "@angular/common/http";
import {SecurityService} from "../../security/security.service";
import {App} from "../../App";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-add-endpoint',
  standalone: true,
  imports: [
    MatLabel,
    MatIcon,
    MatInput,
    MatHint,
    MatSuffix,
    MatFormField
  ],
  templateUrl: './add-endpoint.component.html',
  styleUrl: './add-endpoint.component.scss'
})
export class AddEndpointComponent {

  app: App = new App();
  constructor(private http: HttpClient, securityService: SecurityService, router: Router, private route: ActivatedRoute) {
    this.http.get('http://localhost:1201/endpoint/getAllByAppId' + this.route.snapshot.params['id']).subscribe(
      (data: any) => {
        this.app = data;
      }
    )
  }
}
