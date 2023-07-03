import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RegisteredUserService } from 'src/app/UserService/registered-user.service';
import { AppComponent } from 'src/app/app.component';
import { DataService } from 'src/app/data.service';
import { HeaderComponent } from 'src/app/homepage/header/header.component';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    public serv: LoginService,
    private regisered: RegisteredUserService,
    private appCom: AppComponent,
    private router: Router,
    private userDataService:RegisteredUserService
  ) { }

  private userData:any;
  ngOnInit(): void {
    this.appCom.headfoot = true;
    this.userData=this.userDataService.getValidateUser().subscribe(data=>{this.userData=data});
  }
  
  

  test = 0;
  log(mail: any, pass: any) {
    //let UserArr = this.regisered.getData();
    let u=this.userData;
    for (let i = 0; i < u.length; i++) {
      let temp = u[i];
      if (mail == temp.username && pass == temp.password) {
        if (temp.isShopOwner==="Shop Owner") {
          this.serv.loggeedin = true;
          this.appCom.headfoot = false;

          this.router.navigate(['dashboard']);
        } else if(temp.isShopOwner==="Customer") {
          this.test = 1;
          this.serv.whatToShow = false;
          this.serv.logoutVal = false;
          this.appCom.userReg = 3;
          this.serv.editProfileval = true;
          this.serv.firstName = temp.first_name;
          this.serv.lastname = temp.last_name;
          this.serv.matchedUserIndex = temp.customerId;
          this.appCom.viewProfile = 1;
          this.serv.loggeedin = true;
          // this.router.navigate(['/content']);
          this.serv.home = 'login/content';
        }
        break;
      } else {
        this.test = 2;
      }
    }
  }


}
