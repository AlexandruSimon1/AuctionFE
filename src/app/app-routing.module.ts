import { UpdateAddressComponent } from './modules/address/update-address/update-address.component';
import { CreateAddressComponent } from './modules/address/create-address/create-address.component';
import { PurchasingListComponent } from './modules/purchasing/purchasing-list/purchasing-list.component';
import { CreateAuctionComponent } from './modules/auction/create-auction/create-auction.component';
import { AuctionDetailComponent } from './modules/auction/auction-detail/auction-detail.component';
import { AuctionListComponent } from './modules/auction/auction-list/auction-list.component';
import { ProfileComponent } from './modules/user/profile/profile.component';
import { HomeComponent } from './modules/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/authorization/login/login.component';
import { RegisterComponent } from './modules/authorization/register/register.component';
import { BiddingListComponent } from './modules/bidding/bidding-list/bidding-list.component';
import { AddressListComponent } from './modules/address/address-list/address-list.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'users/:id', component: ProfileComponent },
  { path: 'user/edit/:id', component: RegisterComponent },
  { path: '', component: HomeComponent },
  { path: 'auction/:id', component: AuctionDetailComponent },
  { path: 'category/:id', component: AuctionListComponent, pathMatch: 'full' },
  { path: "auction", component: CreateAuctionComponent },
  { path: "user/purchasing", component: PurchasingListComponent },
  { path: "user/bidding", component: BiddingListComponent },
  { path: "profile", component: ProfileComponent },
  { path: 'user/address', component: AddressListComponent },
  { path: 'create/address', component: CreateAddressComponent },
  { path: 'update/address', component: UpdateAddressComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
