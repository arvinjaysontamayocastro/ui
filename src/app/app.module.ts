import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth-guard.service';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ToastrModule } from 'ngx-toastr';
import { FormAddComponent } from './form-add/form-add.component';
import { PageDisplayComponent } from './page/page-display.component';
import { AOComponent } from './ao/ao.component';

//all components routes
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'ao', component: AOComponent },
  { path: 'product', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: HomepageComponent },
];

//function is use to get jwt token from local storage
export function tokenGetter() {
  return localStorage.getItem('jwt');
}

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    HomepageComponent,
    LoginComponent,
    FormAddComponent,
    PageDisplayComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:7027'],
        disallowedRoutes: [],
      },
    }),
    ToastrModule.forRoot(),
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
