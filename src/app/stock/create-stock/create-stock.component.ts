import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/model/stock';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { StockitemComponent } from 'src/app/stock/stockitem/stockitem.component';
import { invalid } from '@angular/compiler/src/render3/view/util';
import { StockService } from '../../services/stock.service';

@Component({
  selector: 'app-create-stock',
  templateUrl: './create-stock.component.html',
  styleUrls: ['./create-stock.component.css']
})
export class CreateStockComponent implements OnInit {
  // public nameControl = new FormControl();
  // public confirmed = false;
  // public stockForm: FormGroup = new FormGroup({
  //   name: new FormControl(null, Validators.required),
  //   code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
  //   price: new FormControl(0, [Validators.required, Validators.min(0)])
  // });
  // public nameControl = new FormControl();
  // public confirmed = false;
  // public exchanges = ["NYSE", "NASDAQ", "OTHER"];
  // public stockForm: FormGroup = new FormGroup({
  //   name: new FormControl(null, Validators.required),
  //   code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
  //   price: new FormControl(0, [Validators.required, Validators.min(0)])
  // });
  public stock!: Stock;
  public stockForm: FormGroup;
  public message: string = "";
  public exchanges = ["NYSE", "NASDAQ", "OTHER"];
  constructor(private fb: FormBuilder, private stockService: StockService) { 
    this.stockForm = this.fb.group({
      name: new FormControl(null, Validators.required),
      code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      exchange: new FormControl(this.exchanges[0], Validators.required)
    });
    // this.stock = new Stock("test", "TST", 30, 100, "NYSE", false);
  }

  createForm() {
    this.stockForm = this.fb.group({
      name: new FormControl(null, Validators.required),
      code: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      price: new FormControl(0, [Validators.required, Validators.min(0)]),
      exchange: new FormControl(this.exchanges[0], Validators.required)
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log('Name Control Value', this.stockForm.value);
  }

  get name() {
    return this.stockForm.get('name');
  }

  get price() {
    return this.stockForm.get('price');
  }

  get code() {
    return this.stockForm.get('code');
  }

  get exchange() {
    return this.stockForm.get('exchange');
  }
  // setStockPrice(price: number) {
  //   this.stock.price = price;
  //   this.stock.previousPrice = price;
  // }
  // createStock() {
  //   console.log('Creating stock ', this.stock)
  // }

  createStock(stockForm: FormGroup) {
    if (stockForm.valid) {
      this.stock = new Stock(
        stockForm.value.name,
        stockForm.value.code,
        stockForm.value.price,
        stockForm.value.price,
        stockForm.value.exchange, false
      );
      this.stockService.createStock(this.stock)
          .subscribe((result: any) => {
            this.message = result.msg;
            this.stock =  new Stock('', '', 0, 0, 'NASDAQ', false);
          }, (err) => {
            this.message = err.message;
          });
    } else {
      console.error('Stock form is in an invalid state');
    }
  }
}

// export class CreateStockComponent {

//   public stock: Stock;
//   public confirmed = false;
//   public message = null;
//   public exchanges = ['NYSE', 'NASDAQ', 'OTHER'];
//   constructor(private stockService: StockService) {
//     this.stock =  new Stock('', '', 0, 0, 'NASDAQ', false);
//   }

//   setStockPrice(price) {
//     this.stock.price = price;
//     this.stock.previousPrice = price;
//   }

//   createStock(stockForm) {
//     if (stockForm.valid) {
//       this.stockService.createStock(this.stock)
//           .subscribe((result: any) => {
//             this.message = result.msg;
//             this.stock =  new Stock('', '', 0, 0, 'NASDAQ');
//           }, (err) => {
//             this.message = err.msg;
//           });
//     } else {
//       console.error('Stock form is in an invalid state');
//     }
//   }
// }
