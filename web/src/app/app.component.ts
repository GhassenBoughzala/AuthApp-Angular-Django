import { Component, OnInit, NgModule } from '@angular/core';
import { UserService } from './user.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers : [UserService]
})
export class AppComponent implements OnInit{
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
        
        alert('Welcome to' + this.signup.username)
        console.log(this.signup.username)
      },
     error => console.log('error', error)      
    )
  }
}
