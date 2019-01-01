import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

/*
This component generates the landing page of the admin SPA. 
It contains a basic welcome message and enables the admin to Access all other components
*/

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
