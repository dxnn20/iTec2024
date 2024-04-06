import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {HistoryBarComponent} from "../history-bar/history-bar.component";
import {App} from "../../App";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, HistoryBarComponent, MatIcon],
  templateUrl: './app-card.component.html',
  styleUrl: './app-card.component.scss'
})
export class AppCardComponent {
  @Input() app: App;
  status: string

  ngOnInit(){
    console.log(this.app);
    console.log(this.app.status);
    if(this.app.status == null) {
      this.status = 'down';
    } else {
      switch (this.app.status[this.app.status.length - 1]) {
        case 'o':
          this.status = 'ok';
          break;
        case 'u':
          this.status ='unstable';
          break;
        case 'd':
          this.status = 'down';
          break;
        default:
          this.status = 'unknown'; // Handle any unknown characters
      }
    }
  }

  handleCardClick() {
    console.log('Card clicked: ', this.app);
  }
}
