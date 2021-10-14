import { Router,ActivatedRoute } from '@angular/router';
import { Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { RoomReading, RoomService } from 'src/app/Services/room.service';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css']
})
export class RoomComponent implements OnInit {
   public roomData: RoomReading = {} as RoomReading
  errorMessage : string;

  constructor(private route: ActivatedRoute,private room: RoomService,private router: Router, private authService: AuthService) { }
  orderby: string;
  ngOnInit(): void {//on page load
    this.authService.CheckIfLoginIsValid();//Uses our auth service to check if login is valid
    this.route.queryParams
      .subscribe(params => {
        this.getRoom(params.room);
      }
    );
  }

  async getRoom(roomName : string){//Gets room info from api to display on the site
    // this.room.GetRoomData(roomName,localStorage.getItem('tokenstring')) // Sends the room number and the api token saved in localstorage to our method that returns roomdata
      this.room.GetRoomData(roomName).subscribe(
      data => {
      this.roomData = data;
      console.log(this.roomData);
    });
  }
  public GetRoomData(roomName:any) {
    console.log("room is here"+roomName);
    console.log(this.authService.RefreshToken());
    console.log("calling GetRoomData with " + roomName)
    this.getRoom(roomName);
  }
}

  

