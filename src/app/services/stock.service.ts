import { Injectable } from '@angular/core';
import { Stock } from '../model/stock';
import { Observable } from 'rxjs/Observable';
import { _throw as ObservableThrow } from 'rxjs/observable/throw';
import { of as ObservableOf } from 'rxjs/observable/of';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  private stocks: Stock[];
  private favoriteStocks: Stock[] = [];
  constructor() {
    this.stocks = [
      new Stock('Test Stock Company', 'TSC', 85, 80, 'NASDAQ', false),
      new Stock('Second Stock Company', 'SSC', 10, 20, 'NSE', false),
      new Stock('Last Stock Company', 'LSC', 876, 765, 'NYSE', false)
    ];
    // this.stocks.every((element, index)=>{

    // })
  }

  createFavoriteStock() {
    this.favoriteStocks.splice(0);
    this.stocks.forEach((item)=>{
      if (item.favorite == true)
        this.favoriteStocks.push(item);
    })
  }

  getStocks() : Observable<Stock[]> {
    return ObservableOf(this.stocks);
  }

  getFavoriteStocks() : Observable<Stock[]> {
    return ObservableOf(this.favoriteStocks);
  }

  createStock(stock: Stock): Observable<any> {
    let foundStock = this.stocks.find(each => each.code === stock.code);
    if (foundStock) {
      return ObservableOf({msg: 'Stock with code ' + stock.code + ' already exists'});
    }
    this.stocks.push(stock);
    return ObservableOf({msg: 'Stock with code ' + stock.code + ' successfully created'});;
  }

  toggleFavorite(stock: Stock): Observable<Stock> {
    let foundStock = this.stocks.find(each => each.code === stock.code);
    foundStock!.favorite = !foundStock!.favorite;
    this.createFavoriteStock();
    return ObservableOf(foundStock!);
  }
}
