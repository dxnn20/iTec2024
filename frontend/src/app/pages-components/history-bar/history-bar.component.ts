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
  @Input() statusString: string // Input string containing statuses
  simpleStatus: string = 'down'
  statusArray: string[] = []

  ngOnInit() {
  }

  getStatuses(): (string[]) {
    if (this.statusString == null) {
      for (let i = 0; i < 150; i++)
        this.statusArray[i] = 'down'

      return this.statusArray;
    }
    this.statusArray = this.statusString.split('');

    return this.statusArray;
  }

  // getSimpleStatus(): (string) {
  //   if (this.statusString == null) {
  //     this.simpleStatus = 'down';
  //     return this.simpleStatus;
  //   }
  //   return this.simpleStatus;
  // }
}

