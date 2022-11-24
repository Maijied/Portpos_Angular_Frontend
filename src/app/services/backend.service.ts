import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class BackendService {
  baseUrl = "http://127.0.0.1:8000/api/"
  httpFormDataHeader = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(private http:HttpClient) {
  }
  signup(data:any){
    return this.http.post(this.baseUrl+'signup', data, this.httpFormDataHeader);
  }
  login(data:any){
    return this.http.post(this.baseUrl+'login', data, this.httpFormDataHeader);
  }
  createNewOrder(data:any){
    return this.http.post(this.baseUrl+'create-order', data, this.httpFormDataHeader);
  }
  getOrderList(){
    return this.http.get(this.baseUrl+'get-order', this.httpFormDataHeader);
  }
  getRefundOrderList(){
    return this.http.get(this.baseUrl+'get-refund-request-data', this.httpFormDataHeader);
  }
  checkOrderStatus(data:any){
    return this.http.post(this.baseUrl+'update-order-status', data, this.httpFormDataHeader);
  }
  refundRequest(data:any){
    return this.http.post(this.baseUrl+'refund-request', data, this.httpFormDataHeader);
  }
}
