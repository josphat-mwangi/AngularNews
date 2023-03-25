import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  private REST_API_SERVER = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=fd3949e9fc8d439f8d810573dc948437';
 
  constructor(private http: HttpClient) {}

  public sendGetRequest(message:any): Observable<any> {
    if(message === undefined || message === null || message === ''){
      return this.http.get<any>('https://newsapi.org/v2/top-headlines?country=us&apiKey=fd3949e9fc8d439f8d810573dc948437')
    }else{
      return this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=${message}&apiKey=fd3949e9fc8d439f8d810573dc948437`)
    }
    
  }

  public searchByTitle(title: string): Observable<any> {
    return this.http.get<any>(`https://newsapi.org/v2/top-headlines?country=us&q=${title}&apiKey=fd3949e9fc8d439f8d810573dc948437`);
  }
}
