import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth-guard.service';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';

//all components routes
const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'product', component: ProductsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
