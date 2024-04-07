import {Component, Inject} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {App} from "../../App";
import {HttpClient} from "@angular/common/http";
import {SecurityService} from "../../security/security.service";

@Component({
  selector: 'app-edit-app-dialog',
  standalone: true,
    imports: [
        FormsModule,
        MatButton,
        MatDialogActions,
        MatDialogContent,
        MatDialogTitle,
        MatFormField,
        MatInput,
        MatLabel
    ],
  templateUrl: './edit-app-dialog.component.html',
  styleUrl: './edit-app-dialog.component.scss'
})
export class EditAppDialogComponent {

  app: App = new App();

  constructor( protected dialogRef: MatDialogRef<EditAppDialogComponent>, protected http: HttpClient, protected securityService: SecurityService, @Inject(MAT_DIALOG_DATA) public data: any){
    this.app = data;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  submitDialog() {
    this.http.put('http://localhost:1201/app/update', this.app).subscribe();

  }
}
