import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowHistoryService {

  constructor(private http:HttpClient) { }

  fetchDetailsFarmer(id:number): Observable<any>{
    let url ="http://localhost:8094/sellhistory?id="+id;
    return this.http.get(url);
  }
  fetchDetailsBidder(id:number): Observable<any>{
    let url ="http://localhost:8094/bidder-history?id="+id;
    return this.http.get(url);
  }

}
