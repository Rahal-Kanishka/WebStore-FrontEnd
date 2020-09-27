import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_END_POINT = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  public getPriceDetails(): Observable<any> {
    return this.http.get(API_END_POINT + 'order/price_details');
  }

  public getProducts(): Observable<any> {
    return this.http.get(API_END_POINT + 'order/products');
  }

  public getCartons(): Observable<any> {
    return this.http.get(API_END_POINT + 'order/carts');
  }

  public getCostByProduct(productId: number, numberOfUnits: number): Observable<any> {
    // Initialize Params Object
    let httpParams = new HttpParams();
    // Begin assigning parameters
    httpParams = httpParams.append('units', numberOfUnits?.toString());
    httpParams = httpParams.append('productId', (productId?.toString()));

    return this.http.get(API_END_POINT + 'order/calculate_cost', { params: httpParams});
  }

  public getCostForAllProducts(productId: number[], numberOfUnits: number[]): Observable<any> {
    // Initialize Params Object
    let httpParams = new HttpParams();
    // Begin assigning parameters
    httpParams = httpParams.append('quantities', numberOfUnits.join(','));
    httpParams = httpParams.append('products', (productId.join(',')));

    return this.http.get(API_END_POINT + 'order/total_cost', { params: httpParams});
  }
}

