import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewDetailsServiceService {

  constructor(private http: HttpClient) {}
  fetchDetailsFarmer(id:number): Observable<any>{
    let url ="http://localhost:8094/view-profile-farmer?id="+id;
    return this.http.get(url);
  }
  fetchDetailsBidder(id:number): Observable<any>{
    let url ="http://localhost:8094/view-profile-bidder?id="+id;
    return this.http.get(url);
  }
  fetchDetailsSellRequest(id:number): Observable<any>{
    let url ="http://localhost:8094/view-profile-sellrequest?id="+id;
    return this.http.get(url);
  }

}
