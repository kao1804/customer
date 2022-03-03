import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  baseUrl: string = 'assets/';

  constructor(private http:HttpClient) { }
  getCust():Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + 'customer.json')
  }

}
