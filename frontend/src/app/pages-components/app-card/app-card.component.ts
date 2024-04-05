import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {HistoryBarComponent} from "../history-bar/history-bar.component";

@Component({
  selector: 'app-app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, HistoryBarComponent],
  templateUrl: './app-card.component.html',
  styleUrl: './app-card.component.scss'
})
export class AppCardComponent {

}