import { Component } from '@angular/core';
import {AppCardComponent} from "../../pages-components/app-card/app-card.component";

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    AppCardComponent
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {

}
