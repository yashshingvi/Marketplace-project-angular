import { Component, OnInit } from '@angular/core';
import { ShowHistoryService } from '../show-history.service';

@Component({
  selector: 'app-show-history',
  templateUrl: './show-history.component.html',
  styleUrls: ['./show-history.component.css']
})
export class ShowHistoryComponent implements OnInit {

  data:any;
  id:number;
  type:string;
  farmerParameters: Array<String> = [
    'cropName',
    'basePrice',
    'maxBidAmount',
    'status',
  ];
 
  bidderParameters: Array<String> = [
    'cropName',
    'hisBidAmount',
    'basePrice',
    'status',
    'maxBidAmount',   
  ];
  constructor(private showreq:ShowHistoryService) { }

  ngOnInit(): void {

    this.id = parseInt(sessionStorage.getItem('lid'), 10);
    this.type = sessionStorage.getItem('type');

        if (this.type == 'FARMER') {
          this.showreq.fetchDetailsFarmer(this.id).subscribe((data) => {
            this.data = data;
          });
        } 
        else if (this.type == 'BIDDER') {
          this.showreq.fetchDetailsBidder(this.id).subscribe((data) => {
            this.data = data;
          });
        }
  }

}
