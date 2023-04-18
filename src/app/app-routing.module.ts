import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ServiceComponent } from './pages/service/service.component';
import { PricesComponent } from './pages/prices/prices.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AuthGuard } from './shared/services/auth.guard';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'home', component:HomeComponent},
  {path:'service',component:ServiceComponent,canActivate: [AuthGuard]},
  {path:'prices',component:PricesComponent},
  {path:'gallery',component:GalleryComponent},
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule) },
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule) },
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
