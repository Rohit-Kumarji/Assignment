import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertifyService } from '../services/alertify.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(private alertify:AlertifyService,private router:Router) { }

  ngOnInit() {
  }

  loggedin()
  {
    return localStorage.getItem('token');
  }

  onLogout()
  {
    localStorage.removeItem('token');
    this.alertify.success("User logout successfully.");
    this.router.navigate(['/']);
  }

}
