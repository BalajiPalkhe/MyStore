import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentComponent } from './homepage/content/content.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { HeaderComponent } from './homepage/header/header.component';
import { SideNavbarLeftComponent } from './homepage/side-navbar-left/side-navbar-left.component';
import { HomepageModule } from './homepage/homepage.module';
import { RegistrationModule } from './registration/registration.module';
import { ProfileModule } from './profile/profile.module';
import { AdminModule } from './admin/admin.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,


    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepageModule,
    RegistrationModule,
    ProfileModule,
    AdminModule,
    RouterModule,
    HttpClientModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
