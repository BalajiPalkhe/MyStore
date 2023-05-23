import { Component } from '@angular/core';
import { RegisteredUserService } from 'src/app/UserService/registered-user.service';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/app/login.service';
import { LoginComponent } from 'src/app/registration/login/login.component';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent {

  constructor(public userCom:LoginService, public app:AppComponent,public reg:RegisteredUserService){}

  createAcc(){
    this.app.userReg=1;
  }

}
