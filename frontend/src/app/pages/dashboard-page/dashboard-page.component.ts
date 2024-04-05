import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {App} from "../../App";
import {SecurityService} from "../../security/security.service";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {MatIcon} from "@angular/material/icon";
import {MatIconButton} from "@angular/material/button";

let apps: App[];

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
    MatHeaderCellDef
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit {

  expandedElement: App | null;
  columnsToDisplay = [];
  columnsToDisplayWithExpand = [...this.columnsToDisplay];

  constructor(private http: HttpClient, private route: ActivatedRoute, private securityService: SecurityService) {
  }

  ngOnInit() {
    console.log(this.route.snapshot.params['id']);
    this.http.get("http://localhost:1201/app/getAllByUserId/" + this.securityService.getId()).subscribe(
      (data: any) => {
        if (data != null)
          console.log(data)
        else
          apps = data
      }
    )
  }

  protected readonly apps = apps;
}
