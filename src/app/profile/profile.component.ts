import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { ApiService } from '../api.service';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html'
})
export class ProfileComponent implements OnInit, OnDestroy{

  public userId: string;
  public profile;

  private subscription: Subscription[] = [];

  constructor( private apiServices: ApiService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.subscription.push(this.route.params.subscribe(params => {
      this.userId = params['id'];
    }));

    this.subscription.push(this.apiServices.getProfile(this.userId).subscribe(data => {
      this.profile = data.json();
    }));
  }

  ngOnDestroy() {
    this.subscription.forEach(sub => {
        sub.unsubscribe();
  });
  }
}
