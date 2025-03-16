import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import {MyFormData} from "../entity/form-data";

@Injectable({
  providedIn: 'root'
})
export class CallDataService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private httpClient: HttpClient) { }

  public sendCallRequest(value: String){
    return this.httpClient.post("http://localhost:8080/call",value, this.httpOptions);
  }

  public sendCalculateRequest(value: MyFormData){
    return this.httpClient.post("http://localhost:8080/call",value, this.httpOptions);
  }
}
