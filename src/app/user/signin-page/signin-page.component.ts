import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-signin-page',
  templateUrl: './signin-page.component.html',
  styleUrls: ['./signin-page.component.css']
})
export class SigninPageComponent implements OnInit {

  loginEmail: string;
  loginPassword: string;

  loginErrorMessage: string;

  isLoggedOut: boolean = false;

  constructor(
    private authThing: AuthService,
    private routerThing: Router
  ) { }

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

  doLogin() {
    this.authThing.login(this.loginEmail, this.loginPassword)
    .then((resultsFromApi) => {
      this.loginEmail = "";
      this.loginPassword = "";
      this.loginErrorMessage = "";

      this.routerThing.navigate(['/'])
    })
    // alert('login submitted');
    .catch((err) => {
      const parsedError = err.json();
      this.loginErrorMessage = parsedError.message
    });
  }


}
