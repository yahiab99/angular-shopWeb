import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';
import { SoldProductsService } from 'src/services/sold-products.service';
import { Card } from 'src/models/card';

@Component({
  selector: 'app-yourcart',
  templateUrl: './yourcart.component.html',
  styleUrls: ['./yourcart.component.css']
})
export class YourcartComponent implements OnInit {

  t: string = './assets/images/trash.png'

  sale: any = []
  sold : Card = new Card("black chair", "../assets/images/products/img1.jpg","69.99", "111111")
  sold1 : Card = new Card("white chair", "../assets/images/products/img2.jpg", "99.99","222222")
  sold2 : Card = new Card("red chair", "../assets/images/products/img3.png", "49.99","333333")
  sold3 : Card = new Card("gray chair", "../assets/images/products/img4.jpg","49.99", "444444")
  sold4 : Card = new Card("white stool", "../assets/images/products/t1.jpg","39.99", "555555")
  sold5 : Card = new Card("gray stool",  "../assets/images/products/img6.jpg","69.99","666666")
  sold6 : Card = new Card("white table", "../assets/images/products/table1.jpg","129.99", "777777")
  sold7 : Card = new Card("black table", "../assets/images/products/table3.jpg","149.99", "888888")
  sold8 : Card = new Card("food table", "../assets/images/products/table4.jpg","249.99",  "999999")

  s : Card = new Card("small box", "../assets/images/products1/p1.jpg","9.99", "111222")
  s1 : Card = new Card("r", "../assets/images/products1/p5.jpg","9.99", "111333")
  s2 : Card = new Card("white box", "../assets/images/products1/p7.jpg","8.99", "111444")
  s3 : Card = new Card("plastic spoons", "../assets/images/products1/p9.jpg","6.99",  "111555")
  s4 : Card = new Card("kofsa-3", "../assets/images/products1/p3.webp", "7.99","112211")
  s5 : Card = new Card("plastic cups", "../assets/images/products1/p4.jpg","14.99", "221122")
  s6 : Card = new Card("plastic dish", "../assets/images/products1/p2.webp", "9.99","222111")
  s7 : Card = new Card("salvers",  "../assets/images/products1/p6.jpg","19.99","333111") 
  s8 : Card = new Card("packet", "../assets/images/products1/p8.jpg","12.99", "444111")

  constructor(private userService: UsersService, private soldProducts: SoldProductsService) { }

  ngOnInit(): void {
    this.soldProducts.getSale().subscribe(sale  => {
      this.sale = sale;
    });
  }
  remove(s:any){
    // alert('אתה בטוח להסיר המוצר ?')
    switch(s.title1){
      case 'black chair':
        this.soldProducts.removeSale(this.sold).subscribe(sale  => {
          this.sale = sale;
        });
      break;
      case 'white chair':
        this.soldProducts.removeSale1(this.sold1).subscribe(sale  => {
          this.sale = sale;
        });
      break;
      case 'red chair':
        this.soldProducts.removeSale2(this.sold2).subscribe(sale  => {
          this.sale = sale;
        });
      break;
      case 'gray chair':
        this.soldProducts.removeSale3(this.sold3).subscribe(sale  => {
          this.sale = sale;
        });
      break;
      case 'white stool':
        this.soldProducts.removeSale4(this.sold4).subscribe(sale  => {
          this.sale = sale;
        });
      break;
      case 'gray stool':
        this.soldProducts.removeSale5(this.sold5).subscribe(sale  => {
          this.sale = sale;
        });
      break;
      case 'white table':
        this.soldProducts.removeSale6(this.sold6).subscribe(sale  => {
          this.sale = sale;
        });
      break;
      case 'black table':
        this.soldProducts.removeSale7(this.sold7).subscribe(sale  => {
          this.sale = sale;
        });
      break;
      case 'food table':
        this.soldProducts.removeSale8(this.sold8).subscribe(sale  => {
          this.sale = sale;
        });
      break;
      //cards1
      case 'small box':
        this.soldProducts.removeS(this.s).subscribe(sale  => {
          this.sale = sale;
        });
      break;
      case 'r':
        this.soldProducts.removeS1(this.s1).subscribe(sale  => {
          this.sale = sale;
        });
      break;
      case 'white box':
        this.soldProducts.removeS2(this.s2).subscribe(sale  => {
          this.sale = sale;
        });
      break;
      case 'plastic spoons':
        this.soldProducts.removeS3(this.s3).subscribe(sale  => {
          this.sale = sale;
        });
      break;
      case 'kofsa-3':
        this.soldProducts.removeS4(this.s4).subscribe(sale  => {
          this.sale = sale;
        });
      break;
      case 'plastic cups':
        this.soldProducts.removeS5(this.s5).subscribe(sale  => {
          this.sale = sale;
        });
      break;
      case 'plastic dish':
        this.soldProducts.removeS6(this.s6).subscribe(sale  => {
          this.sale = sale;
        });
      break;
      case 'salvers':
        this.soldProducts.removeS7(this.s7).subscribe(sale  => {
          this.sale = sale;
        });
      break;
      case 'packet':
        this.soldProducts.removeS8(this.s8).subscribe(sale  => {
          this.sale = sale;
        });
      break;
    }
  }
}
