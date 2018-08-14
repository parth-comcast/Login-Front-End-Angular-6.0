import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html'
})
export class LoginComponent {

    loginData = {};

  constructor( private authServices: AuthService) {}

    post() {
        this.authServices.loginUser(this.loginData);
    }
}
