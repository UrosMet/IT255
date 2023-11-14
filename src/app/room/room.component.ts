import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Room } from './room.model';

@Component({
  selector: 'app-room',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './room.component.html',
  styleUrl: './room.component.css'
})
export class RoomComponent {
  @Input() room!: Room;
}
