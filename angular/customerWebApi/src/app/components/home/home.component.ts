import { Component, OnInit } from '@angular/core';
import { Customer } from '../../common/Customer';
import { CustomerSpaService } from '../../services/customer-spa.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  customerToGet: Customer = new Customer(0,"","");

  constructor(private _customerSpa: CustomerSpaService) {
    this.customerToGet = this._customerSpa.customerToGet;
   }

  ngOnInit() {
    this._customerSpa.ajaxGetMyDetails();
  }


}
