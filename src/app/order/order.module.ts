import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { PriceCalculatorComponent } from './price-calculator/price-calculator.component';
import { PriceListComponent } from './price-list/price-list.component';


@NgModule({
  declarations: [PriceCalculatorComponent, PriceListComponent],
  imports: [
    CommonModule,
    OrderRoutingModule
  ]
})
export class OrderModule { }
