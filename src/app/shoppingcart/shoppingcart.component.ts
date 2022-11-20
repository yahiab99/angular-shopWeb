import { Component, OnInit } from '@angular/core';
import { Card } from 'src/models/card';
import { SoldProductsService } from 'src/services/sold-products.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-shoppingcart',
  templateUrl: './shoppingcart.component.html',
  styleUrls: ['./shoppingcart.component.css']
})
export class ShoppingcartComponent implements OnInit {

  options: Array<string>;
  branches: Array<string>;

  sale: any = []
  i1: string = ''
  title1: string = '';
  price1: string = '';
  image1: string = '';
  

  order: any = []
  orderId: string = ''
  productID: string = '';
  customerID: string = '';
  quantity: string = '';
  
  constructor(private soldProducts: SoldProductsService,  private router: Router){
    this.options = ['בחר סוג משלוח', 'משלוח עד הבית', 'איסוף מהסניף'];
    this.branches = ['בחר סניף', 'חיפה', 'כרמיאל', 'סכנין', 'אילת', 'תל-אביב']
  }
  
  
  ngOnInit(): void {
    this.soldProducts.getSale().subscribe(sale  => {
      this.sale = sale;
     });
  }
  enterpng: string = 'assets/images/enter.png';
  backbutton: string = 'assets/images/back-button.png';
  debitcard: string = 'assets/images/debit-card.png';
  schedule: string = 'assets/images/schedule.png';
  cvv: string = 'assets/images/cvv.png';
  numbers: string = 'assets/images/numbers.png';


  productsDisplay = false;
  shippingDisplay = false;
  payDisplay = false;
  
  
  
  clickProductsDisplay(){
    this.productsDisplay = !this.productsDisplay;
    
  }
  clickShippingDisplay(){
    this.shippingDisplay = !this.shippingDisplay
  }
  clickPayDisplay(){
    this.payDisplay = !this.payDisplay;
  }
  
  shipping1Display = false
  shipping2Display = false;
  public onChange(event: any): void {
    const newVal = event.target.value
    
    if (newVal == 'בחר סוג משלוח'){
      this.shipping1Display = false
      this.shipping2Display = false
    }
    if (newVal == 'משלוח עד הבית'){
      this.shipping1Display = true
      this.shipping2Display = false
    }
    if (newVal == 'איסוף מהסניף'){
      this.shipping1Display = false
      this.shipping2Display = true
    }

  }
  sum_p = 0
  sum(){
    this.sum_p = 0
    for (let i = 0; i < this.sale.length; i++){
      this.sum_p += Math.round(parseFloat(this.sale[i].price1))
    }
    
  }
  pay(){
    this.soldProducts.addorder(this.sale.i1,this.sale.title1,this.sale.price1,this.sale.i1).subscribe(result  => {
      this.order = result
    });
    console.log(this.order)
    let isPayed = confirm("לבציע תשלום ?");
    console.log(isPayed);
  }
  exitCart(){
    this.router.navigateByUrl('/')
  }
}
