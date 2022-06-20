import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {ListboxModule} from 'primeng/listbox';
import {ToggleButtonModule} from 'primeng/togglebutton';
import {DropdownModule} from 'primeng/dropdown';
import {ButtonModule} from 'primeng/button';


import { AppComponent } from './app.component';
import { StockitemComponent } from './stock/stockitem/stockitem.component';
import { CreateStockComponent } from './stock/create-stock/create-stock.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StockListComponent } from './stock/stock-list/stock-list.component';
import { StockService } from './services/stock.service';
import { StockFavoriteComponent } from './stock/stock-favorite/stock-favorite.component';
import { DashboardComponent } from './weather/dashboard/dashboard.component';
import { RoutingComponent } from './router/routing/routing.component';
import { WeatherCardComponent } from './weather/weather-card/weather-card.component';
import { WeatherCityComponent } from './weather/weather-city/weather-city.component';
import { DetailsComponent } from './weather/details/details.component';
import { WeatherService } from './services/weather.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClickedOutsideDirective } from './services/clicked-outside.directive';

@NgModule({
  declarations: [
    AppComponent,
    StockitemComponent,
    CreateStockComponent,
    StockListComponent,
    StockFavoriteComponent,
    DashboardComponent,
    WeatherCardComponent,
    WeatherCityComponent,
    DetailsComponent,
    ClickedOutsideDirective
  ],
  imports: [
    HttpClientModule,
    AppRoutingModule,
    BrowserModule,
    ReactiveFormsModule,
    RoutingComponent,
    ListboxModule,
    DropdownModule,
    FormsModule,
    BrowserAnimationsModule,
    ToggleButtonModule,
    ButtonModule
  ],
  providers: [
    StockService,
    WeatherService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
