import { Component, OnInit } from '@angular/core';
import { Company } from '../../common/Company'
import { CompanySpaService } from '../../services/company-spa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

/*
This component generates the landing page of the company SPA. 
It contains a basic welcome message with the logged-in company name,
and enables the company to Access all other components
*/

export class HomeComponent implements OnInit {

  companyToGet: Company = new Company(0, "", "", "");

  constructor(private _companySpa: CompanySpaService) {
    this.companyToGet = this._companySpa.companyToGet;
   }

  ngOnInit() {
    this._companySpa.ajaxGetMyCompanyDetails();
  }

}
