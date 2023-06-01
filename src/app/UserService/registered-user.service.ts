import { Injectable } from '@angular/core';
import { UserInfo } from 'src/classes/UserInfo';

@Injectable({
  providedIn: 'root',
})
export class RegisteredUserService {
  constructor() {}


  regUser: UserInfo[] = [
    {
      firstName: 'a',
      lastName: 'a',
      email:'a',
      userName: 'a',
      password: 'a',
      isAdmin:false
    },
    {
      firstName: 'b',
      lastName: 'b',
      email:'b',
      userName: 'b',
      password: 'b',
      isAdmin:true
    }
  ];

  public setData(user:UserInfo)
  {
    this.regUser.push(user);
  }
  public getData()
  {
    return this.regUser;
  }
}
