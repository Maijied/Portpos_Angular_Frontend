import { Component } from '@angular/core';
import {BackendService} from "../../app/services/backend.service"
import { TokenService } from "../../app/services/token.service"
import {Router} from "@angular/router";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public error:any;
  public form={
    email:null,
    password:null
  }
  constructor(private backend:BackendService,
              private token:TokenService,
              private router:Router,
              private Auth:AuthService) {
  }
  ngOnInit(): void{

  }
  submitLogin(){
    return this.backend.login(this.form).subscribe(
      data=>this.handleResponse(data),
      error =>this.handleError(error)
    );
  }

 handleResponse(data:any){
  this.token.handle(data.access_token);
  this.Auth.changeAuthStatus(true);
  this.router.navigateByUrl('/order-management');
 }
  handleError(error:any){
    this.error = error.error.error
  }
}
