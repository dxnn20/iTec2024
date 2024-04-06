import { Component } from '@angular/core';
import { AppCardComponent } from '../../pages-components/app-card/app-card.component';
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow, MatRowDef,
  MatTable, MatTableDataSource
} from "@angular/material/table";
import {HttpClient} from "@angular/common/http";
import {SecurityService} from "../../security/security.service";
import {MatList, MatListItem} from "@angular/material/list";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  standalone: true,
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  imports: [
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatHeaderRowDef,
    MatRowDef,
    MatHeaderCellDef,
    MatCellDef,
    AppCardComponent,
    MatList,
    MatListItem,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatCardTitle
  ],
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  constructor(private http: HttpClient, private securityService: SecurityService) {}

  ngOnInit()
  {
    this.http.get("http://localhost:1201/app/getAll").subscribe(
      (data:any)=>{
        this.dataSource=data;
        console.log(data);
      }
    )
  }

  // dataSource = new MatTableDataSource<[]>([]);
  displayedColumns: string[] = ['id', 'name', 'status', 'seconds'];
  dataSource = ELEMENT_DATA;
}
