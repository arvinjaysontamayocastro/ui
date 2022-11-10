import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import configurl from '../../assets/config/config.json';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';
import { PageService } from './page.service';
import { Page } from '../Models/Page';

@Component({
  selector: 'page-display',
  templateUrl: './page-display.component.html',
})
export class PageDisplayComponent implements OnInit {
  @Input() fullUrl: string = "";
  @Input() websiteUrl: string = "";
  @Input() pageUrl: string = "";
  invalidLogin?: boolean;
  isPage = false;
  page: Page;

  ngOnInit() {
    this.processPage();
    // console.log(this.baseUrl);
  }

  url = configurl.apiServer.url + '/api/authmanagement/';

  constructor(
    private router: Router,
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private toastr: ToastrService,
    private pageService: PageService
  ) {
    this.page = new Page();
  }

  public login = (form: NgForm) => {
    const credentials = JSON.stringify(form.value);
    this.http
      .post(this.url + 'login', credentials, {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      })
      .subscribe(
        (response) => {
          const token = (<any>response).token;
          localStorage.setItem('jwt', token);
          this.invalidLogin = false;
          this.toastr.success('Logged In successfully');
          this.router.navigate(['/product']);
        },
        (err) => {
          this.invalidLogin = true;
        }
      );
  };

  isUserAuthenticated() {
    const token = localStorage.getItem('jwt');
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      return true;
    } else {
      return false;
    }
  }

  processPage() {
    var currentPage = this.pageService.getPageConfiguration(this.websiteUrl, this.pageUrl);
    if(currentPage != null) {
      this.isPage = true;
      this.page = currentPage;
    }
  }
}
