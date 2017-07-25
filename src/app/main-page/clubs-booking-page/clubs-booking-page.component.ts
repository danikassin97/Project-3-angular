import { Component, OnInit } from '@angular/core';
import { ReservationsService } from '../../services/reservations.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clubs-booking-page',
  templateUrl: './clubs-booking-page.component.html',
  styleUrls: ['./clubs-booking-page.component.css']
})
export class ClubsBookingPageComponent implements OnInit {

  bottleObject: any =
  {
    bottleName:'',
    bottlePrice: 0
  }
  ;
  bottlesSelected: any = [];
  tables = [];
  currentUser: any = {};
  clubListError: any;

  bottleTotal: any = 0;

  tip: Number = 0;

  tax: Number = 0;

  total: Number = 0;

  constructor(
    private table: ReservationsService,
    private auth: AuthService,
    private routerThing: Router
  ) { }

  ngOnInit() {
    this.allTables()
  }

  allTables(){
      this.table.getTables()
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
        console.log('before' +this.bottleTotal);
        this.bottleTotal = this.bottleTotal + oneBottle[Object.keys(oneBottle)[1]];
        console.log('after' +this.bottleTotal);
        // oneBottle[Object.keys(oneBottle)[0]]
        // oneBottle = {};
      });

      console.log('out the loop =========');
    this.tip = this.bottleTotal*0.2
    console.log('tip:'+ this.tip)
    return this.tip
  }

  tableTax(){
    this.bottleTotal = 0;
    this.bottlesSelected.forEach((oneBottle) => {
        // oneBottle.bottlePrice;
        console.log('before' +this.bottleTotal);
        this.bottleTotal = this.bottleTotal + oneBottle[Object.keys(oneBottle)[1]];
        console.log('after' +this.bottleTotal);
        // oneBottle[Object.keys(oneBottle)[0]]
        // oneBottle = {};
      });

      console.log('out the loop =========');
    this.tip = this.bottleTotal*0.2
    console.log('tip:'+ this.tip)
    this.tax = (this.tip + this.bottleTotal)*0.18
    return this.tax
  }

  tableTotal(){
    this.bottleTotal = 0;
    this.bottlesSelected.forEach((oneBottle) => {
        // oneBottle.bottlePrice;
        console.log('before' +this.bottleTotal);
        this.bottleTotal = this.bottleTotal + oneBottle[Object.keys(oneBottle)[1]];
        console.log('after' +this.bottleTotal);
        // oneBottle[Object.keys(oneBottle)[0]]
        // oneBottle = {};
      });

      console.log('out the loop =========');
    this.tip = this.bottleTotal*0.2;
    console.log('tip:'+ this.tip);
    this.tax = (this.tip + this.bottleTotal)*0.18;
    this.total = this.tip + this.bottleTotal + this.tax;
    return this.total
  }

}
