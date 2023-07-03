import { Component } from '@angular/core';
import { RegisteredUserService } from 'src/app/UserService/registered-user.service';
import { CustomerRegistration } from 'src/app/utility/CustomerRegistration';
import { UserInfo } from 'src/classes/UserInfo';

@Component({
  selector: 'app-user-reg',
  templateUrl: './user-reg.component.html',
  styleUrls: ['./user-reg.component.css'],
})
export class UserRegComponent {
  constructor(public registerArr: RegisteredUserService) {}

  reg:CustomerRegistration=new CustomerRegistration();

  isShopOwner: any;
  select(data: any) {
    this.reg.isShopOwner = data.target.value;
  }

  submit() {

    this.registerArr.addCustomer(this.reg).subscribe(data=>{
      console.log(data);
      this.reg=new CustomerRegistration();
    });

  }
}
