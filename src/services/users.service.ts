import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from 'src/models/user';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }
  private _URL_USERS1: string = 'http://localhost:3000';

  public getUsers2(): Observable<any> {
    const url = `${this._URL_USERS1}/users2/users1`;
    return this.http.get<any>(url);
  }
  public getUsers3(user: User): Observable<any> {
    const url = `${this._URL_USERS1}/users2/users2?userinput=${user.userName}&passwordinput=${user.userPassword}`;
    return this.http.get<any>(url);
  }
  
  public addUsers2(user: User): Observable<any> {
    const url = `${this._URL_USERS1}/users2/addUsers2`;
    return this.http.post<any>(url,user);
  }
  

}
