import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {OpeningPageComponent} from "./opening-page/opening-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [RouterOutlet, OpeningPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'praxisproject';
}
