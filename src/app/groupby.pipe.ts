import { Pipe, PipeTransform } from '@angular/core';
import {Event} from './event'

@Pipe({ name: 'groupBy' })
export class GroupByPipe implements PipeTransform {
    
    transform(events: Event[]) {
       if(events != null)
           return events.filter(e => e.activity.activityDescription == "yoga");
     }
     
}