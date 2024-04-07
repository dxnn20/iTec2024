import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { AppCardComponent } from './pages-components/app-card/app-card.component';
import {HistoryBarComponent} from "./pages-components/history-bar/history-bar.component";

import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";
import {NavbarComponent} from "./pages-components/navbar/navbar.component";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AppCardComponent, HistoryBarComponent, NavbarComponent, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'iTec2024';

}
