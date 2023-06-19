import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface User {
  email: string;
  password: string;
}

const baseUrl = 'http://localhost:3000/api/';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private AuthSubject = new BehaviorSubject<User | null>(null);
  public authData$ = this.AuthSubject.asObservable();

  constructor(private http: HttpClient) {}

  login(user: User) {
    this.http
      .post<User>(baseUrl + 'login', user, { observe: 'response' }) // observe the full HTTP response
      .subscribe((response: HttpResponse<User>) => {
        console.log(response.body); // data returned from the server
        console.log(response.headers.get('auth-token')); // JWT from the header
      });
  }

  signup(user: User) {
    this.http
      .post<User>(baseUrl + 'signup', user, { observe: 'response' }) // observe the full HTTP response
      .subscribe({
        next: (response: HttpResponse<User>) => {
          console.log(response.body); // data returned from the server
          console.log(response.headers.get('auth-token')); // JWT from the header
        },
        error: (err) => console.log(err),
      });
  }
}
