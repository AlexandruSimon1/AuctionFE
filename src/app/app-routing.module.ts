import { AuctionDetailComponent } from './modules/auction/auction-detail/auction-detail.component';
import { AuctionThumbailComponent } from './modules/auction/auction-thubmnail/auction-thubmnail.component';
import { AuctionListComponent } from './modules/auction/auction-list/auction-list.component';
import { ProfileComponent } from './modules/user/profile/profile.component';
import { HomeComponent } from './modules/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/login/login.component';
import { RegisterComponent } from './modules/register/register.component';
import { AuthenticationGuard } from './authentication/authentication.guard';

const routes: Routes = [

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  {path: '', component: HomeComponent},
  {path: 'users/:id', component: ProfileComponent},
  {path: 'user/edit/:id', component: RegisterComponent},
  { path: '', component: HomeComponent },
  { path: 'auction/:id', component: AuctionDetailComponent },
  { path: 'category/:id', component: AuctionListComponent, pathMatch: 'full' },
  { path: 'auction/:id', component: AuctionDetailComponent, canActivate: [AuthenticationGuard]},
   { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
