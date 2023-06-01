import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavbarLeftComponent } from './side-navbar-left/side-navbar-left.component';
import { ContentComponent } from './content/content.component';
import { RouterModule, RouterOutlet } from '@angular/router';



@NgModule({
  declarations: [
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    SideNavbarLeftComponent
    
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[

    ContentComponent,
    HeaderComponent,
    FooterComponent,
    SideNavbarLeftComponent

  ]
})
export class HomepageModule { }
