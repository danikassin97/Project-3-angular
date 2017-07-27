import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../services/reservations.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-previous-tables-page',
  templateUrl: './previous-tables-page.component.html',
  styleUrls: ['./previous-tables-page.component.css']
})
export class PreviousTablesPageComponent implements OnInit {

  updatedStuff: any = {
    id: '',
    tableAmount: undefined
  }
  reservation: any;

  reservations : any;
  reservationsListError = '';

  currentUser: any = {};
  isLoggedOut: boolean = false;


  constructor(
    private club: ReservationsService,
    private auth: AuthService,
    private routerThing: Router
  ) { }

  ngOnInit() {
    this.auth.checklogin()
      .then((userFromApi) => {
        this.currentUser = userFromApi;
        if(this.currentUser._id !== undefined){
          // console.log(this.currentUser._id)
        this.allReservations()
        }
      })
      .catch(() => {
        this.routerThing.navigate(['/'])
        this.isLoggedOut = true;
      })
  }

  // sorting(){
  //   sort((a,b) => {
  //       return new Date(a.start).getTime() - new Date(b.start).getTime()
  //   };
  // );
  // }

  // recent.sort(function(a,b) {
  //     return new Date(a.start).getTime() - new Date(b.start).getTime()
  // });

  allReservations(){
      this.club.getReservations()
        .subscribe((myResList) => {
      this.reservations = myResList;
      // console.log('this:' + this.reservations)
      // this.routerThing.navigate(['/'])

    },
    () => {
      this.reservationsListError = 'sorry, no clubs';
    }
  );
  }

  deleteRes(id, reservation){
    console.log(id);
    this.club.deleteReservation(id)
    this.updatedStuff.id = reservation.clubRes._id
    console.log(reservation.clubRes)
    this.updatedStuff.tableAmount = reservation.clubRes.tableAmount
    // console.log(id)
    console.log(this.updatedStuff.tableAmount);
    this.updatedStuff.tableAmount = this.updatedStuff.tableAmount + 1;
    console.log(this.updatedStuff.tableAmount);
    this.club.updateTableAmount(this.updatedStuff)
    .then(() => {

    })
  }

  doLogout() {
    this.auth.logout()
    .then(() => {
      this.isLoggedOut = true;
      this.routerThing.navigate(['/'])
    })
  }

}
