import {Component, OnInit} from '@angular/core';
import {animate, query, stagger, style, transition, trigger} from "@angular/animations";
import {CommonModule} from "@angular/common";
import {InfluxDBService} from "../influx-db.service";

@Component({
  selector: 'app-opening-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './opening-page.component.html',
  styleUrl: './opening-page.component.scss',
  animations: [
    trigger('letterAnimation', [
      transition('* => *', [ // This transition applies whenever there are changes in the input
        query(':enter', [
          style({ opacity: 0, transform: 'translateY(-100%)' }),
          stagger(100, [ // Stagger the animations, 100ms apart
            animate('0.5s ease-in', style({ opacity: 1, transform: 'none' })),
          ]),
        ], { optional: true }), // The query operation is optional to avoid errors when no elements are found
      ]),
    ]),
  ],
})
export class OpeningPageComponent implements OnInit{

  constructor(private influxDBService: InfluxDBService) { }

  data: any;
  greetingText: string = 'Welcome to Cool App!';
  letters: string[] = this.greetingText.split('');

  ngOnInit(): void {
    setTimeout(() => {
      // Logic to hide or navigate away from the splash screen after a delay
    }, 4000); // Adjust time as needed
  }

  loadData() {
    this.influxDBService.queryData('from(bucket: "4T_Main") |> range(start: -1h)')
      .then(data => this.data = data)
      .catch(error => console.error('Error loading data from InfluxDB', error));
  }
}
