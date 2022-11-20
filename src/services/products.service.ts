import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  private _URL_USERS1: string = 'http://localhost:3000';
  
  public getProducts1(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/products/products1');
  }
  public getProducts2(): Observable<any>{
    return this.http.get<any>('http://localhost:3000/products/products2');
  }
  
}