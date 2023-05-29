import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomepageModule } from '../homepage/homepage.module';



@NgModule({
  declarations: [
    AdminDashboardComponent
  ],
  imports: [
    CommonModule,
    HomepageModule
   

  ],
  exports:[
    AdminDashboardComponent
  ]
})
export class AdminModule { }
