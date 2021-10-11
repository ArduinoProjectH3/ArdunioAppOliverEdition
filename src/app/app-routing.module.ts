import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { RoomComponent } from './Components/room/room.component';

const routes: Routes = [//url paths

  {path : 'login', component: LoginComponent},
  {path : 'register', component: RegisterComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full'},//if url is unknown it will redirect to the login page
  {path: 'room', component: RoomComponent}
];
  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
