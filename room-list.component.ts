import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HotelServiceService } from '../hotel-service.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent {
  roomList:any[]=[];
  constructor(private hotelApi:HotelServiceService,private opeModal:NgbModal,private router:Router){}
  ngOnInit() {
    let userid
    this.hotelApi.getuserid().subscribe(event=>{
      userid=event;
    })
    this.hotelApi.getroomallocated(userid).subscribe((event) => {
      if(event.type==0)
        return;
      else
      {
        event.body.forEach(event=>{
          this.roomList.push({
            'roomno':event.r_number,
            'rid':event.r_id,
            'fromdate':event.from_date,
            'enddate':event.end_date,
            'name':event.reserved_name,
            'noofperson':event.no_person,
            'hname':event.h_name
          })
        }
          )
          console.log(this.roomList);
       
      }
    })
  }
  navigate(navigate){
    this.router.navigate([navigate])
    }

}
