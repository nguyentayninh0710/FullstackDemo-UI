import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  username = '';
  password = '';
  errorMesage = 'Invalid Credentials';
  invalidLogin = false;



  constructor(private router: Router, private authenticationService : AuthenticationService) {

  }

  ngOnInit() {

  }


  handleLogin() {
    if (this.authenticationService.authenticate(this.username, this.password)){
      this.invalidLogin = true;
      this.router.navigate(['welcome', this.username]);
    }
    else this.invalidLogin = false;
  }
}
