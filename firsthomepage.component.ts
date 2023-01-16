import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-firsthomepage',
  templateUrl: './firsthomepage.component.html',
  styleUrls: ['./firsthomepage.component.css']
})
export class FirsthomepageComponent {
constructor(private router:Router){}
  navigate(navigate){
  this.router.navigate([navigate])
  }

}
