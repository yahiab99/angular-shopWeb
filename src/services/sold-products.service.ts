import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Card } from 'src/models/card';

@Injectable({
  providedIn: 'root'
})
export class SoldProductsService {

  constructor(private http: HttpClient) { }
  private _URL_USERS1: string = 'http://localhost:3000';


  public addorder(orderID: string,productID: string,customerID: string,quantity: string): Observable<any> {
    const url = `${this._URL_USERS1}/orders/order?orderID=${orderID}&productId=${productID}&customerID=${customerID}&quantity=${quantity}`;
    return this.http.get<any>(url);
  }




  public getSale(): Observable<any> {
    const url = `${this._URL_USERS1}/orders/sale`;
    return this.http.get<any>(url);
  }
  
  public addSale(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addSale?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  
  public removeSale(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeSale?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public addSale1(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addSale1?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public removeSale1(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeSale1?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public addSale2(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addSale2?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public removeSale2(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeSale2?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public addSale3(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addSale3?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public removeSale3(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeSale3?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public addSale4(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addSale4?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public removeSale4(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeSale4?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public addSale5(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addSale5?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public removeSale5(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeSale5?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public addSale6(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addSale6?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public removeSale6(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeSale6?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public addSale7(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addSale7?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public removeSale7(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeSale7?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public addSale8(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addSale8?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public removeSale8(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeSale8?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }

  //cards1
  public addS(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addS?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public removeS(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeS?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public addS1(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addS1?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public removeS1(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeS1?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public addS2(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addS2?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public removeS2(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeS2?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public addS3(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addS3?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public removeS3(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeS3?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public addS4(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addS4?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public removeS4(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeS4?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public addS5(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addS5?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public removeS5(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeS5?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public addS6(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addS6?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public removeS6(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeS6?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public addS7(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addS7?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public removeS7(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeS7?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public addS8(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/addS8?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
  public removeS8(sold: Card): Observable<any> {
    const url = `${this._URL_USERS1}/orders/removeS8?i=${sold.productID}&title=${sold.name}&price=${sold.price}&image=${sold.image}`;
    return this.http.get<any>(url);
  }
}
