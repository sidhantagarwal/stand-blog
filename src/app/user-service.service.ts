import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http:HttpClient) { }
  getData()
  {
    let url= "https://api.mocki.io/v1/c0eec245";
    return this.http.get(url);
  }
}
