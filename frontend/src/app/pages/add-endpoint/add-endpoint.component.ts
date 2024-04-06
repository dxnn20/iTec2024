import {Component, Input} from '@angular/core';
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {HttpClient} from "@angular/common/http";
import {SecurityService} from "../../security/security.service";
import {App} from "../../App";
import {ActivatedRoute, Router} from "@angular/router";
import {MatButton} from "@angular/material/button";
import {NgForOf} from "@angular/common";
import {Endpoint} from "../../security/endpoint";
import {FormsModule} from "@angular/forms";
import {MatList, MatListItem} from "@angular/material/list";
import {
  MatCell, MatCellDef,
  MatColumnDef,
  MatHeaderCell, MatHeaderCellDef,
  MatHeaderRow,
  MatHeaderRowDef,
  MatRow,
  MatRowDef,
  MatTable
} from "@angular/material/table";
import {DialogComponent} from "../../pages-components/dialog/dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-add-endpoint',
  standalone: true,
  imports: [
    MatLabel,
    MatIcon,
    MatInput,
    MatHint,
    MatSuffix,
    MatFormField,
    MatButton,
    NgForOf,
    FormsModule,
    MatList,
    MatListItem,
    MatTable,
    MatColumnDef,
    MatHeaderCell,
    MatCell,
    MatHeaderRow,
    MatRow,
    MatRowDef,
    MatHeaderRowDef,
    MatHeaderCellDef,
    MatCellDef
  ],
  templateUrl: './add-endpoint.component.html',
  styleUrl: './add-endpoint.component.scss'
})
export class AddEndpointComponent {

  dataSource : Endpoint[] = []

  protected endPoint: Endpoint = new Endpoint()
  displayedColumns: string[] =[ 'path', 'method', 'duration'];

  constructor(private http: HttpClient, securityService: SecurityService, private router: Router, private route: ActivatedRoute, protected dialog: MatDialog, ) {
    this.refresh()
  }

  refresh() {
    this.http.get('http://localhost:1201/endpoint/getAllByAppId/' + this.route.snapshot.params['id']).subscribe(
      (data: any) => {
        this.dataSource = data;
        console.log(this.dataSource )
      }
    )
  }
}
