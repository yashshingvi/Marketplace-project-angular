import { Component, OnInit, ɵAPP_ID_RANDOM_PROVIDER } from '@angular/core';
import { Router } from '@angular/router';
import { AdminRequestsService } from '../admin-requests.service';
import { Requests } from '../Requests';

@Component({
  selector: 'app-admin-request',
  templateUrl: './admin-request.component.html',
  styleUrls: ['./admin-request.component.css'],
})
export class AdminRequestComponent implements OnInit {
  requests: Array<Requests>;
  req: Requests = new Requests();
  message:string;
  // reqObj: HandleRequest = new HandleRequest();
  constructor(
    private adminRequestsService: AdminRequestsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.adminRequestsService.fetchRequests().subscribe((data) => {
      // alert(JSON.stringify(data));
      this.requests = data;
    });
  }
  approve($event, req): void {
    
    if (req.type === 'FARMER') {
      this.req.type = 1;
    } else if (req.type === 'BIDDER') {
      this.req.type = 2;
    } else if (req.type === 'SELLREQUEST') {
      this.req.type = 0;
    }
    this.req.id=req.id;
     this.req.status = 1;
    console.log(this.req);

    this.adminRequestsService.approveRequests(this.req).subscribe((data) => {
      // alert((data.message));
      // this.requests=data;
    });
    // location.reload();
    this.message="Approved";
    setTimeout(function(){​​
      window.location.reload();
   }​​, 1000);
  }
  decline($event, req): void {
    if (req.type === 'FARMER') {
      this.req.type = 1;
    } else if (req.type === 'BIDDER') {
      this.req.type = 2;
    } else if (req.type === 'SELLREQUEST') {
      this.req.type = 0;
    }
    this.req.id=req.id;
    this.req.status = 0;
    console.log(this.req);

    this.adminRequestsService.approveRequests(this.req).subscribe((data) => {
      // alert((data.message));
      // this.requests=data;
    });
    this.message="Declined";
    setTimeout(function(){​​
      window.location.reload();
   }​​, 1000);
    // location.reload();
   
  }
  viewDetails($event, req): void {
    sessionStorage.setItem('lid', req.id);
    sessionStorage.setItem('type', req.type);
    this.router.navigate(['/viewDetails']);
  }
}
