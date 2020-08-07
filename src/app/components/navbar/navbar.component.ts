import { Component, OnInit, ElementRef } from '@angular/core';
import { routeTitles } from '../sidebar/sidebar.component';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public focus;
  public listTitles: any[];
  public location: Location;
  public user: string;
  constructor(location: Location,  private element: ElementRef, private router: Router, private auth: AuthService) {
    this.location = location;
  }

  ngOnInit() {
    // this.user = this.auth.name;
    this.user = localStorage.getItem('name');
    this.listTitles = routeTitles.filter(listTitle => listTitle);
  }
  getTitle() {
    let titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
        titlee = titlee.slice( 1 );
    }

    for (let item = 0; item < this.listTitles.length; item++) {
        if (this.listTitles[item].path === titlee) {
            return this.listTitles[item].title;
        }
    }
    return 'Dashboard';
  }

  logout() {
    this.auth.isAuth$.next(false);
    localStorage.removeItem('isLoggedIn');
    this.auth.userId = null;
    this.auth.token = null;
  }

}
