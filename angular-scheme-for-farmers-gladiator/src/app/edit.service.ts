import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Bidder} from './edit-component/edit-component.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EditService {

  constructor(private http:HttpClient) { }

  update(bidder: Bidder) : Observable<any>{
    let url = "http://localhost:8094/edit-bidder";
    return this.http.post(url,bidder);
  }

  getBidder(id : number) : Observable<any>{
    let url = "http://localhost:8094/view-profile-bidder?id="+id;
    return this.http.get(url);
  }

}
