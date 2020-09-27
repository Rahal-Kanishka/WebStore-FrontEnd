import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-price-calculator',
  templateUrl: './price-calculator.component.html',
  styleUrls: ['./price-calculator.component.scss']
})
export class PriceCalculatorComponent implements OnInit {

  public products: any[] = [];
  public totalCost = 0;
  constructor(private orderService: OrderService) { }

  ngOnInit(): void {
    this.orderService.getProducts().subscribe(
      response => {
        if (response) {
          this.products = response;
          this.processProductDetails();
        }
      },
      err => {
        this.products = [];
      }
    );
    // get carton related data
    this.orderService.getCartons().subscribe(
      response => {
        if (response) {
          for (const carton of response) {
            this.products.find(item => item.id === carton.productId.id).cartonCapacity = carton.capacity;
          }
        }
      }
    );
  }

  private processProductDetails(): void {
    this.products.forEach(
      product => {
        product.orderCount = 0;
        product.cartonCount = 0;
        product.totalcost = 0;
      }
    );
  }

  public getPriceDetails(productId: number, orderCount: number, add: boolean = true ): void {
    this.totalCost = 0;
    // update the order-count
    this.products.find(item => item.id === productId).orderCount = add === true ? ++orderCount : --orderCount;
    // calculate total price
    this.getTotalCoatForAllItems();
  }

  public addOrRemoveCarton(productId: number,  currentUnits: number, cartonCapacity: number, add: boolean = true): void {
    this.totalCost = 0;
    // update the order-count
    this.products.find(item => item.id === productId).orderCount =
      (add === true ? (currentUnits + cartonCapacity) :  (currentUnits - cartonCapacity));
    // calculate total price
    this.getTotalCoatForAllItems();
  }

  public getTotalCoatForAllItems(): void {
    const productIdArray: number[] = [];
    const productItemArray: number[] = [];
    for (let i = 0; i < this.products.length; i++) {
      productIdArray[i] = this.products[i].id;
      productItemArray[i] = this.products[i].orderCount;
    }
    this.orderService.getCostForAllProducts(productIdArray, productItemArray).subscribe(
      (priceData: any) => {
        if (priceData) {
          for (const priceDataItem of priceData) {
            this.totalCost += priceDataItem.totalCost;
          }
        }
      });
  }

  public resetData(): void {
    this.totalCost = 0;
    this.products.forEach( product => {
      product.totalCost = 0;
      product.orderCount = 0;
      product.cartonCount = 0;
    });
  }

}
