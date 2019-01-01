import { Component } from '@angular/core';
import {CustomerSpaService } from './services/customer-spa.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// This component generates the nav bar that allows the access to the other customer SPA components: 
// Home, all Coupons, my Purchased Coupons, My Details, About & Logout. In addition, it generates the footer of the system, 
// which contains various ways (Gmail, LinkedIn & Facebook) to contact the system author.

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
