import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers : [UserService]
})
export class SignupComponent implements OnInit {

  title = 'web';
  signup;

  constructor( private userService:UserService) { }

  ngOnInit(){
    this.signup = {
      username: '',
      email: '',
      password: '',
      
    }
  }

  signupUser(){
    this.userService.register(this.signup).subscribe(
      response => {
        
        alert('register Successfully ! Welcome : ' + this.signup.username)
        console.log(this.signup.username)
      },
     error => console.log('error', error)      
    )
  }
}
