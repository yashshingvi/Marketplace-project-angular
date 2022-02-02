import { Component, OnInit } from '@angular/core';

import { FarmerService } from '../farmer.service';

@Component({
  selector: 'app-editprofilefarmer',
  templateUrl: './editprofilefarmer.component.html',
  styleUrls: ['./editprofilefarmer.component.css']
})
export class EditprofilefarmerComponent {

  farmer:Farmer=new Farmer();
  response:any;
  report:any;
  id:number ;

  constructor(private getreq:FarmerService) { }

  ngOnInit(): void {
    this.id = parseInt(sessionStorage.getItem('lid'), 10);
    //this.id = sessionStorage.getItem('id');
    
    this.getreq.getFarmer(this.id).subscribe(response => {
      // alert(JSON.stringify(response));
      this.response = response;
      this.farmer.id = response.id;
      this.farmer.name = response.name;
      this.farmer.address = response.address;
      this.farmer.city =response.city;
      this.farmer.city =response.city;
      this.farmer.state = response.state;
      this.farmer.pincode =response.pincode;
      this.farmer.mobileNo = response.mobileNo;
      this.farmer.aadharNo = response.aadharNo;
      this.farmer.accountNo = response.accountNo;
      this.farmer.ifscCode =response.ifscCode;
      this.farmer.email =response.email;
      this.farmer.area=response.area;

      });

  }


  edit(){

    // alert(JSON.stringify(this.farmer));
    this.getreq.edit(this.farmer).subscribe(response =>{
      this.response = response;
      // alert(JSON.stringify(response));
    })
    setTimeout(function(){​​
      // this.router.navigate(["login"]);
      window.location.reload();
     }​​, 1500);
    
 }
 


}

export class Farmer {
  id: number
  name: string=""
  email: string=""
  mobileNo:string=""
  address:string=""
  city:string=""
  state:string=""
  pincode:string=""
  accountNo:string=""
  ifscCode:string=""
  aadharNo:string=""
  status:number=2
  area:string=""
}

