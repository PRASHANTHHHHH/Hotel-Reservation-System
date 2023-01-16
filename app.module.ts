import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FirsthomepageComponent } from './firsthomepage/firsthomepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { RoomListComponent } from './room-list/room-list.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    FirsthomepageComponent,
    AboutUsComponent,
    CheckoutComponent,
    SignupComponent,
    SigninComponent,
    RoomListComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
