import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { PricesComponent } from './pages/prices/prices.component';
import { GalleryComponent } from './pages/gallery/gallery.component';

const routes: Routes = [
  {path: 'home', loadChildren: () => import('./pages/home/home-routing.module').then(m => m.HomeRoutingModule)},
  {path: 'service', loadChildren: () => import('./pages/service/service-routing.module').then(m => m.ServiceRoutingModule)},
  {path: 'prices', loadChildren: () => import('./pages/prices/prices-routing.module').then(m => m.PricesRoutingModule)},
  {path: 'gallery', loadChildren: () => import('./pages/gallery/gallery-routing.module').then(m => m.GalleryRoutingModule)},
  {path: 'not-found', loadChildren: () => import('./pages/not-found/not-found.module').then(m => m.NotFoundModule) },
  {path: '', redirectTo:'/home', pathMatch:'full' },
  {path: '**', redirectTo:'/not.found'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
