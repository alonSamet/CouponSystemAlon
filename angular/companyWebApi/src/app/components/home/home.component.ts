import { Component, OnInit } from '@angular/core';
import { Company } from '../../common/Company'
import { CompanySpaService } from '../../services/company-spa.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  companyToGet: Company = new Company(0, "", "", "");

  constructor(private _companySpa: CompanySpaService) {
    this.companyToGet = this._companySpa.companyToGet;
   }

  ngOnInit() {
    this._companySpa.ajaxGetMyCompanyDetails();
  }

}
