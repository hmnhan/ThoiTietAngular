export class Stock {


  public constructor(
    public name: string,
    public code: string,
    public price: number,
    public previousPrice: number,
    public exchange: string,
    public favorite: boolean,
    ){}

  isPositiveChange(): boolean{
    return (this.price >= this.previousPrice);
  }

}
