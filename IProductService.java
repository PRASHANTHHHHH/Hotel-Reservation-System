package com.javapoint;
  
import java.util.List;  

import java.util.List;  
public interface IProductService   
{  
String getData(String hname);  
String BookNow(String name,String fromDate,String EndDate,String roomid);
String conformRegistration(String roomid,int userid);
String checkOut(String hotelname,String rname); 
public String signUp(String name,String phno,String email,String pswd);
public String signIn(String emailid,String pswd);
public String roomdetails(int userid);
}  