import { Component } from '@angular/core';
import {FormControl} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router){

  }
  
  email = new FormControl('');
  password = new FormControl('');
  login() {
      if (this.email.value === 'asd' && this.password.value === 'asd'){
        this.router.navigateByUrl('/home');
      }
      else{
        console.error('Hibás bevitel!');
      }
  }
}
