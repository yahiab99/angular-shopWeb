import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from 'src/services/data.service';
import { Router } from '@angular/router';
import { ShareService } from '../../services/share.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  ClickEventSubscription: Subscription;

  cartpi: string = 'assets/images/bb.png';
  userpi: string = 'assets/images/user-01.png';
  plastic: string = 'assets/images/plastic.png';

  logindisplay: any
  signupdisplay: any
  userdisplay: any
  disCdisplay: any
  
  userConnected: any = []
  constructor(private data: DataService, private router: Router, private shareService: ShareService) 
  {
    this.ClickEventSubscription = this.shareService.getClickEvent().subscribe(()=>{
      this.changeConnection()
    })
    this.userConnected = this.data.getLogin();
    this.logindisplay = this.data.getlogind();
    this.signupdisplay = this.data.getsignupd();
    this.userdisplay = this.data.getuserd();
    this.disCdisplay = this.data.getdisCdisplay();
  }
  
  ngOnInit(): void {
  }
  main(){
    this.router.navigateByUrl('/')
    
  }
  changeConnection(){
    this.logindisplay = !this.logindisplay
    this.signupdisplay = !this.signupdisplay
    this.userdisplay = !this.userdisplay
    this.disCdisplay = !this.disCdisplay
  }
  disconnect(){
    this.changeConnection()
    this.userConnected.pop();
  }
  
}
