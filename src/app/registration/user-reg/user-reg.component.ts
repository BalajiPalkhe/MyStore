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
  firstname:any;
  lastname:any;
  username:any;
  password:any;
  state:any;
  zip:any;

  submit(f:any,l:any,u:any,p:any,s:any,z:any){
    let usrObj:UserInfo=new UserInfo();
    usrObj.firstName=f;
    usrObj.lastName=l;
    usrObj.userName=u;
    usrObj.password=p;
    usrObj.state=s;
    usrObj.zipcode=z;
    this.registerArr.setData(usrObj);
    console.log(this.registerArr.getData());
    usrObj=new UserInfo();
  }

}
