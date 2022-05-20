import { Component, OnInit } from '@angular/core';
import { Users } from 'src/models/users';
import { UserService } from 'src/services/users.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

name:String='';
password:String='';
user_name:String='';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }
  alert()
  {
    // const user = new Users()
    // user.name = this.name;
    // user.password = this.password;
    // user.user_name = this.user_name;
    // this.userService.registerUsers(user).subscribe((resp:any)=>{
 
    alert(" Registered Successfully !!")
  // })
}
}
