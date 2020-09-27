import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderRoutingModule } from './order-routing.module';
import { PriceCalculatorComponent } from './price-calculator/price-calculator.component';
import { PriceListComponent } from './price-list/price-list.component';
import { MatTableModule } from '@angular/material/table';
import { OrderService } from './order.service';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [PriceCalculatorComponent, PriceListComponent],
  imports: [
    CommonModule,
    OrderRoutingModule,
    MatTableModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatTooltipModule
  ],
  providers: [OrderService]
})
export class OrderModule { }
