import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  authenticate(username: any, passwords: any){
    console.log(this.isUserLoggedIn());
    if(username === 'nguyenhuynh' && passwords === '123456'){
      sessionStorage.setItem('authenticaterUser', username);
      return true;
    }
    else return false;
  }

  isUserLoggedIn(){
    let user = sessionStorage.getItem('authenticaterUser');
    return !(user === null)
  }
  logout(){
    sessionStorage.removeItem('authenticaterUser');
  }
}
