import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})

export class RoomdataService {

  constructor(private http: HttpClient) { }

  GetRoomData(roomName : string,apitoken : any){
    let headers = new HttpHeaders()
    headers=headers.append('Authorization',JSON.parse(apitoken)['key'])//Add a header to the header array 
    console.log("i am here");
    // let url = "http://192.168.1.71:5001/api/angular/GetRoom?roomName=" + roomName;
    let url = "http://127.0.0.1:5000/api/angular/GetRoom/" + roomName;
    console.log(this.http.get(url));
    return this.http.get(url);

  }
}
