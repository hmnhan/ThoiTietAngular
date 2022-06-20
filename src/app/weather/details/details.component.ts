import { Component, OnDestroy, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
//import {WeatherService} from '../../services/weather/weather.service';
import {Subscription} from 'rxjs';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit, OnDestroy {

    city!: string;
    state!: string;
    temp!: number;
    hum!: number;
    wind!: number;

    today!: string;

    day1Name!: string;
    day1State!: string;
    day1Temp!: number;


    day2Name!: string;
    day2State!: string;
    day2Temp!: number;

    day3Name!: string;
    day3State!: string;
    day3Temp!: number;

    day4Name!: string;
    day4State!: string;
    day4Temp!: number;

    day5Name!: string;
    day5State!: string;
    day5Temp!: number;

    sub1: Subscription | undefined;
    sub2: Subscription | undefined ;
    sub3: Subscription | undefined;
    sub4: Subscription | undefined;
    sub5: Subscription | undefined;

  constructor(public activeRouter: ActivatedRoute,
              private weather: WeatherService) { }
  ngOnDestroy(): void {
    this.sub1!.unsubscribe();
    this.sub2!.unsubscribe();
    this.sub3!.unsubscribe();
    this.sub4!.unsubscribe();
    this.sub5!.unsubscribe();
  }

  ngOnInit(): void {
    const todayNumberInWeek = new Date().getDay();
    const days = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    this.today = days[todayNumberInWeek];

    this.activeRouter.queryParamMap.subscribe((route: any) => {
      this.city = route.params.city;
      this.sub1 = this.weather.getWeatherState(this.city).subscribe((state: string) => this.state = state);
      this.sub2 = this.weather.getCurrentTemp(this.city).subscribe((temperature: number) => this.temp = temperature);
      this.sub3 = this.weather.getCurrentHum(this.city).subscribe((humidity: number) => this.hum = humidity);
      this.sub4 = this.weather.getCurrentWind(this.city).subscribe((windspeed: number) => this.wind = windspeed);
      this.sub5 = this.weather.getForecast(this.city).subscribe((data: any) => {
        for (let i = 0; i < data.length; i++) {
          const date = new Date(data[i].dt_txt).getDay();
          if (((date === todayNumberInWeek + 1) || (todayNumberInWeek === 6 && date === 0)) && !this.day1Name) {
            this.day1Name = days[date];
            this.day1State = this.vieSub(data[i].weather[0].main);
            this.day1Temp = Math.round(data[i].main.temp);

          } else if (!!this.day1Name && !this.day2Name && days[date] !== this.day1Name) {
            this.day2Name = days[date];
            this.day2State = this.vieSub(data[i].weather[0].main);
            this.day2Temp = Math.round(data[i].main.temp);

          } else if (!!this.day2Name && !this.day3Name && days[date] !== this.day2Name) {
            this.day3Name = days[date];
            this.day3State = this.vieSub(data[i].weather[0].main);
            this.day3Temp = Math.round(data[i].main.temp);

          } else if (!!this.day3Name && !this.day4Name && days[date] !== this.day3Name) {
            this.day4Name = days[date];
            this.day4State = this.vieSub(data[i].weather[0].main);
            this.day4Temp = Math.round(data[i].main.temp);

          } else if (!!this.day4Name && !this.day5Name && days[date] !== this.day4Name) {
            this.day5Name = days[date];
            this.day5State = this.vieSub(data[i].weather[0].main);
            this.day5Temp = Math.round(data[i].main.temp);

          }
        }
      });

    });

  }

  vieSub(con: string){
    switch(con){
      case 'Clear': return 'Trời đẹp';
      case 'Sunny': return 'Nắng';
      case 'Clouds': return 'Có mây';
      case 'Rain': return 'Mưa';
      case 'Drizzle': return 'Mưa râm';
      case 'Storm': return 'Bão';
      case 'Haze': return 'Sương mù';
      case 'Mist': return 'Sương mù';
      case 'Snow': return 'Tuyết rơi';
      default:  return '';
    }
  }

}
