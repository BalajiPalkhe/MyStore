import { Component } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { LoginService } from 'src/app/login.service';
import { LoginComponent } from 'src/app/registration/login/login.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  t=0;

  

  constructor(public app:AppComponent,public serv:LoginService){

  }





  createAccount(val:any){

    this.app.userReg=val;
    

  }

}
