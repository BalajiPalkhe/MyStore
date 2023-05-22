import { Component, Input, Output } from '@angular/core';
import { RegisteredUserService } from 'src/app/UserService/registered-user.service';
import { AppComponent } from 'src/app/app.component';
import { HeaderComponent } from 'src/app/homepage/header/header.component';
import { LoginService } from 'src/app/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


 


  
  
  
  constructor(public serv:LoginService,private regisered:RegisteredUserService, private appCom:AppComponent ){
    
    
    }
    
    
    test=0;
    log(mail:any,pass:any){
      let UserArr=this.regisered.getData();
     for(let i=0; i<UserArr.length; i++)
     {
        let temp=UserArr[i];
        if(mail==temp.userName && pass==temp.password)
        {
        this.test=1;
        this.serv.whatToShow=false;
        this.serv.logoutVal=false;
          this.appCom.userReg=3;
          this.serv.editProfileval=true;
          this.serv.firstName=temp.firstName;
          this.serv.lastname=temp.lastName;
        }
     }


    

  }




}
