import { Component } from '@angular/core';

import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  styleUrls: [ './register.component.scss' ],
  templateUrl: './register.component.html'
})
export class RegisterComponent {

    registerData = {
        'name': '',
        'email': '',
        'description': '',
        'password': ''
    };

    constructor(public authServices: AuthService) {
        this.authServices = authServices;
    }

    post() {
        this.authServices.registerUser(this.registerData);
        this.registerData = {
            'name': '',
            'email': '',
            'description': '',
            'password': ''
        };
    }
}
