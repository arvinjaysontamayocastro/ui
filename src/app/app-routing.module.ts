import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.service';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { AOComponent } from './ao/ao.component';
import { ProductsComponent } from './products/products.component';
import { GistLensComponent } from './homework/gistlens/gistlens.component';
import { Page1Component } from './pages/page1/page1.component';
import { BasePageComponent } from './basepage/basepage.component';
import { Page2Component } from './pages/page2/page2.component';

//all components routes
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'ao', component: AOComponent },
  { path: 'menus/m', component: Page1Component },
  { path: 'callingcards/hm', component: Page2Component },
  { path: 'homework/gistlens', component: GistLensComponent },
  { path: 'product', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '**', component: BasePageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
