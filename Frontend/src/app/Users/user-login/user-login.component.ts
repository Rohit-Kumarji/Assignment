import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertifyService } from 'src/app/services/alertify.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  constructor(private authService:AuthService, private alertify : AlertifyService, private router:Router) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm) {
    // console.log(loginForm.value);
    //localStorage.setItem("Users",JSON.stringify(loginForm.value));
    const user=this.authService.authUser(loginForm.value);
    if(user)
    {
      localStorage.setItem('token',user.userName);
      this.alertify.success("User login successfully.");
      this.router.navigate(['/data']);
    }
    else
    {
      this.alertify.error("Name or Password is wrong.");
    }
    // const token = this.authService.authUser(loginForm.value);

   }

}
