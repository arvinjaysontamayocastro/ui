import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.service';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { AOComponent } from './ao/ao.component';
import { ProductsComponent } from './products/products.component';
import { GistLensComponent } from './homework/gistlens/gistlens.component';

//all components routes
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'ao', component: AOComponent },
  { path: 'homework/gistlens', component: GistLensComponent },
  { path: 'product', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
