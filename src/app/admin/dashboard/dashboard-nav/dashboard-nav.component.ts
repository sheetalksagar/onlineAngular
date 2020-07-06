import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-nav',
  templateUrl:'dashboard-nav.component.html' ,
  styles: [
  ]
})
export class DashboardNavComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  superlogout(){
    localStorage.removeItem('username');
  }

  issuperLogin() {
    //localStorage.removeItem('username');
    if (localStorage.getItem('username') != null) return true;
    return false;
  }
}
