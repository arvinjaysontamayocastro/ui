import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-basepage',
  templateUrl: './basepage.component.html',
  //   styleUrls: ['./basepage.component.scss'],
})
export class BasePageComponent {
  fullUrl: string = "";
  websiteUrl: string = "";
  pageUrl: string = "";
  constructor(private jwtHelper: JwtHelperService, private router: Router) {
    this.fullUrl = window.location.toString();
    this.websiteUrl = window.location.origin.toString();
    this.pageUrl = this.fullUrl.replace(this.websiteUrl, "");
  }

  isUserAuthenticated() {
    const token = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }

  public logOut = () => {
    localStorage.removeItem('jwt');
  };
}
