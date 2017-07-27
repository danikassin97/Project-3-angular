import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment'

@Injectable()
export class ReservationsService {

  BASE_URL: string = environment.apiBase;
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
    return this.http.post(`${this.BASE_URL}/api/reservations`, newRes, {
      withCredentials: true
    })
  }

  getReservations() {
    return this.http.get(`${this.BASE_URL}/api/reservations`, {withCredentials: true})
      .map((res) => res.json());
  }

  deleteReservation(id) {
    console.log(id)
      return this.http.delete(`${this.BASE_URL}/api/reservations/` + id,
        {withCredentials: true}
      )
      .toPromise()
      .then(result => result.json());

        // .map((res: Response) => res.json());
    }
    updateTableAmount(updatedStuff){
      console.log(updatedStuff)
      return this.http.patch(`${this.BASE_URL}/api/clubs`, updatedStuff,
        {withCredentials: true}
      )
      .toPromise()
      .then(result => result.json());
    }
    // tableAmount -= 1
  }
