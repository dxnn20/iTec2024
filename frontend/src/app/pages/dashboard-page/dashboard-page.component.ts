import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.scss'
})
export class DashboardPageComponent implements OnInit{



  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit()
  {
    console.log(this.route.snapshot.params['id']);
    this.http.get("http://localhost:1201/app/getall").subscribe(
      (data: any)=>{
        if(data != null)
        console.log(data);
      }
    )
  }
}
