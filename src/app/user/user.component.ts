import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html'
})
export class UserComponent implements OnInit {

    constructor(public apiServices: ApiService) {}

    ngOnInit() {
        this.apiServices.getUsers();
    }
}
