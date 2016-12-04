import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import {User} from './user'
import {LoginResponse} from './login-response'
import {RoleResponse} from './role-response'
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

@Injectable()
export class UserAccountService {

   private BASE_URL = "http://localhost:51302/api/userapi";
   private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    login(user: User): Promise<LoginResponse> {
        const url = "http://localhost:51302/api/userapi/login";//`${this.BASE_URL}/login`;
        return this.http.post(url, JSON.stringify(user), { headers: this.headers })
            .map((response: Response) => response.json() as LoginResponse)
            .toPromise()
            .catch(this.handleError);;
    }

    checkRole(userName: string): Promise<RoleResponse> {
        const url = "http://localhost:51302/api/userapi/checkrole" + "/" + userName;//`${this.BASE_URL}/login`;
        return this.http.get(url)
            .map((response: Response) => response.json() as RoleResponse)
            .toPromise()
            .catch(this.handleError);;
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occurred', error); // for demo purposes only
      return Promise.reject(error.message || error);
    }
}
