import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AdminRequestComponent } from './admin-request/admin-request.component';
import { BidderDashboardComponent } from './bidder-dashboard/bidder-dashboard.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { EditprofilefarmerComponent } from './editprofilefarmer/editprofilefarmer.component';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { GetActiveSellRequestComponent } from './get-active-sell-request/get-active-sell-request.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { PicUploadComponent } from './pic-upload/pic-upload.component';
import { PlaceSellrequestComponent } from './place-sellrequest/place-sellrequest.component';
import { RegisterBidderComponent } from './register-bidder/register-bidder.component';
import { RegistrationfarmerComponent } from './registrationfarmer/registrationfarmer.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { ShowHistoryComponent } from './show-history/show-history.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import {  } from './view-details/view-details.component';

const routes: Routes = [
  {path:"dashboard",component:AdminRequestComponent},
  {path:"login",component:LoginComponent},
  {path:"viewDetails",component:ViewDetailsComponent},
  {path:"farmerRegistration",component:RegistrationfarmerComponent},
  {path:"bidderRegistration",component:RegisterBidderComponent},
  {path:"setPassword",component:SetPasswordComponent},
  {path:"sellRequest",component:PlaceSellrequestComponent},
  {path:"farmerDashboard",component:FarmerDashboardComponent},
  {path:"farmerEditProfile",component:EditprofilefarmerComponent},
  {path:"bidderDashboard",component:BidderDashboardComponent},
  {path:"bidderEditProfile",component:EditComponentComponent},
  {path:"getActiveSellRequest",component: GetActiveSellRequestComponent},
  { path: 'about', component:AboutComponent },
  { path: 'help', component: HelpComponent},
  { path: 'showHistory', component: ShowHistoryComponent},
  { path: 'picUpload', component: PicUploadComponent},
  {path:"",redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
