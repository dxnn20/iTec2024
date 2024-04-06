import {Component, Input} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {HistoryBarComponent} from "../history-bar/history-bar.component";
import {App} from "../../App";
import {MatIcon} from "@angular/material/icon";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, HistoryBarComponent, MatIcon, NgClass],
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

  getStatusColorClass(): string {
    switch (this.status) {
      case 'ok':
        return 'status-ok';
      case 'unstable':
        return 'status-unstable';
      case 'down':
        return 'status-down';
      default:
        return 'status-unknown'; // Handle any unexpected status
    }
  }

  getPercentageUp(): string {
    if (!this.app.status) {
      return '0'; // If no status history, return 0%
    }
    const statusArray = this.app.status.split('');
    const upCount = statusArray.filter(char => char.toLowerCase() === 'o').length;
    const totalCount = statusArray.length;
    const percentage = (upCount / totalCount) * 100;
    return percentage.toFixed(2);
  }

  reportBug() {
    // Implement your logic for reporting a bug
    console.log('Report a Bug clicked:', this.app);
    // Optionally, you can trigger a dialog or form for bug reporting
  }




  handleCardClick() {
    console.log('Card clicked: ', this.app);
  }
}
