import {Component} from '@angular/core';
import {AppCardComponent} from '../../pages-components/app-card/app-card.component';
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
import {App} from "../../App";
import {Router} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

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
    MatCardTitle,
    MatButton,
    MatIcon
  ],
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  // dataSource = new MatTableDataSource<[]>([]);
  displayedColumns: string[] = ['id', 'name', 'status', 'seconds'];
  dataSource: App[] = [];

  constructor(private http: HttpClient, private securityService: SecurityService, private router: Router) {
  }

  ngOnInit() {
    this.refresh()
  }

  refresh() {
    this.http.get("http://localhost:1201/app/getAll").subscribe(
      (data: any) => {
        this.dataSource = data

        for (let i = 0; i < data.length; i++)
          if (data[i].status == null)
            data[i].status = "DOWN"

        console.log(data)
      }
    )
  }

  onClick(app: App) {
    console.log(app)
    this.router.navigateByUrl('/view-endpoints/' + app.id).then(r => console.log(r))
  }


}
