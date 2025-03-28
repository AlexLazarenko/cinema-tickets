import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor(private httpClient: HttpClient) { }

  public sendGetRequest(){
    return this.httpClient.get("http://localhost:8080/movie");
  }
}
