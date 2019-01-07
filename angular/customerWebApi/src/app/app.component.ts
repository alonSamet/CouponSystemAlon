import { Component } from '@angular/core';
import {CustomerSpaService } from './services/customer-spa.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

/*
This component generates the nav bar that allows the access to the other customer SPA components: 
Home, all Coupons, my Purchased Coupons, My Details, About & Logout. In addition, it generates the footer of the system, 
which contains various ways (Gmail, LinkedIn & Facebook) to contact the system author.
*/

export class AppComponent {
  
  baseURL: string = "http://localhost:8080/";

  request: Request;

  constructor(private _customerSpa: CustomerSpaService) {
  }

  logout() {
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    })
    // sweet alert:
    swalWithBootstrapButtons({
      // sweet alert validation message:  
      title: 'Are you sure you want to log out of the system?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, log out',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // Invalidates the user session:
        this._customerSpa.ajaxLogOut(this.request); 
        // Sends the user to the login page:
        window.location.href = this.baseURL;
      } else if (result.dismiss === swal.DismissReason.cancel) { }
    })
  }

}
