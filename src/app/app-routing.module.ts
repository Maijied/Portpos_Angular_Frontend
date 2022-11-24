import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import {CreateOrderComponent} from "./create-order/create-order.component";
import {RefundManagementComponent} from "./refund-management/refund-management.component";
const routes: Routes = [
  {
    path:'',
    component:LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path:'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path:'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path:'order-management',
    component: OrderManagementComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'refund-management',
    component: RefundManagementComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'create-order',
    component: CreateOrderComponent,
    canActivate: [AfterLoginService]
  },
  {
    path:'**',
    redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
