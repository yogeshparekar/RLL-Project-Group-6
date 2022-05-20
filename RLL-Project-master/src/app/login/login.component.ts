import { Component, OnInit } from '@angular/core';
import { Users } from 'src/models/users';
import { UserService } from 'src/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 password:String='';
user_name:String='';
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  alert()
  {
    // const user = new Users()
    // user.password = this.password;
    // user.user_name = this.user_name;
    // this.userService.registerUsers(user).subscribe((resp:any)=>{
 
    alert(" Login Successfully !!")
  // })
  }
}
