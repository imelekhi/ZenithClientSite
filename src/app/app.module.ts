import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { AppRoutingModule } from './app-routing.module';
import { ActivityComponent } from './activity/activity.component';
import { ActivityDetailComponent } from './activity-detail/activity-detail.component';
import { EventDetailComponent } from './event-detail/event-detail.component';
import {GroupByPipe} from './groupby.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    ActivityComponent,
    ActivityDetailComponent,
    EventDetailComponent,
    GroupByPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
