import { Component, OnInit } from '@angular/core';
import { ViewDetailsServiceService } from '../view-details-service.service';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css'],
})
export class ViewDetailsComponent implements OnInit {
  id: number;
  type: string;
  data: any;
  dispfarmerParameters: Array<String> = [
    'Name',
    'Address',
    'Area',
    'City',
    'State',
    'Pincode',
    'Email',
    'Mobile Number',
    'Aadhar Number',
    'IFSC Code',
    'Certificate',
    'Status',
    'Account Number',
  ];
  dispbidderParameters: Array<String> = [
    'Name',
    'Address',
    'City',
    'State',
    'Pincode',
    'Email',
    'Mobile Number',
    'Aadhar Number',
    'IFSC Code',
    'Trader License',
    'Status',
    'Account Number',
  ];
  farmerParameters: Array<String> = [
    'name',
    'address',
    'area',
    'city',
    'state',
    'pincode',
    'email',
    'mobileNo',
    'aadharNo',
    'ifscCode',
    'certificate',
    'status',
    'accountNo',
  ];
  bidderParameters: Array<String> = [
    'name',
    'address',
    'city',
    'state',
    'pincode',
    'email',
    'mobileNo',
    'adhaarNo',
    'ifscCode',
    'traderLicense',
    'status',
    'accountNo',
  ];
  sellRequestParameters: Array<String> = [
    'cropName',
    'cropType',
    'basePrice',
    'quantity',
    'phValue',
    'status',
    'fertlizerType',
    'startDate',
    'endDate',
  ];

  constructor(private viewDetailsService: ViewDetailsServiceService) {}

  ngOnInit(): void {
    this.id = parseInt(sessionStorage.getItem('lid'), 10);

this.type = sessionStorage.getItem('type');
    if (this.type == 'FARMER') {
      this.viewDetailsService.fetchDetailsFarmer(this.id).subscribe((data) => {
        // alert(JSON.stringify(data));
        this.data = data;
        console.log(this.data.id);
        // this.requests=data;
      });
    } else if (this.type == 'BIDDER') {
      this.viewDetailsService.fetchDetailsBidder(this.id).subscribe((data) => {
        // alert(JSON.stringify(data));
        // this.requests=data;
        this.data = data;
      });
    }
    else if (this.type == 'SELLREQUEST') {
      this.viewDetailsService.fetchDetailsSellRequest(this.id).subscribe((data) => {
        // alert(JSON.stringify(data));
        // this.requests=data;
        this.data = data;
      });
    }
  }
}
