import { Router } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { RoomdataService } from 'src/app/Services/roomdata.service';
import { RoomReading, RoomService } from 'src/app/Services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
   public roomData: RoomReading = {} as RoomReading
  errorMessage : string;

  constructor(private roominfo: RoomdataService,private room: RoomService,private router: Router, private authService: AuthService,private roomdata: RoomdataService) { }

  ngOnInit(): void {//on page load
    this.authService.CheckIfLoginIsValid();//Uses our auth service to check if login is valid
    // this.getRoom("B16");
    this.GetRoomInfo("B16");
  }

  // async getRoom(roomName : string){//Gets room info from api
  //   this.room.GetRoomData(roomName,localStorage.getItem('tokenstring')) // Sends the room number and the api token saved in localstorage to our method that returns roomdata

  //   .subscribe(

  //     data => {
  //     this.roomData = data;
  //     console.log(this.roomData);
  //   });
  // }
  // public GetRoomData(roomName:string) {
  //   console.log("calling GetRoomData with " + roomName)
  //   this.getRoom(roomName);
  // }
  async GetRoomInfo(roomnmb : String){
    this.roominfo.GetRoomData("B16","123").subscribe(
      data =>{
        console.log(data.token);
      }
    );
  }
}

  

