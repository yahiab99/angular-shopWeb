import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root',
})
export class DataService {

  private userConnected = []
  private logindisplay = true
  private signupdisplay = true
  private userdisplay = false
  private disCdisplay = false
  

  constructor() {
  }
  
  public getLogin(){
    return this.userConnected
  }
  public getlogind(){
    return this.logindisplay
  }
  public getsignupd(){
    return this.signupdisplay
  }
  public getuserd(){
    return this.userdisplay
  }
  public getdisCdisplay(){
    return this.disCdisplay
  }

  
 
}
