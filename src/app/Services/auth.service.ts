import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { AnyRecord } from 'dns';



const loginApi = 'http://192.168.1.71:5001/api/Login/'; // api address for login
const validateapi = 'http://192.168.1.71:5001/api/angular/ValidateToken'; // Validates token

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})


export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }

  Login(username: string, password: string): Observable<any> { // Logs user in
    return this.http.post(loginApi + 'LoginUser', {
      username,
      password
    }, httpOptions);
  }

  Register(username: string, email:string, password:string): Observable<any>{ // Register new user
    return this.http.post(loginApi + 'Signup', {
      username,
      email,
      password

    }, httpOptions);
  } 

  CheckIfLoginIsValid(){ // Checks if login is valid by checking token
    if(localStorage.getItem('token') == null){
      this.router.navigate(['login'])
    }else{// Check if login is valid 
      // return this.http.get<any>(validateapi);
    }
  }
  RefreshToken(){
    let url = "http://192.168.1.71:5001/api/angular/RefreshToken";

    return this.http.get<any>(url);
    
  }
}
