import { Injectable } from '@angular/core';
import { Company } from '../common/./Company';
import { Customer } from '../common/./Customer';
import { Coupon } from '../common/./Coupon';
import { Http, RequestOptions } from '@angular/http';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

// This class is the service of the customer SPA. 
// It conatains methods that fires AJAX requests to the server,
// in order to purchase coupons, remove coupons and show (purchased/all) coupons, show the logged-in customer details,
// and logging out of the system. These methods also handles the server success/error responses.

export class CustomerSpaService {

  baseURL: string = "http://localhost:8080/";

  customerToGet: Customer = new Customer(0, "", "");
  allCouponsList: Coupon[] = new Array<Coupon>();
  purchasedCouponsList: Coupon[] = new Array<Coupon>();
  couponToGet: Coupon = new Coupon(0, "", null, null, 0, "", "", 0, "");
  showSmallTable = false;
  request: Request;
  response: Response;

  swalWithBootstrapButtons = swal.mixin({
    confirmButtonClass: 'btn btn-success',
    cancelButtonClass: 'btn btn-danger',
    buttonsStyling: true,
  })

  constructor(private _http: Http) { }

  ajaxPurchaseCoupon(c: Coupon) {
    this._http.post(this.baseURL + "customer/purchasecoupon", c)
      .subscribe(
        (resp) => {
          this.ajaxGetAllCoupons();
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

  ajaxRemovePurchasedCoupon(c: Coupon) {
    this._http.delete(this.baseURL + "customer/removepurchasedcoupon",
      new RequestOptions({ body: c }))
      .subscribe(
        (resp) => {
          this.ajaxGetAllPurchasedCoupons();
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

  ajaxGetAllCoupons() {
    this._http.get(this.baseURL + "customer/getallcoupons").subscribe(
      (resp) => {
        while (this.allCouponsList.length > 0)
          this.allCouponsList.pop();
        let tempList = resp.json();
        for (let item of tempList) {
          this.allCouponsList.push(item);
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

  ajaxGetAllPurchasedCoupons() {
    this._http.get(this.baseURL + "customer/getallpurchasedcoupons").subscribe(
      (resp) => {
        while (this.purchasedCouponsList.length > 0)
          this.purchasedCouponsList.pop();
        let tempList = resp.json();
        for (let item of tempList) {
          this.purchasedCouponsList.push(item);
        }
        if (this.purchasedCouponsList.length == 0) {
          this.swalWithBootstrapButtons('You do not have any purchased coupons')
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

  ajaxGetAllPurchasedCouponsByType(couponType: string) {
    this._http.get(this.baseURL + "customer/getallpurchasedcouponsbytype/" + couponType).subscribe(
      (resp) => {
        while (this.purchasedCouponsList.length > 0)
          this.purchasedCouponsList.pop();
        let tempList = resp.json();
        for (let item of tempList) {
          this.purchasedCouponsList.push(item);
        }
        if (this.purchasedCouponsList.length == 0) {
          this.swalWithBootstrapButtons('You do not have purchased coupons of this type')
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

  ajaxGetAllPurchasedCouponsByTopPrice(couponTopPrice: number) {
    this._http.get(this.baseURL + "customer/getallpurchasedcouponsbytopprice/" + couponTopPrice).subscribe(
      (resp) => {
        while (this.purchasedCouponsList.length > 0)
          this.purchasedCouponsList.pop();
        let tempList = resp.json();
        for (let item of tempList) {
          this.purchasedCouponsList.push(item);
        }
        if (this.purchasedCouponsList.length == 0) {
          this.swalWithBootstrapButtons('You do not have purchased coupons below this price')
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

  ajaxGetMyDetails() {
    this._http.get(this.baseURL + "customer/getmydetails/").subscribe(
      (resp) => {
        let tempCustomer = resp.json();
        this.customerToGet.setId(tempCustomer.id);
        this.customerToGet.setName(tempCustomer.name);
        this.customerToGet.setPassword(tempCustomer.password);
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

  ajaxLogOut(request, response) {
    this._http.post(this.baseURL + "customer/logout/", request, response).subscribe(
      (resp) => {
        this.swalWithBootstrapButtons({
          title: 'You have successfully logged out',
          type: 'info',
        })
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

}
