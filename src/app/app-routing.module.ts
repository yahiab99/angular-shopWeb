import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Shopping1Component } from './shopping1/shopping1.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ShoppingcartComponent } from './shoppingcart/shoppingcart.component';

const routes: Routes = [
  { path: "*",  component: AppComponent},
  { path: "shopping1", component: Shopping1Component},
  { path: "login", component: LoginComponent},
  { path: "signup", component: SignupComponent},
  { path: "shoppingcart", component: ShoppingcartComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
