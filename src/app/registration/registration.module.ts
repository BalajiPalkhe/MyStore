import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegComponent } from './user-reg/user-reg.component';
import { ShopRegComponent } from './shop-reg/shop-reg.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './login/change-password/change-password.component';
import { ForgetPasswordComponent } from './login/forget-password/forget-password.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    UserRegComponent,
    ShopRegComponent,
    LoginComponent,
    ChangePasswordComponent,
    ForgetPasswordComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[

    UserRegComponent,
    ShopRegComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ChangePasswordComponent

  ]
})
export class RegistrationModule { }
