import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Requests } from './Requests';
@Injectable({
  providedIn: 'root'
})
export class AdminRequestsService {

  constructor(private http: HttpClient) {}
  fetchRequests(): Observable<any>{
    let url ="http://localhost:8094/show-requests";
    return this.http.get(url);
  }
  approveRequests(req:Requests): Observable<any>{
    let url ="http://localhost:8094/approve-status";
  return this.http.post(url,req);
  }
}
