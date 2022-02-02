import { Component, Input, OnInit } from '@angular/core';
import { BidserviceService } from '../bidservice.service';
import { SellRequest } from '../get-active-sell-request/get-active-sell-request.component';

@Component({
  selector: 'app-bidderhistory',
  templateUrl: './bidderhistory.component.html',
  styleUrls: ['./bidderhistory.component.css']
})
export class BidderhistoryComponent implements OnInit {

  sellRequestId: number;
  data: any;
  bidderId: number;
  id: number;
  @Input()
  data1: SellRequest;
  

  constructor(private bidservice: BidserviceService) { }

  ngOnInit(): void {
    this.id =  this.data1.id;
    // this.showAllSellBid();  
  }
  ngOnChanges() {
    this.id =  this.data1.id;
    this.showAllSellBid();
    // console.log("id:");
    // console.log(this.data.id);
    // if(this.data==0){
    //   this.data=this.data1.basePrice;
    // }
  }
  // showAllBid() {
  //   alert(this.bidderId);
  //   this.bidservice.fetchAllBid(this.bidderId).subscribe((data) => {
  //     this.data = data;
  //     alert(JSON.stringify(data));
  //   });
  // }

  showAllSellBid() {
    // alert(this.sellRequestId);
    this.bidservice.fetchAllSellBid(this.id).subscribe((data) => {
      this.data = data;
      // alert(JSON.stringify(data));
    });
  }

}
