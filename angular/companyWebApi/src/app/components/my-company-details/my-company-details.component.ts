import { Component, OnInit } from '@angular/core';
import { CompanySpaService } from '../../services/company-spa.service';
import { Company } from '../../common/./Company';

@Component({
  selector: 'app-my-company-details',
  templateUrl: './my-company-details.component.html',
  styleUrls: ['./my-company-details.component.css']
})

// This component shows the details (id, name, password & email) of the logged-in company 

export class MyCompanyDetailsComponent implements OnInit {

  companyToGet: Company = new Company(0, "", "", "");

  constructor(private _companySpa: CompanySpaService) {
    this.companyToGet = this._companySpa.companyToGet;
   }

// Gets the logged-in company details from the company service (which fires AJAX request to the server)
  ngOnInit() {
    this._companySpa.ajaxGetMyCompanyDetails();
  }


}
