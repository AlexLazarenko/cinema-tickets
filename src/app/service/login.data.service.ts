import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginDataService{

httpOptions = {
  headers: new HttpHeaders({
    'Access-Control-Allow-Origin':'*',
    'Content-Type':  'application/json'
  })
};

  constructor(private httpClient: HttpClient) { }

  public sendLoginRequest(value: String){
    return this.httpClient.post("http://localhost:8080/auth/log-in",value,this.httpOptions);
         }
       }

