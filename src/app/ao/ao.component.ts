import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import configurl from '../../assets/config/config.json';
import { JwtHelperService } from '@auth0/angular-jwt';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'ao',
  templateUrl: './ao.component.html',
})
export class AOComponent implements OnInit {

  ngOnInit() {
    // console.log(this.baseUrl);
  }

  url = configurl.apiServer.url + '/api/authmanagement/';

  constructor(
    private router: Router,
    private http: HttpClient,
    private jwtHelper: JwtHelperService,
    private toastr: ToastrService
  ) {
  }
}
