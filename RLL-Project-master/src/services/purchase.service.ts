
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Purchase } from 'src/models/purchase';

@Injectable({
  providedIn: 'root',
})
export class PurchaseService {
  private regPurchaseUrl: string =
  'http://localhost:8080/api/v1/Purchase';
  private logPurchaseUrl: string = 'http://localhost:8080/api/v1/Purchase';

  

  constructor(private _httpClient: HttpClient) {}

  public registerPurchase(customer: Purchase): any {
    return this._httpClient.post<Purchase>(this.regPurchaseUrl, customer);
  }

  public validatePurchase(value: any) {
    return this._httpClient.post<Purchase>(this.logPurchaseUrl, value);
  }

  // setCustomerLoggedIn(customerLoggedIn: string) {
  //   this.customerLoggedIn = customerLoggedIn;
  // }
  // getCustomerLoggedIn() {
  //   return this.customerLoggedIn;
  // }
}
