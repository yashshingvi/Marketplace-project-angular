import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Farmer } from "./registrationfarmer/Farmer";

@Injectable({
  providedIn: 'root'
})
export class FarmerService {

  //constructor() { }
   //constructor(private customerService : CustomerService) { }
   constructor(private http : HttpClient){}
   ngOnInit(): void {
     
   }
 
   register(farmer:Farmer):Observable<any>{
     let url = "http://localhost:8094/register-farmer";
     return this.http.post(url,farmer);
     //alert(JSON.stringify(this.customer));
   }

   edit(farmer:Farmer):Observable<any>{
    let url = "http://localhost:8094/edit-farmer";
    return this.http.post(url,farmer);
    //alert(JSON.stringify(this.customer));
  }

  getFarmer(id : number) : Observable<any>{
    let url = "http://localhost:8094/view-profile-farmer?id="+id;
    return this.http.get(url);
  }

  picUpload(formData : FormData) : Observable<any>{
    let url="http://localhost:8094/certificate-upload";
    return this.http.post(url,formData);

  }

}
