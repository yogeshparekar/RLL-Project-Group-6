import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Item } from 'src/models/item';

@Injectable({
  providedIn: 'root',
})
export class itemService {
  private regItemUrl: string =
  'http://localhost:8080/api/v1/Item';
  private logItemUrl: string = 'http://localhost:8080/api/v1/Item';

  

  constructor(private _httpClient: HttpClient) {}

  registerItem(item: Item): any {
    return this._httpClient.post<Item>(this.regItemUrl, item);
  }

  validateCustomer(value: any) {
    return this._httpClient.post<Item>(this.logItemUrl, value);
  }
}