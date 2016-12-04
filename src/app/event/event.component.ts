import { Component, OnInit } from '@angular/core';
import {Event} from '../event';
import {Activity} from '../activity'
import {EventService} from '../event.service';
import { Router } from '@angular/router';
//import {ActivityService} from '../activity.service'
import {UserAccountService} from '../user-account.service'
import {User} from '../User'
import {LoginResponse} from '../login-response'
import {RoleResponse} from '../role-response'


@Component({
  selector: 'event-component',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  events: Event[];
  selected: Event;
  activities: Activity[];
  selectedActivity: Activity;
  user: User;
  loginResponse: LoginResponse;
  roleResponse: RoleResponse;
  authorized: number;
  weekNumber: number;
  
  constructor(
    private eventService: EventService,
    //private activityService: ActivityService,
    private userAccountService: UserAccountService,
    private router: Router
    
  ) { }

  login(): void {
    this.userAccountService.login(this.user).then((response) =>
    {
      this.loginResponse = response;
      if(this.loginResponse.succeeded == true)
      {
        this.userAccountService.checkRole(this.user.UserName).then((roleResponse) =>
        {
          this.roleResponse = roleResponse;
          this.authorized = roleResponse.confirmed;
        });
      }
    });   
  }

  getEvents(weekNum: number): void {
    this.eventService.getEventsByWeek(weekNum)
      .then(events => this.events = events);
  }
/*
  getActivities(): void {
    this.activityService.getActivities()
      .then(activities => this.activities = activities);
  }
*/
  gotoEdit(Editevent: Event): void {
    this.router.navigate(['/event-detail', Editevent.eventId]);
  }

  ngOnInit() {
    this.user = new User;
    this.loginResponse = new LoginResponse;
    this.roleResponse = new RoleResponse;
    this.authorized = 0;
    this.weekNumber = 0;
    this.getEvents(0);
    //this.getActivities();
  }

  previous() {
    if(this.authorized == 1)
    {
        this.weekNumber += -1;
        this.getEvents(this.weekNumber);
    }
  }

  next() {
    if(this.authorized == 1)
    {
        this.weekNumber += 1;
        this.getEvents(this.weekNumber);
    }
  }

   /*
  newEvent: Event = new Event();
 
  add(newEvent: Event): void {
    newEvent.eventId = 0;
    newEvent.fromDate = newEvent.fromDate;
    newEvent.toDate = newEvent.toDate;
    newEvent.userName = newEvent.userName;
    newEvent.activity = newEvent.activity;
    newEvent.creationDate = new Date();
    newEvent.isActive = newEvent.isActive;
    
    if (!newEvent) { return; }

    this.eventService.create(newEvent)
      .then(() => {        
        this.events = this.events;
        this.selected = null;
        window.location.reload();
      });
  }

  delete(delEvent: Event): void {
    this.eventService
      .delete(delEvent.eventId)
      .then(() => {
        this.events = this.events.filter(e => e !== delEvent);
        if (this.selected === delEvent) { this.selected = null; }
      });
  }
*/

}
