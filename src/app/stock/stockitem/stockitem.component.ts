import { Stock } from '../../model/stock';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {map} from 'rxjs/operators';
import { splitAtColon } from '@angular/compiler/src/util';

@Component({
  selector: 'app-stockitem',
  templateUrl: './stockitem.component.html',
  styleUrls: ['./stockitem.component.css']
})
export class StockitemComponent implements OnInit {

  // public stocks: Stock[] = [] ;
  // public stockClasses = {};
  // constructor() { }

  // ngOnInit(): void {
  //   this.stocks = [
  //     new Stock("test1", "CCPA", 30, 100, "NYSE", false), 
  //     new Stock("test2", "NBA", 199, 100, "NYSE", false),
  //     new Stock("test3", "HTL", 12.3, 11.8, "NYSE", false),
  //     new Stock("test4", "BBC", 32.4, 31.56, "NYSE", false), ];
  
  // }

  // toggleFavorite(event: Event, stock: Stock) {
  //   stock.favorite = !stock.favorite;
  // }

  // generateClass(stock: Stock) {
  //   return {
  //     "positive": stock.isPositiveChange(),
  //     "negative": !stock.isPositiveChange(),
  //     "large-change": Math.abs((stock.price / stock.previousPrice) - 1) > 0.01,
  //     "small-change": !(Math.abs((stock.price / stock.previousPrice) - 1) > 0.01)
  //   }
  // }
  // public stocks: Stock[] = [] ;
  // public stockClasses = {};
  // constructor() { }
  // ngOnInit(): void {
  //   this.stocks = [
  //     new Stock("test1", "CCPA", 30, 100, "NYSE", false), 
  //     new Stock("test2", "NBA", 199, 100, "NYSE", false),
  //     new Stock("test3", "HTL", 12.3, 11.8, "NYSE", false),
  //     new Stock("test4", "BBC", 32.4, 31.56, "NYSE", false), ];
  // }
  // toggleFavorite(event: Event, stock: Stock) {
  //   stock.favorite = !stock.favorite;
  // }
  // generateClass(stock: Stock) {
  //   return {
  //     "positive": stock.isPositiveChange(),
  //     "negative": !stock.isPositiveChange(),
  //     "large-change": Math.abs((stock.price / stock.previousPrice) - 1) > 0.01,
  //     "small-change": !(Math.abs((stock.price / stock.previousPrice) - 1) > 0.01)
  //   }
  // }

  @Input()
  public stock: Stock | undefined;
  @Output() toggleFavorite: EventEmitter<Stock>;

  constructor() {
    this.toggleFavorite = new EventEmitter<Stock>();
   }
   
  ngOnInit(): void {
  }

  onToggleFavorite(event: Event) {
    this.toggleFavorite.emit(this.stock);
  }
}