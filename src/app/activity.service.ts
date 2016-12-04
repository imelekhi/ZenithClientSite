import { Injectable } from '@angular/core';
import {Activity} from './activity';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class ActivityService {
    private BASE_URL = "http://localhost:51302/api/activityapi";
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getActivities(): Promise<Activity[]> {
        return this.http.get(this.BASE_URL)
            .toPromise()
            .then(response => response.json() as Activity[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getActivityById(id: number): Promise<Activity> {
        return this.getActivities()
            .then(result => result.find(activity => activity.activityId === id));
    }

    update(activity: Activity): Promise<Activity> {
        const url = `${this.BASE_URL}/${activity.activityId}`;
        return this.http
            .put(url, JSON.stringify(activity), { headers: this.headers })
            .toPromise()
            .then(() => activity)
            .catch(this.handleError);
    }

    create(newActivity: Activity): Promise<Activity> {
        return this.http
            .post(this.BASE_URL, JSON.stringify(newActivity), { headers: this.headers })
            .toPromise();
            //.then(res => res.json().data)
            //.catch(this.handleError);
    }

    delete(id: number): Promise<void> {
        const url = `${this.BASE_URL}/${id}`;
        return this.http.delete(url, { headers: this.headers })
            .toPromise()
            .then(() => null)
            .catch(this.handleError);
    }

}
