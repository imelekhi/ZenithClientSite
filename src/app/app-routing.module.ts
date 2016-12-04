import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventComponent }   from './event/event.component';
import { ActivityComponent }   from './activity/activity.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { EventDetailComponent } from './event-detail/event-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/event', pathMatch: 'full' },
  { path: 'event',  component: EventComponent },
  { path: 'activity',  component: ActivityComponent },
  { path: 'activity-detail/:id',  component: ActivityDetailComponent },
  { path: 'event-detail/:id',  component: EventDetailComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}