import { JsonpClientBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';


const Token_key = 'auth-token';
const User_key = 'auth-user';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {

  constructor() { }

  Signout(): void{
    window.sessionStorage.clear();
  }

  public SaveToken(token: string): void{
    window.sessionStorage.removeItem(Token_key);
    window.sessionStorage.setItem(Token_key, token);
  }

  public GetToken(): string | null{
    return window.sessionStorage.getItem(Token_key);
  }

  public SaveUser(user: any): any{
    window.sessionStorage.removeItem(User_key);
    window.sessionStorage.setItem(User_key, JSON.stringify(user));
  }

  public GetUser(): any{
    const user = window.sessionStorage.getItem(User_key);
    if (user){
      return JSON.parse(user);
    }
    return {}
  }
}
