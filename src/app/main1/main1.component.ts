import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main1',
  templateUrl: './main1.component.html',
  styleUrls: ['./main1.component.css']
})
export class Main1Component implements OnInit {

  dis:boolean =  false;
  aa: string = 'assets/images/aa.jpg';
  bb: string = 'assets/images/bb.webp';
  cc: string = 'assets/images/cc.jpg';
  dd: string = 'assets/images/dd.jpg';
  map: string = 'assets/images/map.png';
  map1: string = 'assets/images/map1.png';
  

  main2Display: boolean = true;
  shopping1Display: boolean = false;
  shopping2Display: boolean = false;
  shopping3Display: boolean = false;

  constructor(private router: Router) { }

  ngOnInit(): void { 
  }
  
  gotoShopping2(){
    this.main2Display = !this.main2Display;
    this.shopping2Display = !this.shopping2Display;

    if(this.shopping1Display == true && this.main2Display == true){
      this.shopping1Display = false
      this.main2Display = false
      this.shopping2Display = true
    } 
  }

  gotoShopping1(){
    this.main2Display = !this.main2Display;
    this.shopping1Display = !this.shopping1Display;
    if(this.shopping2Display == true && this.main2Display == true)
    {
      this.shopping2Display = false
      this.main2Display = false
      this.shopping1Display = true
    }
  }
}
