import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class ReservationsService {

  BASE_URL: string = 'http://localhost:3000';
  constructor(private http: Http) {}

  getClubs() {
    return this.http.get(`${this.BASE_URL}/api/clubs`)
      .map((res) => res.json());
  }

  createNewClub(newClubToCreate){
    return this.http.post(`${this.BASE_URL}/api/clubs`, newClubToCreate)
      // .map((res) => res.json());
  }

  getTables() {
    return this.http.get(`${this.BASE_URL}/api/tables`)
      .map((res) => res.json());
  }

  createNewTable(newTableToCreate){
    return this.http.post(`${this.BASE_URL}/api/tables`, newTableToCreate)
      // .map((res) => res.json());
  }

  newReservation(newRes){
    return this.http.post(`${this.BASE_URL}/api/reservations`, newRes);
  }
}
