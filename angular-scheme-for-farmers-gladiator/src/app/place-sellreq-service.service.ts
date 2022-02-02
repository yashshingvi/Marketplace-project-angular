import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SellRequest } from './place-sellrequest/place-sellrequest.component';

@Injectable({
  providedIn: 'root'
})
export class PlaceSellreqServiceService {

  constructor(private http : HttpClient) { }

  register(sellreq: SellRequest) : Observable<any>{
    let url = "http://localhost:8094/register-sellreq";
    return this.http.post(url,sellreq);
  }

}
