import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { NavigatorService } from 'src/app/Services/navigator.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null
  };

  isSuccessful = false;
  isSignupFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService,private navigatorservice: NavigatorService) { }

  ngOnInit(): void {
  }

  onSubmit(): void { // Registers a new user
    const {username, email, password} = this.form;
    this.authService.Register(username, email, password).subscribe(data => {console.log(data);});
    this.authService.Register(username, email, password).subscribe(
      data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignupFailed = false;
      },
      err => {
        this.errorMessage = err.error.message;
        this.isSignupFailed = true;
      }     
    );
  }
  Nav = (page: string) => this.navigatorservice.Navigator(page);
}
