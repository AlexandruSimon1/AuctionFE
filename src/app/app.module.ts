//Utills
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

//Angular Material Modules
import { PersonalModulesModule } from './modules/personal-modules.module';

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


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    AuctionListComponent,
    CategoryListComponent,
    ProfileComponent,
    AuctionThumbailComponent,
    UserEditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    PersonalModulesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
