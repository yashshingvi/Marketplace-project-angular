import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farmer-dashboard',
  templateUrl: './farmer-dashboard.component.html',
  styleUrls: ['./farmer-dashboard.component.css']
})
export class FarmerDashboardComponent implements OnInit {

  f1: boolean;
  f2: boolean;
  f3: boolean;
  f4: boolean;
  f5: boolean;
  f6: boolean;
  f7: boolean;
  onGoToPage1() {
    this.f1 = true;
    this.f2 = false;
    this.f3 = false;
    this.f4 = false;
    this.f5 = false;
    this.f6 = false;
    this.f7 = false;
  }
  onGoToPage2() {
    this.f1 = false;
    this.f2 = true;
    this.f3 = false;
    this.f4 = false;
    this.f5 = false;
    this.f6 = false;
    this.f7 = false;
  }
  onGoToPage3() {
    this.f1 = false;
    this.f2 = false;
    this.f3 = true;
    this.f4 = false;
    this.f5 = false;
    this.f6 = false;
    this.f7 = false;
  }
  onGoToPage4() {
    this.f1 = false;
    this.f2 = false;
    this.f3 = false;
    this.f4 = true;
    this.f5 = false;
    this.f6 = false;
    this.f7 = false;
  }
  onGoToPage5() {
    this.f1 = false;
    this.f2 = false;
    this.f3 = false;
    this.f4 = false;
    this.f5 = true;
    this.f6 = false;
    this.f7 = false;
  }
  onGoToPage6() {
    this.f1 = false;
    this.f2 = false;
    this.f3 = false;
    this.f4 = false;
    this.f5 = false;
    this.f6 = true;
    this.f7 = false;
  }
  onGoToPage7() {
    this.f1 = false;
    this.f2 = false;
    this.f3 = false;
    this.f4 = false;
    this.f5 = false;
    this.f6 = false;
    this.f7 = true;
  }
  constructor() {}

  ngOnInit(): void {
    this.f1 = true;
    this.f2 = false;
    this.f3 = false;
    this.f4 = false;
    this.f5 = false;
    this.f6 = false;
    this.f7 = false;
  }

}