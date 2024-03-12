import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
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
  screenName$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  private url = 'http://localhost:8080/';

  constructor(private http: HttpClient) {}

  getCurrentScreen() {
    return this.screenName$.asObservable();
  }

  setCurrentScreen(screen: string) {
    this.screenName$.next(screen);
  }

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
    console.log(localStorage.getItem('jwt'), 'service');

    return this.http.get(this.url + endpoints, httpOptions);
  }
}
