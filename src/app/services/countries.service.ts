import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountriesService {
  private cities = new BehaviorSubject<any[]>([])
  currentCities = this.cities.asObservable();

  constructor() {}

  updateCities(cities: any[]) {
    this.cities.next(cities)
  }
}
