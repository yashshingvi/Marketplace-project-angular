import { Component, OnInit } from '@angular/core';
import { EditService } from '../edit.service';

@Component({
  selector: 'app-edit-component',
  templateUrl: './edit-component.component.html',
  styleUrls: ['./edit-component.component.css']
})
export class EditComponentComponent implements OnInit {

  b:Bidder = new Bidder();
  response:any;
//  report:any;
  id:number ;

  constructor(private getreq:EditService) { }

  ngOnInit(): void {
    //this.id = sessionStorage.getItem('id');
    this.id = parseInt(sessionStorage.getItem('lid'), 10);
    this.getreq.getBidder(this.id).subscribe(response => {
      // alert(JSON.stringify(response));
      this.response = response;
      this.b.id = response.id;
      this.b.name = response.name;
      this.b.address = response.address;
      this.b.city =response.city;
      this.b.city =response.city;
      this.b.state = response.state;
      this.b.pincode =response.pincode;
      this.b.mobileNo = response.mobileNo;
      this.b.adhaarNo = response.adhaarNo;
      this.b.accountNo = response.accountNo;
      this.b.traderLicense =response.traderLicense;
      this.b.ifscCode =response.ifscCode;
      this.b.email =response.email;

      });

  }

  update(){

    alert(JSON.stringify(this.b));
    this.getreq.update(this.b).subscribe(response =>{
      this.response = response;
      // alert(JSON.stringify(response));
      setTimeout(function(){​​
        // this.router.navigate(["login"]);
        window.location.reload();
       }​​, 2000);
    })
    // if(this.response.status=='SUCCESS')
          // this.router.navigate(['setPassword']);

 }


}

export class Bidder{
  id:number;
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

