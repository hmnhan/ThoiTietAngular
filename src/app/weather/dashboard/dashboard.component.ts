import { Subscription, SubscriptionLike } from 'rxjs';
import { CountriesService } from './../../services/countries.service';
import { WeatherService } from './../../services/weather.service';
import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UIService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, OnDestroy {
  regions = [
    { name: 'Tất cả', key: ''},
    { name: 'Châu Phi', key: 'Africa'},
    { name: 'Châu Mỹ', key: 'Americas' },
    { name: 'Châu Á', key: 'Asia' },
    { name: 'Châu Âu', key: 'Europe'},
    { name: 'Châu Đại Dương', key: 'Oceania'}
  ]
  haveRegion: boolean = false;
  capitals: any[] = []
  regionCapitals: any[] = []
  followedCapitals: any[] =[]
  darkModeActive!: boolean
  dropdown: boolean = false;
  getFLcap: Subscription = new Subscription;

  constructor ( public http: HttpClient,
                private UIService: UIService, private countriesService: CountriesService) {
    this.UIService.currentMode.subscribe(mode => this.darkModeActive = mode);
  }
  ngOnDestroy(): void {
    this.getFLcap ? this.getFLcap.unsubscribe() : {}
  }

  async ngOnInit() {
    await this.getAllCapitals()
    this.getFLcap = this.countriesService.currentCities.subscribe(res => {
      res.map(flCap => {
        this.capitals[this.capitals.findIndex(f=>f.name[0] === flCap.name[0])].follow = true
      })
      this.followedCapitals = res
    })
  }

  async getAllCapitals(){
    var errCap = ['Hanoi', 'Diego Garcia', 'Fakaofo', 'Papeetē', 'King Edward Point', 'St. Peter Port', 'Ngerulmud']
    const data = await this.http.get<any[]>('https://restcountries.com/v3.1/all').toPromise()
    data.map((country: any) => {
      if (country.capital) {
        this.capitals.push({ flag: country.flags.png, region: country.region, name: country.capital, follow: false});
      }
    });

    errCap.forEach(fe => this.capitals = this.capitals.filter(f => f.name[0] !== fe ))

    this.capitals.sort();
  }

  opDropdown(){
    this.dropdown = !this.dropdown
  }

  followChange(country: any){
    if(country.follow){ this.followedCapitals.push(country) }
    else{ this.followedCapitals = this.followedCapitals.filter(arr => arr.name !== country.name) }
    console.log(this.followedCapitals);

    this.countriesService.updateCities(this.followedCapitals)
  }

  async regionClick(e: any){
    if(e.key != ''){
      this.haveRegion = true
      this.regionCapitals = this.capitals.filter(f => f.region === e.key)
    }else{
      this.haveRegion = false
    }
  }

}
