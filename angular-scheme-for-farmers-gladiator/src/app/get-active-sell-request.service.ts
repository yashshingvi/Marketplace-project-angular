import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetActiveSellRequestService {

  constructor(private http:HttpClient) { }

  fetchActiveSellRequest() : Observable<any>{
    let url = "http://localhost:8094/getsellrequest";
    return this.http.get(url);
  }
}
