import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {

 /* Properties: Array<any> = [{
    "id": 1,
    "name": "test1",
    "age": "11",
    "gender": "male",
    "email": "test1@gmail.com",
    "phoneNo": "9191919191"
  },
  {
    "id": 2,
    "name": "test2",
    "age": "12",
    "gender": "male",
    "email": "test2@gmail.com",
    "phoneNo": "9292929292"
  },
  {
    "id": 3,
    "name": "test3",
    "age": "13",
    "gender": "male",
    "email": "test3@gmail.com",
    "phoneNo": "9393939393"
  }]*/

Properties: Array<any> = [];

  constructor() {
this.Properties=JSON.parse(localStorage.getItem('emp'));

  }

  ngOnInit() {
  }

}
