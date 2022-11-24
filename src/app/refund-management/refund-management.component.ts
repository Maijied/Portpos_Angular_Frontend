import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {TokenService} from "../services/token.service";
import {AuthService} from "../services/auth.service";
import {BackendService} from "../services/backend.service";
import {CommonService} from "../services/common.service";

@Component({
  selector: 'app-refund-management',
  templateUrl: './refund-management.component.html',
  styleUrls: ['./refund-management.component.css']
})
export class RefundManagementComponent {
  refundCollection: any;
  totalRefundItems: number = 0;
  public error:any;
  public refundStatus:any;
    constructor(private router:Router,
                private token:TokenService,
                private Auth:AuthService,
                private backend:BackendService,
                public commonService:CommonService) {
    }
  ngOnInit(): void {
    this.getRefundOrdersList();
    this.commonService.aClickedEvent.subscribe((data: string) => {
      this.getRefundOrdersList();
    })
  }
  getRefundOrdersList(){
    this.backend.getRefundOrderList().subscribe(async (response)=>{
      if (response){
        this.refundCollection = response;
        if (this.refundCollection.code == 200){
          this.refundCollection = this.refundCollection.data.data;
          this.totalRefundItems = this.refundCollection.length;
          console.log(this.refundCollection);
        }else{
          this.refundCollection = [];
        }

      }
    })
  }
  logout(event:MouseEvent){
    event.preventDefault();
    this.token.remove();
    this.Auth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }
}
