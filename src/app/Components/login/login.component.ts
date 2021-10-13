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

  onSubmit(): void {
    const {username, password} = this.form;
    this.authService.Login(username, password).subscribe(
      data => {
        console.log(data);
  
        if (data.token != null) {
        var tokenstring ={name:"token", key:data['token']};
        localStorage.setItem('tokenstring',JSON.stringify(tokenstring));
        // this.cookieService.set('token',data['token'] + '')
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        // this.router.navigate(['room']);
        this.navigator.Navigator('room');
        }
        else{
          // this.router.navigate(['login']);
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
  nav = (page: string) => this.navigator.Navigator(page);
}
