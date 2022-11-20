import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { Shopping1Component } from './shopping1/shopping1.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';
import { Main1Component } from './main1/main1.component';
import { SliderComponent } from './slider/slider.component';
import { Shopping2Component } from './shopping2/shopping2.component';
import { YourcartComponent } from './yourcart/yourcart.component';
import { FooterComponent } from './footer/footer.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    Shopping1Component,
    LoginComponent,
    SignupComponent,
    ShoppingcartComponent,
    Main1Component,
    SliderComponent,
    Shopping2Component,
    YourcartComponent,
    FooterComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
