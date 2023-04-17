import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ContentComponent } from './homepage/content/content.component';
import { FooterComponent } from './homepage/footer/footer.component';
import { HeaderComponent } from './homepage/header/header.component';
import { SideNavbarLeftComponent } from './homepage/side-navbar-left/side-navbar-left.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentComponent,

    FooterComponent,
    HeaderComponent,
    SideNavbarLeftComponent

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
