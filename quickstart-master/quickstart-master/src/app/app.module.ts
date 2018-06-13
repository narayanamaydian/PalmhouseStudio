import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { FacilitiesComponent } from './facilities/facilities.component';
import { ServiceComponent } from './our-service/our-service.component';
import { LoginComponent } from './login/login.component';
import { BookComponent } from './book/book.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FormsModule ],
  declarations: [ AppComponent, NavbarComponent, AboutComponent, FacilitiesComponent, ServiceComponent, LoginComponent, BookComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
