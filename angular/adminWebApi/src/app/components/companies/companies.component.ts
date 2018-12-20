import { Component, OnInit } from '@angular/core';
import { Company } from '../../common/./Company';
import { AdminSpaService } from '../../services/admin-spa.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.css']
})
export class CompaniesComponent implements OnInit {

  companiesList: Company[];
  newCompany: Company = new Company(0, "", "", "");
  updatedCompany: Company = new Company(0, "", "", "");
  companyToGet: Company = new Company(0, "", "", "");

  //ngIf boolean variables:
  showStartImage = false;
  showUpdateBool = false;
  showGetButtons = true;
  showGetInputByIdBool = false;
  showGetInputByNameBool = false;
  showGetDetails = false;
  showTable = false;
  showDataOnTable = true;
  showInputsOnTable = false;
  bool = true;

  constructor(private _adminSpa: AdminSpaService) {
    this.companiesList = this._adminSpa.companiesList;
    this.companyToGet = this._adminSpa.companyToGet; //now those two companies points on the same object in memory
  }

  ngOnInit() {
    this._adminSpa.ajaxGetAllCompanies();
  }

  createCompany(index: number) {
    // sweet alert
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    })
    swalWithBootstrapButtons({
      title: 'Create New Company?',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // call ajax method in service
        this._adminSpa.ajaxCreateCompany(this.newCompany);
        swalWithBootstrapButtons('The new company "' + this.newCompany.name + '" was created !')
      } else if (
        result.dismiss === swal.DismissReason.cancel
      ) { }
    })
  }

  removeCompany(index: number) {
    // sweet alert
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    })
    swalWithBootstrapButtons({
      title: 'Are you sure you want to delete the company "' + this.companiesList[index].name + '" ?',
      text: "You won't be able to revert this !",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete this company',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // call ajax method in service
        this._adminSpa.ajaxRemoveCompany(this.companiesList[index]);
        swalWithBootstrapButtons('The company "' + this.companiesList[index].name + '"  was deleted!')
      } else if (result.dismiss === swal.DismissReason.cancel) { }
    })
  }

  updateCompany() { // admin cannot update company name
    // sweet alert
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    })
    swalWithBootstrapButtons({
      title: 'Update details of the company "' + this.updatedCompany.name + '" ?',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // call ajax method in service
        this._adminSpa.ajaxUpdateCompany(this.updatedCompany);
        swalWithBootstrapButtons('The company "' + this.updatedCompany.name + '" Was Updated!')
      } else if (result.dismiss === swal.DismissReason.cancel) { }
    })
    this.showDataOnTable = true;
    this.showInputsOnTable = false;
  }

  getCompanyById() {
    this._adminSpa.ajaxGetCompanyById(this.companyToGet.id)
  }

  getCompanyByName() {
    this._adminSpa.ajaxGetCompanyByName(this.companyToGet.name);
  }

  // ****************************************************
  // ************* methods for ngIf tags: ***************
  // ****************************************************

  showUpdateCompany(index) { // admin cannot update company name
    this.updatedCompany.name = this.companiesList[index].name;
    this.updatedCompany.password = ""; // Resets the displayed password when pressing the showUpdate button, so the user can insert its input
    this.updatedCompany.email = ""; // Resets the displayed email when pressing the showUpdate button, so the user can insert its input
    // this.showDataOnTable = false;
    // this.showInputsOnTable = true;
    this.showUpdateBool = true;
  }

  showGetInputById() {
    this.showGetButtons = false;
    this.showGetInputByIdBool = true;
    this.showGetDetails = true;
  }

  showGetInputByName() {
    this.showGetButtons = false;
    this.showGetInputByNameBool = true;
    this.showGetDetails = true;
  }

  backToGetButtons() {
    this._adminSpa.showSmallTable = false;
    this.showGetInputByNameBool = false;
    this.showGetInputByIdBool = false;
    this.showGetDetails = false;
    this.showGetButtons = true;
    this.showTable = false;
  }
}
