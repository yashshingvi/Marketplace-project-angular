import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlaceSellreqServiceService } from '../place-sellreq-service.service';

@Component({
  selector: 'app-place-sellrequest',
  templateUrl: './place-sellrequest.component.html',
  styleUrls: ['./place-sellrequest.component.css']
})
export class PlaceSellrequestComponent implements OnInit {

  sellreq:SellRequest = new SellRequest();
  response:any;

  constructor(private reqService : PlaceSellreqServiceService, private router: Router) { }

  ngOnInit(): void {
    
  }

  register(){
    this.sellreq.sellerId=parseInt(sessionStorage.getItem('lid'), 10);
    // alert(JSON.stringify(this.sellreq));
    this.reqService.register(this.sellreq).subscribe(response =>{
      this.response = response;
      // alert(JSON.stringify(response));
      // this.router.navigate(["farmerDashboard"]);
    })
    // this.response.message="Your crop has 
    if(this.response.status=='SUCCESS')
    setTimeout(function(){​​
      // this.router.navigate(["login"]);
      window.location.reload();
      // window.location.replace("http://localhost:4200/farmerDashboard");
   }​​, 1000);
 }

}

export class SellRequest {
  cropName:string;
  cropType:string;
  basePrice:number;
  quantity:number;
  phValue:Number;
  fertlizerType:string;
  status:number = 2;
  sellerId:number;
  startDate:Date;
  endDate:Date;
}
