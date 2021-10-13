import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';



const authApi = 'http://192.168.1.71:5001/api/Login/'; // api address for login

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  Login(username: string, password: string): Observable<any> { // Logs user in
    return this.http.post(authApi + 'LoginUser', {
      username,
      password
    }, httpOptions);
  }

  Register(username: string, email:string, password:string): Observable<any>{ // Register new user
    return this.http.post(authApi + 'Signup', {
      username,
      email,
      password

    }, httpOptions);
  } 

  CheckIfLoginIsValid(){ // Checks if login is valid by checking token
    if(localStorage.getItem('tokenstring') == null){
      this.router.navigate(['login'])
    }else{// Check if login is valid 
      
    }
  }
}
