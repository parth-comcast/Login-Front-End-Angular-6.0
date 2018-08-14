import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-message',
  templateUrl: 'message.component.html'
})
export class MessageComponent implements OnInit{

  private userId;
  private subscription: Subscription[] = [];

  constructor( private apiServices: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription.push(this.route.params.subscribe(params => {
      this.userId = params['id'];
    }));
    this.apiServices.getMessages(this.userId);
  }
}
