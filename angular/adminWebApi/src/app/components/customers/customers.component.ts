import { Component, OnInit } from '@angular/core';
import { Customer } from '../../common/Customer';
import { AdminSpaService } from '../../services/admin-spa.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

/*
This component displays all the customers in the system and enables the admin to create new customer, 
update Existing customer & show details of requested customer (by its id/name) 
*/

export class CustomersComponent implements OnInit {

  swalWithBootstrapButtons = swal.mixin({
    confirmButtonClass: 'btn btn-success',
    cancelButtonClass: 'btn btn-danger',
    buttonsStyling: true,
  })

  customersList: Customer[];
  newCustomer: Customer = new Customer(0, "", "");
  updatedCustomer: Customer = new Customer(0, "", "");
  customerToGet: Customer = new Customer(0, "", "");

  //ngIf boolean variables:
  showStartImage = false;
  showUpdateBool = false;
  showGetButtons = true;
  showGetInputByIdBool = false;
  showGetInputByNameBool = false;
  showGetDetails = false;
  showTable = false;


  constructor(private _adminSpa: AdminSpaService) {
    this.customersList = this._adminSpa.customersList;
    this.customerToGet = this._adminSpa.customerToGet; //now those two customers points on the same object in memory
  }
  ngOnInit() {
    this._adminSpa.ajaxGetAllCustomers();
  }

  createCustomer() {
    // sweet alert
    this.swalWithBootstrapButtons({
      title: 'Create New Customer?',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // call ajax method in service
        this._adminSpa.ajaxCreateCustomer(this.newCustomer);
        this.swalWithBootstrapButtons('The new customer "' + this.newCustomer.name + '" was created !')
      } else if (
        result.dismiss === swal.DismissReason.cancel
      ) { }
    })
  }

  removeCustomer(index: number) {
    // sweet alert
    this.swalWithBootstrapButtons({
      title: 'Are you sure you want to delete the customer "' + this.customersList[index].name + '" ?',
      text: "You won't be able to revert this !",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete this customer',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // call ajax method in service
        this._adminSpa.ajaxRemoveCustomer(this.customersList[index]);
        this.swalWithBootstrapButtons('The customer "' + this.customersList[index].name + '"  was deleted!')
      } else if (result.dismiss === swal.DismissReason.cancel) { }
    })
  }

  updateCustomer() { // admin cannot update customer name 
    // sweet alert
    this.swalWithBootstrapButtons({
      title: 'Update details of the customer "' + this.updatedCustomer.name + '" ?',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // call ajax method in service
        this._adminSpa.ajaxUpdateCustomer(this.updatedCustomer);
        this.swalWithBootstrapButtons('The customer "' + this.updatedCustomer.name + '" Was Updated!')
      } else if (
        result.dismiss === swal.DismissReason.cancel
      ) { }
    })
  }

  getCustomerById() {
    this._adminSpa.ajaxGetCustomerById(this.customerToGet.id);
  }
  getCustomerByName() {
    this._adminSpa.ajaxGetCustomerByName(this.customerToGet.name);
  }

  // ****************************************************
  // ************* methods for ngIf tags: ***************
  // ****************************************************

  showUpdateCustomer(i) { // admin cannot update customer name 
    this.showUpdateBool = true;
    this.updatedCustomer.name = this.customersList[i].name;
    this.updatedCustomer.password = ""; // Resets the displayed password when pressing the showUpdate button, so the user can insert its input
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
