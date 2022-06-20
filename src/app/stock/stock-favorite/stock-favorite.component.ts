import { Component, EventEmitter, Input, OnInit, Output, Query } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock.service';

@Component({
  selector: 'app-stock-favorite',
  templateUrl: './stock-favorite.component.html',
  styleUrls: ['./stock-favorite.component.css']
})
export class StockFavoriteComponent implements OnInit {
  public stocks$: Observable<Stock[]>;

  constructor(private stockService: StockService) {
    this.stocks$ = this.stockService.getFavoriteStocks();
  }

  ngOnInit(): void {
  }

  onToggleFavorite(stock: Stock) {
    console.log('Favorite for stock ', stock, ' was triggered');
    this.stockService.toggleFavorite(stock);
  }
}
