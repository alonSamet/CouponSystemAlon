import { Component, OnInit } from '@angular/core';
import { Customer } from '../../common/Customer';
import { CustomerSpaService } from '../../services/customer-spa.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

// This component generates the landing page of the customer SPA. 
// It contains a basic welcome message with the logged-in customer name,
// and enables the customer to Access all other components

export class HomeComponent implements OnInit {

  customerToGet: Customer = new Customer(0,"","");

  constructor(private _customerSpa: CustomerSpaService) {
    this.customerToGet = this._customerSpa.customerToGet;
   }

  ngOnInit() {
    this._customerSpa.ajaxGetMyDetails();
  }


}
