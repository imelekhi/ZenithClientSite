import { Injectable } from '@angular/core';
import {Event} from './event';
import {Activity} from './activity';
import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class EventService {
    private BASE_URL = "http://localhost:51302/api/eventapi";
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getEvents(): Promise<Event[]> {
        return this.http.get(this.BASE_URL)
            .toPromise()
            .then(response => response.json() as Event[])
            .catch(this.handleError);
    }

    getEventsByWeek(weekNum: number): Promise<Event[]> {
        return this.http.get(this.BASE_URL + "/getbyweek/" + weekNum)
            .toPromise()
            .then(response => response.json() as Event[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getEventById(id: number): Promise<Event> {
        return this.getEvents()
            .then(result => result.find(event => event.eventId === id));
    }

    update(event: Event): Promise<Event> {
        const url = `${this.BASE_URL}/${event.eventId}`;
        return this.http
            .put(url, JSON.stringify(event), { headers: this.headers })
            .toPromise()
            .then(() => event)
            .catch(this.handleError);
    }

    create(newEvent: Event): Promise<Event> {
        return this.http
            .post(this.BASE_URL, JSON.stringify(newEvent), { headers: this.headers })
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
