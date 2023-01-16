import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotelServiceService } from '../hotel-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username:string='';
  frstname:string='';
  lstname:string='';
  emailid:string='';
  pswd:string='';
  cpswd:string='';
  phno:string='';
  errormsgpswd:boolean;
  constructor(private hotelApi:HotelServiceService,private router:Router){}
  navigate(navigate){
  this.router.navigate([navigate])
}
signUp(){
  if(this.cpswd == this.pswd)
      this.errormsgpswd=false;
  else
   this.errormsgpswd=true;
   if(!this.errormsgpswd){
  this.username=this.frstname+this.lstname
  this.hotelApi.signup(this.username,this.emailid,this.pswd,this.phno).subscribe((event) => {
    if(event.type==0)
      return;
    else
    {
if(event.body.message=="signuped successfully"){
  this.router.navigate(['/signin'])
}
    }
  })}
 
}
}
