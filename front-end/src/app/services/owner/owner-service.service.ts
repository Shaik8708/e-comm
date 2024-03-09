import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    Authorization: `Bearer ${localStorage.getItem('jwt')}`,
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class OwnerServiceService {
  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  loginAdmin(endpoints, body): Observable<any> {
    return this.http.post(this.url + endpoints, body).pipe(
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

  getAdminProfile(endpoints): Observable<any> {
    return this.http.get(this.url + endpoints, httpOptions);
  }
}
