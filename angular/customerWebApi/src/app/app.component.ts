import { Component } from '@angular/core';
import {CustomerSpaService } from './services/customer-spa.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'customerWebApi';
  
  request: Request;
  response: Response;

  constructor(private _customerSpa: CustomerSpaService) {
  }

  logout() {
    // Moving to login page
    window.location.href = 'http://localhost:8080/';
    // Invalidates the user session
    this._customerSpa.ajaxLogOut(this.request, this.response);
  }

}
