import { Component, OnInit } from '@angular/core';
import {Activity} from '../activity';
import {ActivityService} from '../activity.service';
import { Router } from '@angular/router';

@Component({
  selector: 'activity-component',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

  activities: Activity[];
  selected: Activity;
  
  constructor(
    private activityService: ActivityService,
    private router: Router
  ) { }

  onSelect(activity: Activity): void {
    this.selected = activity;
  }

  getActivities(): void {
    this.activityService.getActivities()
      .then(activities => this.activities = activities);
  }
/*
  gotoDetail(): void {
    this.router.navigate(['/activity-detail', this.selected.activityId]);
  }
*/
  gotoEdit(EditActivity: Activity): void {
    this.router.navigate(['/activity-detail', EditActivity.activityId]);
  }

  ngOnInit() {
    this.getActivities();
  }

  newActivity: Activity = new Activity();
  add(newActivity: Activity): void {
    newActivity.activityId = 0;
    newActivity.activityDescription = newActivity.activityDescription.trim();
    newActivity.creationDate = new Date();

    if (!newActivity) { return; }

    this.activityService.create(newActivity)
      .then(() => {
        this.activities = this.activities;
        this.selected = null;
        window.location.reload();
      });
  }

  delete(delActivity: Activity): void {
    this.activityService
      .delete(delActivity.activityId)
      .then(() => {
        this.activities = this.activities.filter(a => a !== delActivity);
        if (this.selected === delActivity) { this.selected = null; }
      });
  }

}
