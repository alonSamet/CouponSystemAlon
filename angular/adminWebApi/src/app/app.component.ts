import { Component } from '@angular/core';
import { AdminSpaService } from './services/admin-spa.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// This component generates the nav bar that allows the access to the other admin SPA components: 
// Home, Companies, Customers, About & Logout. In addition, it generates the footer of the system, 
// which contains various ways (Gmail, LinkedIn & Facebook) to contact the system author.

export class AppComponent{

  baseURL: string = "http://localhost:8080/";
  request: Request;
  response: Response;

  constructor(private _adminSpa: AdminSpaService) {
  }

  logout() {

    // Sends the user to the login page
    window.location.href = this.baseURL;

    // Invalidates the user session
    this._adminSpa.ajaxLogOut(this.request, this.response);

  }
}
