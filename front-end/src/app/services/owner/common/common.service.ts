import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private http: HttpClient) {}

  get(url): Observable<any> {
    return this.http.get(url, httpOptions);
  }

  post(url, body): Observable<any> {
    return this.http.post(url, body, httpOptions).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          console.error('Unauthorized request:', error);
          return throwError('Unauthorized access');
        } else {
          return throwError(() => error);
        }
      })
    );
  }

  patch(url, body): Observable<any> {
    return this.http.patch(url, body, httpOptions);
  }

  delete(url): Observable<any> {
    return this.http.delete(url, httpOptions);
  }
}
