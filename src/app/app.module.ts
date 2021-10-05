//Utills
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//Angular Material Modules
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTabsModule } from '@angular/material/tabs';

//Components
import { RegisterComponent } from './modules/authorization/register/register.component';
import { LoginComponent } from './modules/authorization/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { AuctionListComponent } from './modules/auction/auction-list/auction-list.component';
import { ProfileComponent } from './modules/user/profile/profile.component';
import { AuctionThumbailComponent } from './modules/auction/auction-thubmnail/auction-thubmnail.component';
import { UserEditComponent } from './modules/user/user-edit/user-edit.component';
import { AuctionService } from './services/auction.service';
import { CategoryService } from './services/category.service';
import { AuctionDetailComponent } from './modules/auction/auction-detail/auction-detail.component';
import { CreatePurchasingComponent } from './modules/purchasing/create-purchasing/create-purchasing.component';
import { PurchasingListComponent } from './modules/purchasing/purchasing-list/purchasing-list.component';
import { BiddingListComponent } from './modules/bidding/bidding-list/bidding-list.component';
import { CreateBiddingComponent } from './modules/bidding/create-bidding/create-bidding.component';
import { AddressListComponent } from './modules/address/address-list/address-list.component';
import { CreateAddressComponent } from './modules/address/create-address/create-address.component';
import { UpdateAddressComponent } from './modules/address/update-address/update-address.component';
import { CreateAuctionComponent } from './modules/auction/create-auction/create-auction.component';
import { ErrorInterceptor } from './security/error.interceptor';
import { JwtInterceptor } from './security/jwt.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AuctionDetailComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent,
    AuctionThumbailComponent,
    AuctionListComponent,
    UserEditComponent,
    CreatePurchasingComponent,
    PurchasingListComponent,
    BiddingListComponent,
    CreateBiddingComponent,
    AddressListComponent,
    CreateAddressComponent,
    UpdateAddressComponent,
    CreateAuctionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  providers: [
    AuctionService,
    CategoryService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
