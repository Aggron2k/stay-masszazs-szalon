import { Injectable } from '@angular/core';
import { TimeSlot } from './time-slot';

@Injectable({
  providedIn: 'root'
})
export class TimeSlotService {
  private timeSlotsKey = 'timeSlots';

  constructor() { }

  getTimeSlots(): TimeSlot[] {
    const timeSlotsString = localStorage.getItem(this.timeSlotsKey);
    return timeSlotsString ? JSON.parse(timeSlotsString) : [];
  }

  setTimeSlots(timeSlots: TimeSlot[]): void {
    localStorage.setItem(this.timeSlotsKey, JSON.stringify(timeSlots));
  }
}