import { Component } from '@angular/core';
import {EventService} from './event.service';
import {ActivityService} from './activity.service';
import {UserAccountService} from './user-account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [EventService, ActivityService, UserAccountService]
})
export class AppComponent {
  title = 'Zenith Society';
}
