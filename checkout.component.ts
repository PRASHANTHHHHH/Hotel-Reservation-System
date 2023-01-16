import { ViewChild } from '@angular/core';
import { Component, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HotelServiceService } from '../hotel-service.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
hotelname:String='';
roomno:String='';
@ViewChild('SuccessModal') sucessmsg: TemplateRef<any> | undefined;
  constructor(private hotelApi:HotelServiceService,private router:Router,private opeModal:NgbModal){}
  navigate(navigate){
  this.router.navigate([navigate])
  }

  checkout(){
    {
      this.hotelApi.checkout(this.hotelname,this.roomno).subscribe((event) => {
        if(event.type==0)
          return;
        else
        {
          this.opeModal.open(this.sucessmsg)
          this.hotelname="";
          this.roomno=""; 
    }})
    }
  }
}
