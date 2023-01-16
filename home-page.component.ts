import { Component, ComponentFactoryResolver, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RouteConfigLoadEnd, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HotelServiceService } from '../hotel-service.service';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
locationDataType: any = ['Bangalore','Chennai','Mumbai'];
bangloreHotel:any=['Grand Hotel','One Star','Three Star'];
chennaiHotel:any=['Family Hotel','Five Star Hotel','Star Hotel'];
mumbaihotel:any=['Four star','Krishna Hotel','Royal Hotel'];
roomList:any[]=[];
actualHotelList:any;
selectedRoom:String='';
firstname:any='';
 lastname:any='';
 phoneNumber:String='';
 email:String='';
 depatureDate:String='';
 ArrivalDate:String='';
 userName:String='';
 roomIdNo:String='';
 amount:String='';
 roomDetails:any[]=[];
 @ViewChild('mymodal') templateRef: TemplateRef<any> | undefined;
 @ViewChild('SuccessModal') sucessmsg: TemplateRef<any> | undefined;
constructor(private hotelApi:HotelServiceService,private opeModal:NgbModal,private router:Router) {
  
}
 ngOnInit() {

}
navigate(navigate){
  this.router.navigate([navigate])
  }
selectlocChange(event: any){
console.log(event.target.value);
if(event.target.value=='Mumbai')
this.actualHotelList=this.mumbaihotel;
else if(event.target.value=='Bangalore')
this.actualHotelList=this.bangloreHotel;
else if(event.target.value=='Chennai')
this.actualHotelList=this.chennaiHotel;
console.log(this.actualHotelList);
}
selectHotelChange(event: any){
  this.roomList=[];
  let hotelName;
  hotelName=event.target.value;
  hotelName="\""+ hotelName+  "\"";
  this.hotelApi.getRoomList(hotelName).subscribe((event) => {
    if(event.type==0)
      return;
    else
    {
      event.body.forEach((element: any) => {

this.roomList.push({
  'roomName':element.roomName,
  'roomId':element.roomid
})        
      });
    }
    console.log(this.roomList);
  });
}

bookNow(mymodal: any){
  this.userName= this.firstname.concat(" ",this.lastname);
  this.hotelApi.bookNow(this.userName,this.ArrivalDate,this.depatureDate,this.roomIdNo).subscribe((event) => {
    if(event.type==0)
      return;
    else
    {
        this.roomDetails.push({
          'amtPerson':event.body[0].amtPerson,
          'noperson':event.body[0].noPerson
        })
      this.opeModal.open(this.templateRef)
    }
  })
 
  console.log(this.userName);
}

selectRoomChange(event:any){
  this.roomList.forEach((element: any) => {
if(element.roomName==event.target.value)
this.roomIdNo=element.roomId;
  })       
this.selectedRoom=event.target.value;
}
makepayment(){
let userid;
if(this.amount == this.roomDetails[0].amtPerson)
{
  this.hotelApi.getuserid().subscribe(event=>{
userid=event;
console.log(userid);
  });
  this.hotelApi.registeredConfirm(this.roomIdNo,userid).subscribe((event) => {
    if(event.type==0)
      return;
    else
    {
      this.opeModal.dismissAll(this.templateRef);
      this.opeModal.open(this.sucessmsg)
}})
}
 else
 alert("please enter a correct amount");
}
reset(){
  this.lastname='';
  this.firstname='';
  this.email='';
  this.ArrivalDate='';
  this.phoneNumber='';
  this.depatureDate='';
}
}

