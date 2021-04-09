import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { EmpDataComponent } from './emp-data/emp-data.component';
import { EmpListComponent } from './emp-list/emp-list.component';

@NgModule({
  declarations: [			
    AppComponent,
      NavBarComponent,
      EmpDataComponent,
      EmpListComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
