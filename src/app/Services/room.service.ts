import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  constructor(private http: HttpClient){}

  GetRoomData(roomName : string){

    let url = "http://192.168.1.71:5001/api/angular/GetRoom?roomName=" + roomName;

    return this.http.get<RoomReading>(url);

  }
}

export class RoomReading {
  constructor( 
 public Rr_RoomName: string,
  public Rr_Cts: Date,
  public Lr: LightReading,
  public Tr_Head: HeadTemperatureReading,
  public Tr_Feet: FeetTemperatureReading,
  public Hr: HumidityReading,
  public Cr: CurtainReading,
  public Sr: SoundReading
  ){}
}

export class LightReading {
  constructor( 
  public Lr_Id: number,
  public Lr_Value: string
  ){}
}

export class HeadTemperatureReading {
  constructor( 
  public Tr_Id: number,
  public Tr_Value: number
  ){}
}

export class FeetTemperatureReading {
  constructor( 
  public Tr_Id: number,
  public Tr_Value: number
  ){}
}

export class HumidityReading {
  constructor( 
  public Hr_Id: number,
  public Hr_Value: number
  ){}
}

export class CurtainReading {
  constructor( 
  public Cr_Id: number,
  public Cr_Value: string
  ){}
}

export class SoundReading {
  constructor( 
  public Sr_Id: number,
  public Sr_Value: string
  ){}
}



