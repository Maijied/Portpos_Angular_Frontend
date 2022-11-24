import {ElementRef, EventEmitter, Injectable, Component, OnInit, Inject} from '@angular/core';
import {AuthService} from "./auth.service";
import {MatSnackBar} from "@angular/material/snack-bar";
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  aClickedEvent: EventEmitter<any> = new EventEmitter<string>();
  snackbarInstant:any;
  constructor(private auth: AuthService,
              private snackBar:MatSnackBar) { }

  AClicked(msg: string) {
    this.aClickedEvent.emit(msg);
  }
  showMessage(message:string){
  this.snackBar.open(message,'OK',{
    duration:2000,
    horizontalPosition: "right",
    verticalPosition:"top"
  });
  }
}
