import { Injectable, OnInit } from '@angular/core';
import { RegisteredUserService } from './UserService/registered-user.service';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private register:RegisteredUserService,private serv:LoginService) { 


  }



}
