import { Component, OnInit } from '@angular/core';
import { GetActiveSellRequestService } from '../get-active-sell-request.service';

@Component({
  selector: 'app-get-active-sell-request',
  templateUrl: './get-active-sell-request.component.html',
  styleUrls: ['./get-active-sell-request.component.css'],
})
export class GetActiveSellRequestComponent implements OnInit {
changeText:boolean;
  type: string;
  sellRequest: SellRequest = new SellRequest();
  public list: SellRequest[] = [];
  constructor(private getreq: GetActiveSellRequestService) {}
  flag: boolean = false;
  searchedKeyword: string;
  // today:any;
  visible: boolean;
  today = new Date().toISOString().slice(0, 10);

  ngOnInit(): void {
    this.type = sessionStorage.getItem('type');
    this.flag = false;
    this.changeText=false;
  }

  go() {
    this.getreq.fetchActiveSellRequest().subscribe((response) => {
      // alert(JSON.stringify(response));
      this.list = response;
      console.log(this.list);
    });
  }
  placeBid($event, req) {
    this.sellRequest=req;

    sessionStorage.setItem('sellRequestId', req.id);
    this.flag = true;
  }
  ngAfterContentInit() {
    this.go();
  }

  // comparedate(l : any) : void{
  //     this.today = new Date().toISOString().slice(0, 10);
  //      console.log(this.today);
  //      let d1 = new Date(l.startDate);

  //      //should not
  //        if (d1 > this.today)
  //        {
  //          l.status=false;
  //         //  return true;
  //        }

  //       else if (d1 < this.today) {
  //         l.status = true;
  //         // return true;
  //       }
  //       else  {
  //         l.status = true;
  //         // return true;
  //       }

  //   }
}

export class SellRequest {
  id: number;
  cropName: string;
  cropType: string;
  basePrice: number;
  quantity: number;
  phValue: Number;
  fertlizerType: string;
  sellerId: number;
  startDate: Date;
  endDate: Date;
  status: boolean;
}
