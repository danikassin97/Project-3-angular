import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
// import * as $ from 'jquery';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  fullNameValue: string;
  emailValue: string;
  usernameValue: string;
  passwordValue: string;

  signupErrorMessage: string;

  isLoggedOut: boolean = false;

  constructor(
      private authThing: AuthService,
      private routerThing: Router
  )  { }

  ngOnInit() {
    this.authThing.checklogin()
        .then((resultsFromApi) =>{
          this.routerThing.navigate(['/'])
        })
        // even if you dont do anything on error, catch to avoid a console error
        .catch((err) => {
            this.isLoggedOut = true;
        })
  }

  doSignUp(){
      this.authThing.signup(this.fullNameValue, this.emailValue, this.usernameValue, this.passwordValue)
        .then((resultsFromApi) => {
          this.fullNameValue = "";
          this.emailValue = "";
          this.usernameValue = "";
          this.passwordValue = "";
          this.signupErrorMessage = "";

          this.routerThing.navigate(['/'])
        })
        .catch((err) => {
          const parsedError = err.json();
          this.signupErrorMessage = parsedError.message
        });
  }

}
