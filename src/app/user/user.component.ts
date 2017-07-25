import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

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

}
