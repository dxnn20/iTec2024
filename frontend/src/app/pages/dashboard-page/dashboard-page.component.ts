import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {App} from "../../App";
import {SecurityService} from "../../security/security.service";
import {animate, state, style, transition, trigger} from '@angular/animations';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatDialog} from "@angular/material/dialog";
import {DialogComponent} from "../../pages-components/dialog/dialog.component";
import {interval} from "rxjs";

import {EditAppDialogComponent} from "../../pages-components/edit-app-dialog/edit-app-dialog.component";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [
    MatHeaderRow,
    MatRow,
    MatCell,
    MatColumnDef,
    MatIcon,
    MatCellDef,
    MatHeaderCell,
    MatTable,
    MatRowDef,
    MatHeaderRowDef,
    MatIconButton,
    MatHeaderCellDef,
    MatIconButton,
    MatIconButton,
    MatButton,
    DialogComponent
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed,void', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit {

  apps: App[] = []

  displayedColumns: string[] = ['id', 'name', 'status', 'seconds', 'edit']
  dataSource = new MatTableDataSource(this.apps)

  constructor(private http: HttpClient, private route: ActivatedRoute, private securityService: SecurityService, protected dialog: MatDialog, private router: Router) {
    interval(1000).subscribe(() => {
      this.refresh()
    })
  }

  ngOnInit() {
    interval(1000).subscribe(() => {
      this.refresh()
    })
  }

  // protected readonly apps = apps;
  addApp(): void {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  refresh() {
    this.http.get("http://localhost:1201/app/getAllByUserId/" + this.securityService.getId()).subscribe(
      (data: any) => {
        this.dataSource = data

        for (let i = 0; i < data.length; i++)
          if (data[i].status == null)
            data[i].status = "DOWN"

      }
    )
  }

  onClick(app: App) {
    console.log(app)
    this.router.navigateByUrl('/app-add-endpoint/' + app.id).then(r => console.log(r))
  }

  editApp(element:App, event: Event) {
    event.stopPropagation()
    this.dialog.open(EditAppDialogComponent, {data: element});

  }
}
