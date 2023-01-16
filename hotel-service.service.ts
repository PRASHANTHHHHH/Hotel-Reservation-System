import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {
  private userid=new BehaviorSubject<any>({});
serverRoot:String='http://localhost:8081';
  constructor(private http: HttpClient) { }

  getRoomList(hname:String): Observable<any> { 
    const newRequest = new HttpRequest('GET', `${this.serverRoot}/getRoomList?hname=${hname}`, { }); 
    return this.http.request(newRequest); }
  
    bookNow(userName:String,fromDate:String,endDate:String,roomid:String): Observable<any> { 
      const newRequest = new HttpRequest('POST', `${this.serverRoot}/booknowdetails?uname=${userName}&fromdate=${fromDate}&enddate=${endDate}&rid=${roomid}`, { }); 
      return this.http.request(newRequest); }

      registeredConfirm(roomid:String,userid): Observable<any> { 
        const newRequest = new HttpRequest('POST', `${this.serverRoot}/registerConfirmed?rid=${roomid}&userid=${userid}`, { }); 
        return this.http.request(newRequest); }
        checkout(hotelname:String,roomno:String){
          const newRequest = new HttpRequest('POST', `${this.serverRoot}/checkout?hotelname=${hotelname}&roomno=${roomno}`, { }); 
          return this.http.request(newRequest); }

          signup(username:String,emailid:String,pswd,phno):Observable<any>{
            const newRequest = new HttpRequest('POST', `${this.serverRoot}/signup?username=${username}&emailid=${emailid}&pswd=${pswd}&phno=${phno}`, { }); 
            return this.http.request(newRequest); }
            signin(emailid:String,pswd):Observable<any>{
              const newRequest = new HttpRequest('GET', `${this.serverRoot}/signin?emailid=${emailid}&pswd=${pswd}`, { }); 
              return this.http.request(newRequest); }
              getroomallocated(userid):Observable<any>{
                const newRequest = new HttpRequest('GET', `${this.serverRoot}/roomlist?userid=${userid}`, { }); 
                return this.http.request(newRequest); }
            setuserid(userid){
              this.userid.next(userid)
            }
            getuserid(){
            return  this.userid.asObservable();
            }
        }

