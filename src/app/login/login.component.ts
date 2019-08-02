import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = '';
  password = '';
  users = [
    {username: 'Tariq', password: '123'},
    {username: 'Tariq1', password: '123'},
    {username: 'Tariq2', password: '123'}
  ]

  constructor(private router:Router) { }

  ngOnInit() {
  }

  loginFunction(){
    var loggedIn = false;
    for(let user of this.users){
      if(user.username.toLowerCase() == this.username.toLowerCase() && user.password == this.password){
        loggedIn = true;
      }
    }
    if(loggedIn){
      this.router.navigateByUrl("/account"); 
    }
    else{
      alert('log in failed')
    }
  }
}
