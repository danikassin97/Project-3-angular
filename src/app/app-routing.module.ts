import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { SignedInComponent } from './signed-in/signed-in.component';
import { ClubsDisplayComponent } from './main-page/clubs-display/clubs-display.component';
import { ClubsBookingPageComponent } from './main-page/clubs-booking-page/clubs-booking-page.component';
import { PreviousTablesPageComponent } from './signed-in/previous-tables-page/previous-tables-page.component';
import { CurrentReservationsPageComponent } from './signed-in/current-reservations-page/current-reservations-page.component';

const routes: Routes = [
  {

    path: '',
    component: MainPageComponent
  },
  {
    path: 'previously-booked',
    component: PreviousTablesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
