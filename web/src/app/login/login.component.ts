import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  login;
  constructor( private userService:UserService) { }

 
  ngOnInit(){
    this.login = {
      username: '',
      password: '',  
    }
  }

  LoginUser(){
      this.userService.login(this.login).subscribe(
        response => {
          
          alert('Logged in as User : ' + this.login.username)
          console.log(this.login.username)
        },
       error => console.log('error', error)      
      )
    
  }

}
