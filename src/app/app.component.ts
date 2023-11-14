import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Room } from './room/room.model';
import { RoomComponent } from "./room/room.component";


@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterOutlet, RoomComponent]
})
export class AppComponent {
  title = 'MetHotels';
  lastAddedRoom!: Room;

  rooms: Room[] = [
    { id: 1, name: 'Room 1', type: 'Single', price: 100 },
    { id: 2, name: 'Room 2', type: 'Double', price: 150 },
    { id: 3, name: 'Room 3', type: 'Suite', price: 200 },
    { id: 4, name: 'Room 4', type: 'Single', price: 100 },
  ];
  addRoom(id: HTMLInputElement, name: HTMLInputElement, type: HTMLInputElement, price: HTMLInputElement) {
    const idvalue = Number(id.value);
    const pricevalue = Number(price.value);
    this.rooms.push(new Room(idvalue, name.value, type.value, pricevalue));
    name.value = '';
    id.value = '';
    type.value = '';
    price.value = '';
    return false;
  }

}
