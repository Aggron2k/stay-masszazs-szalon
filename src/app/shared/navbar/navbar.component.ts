import { Component, EventEmitter, Output, Input } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  @Output() onCloseSidenav: EventEmitter<boolean> = new EventEmitter();
  @Input() loggedInUser?: firebase.default.User | null;
  @Output() onLogout : EventEmitter<boolean> = new EventEmitter(); 
  

  close(logout?: boolean)
  {
    this.onCloseSidenav.emit(true);
    if (logout === true) {
      this.onLogout.emit(true);
    }
  }
}
