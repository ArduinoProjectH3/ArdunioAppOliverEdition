import { Component, AfterViewInit, OnInit } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { TokenStorageService } from './Services/token-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'ArduinoApp';
  isLoggedIn = false;
  username?: string;

  // constructor(private tokenStorageService: TokenStorageService) {}

  ngOnInit(): void {
    // this.isLoggedIn = !!this.tokenStorageService.GetToken();

    // if (this.isLoggedIn) {
    //   const user = this.tokenStorageService.GetUser();
    //   this.username = user.username;
    // }
  }

  // Signout(): void {
  //   this.tokenStorageService.Signout();
  //   window.location.reload();
  // }
}
