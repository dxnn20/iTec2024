import {Component, Input} from '@angular/core';
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {HttpClient} from "@angular/common/http";
import {SecurityService} from "../../security/security.service";
import {App} from "../../App";
import {ActivatedRoute, Router} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {Endpoint} from "../../security/endpoint";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-add-endpoint',
  standalone: true,
  imports: [
    MatLabel,
    MatIcon,
    MatInput,
    MatHint,
    MatSuffix,
    MatFormField,
    MatButton,
    NgForOf,
    FormsModule
  ],
  templateUrl: './add-endpoint.component.html',
  styleUrl: './add-endpoint.component.scss'
})
export class AddEndpointComponent {

  app: App = new App();

  protected endPoint: Endpoint = new Endpoint()

  constructor(private http: HttpClient, securityService: SecurityService, router: Router, private route: ActivatedRoute) {
    this.refresh()
  }

  refresh() {
    this.http.get('http://localhost:1201/endpoint/getAllByAppId/' + this.route.snapshot.params['id']).subscribe(
      (data: any) => {
        this.app = data;
      }
    )
  }

  submit(){
    console.log(this.endPoint)
    if(this.endPoint != null) {
      // this.app.endpoint.push(this.endPoint)
      this.http.post('http://localhost:1201/endpoint/createByAppId/' + this.route.snapshot.params['id'], this.endPoint).subscribe()
      this.refresh()
    }
    else
      alert("Please add a valid endpoint")

  }
}
