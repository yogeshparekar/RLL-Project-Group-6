
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from 'src/models/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private regUsersUrl: string =
  'http://localhost:8080/api/v1/Users';
  private logUsersUrl: string = 'http://localhost:8080/api/v1/Users';

  
  constructor(private _httpClient: HttpClient) {}

public registerUsers(user: Users): any {
    return this._httpClient.post<Users>(this.regUsersUrl, Users);
  }

public validateUsers(value: any) {
    return this._httpClient.post<Users>(this.logUsersUrl, value);
  }
}
