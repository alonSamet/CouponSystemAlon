import { Component } from '@angular/core';
import { CompanySpaService } from './services/company-spa.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'companyWebApi';

  request: Request;
  response: Response;

  constructor(private _companySpa: CompanySpaService) {
  }

  logout() {
    // Moving to login page
    window.location.href = 'http://localhost:8080/';
    // Invalidates the user session
    this._companySpa.ajaxLogOut(this.request, this.response);
  }
}
