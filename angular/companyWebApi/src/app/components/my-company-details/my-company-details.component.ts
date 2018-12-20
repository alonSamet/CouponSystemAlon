import { Component, OnInit } from '@angular/core';
import { CompanySpaService } from '../../services/company-spa.service';
import { Company } from '../../common/./Company';

@Component({
  selector: 'app-my-company-details',
  templateUrl: './my-company-details.component.html',
  styleUrls: ['./my-company-details.component.css']
})
export class MyCompanyDetailsComponent implements OnInit {

  companyToGet: Company = new Company(0, "", "", "");

  constructor(private _companySpa: CompanySpaService) {
    this.companyToGet = this._companySpa.companyToGet;
   }

  ngOnInit() {
    this._companySpa.ajaxGetMyCompanyDetails();
  }


}
