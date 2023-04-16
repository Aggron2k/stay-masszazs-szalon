import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { AuthService } from './shared/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stay-masszazs-szalon';

  loggedInUser?: firebase.default.User | null;

  constructor(private authService: AuthService){}

  onToggleSidenav(sidenav: MatSidenav){
    sidenav.toggle();
  }

  onClose(event: any, sidenav : MatSidenav){
    if (event === true){
      sidenav.close();
    }
  }

  ngOnInit(){
    this.authService.isUserLoggedIn().subscribe(user =>{
      this.loggedInUser = user;
    }, error =>{
      console.error(error);
    })
  }

  logout(){
    this.authService.logout().then(() =>{
      console.log("Sikeres kijelentkezés!");
    }).catch(error => {
      console.error(error);
    });
  }
}
