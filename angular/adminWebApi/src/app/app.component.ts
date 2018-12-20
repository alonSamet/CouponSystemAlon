import { Component } from '@angular/core';
import { AdminSpaService } from './services/admin-spa.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent{

  request: Request;
  response: Response;

  constructor(private _adminSpa: AdminSpaService) {
  }

  logout() {
    // Moving to login page
    window.location.href = 'http://localhost:8080/';
    // Invalidates the user session
    this._adminSpa.ajaxLogOut(this.request, this.response);
  }
}
