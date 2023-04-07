import { Component , OnInit } from '@angular/core';
import { TimeSlot } from './time-slot';
import { TimeSlotService } from './time-slot.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent{
  name!: string;
  time!: string;
  times: string[] = ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'];
  bookings: { name: string, time: string }[] = [];

  constructor() {
    const storedBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    this.bookings = storedBookings;
  }

  onSubmit() {
    const newBooking = { name: this.name, time: this.time };
    this.bookings.push(newBooking);
    localStorage.setItem('bookings', JSON.stringify(this.bookings));
    this.name = '';
    this.time = '';
  }
}