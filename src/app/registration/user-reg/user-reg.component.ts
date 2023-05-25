import { Component } from '@angular/core';
import { RegisteredUserService } from 'src/app/UserService/registered-user.service';
import { UserInfo } from 'src/classes/UserInfo';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css']
})
export class UserRegComponent {

  constructor(public registerArr:RegisteredUserService)
  {
  }
 
 
  usrObj:UserInfo=new UserInfo();

  udisable=false;

  sdisable=false;
  customer(){

    this.usrObj.isAdmin=false;
  
    this.udisable=true;

    this.sdisable=false;
  }


  shop(){

    this.usrObj.isAdmin=true;
    this.sdisable=true;
    this.udisable=false;

  }

  submit(){
    
   
    this.registerArr.setData(this.usrObj);
    this.usrObj=new UserInfo();

    console.log(this.usrObj.firstName);

    console.log(this.registerArr.getData());

    
   

  }

 






}
