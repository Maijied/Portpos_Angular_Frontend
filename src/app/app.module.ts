import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import  { FormsModule } from "@angular/forms"
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { OrderManagementComponent } from './order-management/order-management.component';
import { HttpClientModule } from "@angular/common/http"
import { MatDialogModule } from '@angular/material/dialog';
import { CreateOrderComponent } from './create-order/create-order.component';
import { MatSnackBarModule} from "@angular/material/snack-bar";
import {ClipboardModule} from "@angular/cdk/clipboard";
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { RefundManagementComponent } from './refund-management/refund-management.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    ClipboardModule,
    CommonModule,
    ToastrModule.forRoot({
      // timeOut: 10000,
      // positionClass: 'toast-bottom-right',
    }),
  ],
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    OrderManagementComponent,
    CreateOrderComponent,
    RefundManagementComponent,
  ],
  entryComponents: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
