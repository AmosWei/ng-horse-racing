import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';

import { Router } from '@angular/router';
import { catchError, map, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RacingService {

  constructor(
    private httpClient: HttpClient,
    private router: Router
  ) { }

  public baseURL = 'https://ics-hiring-app.azurewebsites.net/api/horses';

  getHorses(): Observable<any>{
    return this.httpClient.get(`${this.baseURL}`).pipe(
      map((res) => {
        return res;
      })
    )
  }
  
  getDistances(id: number, second: number): Observable<any>{
    const params = new HttpParams().set('secondselapsed', second);
    return this.httpClient.get(`${this.baseURL + '/' + id}`, { params }).pipe(
      map((res) => {
        return res;
      })
    )
  }
}
