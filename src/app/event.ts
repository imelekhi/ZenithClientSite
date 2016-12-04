import {Activity} from './activity'

export class Event {
    eventId: number;
    fromDate: Date;
    toDate: Date;
    userName: string;
    activity: Activity;
    creationDate: Date;
    isActive: boolean;
}
