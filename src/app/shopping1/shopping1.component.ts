import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/services/users.service';
import { SoldProductsService } from 'src/services/sold-products.service';
import { ProductsService } from 'src/services/products.service';
import { Card } from 'src/models/card';

@Component({
  selector: 'app-shopping1',
  templateUrl: './shopping1.component.html',
  styleUrls: ['./shopping1.component.css']
})
export class Shopping1Component implements OnInit {
  
  sale = []
  sold : Card = new Card("black chair", "../assets/images/products/img1.jpg","69.99", "111111")
  sold1 : Card = new Card("white chair", "../assets/images/products/img2.jpg", "99.99","222222")
  sold2 : Card = new Card("red chair", "../assets/images/products/img3.png", "49.99","333333")
  sold3 : Card = new Card("gray chair", "../assets/images/products/img4.jpg","49.99", "444444")
  sold4 : Card = new Card("white stool", "../assets/images/products/t1.jpg","39.99", "555555")
  sold5 : Card = new Card("gray stool",  "../assets/images/products/img6.jpg","69.99","666666")
  sold6 : Card = new Card("white table", "../assets/images/products/table1.jpg","129.99", "777777")
  sold7 : Card = new Card("black table", "../assets/images/products/table3.jpg","149.99", "888888")
  sold8 : Card = new Card("food table", "../assets/images/products/table4.jpg","249.99",  "999999")

  products_1: any = [];

  constructor(private userService: UsersService, private soldProducts: SoldProductsService, private products1: ProductsService) { }

  ngOnInit(): void {
    this.products1.getProducts1().subscribe(result => {
      this.products_1 = result;
    });
    this.soldProducts.getSale().subscribe(sale  => {
      this.sale = sale;
     });
     
  }
  addC(card:any){
    console.log(this.sale)
    switch(card.productID){
      case '111111':
        console.log('this is 1');
        this.soldProducts.addSale(this.sold).subscribe(sale  => {
          this.sale = sale;
        });

        break;
      case '222222':
        console.log('this is 2');
        this.soldProducts.addSale1(this.sold1).subscribe(sale  => {
          this.sale = sale;
        });
        break;
      case '333333':
        console.log('this is 3');
        this.soldProducts.addSale2(this.sold2).subscribe(sale  => {
          this.sale = sale;
        });
        break;
      case '444444':
        console.log('this is 4');
        this.soldProducts.addSale3(this.sold3).subscribe(sale  => {
          this.sale = sale;
        });
        break;
      case '555555':
        console.log('this is 5');
        this.soldProducts.addSale4(this.sold4).subscribe(sale  => {
          this.sale = sale;
        });
        break;
      case '666666':
        console.log('this is 6');
        this.soldProducts.addSale5(this.sold5).subscribe(sale  => {
          this.sale = sale;
        });
        break;
      case '777777':
        console.log('this is 7');
        this.soldProducts.addSale6(this.sold6).subscribe(sale  => {
          this.sale = sale;
        });
        break;
      case '888888':
        console.log('this is 8');
        this.soldProducts.addSale7(this.sold7).subscribe(sale  => {
          this.sale = sale;
        });
        break;
      case '999999':
        console.log('this is 9');
        this.soldProducts.addSale8(this.sold8).subscribe(sale  => {
          this.sale = sale;
        });
        break;              
          
    }  
  }
}
