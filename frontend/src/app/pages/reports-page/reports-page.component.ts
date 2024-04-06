import {Component} from '@angular/core';
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {Endpoint} from "../../security/endpoint";
import {HttpClient} from "@angular/common/http";
import {SecurityService} from "../../security/security.service";

@Component({
  selector: 'app-reports-page',
  standalone: true,
  imports: [
    MatTable,
    MatRow,
    MatHeaderCell,
    MatColumnDef,
    MatCell,
    MatCellDef,
    MatHeaderCellDef,
    MatHeaderRow,
    MatRowDef,
    MatHeaderRowDef
  ],
  templateUrl: './reports-page.component.html',
  styleUrl: './reports-page.component.scss'
})
export class ReportsPageComponent {

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource: Endpoint[] = [];

  constructor(private http: HttpClient, private securityService: SecurityService) {
    this.refresh()
    console.log(this.dataSource)
  }

  refresh() {
    // this.http.get('http://localhost:8080/endpoint/getAllBuggedByUserId' + this.securityService.getId()).subscribe((data: any) => {
    //   this.dataSource = data;
    // })
    this.http.get('http://localhost:8080/endpoint/getAllBuggedByUserId/' + 1).subscribe((data: any) => {
      this.dataSource = data;
    })

  }
}
