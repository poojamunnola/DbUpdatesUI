import { Injectable } from '@angular/core';
import { customerInfo } from '../shared/module/customer';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'; //created

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'https://localhost:7234/DbScripts/';

 constructor(private http: HttpClient) {}

getData(input: string): Observable<any> {
  const url = `${this.baseUrl}Get?input=${input}`;
  return this.http.get(url);
} 
}
