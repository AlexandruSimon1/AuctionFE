import { AuctionDetailComponent } from './modules/auction/auction-detail/auction-detail.component';
//Utills
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
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
import {MatTooltipModule} from '@angular/material/tooltip';

//Components
import { RegisterComponent } from './modules/register/register.component';
import { LoginComponent } from './modules/login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './modules/home/home.component';
import { AuctionListComponent } from './modules/auction/auction-list/auction-list.component';
import { ProfileComponent } from './modules/user/profile/profile.component';
import { CategoryListComponent } from './modules/category-list/category-list.component';
import { AuctionThumbailComponent } from './modules/auction/auction-thubmnail/auction-thubmnail.component';
import { UserEditComponent } from './modules/user/user-edit/user-edit.component';
import { AuctionService } from './services/auction.service';
import { CategoryService } from './services/category.service';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AuctionDetailComponent,
    HomeComponent,
    ProfileComponent,
    RegisterComponent,
    AuctionThumbailComponent,
    AuctionListComponent,
    CategoryListComponent,
    UserEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    RouterModule,
    MatMenuModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatIconModule,
    MatTooltipModule
  ],
  providers: [
    AuctionService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
