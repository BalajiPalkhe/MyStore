import { Component, OnInit } from '@angular/core';
import { RegisteredUserService } from 'src/app/UserService/registered-user.service';
import { AppComponent } from 'src/app/app.component';
import { DataService } from 'src/app/data.service';
import { LoginService } from 'src/app/login.service';
import { LoginComponent } from 'src/app/registration/login/login.component';
import { Address } from 'src/app/utility/Address';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  constructor(public userCom:LoginService, public app:AppComponent,public reg:RegisteredUserService,private data:DataService){}
  ngOnInit(): void {
    this.getLoggedInUserInfo(this.userCom.matchedUserIndex);
     
  }

  loggedUserInfo:any;
  
  createAcc(){
    this.app.userReg=1;
  }

  getLoggedInUserInfo(id:any){
    this.reg.getLoggedInUserInfo(id).subscribe(data => {this.loggedUserInfo=data});

  }

}
