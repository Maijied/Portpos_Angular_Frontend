import {Component, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../services/token.service";
import {AuthService} from "../services/auth.service";
import {BackendService} from "../services/backend.service";
import {CommonService} from "../services/common.service";
import {NgForm} from "@angular/forms";
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent {
  public error:any;
  public orderStatus:any;
  public form={
    name:null,
    email:null,
    phone:null,
    street:null,
    city:null,
    state:null,
    zipcode:null,
    amount:null,
    product_name:null,
    product_details:null,
  }
  constructor(private backend:BackendService,
              private token:TokenService,
              private router:Router,
              private Auth:AuthService,
              private common:CommonService,
              private toastr: ToastrService) {
  }
  ngOnInit(): void{
  }
  submitOrderDetails(orderForm: NgForm){
    let notificationElement : HTMLElement = document.getElementById('notificationMessage') as HTMLElement;
    return this.backend.createNewOrder(this.form).subscribe(async (response)=>{
      if (response){
        this.orderStatus = response;
        if (this.orderStatus.code == 200){
          // this.showSuccess(this.orderStatus.message);
          this.error = this.orderStatus.message;
          orderForm.reset();
        }else{
          this.error = this.orderStatus.message;
        }

      }
    })
  }
  showSuccess(Message:any) {
    console.log("Working");
    this.toastr.show(Message, 'Toastr fun!');
    console.log("Working End");
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
