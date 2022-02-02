import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bidder-dashboard',
  templateUrl: './bidder-dashboard.component.html',
  styleUrls: ['./bidder-dashboard.component.css'],
})
export class BidderDashboardComponent implements OnInit {
  f1: boolean;
  f2: boolean;
  f3: boolean;
  f4: boolean;
  f5: boolean;
  onGoToPage1() {
    this.f1 = true;
    this.f2 = false;
    this.f3 = false;
    this.f4 = false;
    this.f5 = false;
  }
  onGoToPage2() {
    this.f1 = false;
    this.f2 = true;
    this.f3 = false;
    this.f4 = false;
    this.f5 = false;
  }
  onGoToPage3() {
    this.f1 = false;
    this.f2 = false;
    this.f3 = true;
    this.f4 = false;
    this.f5 = false;
  }
  onGoToPage4() {
    this.f1 = false;
    this.f2 = false;
    this.f3 = false;
    this.f4 = true;
    this.f5 = false;
  }
  onGoToPage5() {
    this.f1 = false;
    this.f2 = false;
    this.f3 = false;
    this.f4 = false;
    this.f5 = true;
  }
  constructor() {}

  ngOnInit(): void {
    this.f1 = true;
    this.f2 = false;
    this.f3 = false;
    this.f4 = false;
    this.f5 = false;
  }
}
