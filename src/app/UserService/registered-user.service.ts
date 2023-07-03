import { Injectable } from '@angular/core';
import { UserInfo } from 'src/classes/UserInfo';
import{HttpClient} from '@angular/common/http'
import { ValidateUser } from '../utility/ValidateUser';
import { Address } from '../utility/Address';
import { Customer } from '../utility/Customer';
import { CustomerResponse } from '../utility/CustomerResponse';
import { CustomerRegistration } from '../utility/CustomerRegistration';

@Injectable({
  providedIn: 'root',
})
export class RegisteredUserService {
  constructor(private http:HttpClient) {}

  addCustomer(data:any){
    return this.http.post<CustomerRegistration>('http://localhost:8080/addCustomer',data);
  }

  getValidateUser(){
    return this.http.get<ValidateUser>('http://localhost:8080/validateUser');
  }

  getLoggedInUserInfo(id:any){
    return this.http.get<CustomerResponse>('http://localhost:8080/getCustomer/'+id);
  }

  getLoggedInAddress(id:any){

    return this.http.get("http://localhost:8080/getAddress/"+id);

  }

  


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
