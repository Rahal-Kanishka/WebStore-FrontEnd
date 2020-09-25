import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'web-store';

  constructor(private router: Router) {}

  public navigateToPriceList(): void {
    this.router.navigate(['/order/price-list']);
  }

  public navigateToPriceCalculator(): void {
    this.router.navigate(['/order/price-calculator']);
  }

}
