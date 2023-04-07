import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceModule } from './service.module';

const routes: Routes = [
  { path: '', component: ServiceModule }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceRoutingModule { }
