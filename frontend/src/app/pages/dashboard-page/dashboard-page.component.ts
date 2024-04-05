import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
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

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

// const ELEMENT_DATA: PeriodicElement[] = [
//   {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
// ];

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
    MatButton
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
  // dataSource = this.apps;

  displayedColumns: string[] = ['id', 'name', 'status', 'seconds'];
  dataSource=new MatTableDataSource(this.apps);
  constructor(private http: HttpClient, private route: ActivatedRoute, private securityService: SecurityService) {
  }

  ngOnInit() {
    this.http.get("http://localhost:1201/app/getAllByUserId/" + this.securityService.getId()).subscribe(
      (data: any) => {
        this.dataSource=data
        console.log(data)
        // if (data != null) {
        //   console.log(data)
        //   this.apps = data
        //   this.dataSource=data;
        // } else
        //   alert("No data found")
      }
    )
  }

  // protected readonly apps = apps;
}

