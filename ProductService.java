package com.javapoint;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;  
import java.util.List;
import java.util.Properties;
import java.util.Random;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.stereotype.Service;  
@Service  
public class ProductService implements IProductService    
{  int userid=1123;
@Override  
public String getData(String hname)  
{                List<JSONObject> json1 = new  ArrayList<JSONObject>();

JSONArray roomNames = new JSONArray();
	String query="";
	String hotelId="";
	try{  

		Class.forName("com.mysql.cj.jdbc.Driver");  
		Connection con=DriverManager.getConnection(  
		"jdbc:mysql://localhost:3306/hotel_reservation","root","root");  
		Statement stmt=con.createStatement();  
		query="select * from hotel where h_name="+hname;
		ResultSet rs=stmt.executeQuery(query);  
		while(rs.next())  
			hotelId=rs.getString("h_id").toString();
		query="select * from room where reserved=0 and h_id="+"\'"+hotelId+"\'";
		ResultSet rs1=stmt.executeQuery(query);

		while(rs1.next()) {
			JSONObject json = new JSONObject();
			json.put("roomName", rs1.getString("r_number").toString());
			json.put("roomid", rs1.getString("r_id").toString());
			json1.add(json);
			}
			
		System.out.println(json1);
		con.close();  
		}catch(Exception e){ System.out.println(e);}  
return json1.toString();
}  
public String BookNow(String name,String fromDate,String EndDate,String roomid) 
{
	 List<JSONObject> json1 = new  ArrayList<JSONObject>();
	String query;
	try{  
		Class.forName("com.mysql.cj.jdbc.Driver");  
		Connection con=DriverManager.getConnection(  
		"jdbc:mysql://localhost:3306/hotel_reservation","root","root");  
		Statement stmt=con.createStatement();  
query ="UPDATE room\n"
		+ "SET reserved_name="+"\'"+name+"\'"+",from_date="+"\'"+fromDate+"\'"+",end_date="+"\'"+EndDate+"\'"+"WHERE r_id="+"\'"+roomid+"\'";
int result = stmt.executeUpdate(query);

query="select no_person,amt_person from room where r_id="+"\'"+roomid+"\'";
ResultSet rs21=stmt.executeQuery(query);
while(rs21.next()) {
	JSONObject json = new JSONObject();
	json.put("noPerson", rs21.getString("no_person").toString());
	json.put("amtPerson", rs21.getString("amt_person").toString());
	json1.add(json);
	}
	
System.out.println(json1);
		con.close();  
		}catch(Exception e){ System.out.println(e);}  
	return json1.toString();
	
}


public String conformRegistration(String roomid, int userid) {
	
	String query;	JSONObject json = new JSONObject();
	int enable=1	;
	try{  
		Class.forName("com.mysql.cj.jdbc.Driver");  
		Connection con=DriverManager.getConnection(  
		"jdbc:mysql://localhost:3306/hotel_reservation","root","root");  
		Statement stmt=con.createStatement();  
		
		query ="UPDATE room\n"
				+ "SET reserved="+"\'"+enable+"\'"+",userid="+"\'"+userid+"\'"+"WHERE r_id="+"\'"+roomid+"\'";
		int result = stmt.executeUpdate(query);

json.put("message","registred successfully");

		con.close();  
		}catch(Exception e){ System.out.println(e);}  

	
	
	return json.toString();
}
public String checkOut(String hotelname,String roomno  ) {
	
	 List<JSONObject> json1 = new  ArrayList<JSONObject>();
	String query, hid="",rid="",makeNull="NULL";
	JSONObject json = new JSONObject();
	int enable=0;

	try{  
		Class.forName("com.mysql.cj.jdbc.Driver");  
		Connection con=DriverManager.getConnection(  
		"jdbc:mysql://localhost:3306/hotel_reservation","root","root");  
		Statement stmt=con.createStatement();  
		query="select h_id from hotel where h_name="+ "\'"+ hotelname+"\'";
		ResultSet rs=stmt.executeQuery(query);  
		while(rs.next())  
			hid=rs.getString("h_id").toString();
		
		query="select r_id from room where r_number="+ "\'" + roomno + "\'"+"and h_id="+"\'"+hid+"\'";
		 rs=stmt.executeQuery(query);  
		while(rs.next())  
			rid=rs.getString("r_id").toString();
		query ="UPDATE room\n"
				+ "SET reserved="+"\'"+enable+"\'"+",reserved_name="+"\'"+makeNull+"\'"+",from_date="+"\'"+makeNull+"\'"+",end_date="+"\'"+makeNull+"\'"+"WHERE r_id="+"\'"+rid+"\'";
		
		int result = stmt.executeUpdate(query);


		con.close();  
		}catch(Exception e){ System.out.println(e);}  

	json.put("message","registred successfully");
	
	return json.toString();
} 
public String signUp(String name,String phno,String email,String pswd  ) {
	String query;JSONObject json = new JSONObject();
	try{  
		Random r = new Random();
		int low = 100;
		int high = 1000;
		 userid = r.nextInt(high-low) + low;
		Class.forName("com.mysql.cj.jdbc.Driver");  
		Connection con=DriverManager.getConnection(  
		"jdbc:mysql://localhost:3306/hotel_reservation","root","root");  
		Statement stmt=con.createStatement();  
		userid=userid++;
		query ="INSERT INTO user(user_id,user_name, email_id,password,phone_no)VALUES("
		+ "\'"+userid+"\'"+ ","+ "\'"+name+"\'"+","+ "\'"+phno+"\'"+"," + "\'"+email+"\'"+"," + "\'"+email+"\'"+");";
		System.out.println(query);
		int result = stmt.executeUpdate(query);
		json.put("message","signuped successfully");
}catch(Exception e){ System.out.println(e);}  
	return json.toString();
}

public String signIn(String emailid,String pswd) {
	String query,id,password;
	int userid;
	List<JSONObject> json1 = new  ArrayList<JSONObject>();
	try{  
		Class.forName("com.mysql.cj.jdbc.Driver");  
		Connection con=DriverManager.getConnection(  
		"jdbc:mysql://localhost:3306/hotel_reservation","root","root");  
		Statement stmt=con.createStatement();  
		query="select email_id,password,user_id from user where email_id="+"\'"+emailid+"\'";
		ResultSet rs21=stmt.executeQuery(query);
		while(rs21.next()) {
			JSONObject json = new JSONObject();
			id=rs21.getString("email_id").toString();
			userid=rs21.getInt("user_id");
			password=rs21.getString("password").toString();
			json.put("email_id",id );
			json.put("password", password);
			json.put("user_id", userid);
			json1.add(json);
			}
		
			
		System.out.println(json1);
}catch(Exception e){ System.out.println(e);}  
	return json1.toString(); 
}
public String roomdetails(int userid) {
	String query;
	List<JSONObject> json1 = new  ArrayList<JSONObject>();
	try{  
		Class.forName("com.mysql.cj.jdbc.Driver");  
		Connection con=DriverManager.getConnection(  
		"jdbc:mysql://localhost:3306/hotel_reservation","root","root");  
		Statement stmt=con.createStatement();  
		query="  SELECT r_number,h_name,reserved_name,r_id,from_date,end_date,no_person\r\n"
				+ "    FROM room r,hotel h\r\n"
				+ "    WHERE r.h_id=h.h_id and userid="+"\'"+userid+"\'";
		ResultSet rs21=stmt.executeQuery(query);
		while(rs21.next()) {
			JSONObject json = new JSONObject();
			json.put("r_number",rs21.getString("r_number").toString());
			json.put("r_id",rs21.getString("r_id").toString());
			json.put("h_name", rs21.getString("h_name").toString());
			json.put("reserved_name", rs21.getString("reserved_name").toString());
			json.put("from_date", rs21.getString("from_date").toString());
			json.put("end_date", rs21.getString("end_date").toString());
			json.put("no_person", rs21.getString("no_person").toString());
			json1.add(json);
			}
		
			
		System.out.println(json1);
}catch(Exception e){ System.out.println(e);}  
	return json1.toString(); 
}
}
