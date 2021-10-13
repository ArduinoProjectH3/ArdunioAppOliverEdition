import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { TokenStorageService } from 'src/app/Services/token-storage.service';
import { NavigatorService } from 'src/app/Services/navigator.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    username: null,
    password: null
  };

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage ='';
  roles: string [] =  [];

  constructor(private authService: AuthService, private tokenStorage: TokenStorageService, private cookieService : CookieService, private navigator: NavigatorService) {}

  

  ngOnInit(): void {
    if (this.tokenStorage.GetToken()) {
      this.isLoggedIn = true;
    }
  }

  onSubmit(): void {//Submits the login form
    const {username, password} = this.form;
    this.authService.Login(username, password).subscribe(
      data => {
        console.log(data);
  
        if (data.token != null) {//redirects the user to the main page if login is valid
        var tokenstring ={name:"token", key:data['token']};
        localStorage.setItem('tokenstring',JSON.stringify(tokenstring));// Saves the apitoken in localStorage
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.navigator.Navigator('room');
        }
        else{// Sends user back to login if password is invalid
          this.navigator.Navigator('login');
        }
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  ReloadPage(): void {
    window.location.reload();
  }
  Nav = (page: string) => this.navigator.Navigator(page);//Now we can navigate to the pages with our navigatorService
}
