import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FakeLoadingService } from '../../shared/services/fake-loading.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(private router: Router, private loadingService: FakeLoadingService, private authService: AuthService){

  }
  
  email = new FormControl('');
  password = new FormControl('');

  loading: boolean = false;

  login() {
    this.loading = true;
    /*if (this.email.value !== null && this.password.value !== null) {
      this.loadingService.loadingWithPromise(this.email.value, this.password.value).then((_: boolean) => {
        this.router.navigateByUrl('/home');
      }).catch(error => {
        console.error(error, "Hibás email vagy jelszó!");
        this.loading = false;
      }).finally(() => {
        console.log("Bejelentkezés esemény lefutott.");
        this.loading = false;
      });
    } else {
      console.error("Érvénytelen email vagy jelszó!");
      this.loading = false;
    }*/
    if(this.email.value !== null && this.password.value !== null){
      this.authService.login(this.email.value, this.password.value).then(cred => {
        console.log(cred);
        this.router.navigateByUrl('/home');
        this.loading = false;
      }).catch(error => {
        console.error(error);
        this.loading = false;
      });
    }
  }
}
