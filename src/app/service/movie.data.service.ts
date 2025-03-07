import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(id:String){
    return this.httpClient.get("http://localhost:8080/movie/"+id);
  }
}
