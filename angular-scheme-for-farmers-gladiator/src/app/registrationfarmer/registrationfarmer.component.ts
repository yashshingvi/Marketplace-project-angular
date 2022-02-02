import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FarmerService } from '../farmer.service';
import { Farmer } from './Farmer';

@Component({
  selector: 'app-registrationfarmer',
  templateUrl: './registrationfarmer.component.html',
  styleUrls: ['./registrationfarmer.component.css']
})
export class RegistrationfarmerComponent {
  response:any;
  farmer: Farmer = new Farmer();
  constructor(private farmerService : FarmerService, private router: Router) { }
  //constructor(private http : HttpClient){}
  displayName:string;
  message:string;

  register(){
    // this.displayName=(JSON.stringify("Hello "+this.farmer.name));
    this.farmerService.register(this.farmer).subscribe(response=>{
      this.response=response;
      // alert(JSON.stringify(response))
      // alert(this.response);
      sessionStorage.setItem("id", String(this.farmer.email));
      sessionStorage.setItem("type", "FARMER");
      if(this.response.status=='SUCCESS')
          this.router.navigate(['setPassword']);
    });
  

}

}


