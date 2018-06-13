import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  loginShowed = false;

  constructor() { }

  ngOnInit() {
  }

  login() {
    this.loginShowed = !this.loginShowed;
  }

}
