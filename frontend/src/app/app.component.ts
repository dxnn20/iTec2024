import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomePageComponent} from "./pages/home-page/home-page.component";
import {LoginPageComponent} from "./pages/login-page/login-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomePageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'frontend';
}
