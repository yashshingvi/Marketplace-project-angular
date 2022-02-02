import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Login } from './Login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  login(login:Login): Observable<any>{
    let url ="http://localhost:8094/login1";
    return this.http.post(url,login);
  }
  setPassword(creds:Login): Observable<any>{
    let url ="http://localhost:8094/set-password";
    return this.http.post(url,creds);
  }
}
