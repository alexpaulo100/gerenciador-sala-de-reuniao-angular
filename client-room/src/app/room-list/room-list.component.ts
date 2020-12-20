import {Component, OnInit } from '@angular/core';
import { from } from "rxjs";
import {RoomDetailsComponent} from 'src/app/room-details.component';
import {Observable} from "rxjs";
import {RoomService} from "../room.service";
import {Room} from "../room";
import {Component, OnInit} from "@angular/core";
import {Router} from '@angular/router'
import { UpdateRoomComponent } from '../update-room/update-room.component';


@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.css']
})
export class RoomListComponent implements OnInit {
  rooms:Observable<Room[]>;

  constructor(private roomService: RoomService, 
  private router: Router) { }

  ngOnInit(): {
    this.reloadDate();
  }
reloadDate(){
  this.rooms=this.roomService.getRoomList();
}

deleteRoom (id : number){
  this.roomService.deleteRoom(id)
  .subscribe(
    date=> {
      console.log(data)
      this.reloadDate();
    },
    error => console.log(error)
    
  );

}
roomDetails(id:number){
  this.router.navigate(['details', id]);
}
UpdateRoomComponent(id:number){
  this.router.navigate(['update', id]);

}
}
