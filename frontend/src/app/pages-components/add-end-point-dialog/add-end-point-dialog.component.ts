import { Component } from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {FormsModule} from "@angular/forms";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Endpoint} from "../../security/endpoint";
import {HttpClient} from "@angular/common/http";
import {SecurityService} from "../../security/security.service";
import {MatOption, MatSelect} from "@angular/material/select";
import {ActivatedRoute, ActivationEnd, Route, Router} from "@angular/router";

@Component({
  selector: 'app-add-end-point-dialog',
  standalone: true,
  imports: [
    MatDialogActions,
    MatButton,
    MatDialogContent,
    MatDialogTitle,
    FormsModule,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    MatLabel
  ],
  templateUrl: './add-end-point-dialog.component.html',
  styleUrl: './add-end-point-dialog.component.scss'
})
export class AddEndPointDialogComponent {

  protected methods: string[] = ['GET', 'POST', 'PUT', 'DELETE'];

  endPoint: Endpoint = new Endpoint();
  id: string = '';

  ngOnInit() {
    this.id = window.location.pathname.split('/')[2];

  }

  constructor(public dialogRef: MatDialogRef<AddEndPointDialogComponent>, private http: HttpClient, private securityService: SecurityService, protected activeRoute: ActivatedRoute ) {
    console.log(this.activeRoute);
  }
  submit(){
    this.http.post('http://localhost:1201/endpoint/createByAppId/' + this.id, this.endPoint).subscribe()
    this.dialogRef.close();
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

}
