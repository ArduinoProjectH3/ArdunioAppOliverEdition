import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { RoomReading, RoomService } from 'src/app/Services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
   public roomData: RoomReading = {} as RoomReading
  errorMessage : string;

  constructor(private room: RoomService,private router: Router) { }
  ngOnInit(): void {
    this.CheckIfLoggedIn()
    this.getRoom("B16");
  }

  async getRoom(roomName : string){
    this.room.GetRoomData(roomName,localStorage.getItem('tokenstring')) // Sends the room number and the api token saved in localstorage to our method that returns roomdata

    .subscribe(
      data => {
      this.roomData = data;
      console.log(this.roomData);
     });
    }
    public GetRoomData(roomName:string) {
      console.log("calling GetRoomData with " + roomName)

      this.getRoom(roomName);
    }
    private CheckIfLoggedIn(){
      if(localStorage.getItem('tokenstring') == null){
        console.log('true')
        this.router.navigate(['login'])
      }
    }
  }

  

