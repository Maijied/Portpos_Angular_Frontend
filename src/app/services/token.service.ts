import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }
  handle(token:any){
    this.set(token);
    console.log(this.isValid())
  }
  set(token:any){
    return localStorage.setItem('token',token);
  }
  get(){
    return localStorage.getItem('token');
  }
  remove(){
    return localStorage.removeItem('token');
  }
  isValid(){
    const token = this.get();
    if (token){
      const payload  = this.payload(token);
      if (payload){
        return (payload.iss==="http://127.0.0.1:8000/api/login")?true:false;
      }
    }
    return false;
  }
  payload(token:any){
    const payload = token.split('.')[1];
    return this.decode(payload);
  }
  decode(payload:any){
    return JSON.parse(atob(payload))
  }
  loggedIn(){
    return this.isValid();
  }
}
