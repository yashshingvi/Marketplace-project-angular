import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { BidserviceService } from '../bidservice.service';
import { SellRequest } from '../get-active-sell-request/get-active-sell-request.component';

@Component({
  selector: 'app-maxbid',
  templateUrl: './maxbid.component.html',
  styleUrls: ['./maxbid.component.css'],
})
export class MaxbidComponent implements OnInit, OnChanges {
  sellRequestId: number;
  data: any;
  bidderId: number;
  @Input()
  data1: SellRequest;
  constructor(private bidservice: BidserviceService) {}
  ngOnChanges() {
    this.checkMaxBid(this.data1.id)
    // console.log("id:");
    // console.log(this.data.id);
    // if(this.data==0){
    //   this.data=this.data1.basePrice;
    // }
  }
  ngOnInit(): void {
    // this.sellRequestId=(parseInt(sessionStorage.getItem('sellRequestId'), 10));
    this.checkMaxBid(this.data1.id);
  }

  checkMaxBid(sellRId: number) {
    // alert(this.sellRequestId);
    this.bidservice.fetchMaxBid(sellRId).subscribe((data) => {
      this.data = data;
      // alert(JSON.stringify(data));
    });
  }

}
