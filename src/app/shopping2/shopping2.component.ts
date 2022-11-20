import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';
import { SoldProductsService } from 'src/services/sold-products.service';
import { ProductsService } from 'src/services/products.service';
import { Card } from 'src/models/card';

@Component({
  selector: 'app-shopping2',
  templateUrl: './shopping2.component.html',
  styleUrls: ['./shopping2.component.css']
})
export class Shopping2Component implements OnInit {

  sale = []
  s : Card = new Card("small box", "../assets/images/products1/p1.jpg","9.99", "111222")
  s1 : Card = new Card("r", "../assets/images/products1/p5.jpg","9.99", "111333")
  s2 : Card = new Card("white box", "../assets/images/products1/p7.jpg","8.99", "111444")
  s3 : Card = new Card("plastic spoons", "../assets/images/products1/p9.jpg","6.99",  "111555")
  s4 : Card = new Card("kofsa-3", "../assets/images/products1/p3.webp", "7.99","112211")
  s5 : Card = new Card("plastic cups", "../assets/images/products1/p4.jpg","14.99", "221122")
  s6 : Card = new Card("plastic dish", "../assets/images/products1/p2.webp", "9.99","222111")
  s7 : Card = new Card("salvers",  "../assets/images/products1/p6.jpg","19.99","333111") 
  s8 : Card = new Card("packet", "../assets/images/products1/p8.jpg","12.99", "444111")

  products_2: any = []

  constructor(private userService: UsersService, private soldProducts: SoldProductsService, private products2: ProductsService) { }

  ngOnInit(): void {
    this.products2.getProducts2().subscribe(result => {
      this.products_2 = result;
    });
    this.soldProducts.getSale().subscribe(sale  => {
      this.sale = sale;
    });
  }
  addC1(card1: any){
    switch(card1.productID){
      case '111222':
        console.log('this is 1');
        this.soldProducts.addS(this.s).subscribe(sale  => {
          this.sale = sale;
        });
        break;
      case '111333':
        console.log('this is 2');
        this.soldProducts.addS1(this.s1).subscribe(sale  => {
          this.sale = sale;
        });
        break;
      case '111444':
        console.log('this is 3');
        this.soldProducts.addS2(this.s2).subscribe(sale  => {
          this.sale = sale;
        });
        break;
      case '111555':
        console.log('this is 4');
        this.soldProducts.addS3(this.s3).subscribe(sale  => {
          this.sale = sale;
        });
        break;
      case '112211':
        console.log('this is 5');
        this.soldProducts.addS4(this.s4).subscribe(sale  => {
          this.sale = sale;
        });
        break;
      case '221122':
        console.log('this is 6');
        this.soldProducts.addS5(this.s5).subscribe(sale  => {
          this.sale = sale;
        });
        break;
      case '222111':
        console.log('this is 7');
        this.soldProducts.addS6(this.s6).subscribe(sale  => {
          this.sale = sale;
        });
        break;
      case '333111':
        console.log('this is 8');
        this.soldProducts.addS7(this.s7).subscribe(sale  => {
          this.sale = sale;
        });
        break;
      case '444111':
        console.log('this is 9');
        this.soldProducts.addS8(this.s8).subscribe(sale  => {
          this.sale = sale;
        });
        break;              
          
    }
  }

}
