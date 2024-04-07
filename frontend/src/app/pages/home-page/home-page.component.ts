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
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {interval} from "rxjs";
import {MatFormField, MatInput} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {NgClass} from "@angular/common";

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
    MatIcon,
    MatInput,
    MatFormField,
    FormsModule,
    MatIconButton,
    NgClass
  ],
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {

  // dataSource = new MatTableDataSource<[]>([]);
  displayedColumns: string[] = ['id', 'name', 'status', 'seconds'];
  dataSource: App[] = [];
  searchValue: string = ''
  filteredData: App[] = this.dataSource

  constructor(private http: HttpClient, private securityService: SecurityService, private router: Router) {
  }

  ngOnInit() {
    interval(1000).subscribe(() => {
      this.refresh()
    })
  }

  refresh() {
    this.http.get("http://localhost:1201/app/getAll").subscribe(
      (data: any) => {
        this.dataSource = data

        for (let i = 0; i < data.length; i++)
          if (data[i].status == null)
            data[i].status = "DOWN"
      }
    )
  }

  onClick(app: App) {
    this.router.navigateByUrl('/view-endpoints/' + app.id).then(r => console.log(r))
  }

  getStatus( app: App) {
    switch (app.status) {
      case "STABLE":
        return "green"
      case "DOWN":
        return "red"
      case "UNSTABLE":
        return "yellow"
      default:
        return "red"
    }
  }
}
