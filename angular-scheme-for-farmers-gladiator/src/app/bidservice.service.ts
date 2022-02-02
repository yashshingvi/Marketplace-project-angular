import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bid } from './bidinfo/bidinfo.component';

@Injectable({
  providedIn: 'root'
})

export class BidserviceService {

  constructor(private http: HttpClient) { }

  placebid(bid: Bid) : Observable<any> {
    let url = "http://localhost:8094/placing-bid";
    return this.http.post(url, bid);
}

  fetchMaxBid(sellRequestId: number) : Observable<any> {
    let url = "http://localhost:8094/max-bid?id="+sellRequestId;
    return this.http.get(url);
}

// fetchAllBid(bidderId: number) : Observable<any> {
//     let url = "http://localhost:8094/all-bids?id="+bidderId;
//     return this.http.get(url);
// }

fetchAllSellBid(sellRequestId: number) : Observable<any> {
  let url = "http://localhost:8094/all-sellbids?id="+sellRequestId;
  return this.http.get(url);
}

}
