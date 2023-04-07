import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // FormsModule importálása

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
//import { HomeComponent } from './pages/home/home.component';
//import { ServiceComponent } from './pages/service/service.component';
//import { PricesComponent } from './pages/prices/prices.component';
//import { GalleryComponent } from './pages/gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    //HomeComponent,
    //ServiceComponent,
    //PricesComponent,
    //GalleryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
