import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidserviceService } from '../bidservice.service';

@Component({
  selector: 'app-bidinfo',
  templateUrl: './bidinfo.component.html',
  styleUrls: ['./bidinfo.component.css']
})
export class BidinfoComponent implements OnInit {
  parameters:Array<string>=[ 'cropName',
  'cropType',
  'basePrice',
  'quantity',
  'phValue',
  'fertlizerType'
  ]
  displayParameters:Array<string>=[ 'Crop Name',
  'Crop Type',
  'Base Price',
  'Quantity',
  'ph Value',
  'Fertilizer Type'
  ]
  sellRequestId:number;
  bid: Bid = new Bid();
  // response:any;
  message:string;
  msg:string;
@Input()
public data;
  constructor(private bidservice: BidserviceService,private router:Router) { }
  ngOnInit(): void {
     
    this.bid.bidderId=(parseInt(sessionStorage.getItem('lid'), 10));
    this.bid.sellRequestId=(parseInt(sessionStorage.getItem('sellRequestId'), 10));
    this.sellRequestId= this.bid.sellRequestId;
    console.log( this.bid.bidderId);
    console.log( this.bid.sellRequestId);
  }

  placebid() {
    
    this.bid.sellRequestId=(parseInt(sessionStorage.getItem('sellRequestId'), 10));
    this.sellRequestId= this.bid.sellRequestId;
    this.bidservice.placebid(this.bid).subscribe(response => {
      // alert(JSON.stringify(this.bid));
      // alert(JSON.stringify(response));
      this.message=response.status;
      this.msg=response.message;
      // setTimeout(function(){ alert("Hello"); }, 5000);
      // alert(this.message);
      setTimeout(function(){​​
        window.location.reload();
     }​​, 1000);
    });
    // this.router.navigate(["getActiveSellRequest"]);
    // sessionStorage.setItem('flag',"false");
    // setTimeout(function(){  }, 5000);
    // location.reload();
  }  

}

export class Bid {
  bidAmount: number;
  bidderId: number;
  sellRequestId: number;
}