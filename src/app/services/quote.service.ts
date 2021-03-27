import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {
  apiURL: string = 'https://ram-dass-quotes-api.herokuapp.com/api';

  constructor(private http: HttpClient) {
    this.http = http;
    console.log('Quote Service!')
  }

  getAllQuotes() {
    const endpoint = '/all';
    const quotes$ = this.http.get(this.apiURL + endpoint, {
      headers: new HttpHeaders({
        'Access-Control-Allow-Origin': '*'
      })}).subscribe((value) => {
      console.log(value);
    });

  }
}
