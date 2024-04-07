import {Component, Inject} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContainer,
  MatDialogContent, MatDialogRef,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {HttpClient} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/autocomplete";
import {MatSelect} from "@angular/material/select";
import {Endpoint} from "../../security/endpoint";
import {MatLabel} from "@angular/material/form-field";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit-endpoint',
  standalone: true,
  imports: [
    MatDialogContainer,
    MatDialogClose,
    MatButton,
    MatDialogActions,
    MatDialogContent,
    MatDialogTitle,
    FormsModule,
    MatFormField,
    MatInput,
    MatOption,
    MatSelect,
    MatLabel,
  ],
  templateUrl: './edit-endpoint.component.html',
  styleUrl: './edit-endpoint.component.scss'
})
export class EditEndpointComponent {

  protected methods: string[] = ['GET', 'POST', 'PUT', 'DELETE'];
  protected endPoint: Endpoint = new Endpoint();

  constructor(public dialogRef: MatDialogRef<EditEndpointComponent>, private http: HttpClient,@Inject(MAT_DIALOG_DATA) endPoint: Endpoint, protected router: Router) {

    this.endPoint = endPoint;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  submit() {
    this.http.put('http://localhost:1201/endpoint/update/' + this.router.url.split('/')[2], this.endPoint ).subscribe(
      (data: any) => {
        this.closeDialog();
      }
    )
  }
}
