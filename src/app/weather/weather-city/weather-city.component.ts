import { Component, OnInit } from '@angular/core';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-weather-city',
  templateUrl: './weather-city.component.html',
  styleUrls: ['./weather-city.component.css']
})
export class WeatherCityComponent implements OnInit {

  darkMode: boolean | undefined;
  constructor(private UIService: UIService) {
    this.UIService.currentMode.subscribe(mode => this.darkMode = mode);
   }

  ngOnInit(): void {
  }

}
