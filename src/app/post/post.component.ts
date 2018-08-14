import { Component } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-post',
  templateUrl: 'post.component.html'
})
export class PostComponent {

  postMsg = '';

  constructor( private apiServices: ApiService) {}

  post() {
    this.apiServices.postMessage({msg: this.postMsg});
    this.postMsg = '';
  }
}
