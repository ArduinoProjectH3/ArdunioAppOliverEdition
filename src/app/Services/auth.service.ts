import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';



const authApi = 'http://192.168.1.71:5001/api/Login/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  constructor(private http: HttpClient) { }

  Login(username: string, password: string): Observable<any> {
    return this.http.post(authApi + 'LoginUser', {
      username,
      password
    }, httpOptions);
  }

  Register(username: string, email:string, password:string): Observable<any>{
    return this.http.post(authApi + 'Signup', {
      username,
      email,
      password

    }, httpOptions);
  } 
}
