import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Bidder} from './register-bidder/register-bidder.component';

@Injectable({
  providedIn: 'root'
})
export class BidderService {

  constructor(private http:HttpClient) { }

  register(bidder: Bidder) : Observable<any>{
    let url = "http://localhost:8094/register-bidder";
    return this.http.post(url,bidder);
  }
}
