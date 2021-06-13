import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {IPerson} from '../IPerson'
@Injectable({
  providedIn: 'root'
})
export class PersonServicesService {
  private url :string = 'http://localhost:5000/people'
  getData() : Observable <IPerson[]>{
    return this.http.get<IPerson[]>(this.url)
      
  }

  constructor(private http:HttpClient) {

   }
}
