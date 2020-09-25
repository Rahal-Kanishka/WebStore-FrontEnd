import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PriceCalculatorComponent } from './price-calculator/price-calculator.component';

const routes: Routes = [
  {
    path: '/',
    redirectTo: 'price-calculator',
    pathMatch: 'full'
  },
  {
    path: '/price-calculator',
    component: PriceCalculatorComponent
  },
  {

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
