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

class PeriodicElement {
  position: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1 },
  { position: 2 },
  { position: 3 },
  { position: 4 },
  { position: 5 },
  { position: 6 },
  { position: 7 },
  { position: 8 },
  { position: 9 },
  { position: 10 },
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
    MatCellDef
  ],
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  constructor(private http: HttpClient, private securityService: SecurityService) {
  }

  ngOnInit()
  {
    this.http.get("https://localhost:1201/apps/getAllByUserId/"+this.securityService.getId()).subscribe()
  }

  dataSource = new MatTableDataSource<[]>([]);
  displayedColumns: string[] = ['appCard']; // Only one column for app cards
  dataSource = ELEMENT_DATA;
}
