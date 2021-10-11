import { Component, OnInit } from '@angular/core';
import { RoomReading, RoomService } from 'src/app/Services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {

   public roomData: RoomReading = {} as RoomReading
  errorMessage : string;

  constructor(private room: RoomService) { }
  ngOnInit(): void {
    this.getRoom("B16");
  }

  async getRoom(roomName : string){
    this.room.GetRoomData(roomName)
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
  }

  

