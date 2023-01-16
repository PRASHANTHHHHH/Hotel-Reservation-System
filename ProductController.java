package com.javapoint;

import java.util.List;  
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;  
@RestController  
@CrossOrigin("http://localhost:4200")
public class ProductController   
{  
@Autowired  
private IProductService productService; 
@GetMapping(value = "/getRoomList")  
public String getProduct(@RequestParam(name = "hname") String hname)   
{  
	String products = productService.getData(hname);  
return products;  
}  
@PostMapping(value = "/booknowdetails")	
public String BookNowDetails(@RequestParam(name = "uname")String uname,	
		@RequestParam(name = "fromdate") String fromdate,
		@RequestParam(name = "enddate") String enddate,
		@RequestParam(name = "rid") String roomid)
{  
	String products = productService.BookNow(uname,fromdate,enddate,roomid);  
	
return products;  
}  

@PostMapping(value = "/registerConfirmed")	
public String resgisterConfirmed(@RequestParam(name = "rid")String rid,@RequestParam(name = "userid")int userid)
{  
	String products = productService.conformRegistration(rid,userid);  
	
return products;  
}
@PostMapping(value = "/checkout")	
public String BookNowDetails(@RequestParam(name = "hotelname")String hotelname,	
		@RequestParam(name = "roomno") String roomno)
{
	String products = productService.checkOut(hotelname,roomno);  
	
	return products;  
}
@PostMapping(value = "/signup")	
public String signUp(@RequestParam(name = "username")String username,	
		@RequestParam(name = "emailid") String emailid,@RequestParam(name = "pswd") String pswd,
		@RequestParam(name = "phno") String phno)
{
	String products = productService.signUp(username,emailid,pswd,phno);  
	
	return products;  
}
@GetMapping(value = "/signin")	
public String signin(	
		@RequestParam(name = "emailid") String emailid,@RequestParam(name = "pswd")String pswd)
{
	String products = productService.signIn(emailid,pswd);  
	
	return products;  
}
@GetMapping(value = "/roomlist")	
public String roomlist(	
		@RequestParam(name = "userid") int userid)
{
	String products = productService.roomdetails(userid);  
	return products;  
}
} 