import {Component, Inject} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../services/token.service";
import {AuthService} from "../services/auth.service";
import {BackendService} from "../services/backend.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material/dialog";
import {CommonService} from "../services/common.service";
import {async} from "rxjs";
import {ClipboardModule} from "@angular/cdk/clipboard"

@Component({
  selector: 'app-order-management',
  templateUrl: './order-management.component.html',
  styleUrls: ['./order-management.component.css']
})
export class OrderManagementComponent {
  orderCollection: any;
  totalOrderItems: number = 0;
  public error:any;
  public orderStatus:any;
  public refundStatus:any;

  constructor(private router:Router,
              private token:TokenService,
              private Auth:AuthService,
              private backend:BackendService,
              public commonService:CommonService) {
  }

  ngOnInit(): void {
    this.getOrdersList();
    this.commonService.aClickedEvent.subscribe((data: string) => {
      this.getOrdersList();
    })
  }

  getOrdersList(){
    this.backend.getOrderList().subscribe(async (response)=>{
      if (response){
        this.orderCollection = response;
        if (this.orderCollection.code == 200){
          this.orderCollection = this.orderCollection.data.data;
          this.totalOrderItems = this.orderCollection.length;
          console.log(this.orderCollection);
        }else{
          this.orderCollection = [];
        }

      }
    })
  }
  updateOrderStatus(orderData:any){
    return this.backend.checkOrderStatus(orderData).subscribe(async (response)=>{
      if (response){
        this.orderStatus = response;
        if (this.orderStatus.code == 200){
          this.getOrdersList()
          // this.showSuccess(this.orderStatus.message);
          this.error = this.orderStatus.message;
        }else{
          this.error = this.orderStatus.message;
        }

      }
    })
  }
  refundOrder(refundData:any){
    return this.backend.refundRequest(refundData).subscribe(async (response)=>{
      if (response){
        this.refundStatus = response;
        if (this.refundStatus.code == 200){
          this.getOrdersList()
          // this.showSuccess(this.orderStatus.message);
          this.error = this.refundStatus.message;
        }else{
          this.error = this.refundStatus.message;
        }

      }
    })
  }
  handleResponse(data:any){
    this.token.handle(data.access_token);
    this.Auth.changeAuthStatus(true);
    this.router.navigateByUrl('/order-management');
  }
  handleError(error:any){
    this.error = error.error.error
  }
  logout(event:MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
}

