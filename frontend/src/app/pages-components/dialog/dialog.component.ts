import {Component} from '@angular/core';
import {MatDialogActions, MatDialogContent, MatDialogRef, MatDialogTitle} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {HttpClient} from "@angular/common/http";
import {User} from "../../security/User";
import {App} from "../../App";
import {FormsModule} from "@angular/forms";
import {SecurityService} from "../../security/security.service";

class DialogContentComponent {
}

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogActions,
    MatButton,
    MatFormField,
    MatInput,
    MatDialogTitle,
    FormsModule
  ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  protected app: App = new App();

  constructor(public dialogRef: MatDialogRef<DialogContentComponent>, private http: HttpClient, private securityService: SecurityService) {
  }

  closeDialog(): void {
    this.dialogRef.close();
  }

  submitDialog(): void {
    console.log(this.app)
    this.http.post('http://localhost:1201/app/create/' + this.securityService.getId(), this.app).subscribe()
    this.dialogRef.close();

  }
}
