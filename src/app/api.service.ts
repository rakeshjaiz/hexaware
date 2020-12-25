import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  configUrl = 'https://api.openweathermap.org/data/2.5/group?id=3530,5174,524901,703448,2643743&APPID=b9274a1599603c50d91dc3e5eec4ceac';
  constructor(private http: HttpClient) { }
  

  getConfig() {
    return this.http.get(this.configUrl);
  }
  getDetail(city){
    const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=b9274a1599603c50d91dc3e5eec4ceac`
    return this.http.get(url);
  }
}
