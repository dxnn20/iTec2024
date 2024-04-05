import {Component, Input} from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";

@Component({
  selector: 'app-history-bar',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  templateUrl: './history-bar.component.html',
  styleUrl: './history-bar.component.scss'
})
export class HistoryBarComponent {
  @Input() statusString: string = ''; // Input string containing statuses

  getStatuses(): string[] {
    const statusArray = this.statusString.split('');
    return statusArray.map(char => {
      switch (char.toLowerCase()) {
        case 'o':
          return 'ok';
        case 'u':
          return 'unstable';
        case 'd':
          return 'down';
        default:
          return 'unknown'; // Handle any unknown characters
      }
    });
  }
}

