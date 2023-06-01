import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './registration/login/login.component';
import { UserRegComponent } from './registration/user-reg/user-reg.component';
import { ViewProfileComponent } from './profile/view-profile/view-profile.component';
import { ContentComponent } from './homepage/content/content.component';
import { AuthenticateUserGuard } from './guard/authenticate-user.guard';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

const routes: Routes = [
  {
    path:'',
    component:ContentComponent
  },

  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'user-reg',
    component:UserRegComponent
  },
  {
    path:'login/view-profile',
    component:ViewProfileComponent,
    canActivate:[AuthenticateUserGuard]

  },
  {
    path:'content',
    component:ContentComponent
  },
  {
    path:'login/content',
    component:ContentComponent,
    canActivate:[AuthenticateUserGuard]
    
  },
  
  {

    path:'dashboard',
    component:AdminDashboardComponent,
    canActivate:[AuthenticateUserGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
