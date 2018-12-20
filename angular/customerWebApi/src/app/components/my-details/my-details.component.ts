import { Component, OnInit } from '@angular/core';
import { CustomerSpaService } from '../../services/customer-spa.service';
import { Customer } from '../../common/./Customer';

@Component({
  selector: 'app-my-details',
  templateUrl: './my-details.component.html',
  styleUrls: ['./my-details.component.css']
})
export class MyDetailsComponent implements OnInit {

  customerToGet: Customer = new Customer(0, "", "");

  constructor(private _customerSpa: CustomerSpaService) {
    this.customerToGet = this._customerSpa.customerToGet;
  }

  ngOnInit() {
    this._customerSpa.ajaxGetMyDetails();
  }
}
