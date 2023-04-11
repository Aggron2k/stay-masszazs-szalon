import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServiceRoutingModule } from './service-routing.module';
import { MatFormFieldModule, MatHint } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ServiceRoutingModule,
    MatFormFieldModule,
    MatButtonModule,
    MatInputModule,
    MatHint,
    NgModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class ServiceModule { }
