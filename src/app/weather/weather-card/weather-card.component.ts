import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UIService } from 'src/app/services/ui.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather-card',
  templateUrl: './weather-card.component.html',
  styleUrls: ['./weather-card.component.css']
})
export class WeatherCardComponent implements OnInit {
  @Input() public city!: string

  condition = "";
  conditionV = "";
  currentTemp = "";
  minTemp = "";
  maxTemp = "";
  darkMode: boolean | undefined;

  constructor(private UIService: UIService,
              private weatherService: WeatherService,
              private router: Router) {
    this.UIService.currentMode.subscribe(mode => this.darkMode = mode);
  }

  ngOnInit(): void {
    this.weatherService.getCityWeatherByName(this.city).subscribe(res => {
      this.condition = res.weather[0].main
      this.currentTemp = res.main.temp
      this.minTemp = res.main.temp_min
      this.maxTemp = res.main.temp_max
      this.getCityWeather(this.condition)
    })
  }

  getCityWeather(con: string){
    switch(con){
      case 'Clear': this.conditionV = 'Trời đẹp'; break;
      case 'Sunny': this.conditionV = 'Nắng'; break;
      case 'Clouds': this.conditionV = 'Có mây'; break;
      case 'Rain': this.conditionV = 'Mưa'; break;
      case 'Drizzle': this.conditionV = 'Mưa râm'; break;
      case 'Storm': this.conditionV = 'Bão'; break;
      case 'Haze': this.conditionV = 'Sương mù'; break;
      case 'Mist': this.conditionV = 'Sương mù'; break;
      case 'Snow': this.conditionV = 'Tuyết rơi'; break;
      case 'Thunderstorm': this.conditionV = 'Bão'; break;
    }
  }

  openDetails() {
    this.router.navigate(['detail'], {queryParams: {city: this.city}, skipLocationChange: true})
  }
}
