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
import {MatDivider} from "@angular/material/divider";
import {last} from "rxjs";

@Component({
  selector: 'app-end-point-view',
  standalone: true,
  imports: [
    MatDialogContent,
    MatDialogTitle,
    MatDialogActions,
    MatButton,
    MatDialogClose,
    HistoryBarComponent,
    MatDivider
  ],
  templateUrl: './end-point-view.component.html',
  styleUrl: './end-point-view.component.scss'
})
export class EndPointViewComponent {
  endpoint: Endpoint = new Endpoint()
  statusWord: string

  constructor(@Inject(MAT_DIALOG_DATA) data: Endpoint) {
    this.endpoint = data;
    this.statusWord = this.getSimpleStatus()
  }

  ngOnInit() {
  }

  getSimpleStatus(): string {
    if (this.endpoint.status == null) {
      console.log('status is null')
      return 'Down';
    }
    switch (this.endpoint.status.slice(-1)) {
      case "g":
        return "Ok";
      case 'y':
        return 'Unstable';
      case 'r':
      default:
        return 'Down';
    }
  }

  getPercentageUp(): string {
    if (!this.endpoint.status) {
      return '0'; // If no status history, return 0%
    }
    const statusArray = this.endpoint.status.split('');
    const upCount = statusArray.filter(char => char.toLowerCase() === 'g').length;
    const totalCount = statusArray.length;
    const percentage = (upCount / totalCount) * 100;
    return percentage.toFixed(2);
  }
}
