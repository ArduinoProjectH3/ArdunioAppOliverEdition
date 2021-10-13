import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class NavigatorService {

  constructor(private router: Router) { }

  Navigator(site: string){//Navigates to different page
    this.router.navigate([site]);
  }
}
