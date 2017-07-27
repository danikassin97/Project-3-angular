import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/toPromise'

import { environment } from '../../environments/environment'

@Injectable()
export class AuthService {

  constructor(
    private httpThing: Http
  ) { }

  // POST signup
  // an argument for each 'req.body' in the API route
  signup(theFullName, theEmail, thePhoneNum, thePassword, theUsername) {
    return this.httpThing
      .post(
        environment.apiBase + '/api/signup',
        // form body information to send to backend (req.body)
        {
          signupFullName: theFullName,
          signupEmail: theEmail,
          signupNumber: thePhoneNum,
          signupUsername: theUsername,
          signupPassword: thePassword
        },
          { withCredentials: true }
      )
      .toPromise()
      .then(res => res.json())
  }

// -----------------------

  // POST login
  login(theEmail, thePassword) {
    return this.httpThing
      .post(
        environment.apiBase + '/api/login',
        {
          blahEmail: theEmail,
          blahPassword: thePassword
        },
        { withCredentials: true }
      )
      .toPromise()
      .then(res => res.json())
  }

//------------------------

  // POST logout
  logout() {
    return this.httpThing
      .post(
        environment.apiBase + '/api/logout',
        {},
        { withCredentials: true }
      )
      .toPromise()
      .then(res => res.json());
  }

//------------------------

  // GET checklogin
  checklogin() {
    return this.httpThing
      .get(
        environment.apiBase + '/api/checklogin',
        { withCredentials: true }
      )
      .toPromise()
      .then(res => res.json());
  }

}
