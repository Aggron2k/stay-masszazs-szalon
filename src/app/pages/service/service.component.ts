import { Component , OnInit } from '@angular/core';
import { TimeSlot } from './time-slot';
import { TimeSlotService } from './time-slot.service';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';


@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.scss']
})
export class ServiceComponent{
  dateChanged($event: MatDatepickerInputEvent<Date>){
    console.log($event.value);
  }
}