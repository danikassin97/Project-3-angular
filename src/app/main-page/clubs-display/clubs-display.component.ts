import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../services/reservations.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-clubs-display',
  templateUrl: './clubs-display.component.html',
  styleUrls: ['./clubs-display.component.css']
})
export class ClubsDisplayComponent implements OnInit {

clubs = [];
currentUser: any = {};
clubListError: any;
isLoggedOut: boolean = false;

fullNameValue: string;
emailValue: string;
phoneNumValue: number;
usernameValue: string;
passwordValue: string;

signupErrorMessage: string;

loginEmail: string;
loginPassword: string;

loginErrorMessage: string;

amIBooking: boolean = false;
currentClub: any;

bottleObject: any =
{
  bottleName:'',
  bottlePrice: 0
}
;
bottlesSelected: any = [];
tables = [];

bottleTotal: any = 0;

tip: Number = 0;

tax: Number = 0;

total: Number = 0;

newRes: any = {
  bottles: [],
  total: '',
  clubInfo: ''
}

updatedStuff: any = {
  id: '',
  tableAmount: undefined
}

isButton1Pressed: boolean = false;
isButton2Pressed: boolean = false;
isButton3Pressed: boolean = false;

isButton1Booked: boolean = false;
isButton2Booked: boolean = false;
isButton3Booked: boolean = false;

// loginMessage: any = alert('Please Log In')

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
    console.log("hello")

      this.auth.signup(this.fullNameValue, this.emailValue, this.phoneNumValue, this.usernameValue, this.passwordValue)
        .then((resultsFromApi) => {
          this.fullNameValue = "";
          this.emailValue = "";
          this.phoneNumValue = undefined;
          this.usernameValue = "";
          this.passwordValue = "";
          this.signupErrorMessage = "";

          this.routerThing.navigate(['/'])
        })
        .catch((err) => {
          console.log("hello")
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


// --------------------- BOOKING --------------------


toggleThatInput1(club){
    if(this.amIBooking === true){
      this.amIBooking = false;
      this.isButton1Pressed = false;
    }
    else{
      this.amIBooking = true;
      this.isButton1Pressed = true;

    }

    this.currentClub = club;
  }

  toggleThatInput2(club){
      if(this.amIBooking === true){
        this.amIBooking = false;
        this.isButton2Pressed = false;

      }
      else{
        this.amIBooking = true;
        this.isButton2Pressed = true;

      }

      this.currentClub = club;
    }

    toggleThatInput3(club){
        if(this.amIBooking === true){
          this.amIBooking = false;
          this.isButton3Pressed = false;

        }
        else{
          this.amIBooking = true;
          this.isButton3Pressed = true;

        }

        this.currentClub = club;
      }

    allTables(){
        this.club.getTables()
          .subscribe((myTables) => {
        this.tables = myTables;
        // this.routerThing.navigate(['/'])

      },
      () => {
        this.clubListError = 'sorry, no tables';
      }
    );
  }

    addBottle(name, price){
      this.bottleObject.bottleName = name;
      this.bottleObject.bottlePrice = price;
      this.bottlesSelected.push(this.bottleObject);
      this.bottleObject = {};
      // console.log(this.bottlesSelected)

    }

    tableTip(){
      this.bottleTotal = 0;
      this.bottlesSelected.forEach((oneBottle) => {
          // oneBottle.bottlePrice;
          this.bottleTotal = this.bottleTotal + oneBottle[Object.keys(oneBottle)[1]];
          // oneBottle[Object.keys(oneBottle)[0]]
          // oneBottle = {};
        });

      this.tip = this.bottleTotal*0.2
      return this.tip
    }

    tableTax(){
      this.bottleTotal = 0;
      this.bottlesSelected.forEach((oneBottle) => {
          // oneBottle.bottlePrice;
          this.bottleTotal = this.bottleTotal + oneBottle[Object.keys(oneBottle)[1]];
          // oneBottle[Object.keys(oneBottle)[0]]
          // oneBottle = {};
        });

      this.tip = this.bottleTotal*0.2
      this.tax = (this.tip + this.bottleTotal)*0.18
      return this.tax
    }

    tableTotal(){
      this.bottleTotal = 0;
      this.bottlesSelected.forEach((oneBottle) => {
          // oneBottle.bottlePrice;
          this.bottleTotal = this.bottleTotal + oneBottle[Object.keys(oneBottle)[1]];
          // oneBottle[Object.keys(oneBottle)[0]]
          // oneBottle = {};
        });

      this.tip = this.bottleTotal*0.2;
      this.tax = (this.tip + this.bottleTotal)*0.18;
      this.total = this.tip + this.bottleTotal + this.tax;
      return this.total
    }


// SAVE RESERVATION

saveReservation(id){
  if(this.isButton1Pressed === true){
    this.isButton1Booked === true
  } else if(this.isButton2Pressed === true){
    this.isButton2Booked === true
  } else if(this.isButton3Pressed === true){
    this.isButton3Booked === true
  }

  this.newRes.bottles = this.bottlesSelected;
  this.newRes.total = this.tableTotal();
  this.newRes.clubInfo = this.currentClub
  this.updatedStuff.id = id
  this.updatedStuff.tableAmount = this.currentClub.tableAmount
  // console.log(id)
  console.log(this.updatedStuff.tableAmount);
  this.updatedStuff.tableAmount = this.updatedStuff.tableAmount - 1;
  console.log(this.updatedStuff.tableAmount);
  this.club.updateTableAmount(this.updatedStuff)
  this.club.newReservation(this.newRes)
  .subscribe(
    (newResFromApi) => {

    }
  )
  this.routerThing.navigate(['/previously-booked'])

}

}
