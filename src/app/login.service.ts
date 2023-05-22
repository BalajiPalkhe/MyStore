import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  whatToShow=true;
  logoutVal=true;
  editProfileval=false;
  firstName:any;
  lastname:any;
}
