import { Injectable } from '@angular/core';
import { Company } from '../common/./Company';
import { Customer } from '../common/./Customer';
import { Http, RequestOptions } from '@angular/http';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

// This class is the service of the admin SPA. 
// It conatains methods that fires AJAX requests to the server,
// in order to create, update and show companies/customers,
// and logging out of the system. These methods also handles the 
// server success/error responses.

export class AdminSpaService {

  baseURL: string = "http://localhost:8080/";

  companiesList: Company[] = new Array<Company>();
  companyToGet: Company = new Company(0, "", "", "");
  customersList: Customer[] = new Array<Customer>();
  customerToGet: Customer = new Customer(0, "", "");;
  showSmallTable = false;
  request: Request;

  swalWithBootstrapButtons = swal.mixin({
    confirmButtonClass: 'btn btn-success',
    cancelButtonClass: 'btn btn-danger',
    buttonsStyling: true,
  })

  constructor(private _http: Http) {
  }

  //***********************************
  //********* Company methods *********
  //***********************************


  ajaxCreateCompany(c: Company) {
    this._http.post(this.baseURL + "admin/createcompany", c)
      .subscribe(
        (resp) => {
          this.ajaxGetAllCompanies();
        },
        (err) => {
          if (err.status == 403) {
            window.location.href = this.baseURL;
          } else {
            this.swalWithBootstrapButtons(err._body)
          }
        }
      )
  }
  ajaxRemoveCompany(c: Company) {
    this._http.delete(this.baseURL + "admin/removecompany",
      new RequestOptions({ body: c }))
      .subscribe(
        (resp) => {
          this.ajaxGetAllCompanies();
        },
        (err) => {
          if (err.status == 403) {
            window.location.href = this.baseURL;
          } else {
            this.swalWithBootstrapButtons(err._body)
          }
        }
      )
  }

  ajaxUpdateCompany(c: Company) {
    this._http.put(this.baseURL + "admin/updatecompany", c)
      .subscribe(
        (resp) => {
          this.ajaxGetAllCompanies();
        },
        (err) => {
          if (err.status == 403) {
            window.location.href = this.baseURL;
          } else {
            this.swalWithBootstrapButtons(err._body)
          }
        }
      )
  }

  ajaxGetAllCompanies() {
    this._http.get(this.baseURL + "admin/getallcompanies").subscribe(
      (resp) => {
        while (this.companiesList.length > 0)
          this.companiesList.pop();
        let tempList = resp.json();
        for (let item of tempList) {
          this.companiesList.push(item);
        }
      },
      (err) => {
        if (err.status == 403) {
          window.location.href = this.baseURL;
        } else {
          this.swalWithBootstrapButtons(err._body)
        }
      }
    )
  }

  ajaxGetCompanyById(companyId: number) {
    this._http.get(this.baseURL + "admin/getcompanybyid/" + companyId).subscribe(
      (resp) => {
        this.showSmallTable = true;
        let tempCompany = resp.json();
        this.companyToGet.setId(tempCompany.id);
        this.companyToGet.setName(tempCompany.name);
        this.companyToGet.setPassword(tempCompany.password);
        this.companyToGet.setEmail(tempCompany.email);
      },
      (err) => {
        if (err.status == 403) {
          window.location.href = this.baseURL;
        } else {
          this.showSmallTable = false;
          this.swalWithBootstrapButtons(err._body)
        }
      }
    )
  }

  ajaxGetCompanyByName(companyName: string) {
    this._http.get(this.baseURL + "admin/getcompanybyname/" + companyName).subscribe(
      (resp) => {
        this.showSmallTable = true;
        let tempCompany = resp.json();
        this.companyToGet.setId(tempCompany.id);
        this.companyToGet.setName(tempCompany.name);
        this.companyToGet.setPassword(tempCompany.password);
        this.companyToGet.setEmail(tempCompany.email);
      },
      (err) => {
        if (err.status == 403) {
          window.location.href = this.baseURL;
        } else {
          this.showSmallTable = false;
          this.swalWithBootstrapButtons(err._body)
        }
      }
    )
  }



  //***********************************
  //********* Customer methods *********
  //***********************************

  ajaxCreateCustomer(c: Customer) {
    this._http.post(this.baseURL + "admin/createcustomer", c)
      .subscribe(
        (resp) => {
          this.ajaxGetAllCustomers();
        },
        (err) => {
          if (err.status == 403) {
            window.location.href = this.baseURL;
          } else {
            this.swalWithBootstrapButtons(err._body)
          }
        }
      )
  }

  ajaxRemoveCustomer(c: Customer) {
    this._http.delete(this.baseURL + "admin/removecustomer",
      new RequestOptions({ body: c }))
      .subscribe(
        (resp) => {
          this.ajaxGetAllCustomers();
        },
        (err) => {
          if (err.status == 403) {
            window.location.href = this.baseURL;
          } else {
            this.swalWithBootstrapButtons(err._body)
          }
        }
      )
  }

  ajaxUpdateCustomer(c: Customer) {
    this._http.put(this.baseURL + "admin/updatecustomer", c)
      .subscribe(
        (resp) => {
          this.ajaxGetAllCustomers();
        },
        (err) => {
          if (err.status == 403) {
            window.location.href = this.baseURL;
          } else {
            this.swalWithBootstrapButtons(err._body)
          }
        }
      )
  }

  ajaxGetAllCustomers() {
    this._http.get(this.baseURL + "admin/getallcustomers")
      .subscribe(
        (resp) => {
          let tempList = resp.json();
          while (this.customersList.length > 0) {
            this.customersList.pop();
          }
          for (let item of tempList) {
            this.customersList.push(item);
          }
        },
        (err) => {
          if (err.status == 403) {
            window.location.href = this.baseURL;
          } else {
            this.swalWithBootstrapButtons(err._body)
          }
        }
      )
  }

  ajaxGetCustomerById(customerId: number) {
    this._http.get(this.baseURL + "admin/getcustomerbyid/" + customerId).subscribe(
      (resp) => {
        this.showSmallTable = true;
        let tempCustomer = resp.json();
        this.customerToGet.setId(tempCustomer.id);
        this.customerToGet.setName(tempCustomer.name);
        this.customerToGet.setPassword(tempCustomer.password);
      },
      (err) => {
        if (err.status == 403) {
          window.location.href = this.baseURL;
        } else {
          this.showSmallTable = false;
          this.swalWithBootstrapButtons(err._body)
        }
      }
    )
  }

  ajaxGetCustomerByName(customerName: string) {
    this._http.get(this.baseURL + "admin/getcustomerbyname/" + customerName).subscribe(
      (resp) => {
        this.showSmallTable = true;
        let tempCustomer = resp.json();
        this.customerToGet.setId(tempCustomer.id);
        this.customerToGet.setName(tempCustomer.name);
        this.customerToGet.setPassword(tempCustomer.password);
      },
      (err) => {
        if (err.status == 403) {
          window.location.href = this.baseURL;
        } else {
          this.showSmallTable = false;
          this.swalWithBootstrapButtons(err._body)
        }
      }
    )
  }

  ajaxLogOut(request) {
    this._http.post(this.baseURL + "admin/logout/", request).subscribe(
      (resp) => {},
      (err) => {
        if (err.status == 403) {
          window.location.href = this.baseURL;
        } else {
          this.swalWithBootstrapButtons(err._body)
        }
      }
    )
  }

}
