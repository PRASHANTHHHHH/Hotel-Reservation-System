import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HotelServiceService } from '../hotel-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {
  emailid:string='';
  pswd:string='';
  constructor(private hotelApi:HotelServiceService,private router:Router){}
  navigate(navigate){
  this.router.navigate([navigate])
}
signIn(){
  this.hotelApi.signin(this.emailid,this.pswd).subscribe((event) => {
    if(event.type==0)
      return;
    else
    { if(event.body.length==0)
        alert("no user found please signup");
      if((event.body[0].email_id==this.emailid) && (event.body[0].password==this.pswd)){
        this.hotelApi.setuserid(event.body[0].user_id);
        this.router.navigate(['/homepage'])
      }
      else
      alert("username or pswd is wrong please check once")
    }
  })
 
}
}
