import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegistrationDataService {

 httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

  constructor(private httpClient: HttpClient) { }

  public sendRegistrationRequest(value: String){
   return this.httpClient.post("http://localhost:8080/auth/sign-up",value, this.httpOptions);
  }
}
