import {Component, Inject, Input} from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogTitle
} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";
import {AddEndPointDialogComponent} from "../add-end-point-dialog/add-end-point-dialog.component";
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {HistoryBarComponent} from "../history-bar/history-bar.component";
import {Endpoint} from "../../security/endpoint";

@Component({
  selector: 'app-end-point-view',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    HistoryBarComponent
  ],
  templateUrl: './end-point-view.component.html',
  styleUrl: './end-point-view.component.scss'
})
export class EndPointViewComponent {
  endpoint : Endpoint = new Endpoint()

  constructor(@Inject(MAT_DIALOG_DATA) data: Endpoint) {
    this.endpoint= data;
  }

  ngOnInit() {
    console.log(this.endpoint.status)
  }


}
