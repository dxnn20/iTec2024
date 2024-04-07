import { Component } from '@angular/core';
import {MatButton, MatIconButton} from "@angular/material/button";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef, MatTable
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {Endpoint} from "../../security/endpoint";
import {HttpClient} from "@angular/common/http";
import {SecurityService} from "../../security/security.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatDialog} from "@angular/material/dialog";
import {EndPointViewComponent} from "../../pages-components/end-point-view/end-point-view.component";
import {interval} from "rxjs";

@Component({
  selector: 'app-view-endpoints',
  standalone: true,
  imports: [
    MatButton,
    MatCell,
    MatCellDef,
    MatColumnDef,
    MatHeaderCell,
    MatHeaderRow,
    MatHeaderRowDef,
    MatIcon,
    MatRow,
    MatRowDef,
    MatTable,
    MatHeaderCellDef,
    MatIconButton
  ],
  templateUrl: './view-endpoints.component.html',
  styleUrl: './view-endpoints.component.scss'
})
export class ViewEndpointsComponent {
  dataSource : Endpoint[] = []

  protected endPoint: Endpoint = new Endpoint()
  displayedColumns: string[] =[ 'path', 'method', 'duration', 'actions'];

  ngOnInit() {
    interval(1000).subscribe(() => {
      this.refresh()
    })
  }

  constructor(private http: HttpClient, securityService: SecurityService, private router: Router, private route: ActivatedRoute, protected dialog: MatDialog ) {
    this.refresh()
  }

  refresh() {
    this.http.get('http://localhost:1201/endpoint/getAllByAppId/' + this.route.snapshot.params['id']).subscribe(
      (data: any) => {
        this.dataSource = data;
      }
    )
  }

  open( endpoint: Endpoint ): void {
    const dialogRef = this.dialog.open(EndPointViewComponent, {
      data: endpoint}
    );

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  onDeleteEndpoint(element: Endpoint) {
    this.http.delete('http://localhost:1201/endpoint/delete/' + element.id).subscribe(
      (data: any) => {
        this.refresh()
      }
    )
  }

  report(row: Endpoint) {
    this.http.post('http://localhost:1201/endpoint/reportBugById/' + row.id, {}).subscribe()
  }
}
