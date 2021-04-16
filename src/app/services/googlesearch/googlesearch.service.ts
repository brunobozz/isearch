import { Injectable, EventEmitter } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";


@Injectable({
  providedIn: 'root'
})

export class GooglesearchService {

  private term: string;
  private API_KEY: string = environment.GCS_API_KEY;
  private API_URL: string = environment.GCS_API_URL;
  private GCS_ID: string = environment.GCS_ID;

  private URL: string = this.API_URL + '?key=' + this.API_KEY + '&cx=' + this.GCS_ID + '&lr=pt&start=1&q=';

  constructor(private http: HttpClient) { }

  getSearch(term: string): Observable<any> {
    return this.http.get(this.URL + term);
  }

}