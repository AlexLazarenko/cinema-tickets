import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
   providedIn: 'root'
})
export class TicketsDataService {

constructor(private httpClient: HttpClient) { }

public sendGetRequest(id:String){
   return this.httpClient.get("http://localhost:8080/tickets/by-movieId/"+id);
}

public sendBuyTicketRequest(value: String){
   const options = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
           Authorization: 'Bearer '+localStorage.getItem('token') || ''
    })
  };
      return this.httpClient.put("http://localhost:8080/tickets/buy",value,options);
  }
}
