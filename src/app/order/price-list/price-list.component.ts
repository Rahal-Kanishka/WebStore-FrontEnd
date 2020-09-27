import { Component, OnInit } from '@angular/core';
import { OrderService } from '../order.service';

@Component({
  selector: 'app-price-list',
  templateUrl: './price-list.component.html',
  styleUrls: ['./price-list.component.scss']
})
export class PriceListComponent implements OnInit {

  public priceDetails: any[] = [];
  public displayedColumns: string[] = ['name', 'units', 'discount', 'price', 'carton'];

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orderService.getPriceDetails().subscribe(
      priceData => {
        if (priceData) {
          this.priceDetails = priceData;
        }
      },
      err => {
        this.priceDetails = [];
      }
    );
  }

}
