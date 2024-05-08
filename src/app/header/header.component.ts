import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {}

  login(){
    this.router.navigate(["/login"])
  }

  dashboard(){
    this.router.navigate(["/dashboard"])
  }

  // contactus(){
  //  this.router.navigate(["/contact-us"])
  // }


}
