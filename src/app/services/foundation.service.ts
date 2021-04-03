import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Foundation } from "../information/foundation.interface";
@Injectable({
  providedIn: "root",
})
export class FoundationService {
  // apiURL: string = 'https://ram-dass-quotes-api.herokuapp.com/api';
  apiURL: string = "http://localhost:3000/api";

  constructor(private http: HttpClient) {
    this.http = http;
  }

  getAllQuotes(): Observable<Foundation[]> {
    const endpoint = "/foundations/all";
    const foundations$ = this.http.get<Foundation[]>(this.apiURL + endpoint, {
      headers: new HttpHeaders({
        "Access-Control-Allow-Origin": "*",
      }),
    });
    return foundations$;
  }
}
