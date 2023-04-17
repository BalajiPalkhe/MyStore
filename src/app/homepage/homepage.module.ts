import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavbarLeftComponent } from './side-navbar-left/side-navbar-left.component';
import { ContentComponent } from './content/content.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SideNavbarLeftComponent,
    ContentComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[


  ]
})
export class HomepageModule { }
