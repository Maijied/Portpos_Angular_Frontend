import { Component } from '@angular/core';
import {BackendService} from "../../app/services/backend.service"
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  public error:any = [];
  public form={
    name:null,
    email:null,
    password:null,
    password_Confirmation:null
  }

  constructor(private backend:BackendService) {}
  ngOnInit(): void{

  }
  submitRegistration(){
    console.log(this.form);
    return this.backend.signup(this.form).subscribe(
      data=>console.log(data),
      error =>this.handleError(error)
    );
  }


  handleError(error:any){
    this.error = error.error.errors
  }
}
