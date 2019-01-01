import { Component, OnInit } from '@angular/core';
import { CustomerSpaService } from '../../services/customer-spa.service';
import { Customer } from '../../common/./Customer';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})

// This component shows the details (id, name & password) of the logged-in customer 

export class MyDetailsComponent implements OnInit {

  customerToGet: Customer = new Customer(0, "", "");

  constructor(private _customerSpa: CustomerSpaService) {
    this.customerToGet = this._customerSpa.customerToGet;
  }

  // Gets the logged-in customer details from the customer service (which fires AJAX request to the server)
  ngOnInit() {
    this._customerSpa.ajaxGetMyDetails();
  }
}
