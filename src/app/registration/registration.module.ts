import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRegComponent } from './user-reg/user-reg.component';
import { ShopRegComponent } from './shop-reg/shop-reg.component';
import { LoginComponent } from './login/login.component';
import { ChangePasswordComponent } from './Login/change-password/change-password.component';
import { ForgetPasswordComponent } from './Login/forget-password/forget-password.component';



@NgModule({
  declarations: [
    UserRegComponent,
    ShopRegComponent,
    LoginComponent,
    ChangePasswordComponent,
    ForgetPasswordComponent
  ],
  imports: [
    CommonModule
  ]
})
export class RegistrationModule { }
