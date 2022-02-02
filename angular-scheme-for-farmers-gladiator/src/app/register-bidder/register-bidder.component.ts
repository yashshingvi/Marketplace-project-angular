import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidderService } from '../bidder.service';

@Component({
  selector: 'app-register-bidder',
  templateUrl: './register-bidder.component.html',
  styleUrls: ['./register-bidder.component.css']
})
export class RegisterBidderComponent implements OnInit {

  b:Bidder = new Bidder();
  response:any;
  constructor(private senddetails:BidderService, private router: Router) { }

  ngOnInit(): void {
  }

  register(){
    // alert(JSON.stringify(this.b));
    this.senddetails.register(this.b).subscribe(response =>{
      this.response = response;
      // alert(JSON.stringify(response));
      sessionStorage.setItem("id", String(this.b.email));
      sessionStorage.setItem("type", "BIDDER");

      if(this.response.status=='SUCCESS')
      this.router.navigate(['setPassword']);
      
    });
    console.log(this.b.email);
    
 }


}

export class Bidder{
  name:string;
  address:string;
  city:string;
  state:string;
  pincode:string;
  mobileNo:string;
  adhaarNo:string;
  accountNo:string;
  traderLicense:string;
  ifscCode:string;
  status:number =2;
  email:string;  
}
