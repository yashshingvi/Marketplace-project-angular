import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AdminRequestComponent } from './admin-request/admin-request.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { RegisterBidderComponent } from './register-bidder/register-bidder.component';
import { PlaceSellrequestComponent } from './place-sellrequest/place-sellrequest.component';
import { GetActiveSellRequestComponent } from './get-active-sell-request/get-active-sell-request.component';
import { RegistrationfarmerComponent } from './registrationfarmer/registrationfarmer.component';
import { BidinfoComponent } from './bidinfo/bidinfo.component';
import { MaxbidComponent } from './maxbid/maxbid.component';
import { EditComponentComponent } from './edit-component/edit-component.component';
import { SetPasswordComponent } from './set-password/set-password.component';
import { FarmerDashboardComponent } from './farmer-dashboard/farmer-dashboard.component';
import { EditprofilefarmerComponent } from './editprofilefarmer/editprofilefarmer.component';
import { BidderDashboardComponent } from './bidder-dashboard/bidder-dashboard.component';
import { AboutComponent } from './about/about.component';
import { HelpComponent } from './help/help.component';
import { ShowHistoryComponent } from './show-history/show-history.component';
import { PicUploadComponent } from './pic-upload/pic-upload.component';
import { BidderhistoryComponent } from './bidderhistory/bidderhistory.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { SampleComponent } from './sample/sample.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminRequestComponent,
    ViewDetailsComponent,
    RegisterBidderComponent,
    PlaceSellrequestComponent,
    GetActiveSellRequestComponent,
    RegistrationfarmerComponent,
    BidinfoComponent,
    MaxbidComponent,
    EditComponentComponent,
    SetPasswordComponent,
    FarmerDashboardComponent,
    EditprofilefarmerComponent,
    BidderDashboardComponent,
    AboutComponent,
    HelpComponent,
    ShowHistoryComponent,
    PicUploadComponent,
    BidderhistoryComponent,
    SampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
