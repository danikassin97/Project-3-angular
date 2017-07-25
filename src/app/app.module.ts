import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'

import { AuthService } from './services/auth.service';
import { ReservationsService } from './services/reservations.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { UserComponent } from './user/user.component';
import { SignedInComponent } from './signed-in/signed-in.component';
import { HeaderComponent } from './main-page/header/header.component';
import { ClubsDisplayComponent } from './main-page/clubs-display/clubs-display.component';
import { ClubsBookingPageComponent } from './main-page/clubs-booking-page/clubs-booking-page.component';
import { SignupPageComponent } from './user/signup-page/signup-page.component';
import { SigninPageComponent } from './user/signin-page/signin-page.component';
import { PreviousTablesPageComponent } from './signed-in/previous-tables-page/previous-tables-page.component';
import { CurrentReservationsPageComponent } from './signed-in/current-reservations-page/current-reservations-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    UserComponent,
    SignedInComponent,
    HeaderComponent,
    ClubsDisplayComponent,
    ClubsBookingPageComponent,
    SignupPageComponent,
    SigninPageComponent,
    PreviousTablesPageComponent,
    CurrentReservationsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    AuthService,
    ReservationsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
