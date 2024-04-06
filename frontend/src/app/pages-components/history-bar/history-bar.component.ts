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
  simpleStatus: string = 'down'
  statusArray: string[] = []

  getStatuses(): (string[]) {
    if(this.statusString == null) {
      for (let i = 0; i < 150; i++)
        this.statusArray[i] = 'down'

      return this.statusArray;
    }
    this.statusArray = this.statusString.split('');
    console.log(this.statusArray);
    return this.statusArray.map(char => {
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

  // getSimpleStatus(): (string) {
  //   if (this.statusString == null) {
  //     this.simpleStatus = 'down';
  //     return this.simpleStatus;
  //   }
  //   return this.simpleStatus;
  // }
}

