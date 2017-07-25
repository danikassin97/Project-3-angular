import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../services/reservations.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  clubs = [];
  currentUser: any = {};
  clubListError: any;
  isLoggedOut: boolean = false;

  fullNameValue: string;
  emailValue: string;
  usernameValue: string;
  passwordValue: string;

  signupErrorMessage: string;

  loginEmail: string;
  loginPassword: string;

  loginErrorMessage: string;


    constructor(
      private club: ReservationsService,
      private auth: AuthService,
      private routerThing: Router
    ) { }

    ngOnInit() {
      this.auth.checklogin()
        .then((userFromApi) => {
          this.currentUser = userFromApi;
          this.allClubs();
        })
        .catch(() => {
          this.routerThing.navigate(['/'])
          this.isLoggedOut = true;
        })
        this.allClubs();



    }

    // SHOW ALL CLUBS

    allClubs(){
        this.club.getClubs()
          .subscribe((myClubList) => {
        this.clubs = myClubList;
        // this.routerThing.navigate(['/'])

      },
      () => {
        this.clubListError = 'sorry, no clubs';
      }
    );
    }

    // LOG OUT BUTTON

    doLogout() {
      this.auth.logout()
      .then(() => {
        this.isLoggedOut = true;
        this.routerThing.navigate(['/'])
      })
    }

    toLogin(){
      this.routerThing.navigate(['/signin'])
    }

    // SIGN UP

    doSignUp(){
        this.auth.signup(this.fullNameValue, this.emailValue, this.usernameValue, this.passwordValue)
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

    // LOG IN

    doLogin() {
      this.auth.login(this.loginEmail, this.loginPassword)
      .then((resultsFromApi) => {
        this.loginEmail = "";
        this.loginPassword = "";
        this.loginErrorMessage = "";

        this.isLoggedOut = false;

        this.routerThing.navigate(['/'])
      })
      // alert('login submitted');
      .catch((err) => {
        const parsedError = err.json();
        this.loginErrorMessage = parsedError.message
      });
    }

}
