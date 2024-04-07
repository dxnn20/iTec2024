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
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {interval} from "rxjs";

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
    MatHeaderRowDef,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './reports-page.component.html',
  styleUrl: './reports-page.component.scss'
})
export class ReportsPageComponent {

  displayedColumns: string[] = ['path', 'duration', 'bugged', 'method', "solved"]
  dataSource: Endpoint[]

  ngOnInit(){
    interval(1000).subscribe(() => {
      this.refresh()
    })
  }

  constructor(private http: HttpClient, private securityService: SecurityService) {
  }

  refresh() {
    this.http.get('http://localhost:1201/endpoint/getAllBuggedByUserId/'+ this.securityService.getId()).subscribe((data: any) => {
      this.dataSource = data;
    })
  }

  solve(row: Endpoint) {
    this.http.post('http://localhost:1201/endpoint/reportFixById/' + row.id, this.dataSource).subscribe((data: any) => {
      this.refresh()
    })
  }
}
