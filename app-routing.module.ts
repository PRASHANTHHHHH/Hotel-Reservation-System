import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { CheckoutComponent } from './checkout/checkout.component';

import { FirsthomepageComponent } from './firsthomepage/firsthomepage.component';
import { HomePageComponent } from './home-page/home-page.component';
import { RoomListComponent } from './room-list/room-list.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  {    path: 'signin',  component: SigninComponent},
  {    path: 'roomlist',  component: RoomListComponent},
  {
    path: 'homepage',  component: FirsthomepageComponent},
     {path: '',  redirectTo:'/signin',pathMatch:'full' },
{    path: 'register',  component: HomePageComponent},
{    path: 'checkout',  component: CheckoutComponent},
{    path: 'aboutus',  component: AboutUsComponent},
{    path: 'signup',  component: SignupComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
