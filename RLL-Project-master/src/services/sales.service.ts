
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Sales } from 'src/models/sales';

@Injectable({
  providedIn: 'root',
})
export class SalesService {
  private regSalesUrl: string =
  'http://localhost:8080/api/v1/Sales';
  private logSalesUrl: string = 'http://localhost:8080/api/v1/Sales';


  constructor(private _httpClient: HttpClient) {}

  public registerSales(customer: Sales): any {
    return this._httpClient.post<Sales>(this.regSalesUrl, customer);
  }

  public validateSales(value: any) {
    return this._httpClient.post<Sales>(this.logSalesUrl, value);
  }

}
