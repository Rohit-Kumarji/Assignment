import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

authUser( user: any)
{
  let UserArray = [];
  if(localStorage.getItem('Users'))
  {
    UserArray= JSON.parse(localStorage.getItem('Users'));
  }//UserArray.find(p => p.userName === user.userName && p.password === user.password)
  if( JSON.stringify(user)==JSON.stringify(UserArray))
  return user;
  return null;
}

}
