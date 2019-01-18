import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Patient } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private dataUrl = 'http://www.mocky.io/v2/584869ab100000d20c4e2f87';
  public model: Patient[];

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token'
    })
  };


  constructor(private http: HttpClient) { }


  getdata(): Observable<Patient[]> {

    return this.http.get<Patient[]>(this.dataUrl).pipe(
            tap(data => JSON.stringify(data)),
            catchError(this.handleError)
    );
  }
private handleError(err: HttpErrorResponse) {
  let errorMessage = '';
  if (err.error instanceof ErrorEvent) {
    errorMessage = `An error occurred: ${err.error.message}`;
  } else {
    errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
  }
  console.error(errorMessage);
  return throwError(errorMessage);
}
}
