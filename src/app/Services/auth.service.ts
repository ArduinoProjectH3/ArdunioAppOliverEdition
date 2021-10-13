import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



const authApi = 'http://192.168.1.71:5001/api/Login/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

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

  CheckIfLoginIsValid(){
    if(localStorage.getItem('tokenstring') == null){
      this.router.navigate(['login'])
    }else{// Check if log in is valid
      
    }
  }
}
