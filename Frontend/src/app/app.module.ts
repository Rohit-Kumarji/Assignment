import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EmpListComponent } from './emp-list/emp-list.component';
import { UserLoginComponent } from './Users/user-login/user-login.component';
import { AlertifyService } from './services/alertify.service';
import { AuthService } from './services/auth.service';


const appRoutes: Routes = [
  {path:'', component: UserLoginComponent },
  {path:'data', component: EmpListComponent }

];

@NgModule({
  declarations: [
    AppComponent,
      NavBarComponent,
      EmpListComponent,
      UserLoginComponent
   ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AlertifyService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
