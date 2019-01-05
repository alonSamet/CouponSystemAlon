import { Component } from '@angular/core';
import { CompanySpaService } from './services/company-spa.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// This component generates the nav bar that allows the access to the other company SPA components: 
// Home, My Company Coupons, My Company Details, About & Logout. In addition, it generates the footer of the system, 
// which contains various ways (Gmail, LinkedIn & Facebook) to contact the system author.

export class AppComponent {

  baseURL: string = "http://localhost:8080/";
  request: Request;
  response: Response;

  constructor(private _companySpa: CompanySpaService) {
  }

  logout() {
    // Moving to login page
    window.location.href = this.baseURL;
    // Invalidates the user session
    this._companySpa.ajaxLogOut(this.request, this.response);
  }
}
