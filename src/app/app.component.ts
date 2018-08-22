import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'my-app';

  constructor(private authServ: AuthService) {}
}
