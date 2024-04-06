import {Component, Input} from '@angular/core';
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {HttpClient} from "@angular/common/http";
import { catchError } from 'rxjs/operators';
import {interval, throwError} from 'rxjs';
import {SecurityService} from "../../security/security.service";
import {ActivatedRoute, Router} from "@angular/router";
import {MatButton, MatIconButton} from "@angular/material/button";
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
import {AddEndPointDialogComponent} from "../../pages-components/add-end-point-dialog/add-end-point-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {windowWhen} from "rxjs";

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
    MatCellDef,
    MatIconButton
  ],
  templateUrl: './add-endpoint.component.html',
  styleUrl: './add-endpoint.component.scss'
})
export class AddEndpointComponent {

  dataSource : Endpoint[] = []

  protected endPoint: Endpoint = new Endpoint()
  displayedColumns: string[] =[ 'path', 'method', 'duration','actions'];

  constructor(private http: HttpClient, securityService: SecurityService, private router: Router, private route: ActivatedRoute, protected dialog: MatDialog ) {
    this.refresh()
  }

  ngOnInit(){
    interval(1000).subscribe(() => {
      this.refresh()
    })
  }

  refresh() {
    this.http.get('http://localhost:1201/endpoint/getAllByAppId/' + this.route.snapshot.params['id']).subscribe(
      (data: any) => {
        this.dataSource = data;
        console.log(this.dataSource )
      }
    )
  }

  openPopup() {
    console.log(window.document.location)
    const dialogRef = this.dialog.open(AddEndPointDialogComponent, this.route.snapshot.params['id']);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  // deleteEndpoint(endpoint: any) {
  //   const endpointId = endpoint.id; // Assuming endpoint has an ID property
  //   const deleteUrl = `https://your-backend-api.com/endpoints/${endpointId}`;
  //
  //   return this.http.delete(deleteUrl).pipe(
  //     catchError((error) => {
  //       console.error('Error deleting endpoint:', error);
  //       return throwError('Something went wrong with endpoint deletion');
  //     })
  //   );
  // }

  onDeleteEndpoint(endpoint: Endpoint) {
    // this.deleteEndpoint(endpoint).subscribe(
    //   () => {
    //     console.log('Endpoint deleted successfully');
    //     // After successful deletion, remove the endpoint from your local data source
    //     this.dataSource = this.dataSource.filter(e => e.id !== endpoint.id);
    //   },
    //   error => {
    //     console.error('Error deleting endpoint:', error);
    //     // Handle error scenario
    //   }
    // );
    this.http.delete('http://localhost:1201/endpoint/deleteById/' + endpoint.id).subscribe()
  }


}
