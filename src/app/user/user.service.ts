import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, iif, map, merge, mergeMap, of, ReplaySubject, Subject, switchMap, tap, throwError } from 'rxjs';
import { ENDPOINTS, JWT_LOCAL_STORAGE_NAME } from '../config';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
    private user: User | null = null;
    loggedInStatus = new ReplaySubject<boolean>(1);

    constructor(private http: HttpClient) {
        this.getUserData().subscribe();
    }

    setJwt(theJwt: string | null) {
        this.user = null;
        theJwt ? localStorage.setItem(JWT_LOCAL_STORAGE_NAME, theJwt) : localStorage.removeItem(JWT_LOCAL_STORAGE_NAME);
    }

    get jwt () {
        return localStorage.getItem(JWT_LOCAL_STORAGE_NAME) || "";
    }

    getUserData() {
        return of(this.user).pipe(
            mergeMap(v => // if user is saved, simply return it. otherwise if jwt is saved, fetch it. otherwise, return null
                v ? of(v) : (this.jwt ? this.http.get<User>(ENDPOINTS.SERVER_URL + ENDPOINTS.GET_PROFILE, {
                    headers: {
                        "Authorization": `Bearer ${this.jwt}`
                    }
                }) : of(null))
            ),
            tap(v => this.user = v), // save for quick access
            tap(v => this.loggedInStatus.next(!!v)), // notify everyone whether we are logged in
        );
    }

    logout() {
        this.user = null;
        localStorage.clear();
        this.loggedInStatus.next(false);
    }


}
