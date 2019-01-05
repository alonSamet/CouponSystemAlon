import { Injectable } from '@angular/core';
import { Company } from '../common/./Company';
import { Customer } from '../common/./Customer';
import { Coupon } from '../common/./Coupon';
import { Http, RequestOptions } from '@angular/http';
import swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})

// This class is the service of the company SPA. 
// It conatains methods that fires AJAX requests to the server,
// in order to create, update and show coupons, show the logged-in company details,
// and logging out of the system. These methods also handles the server success/error responses.

export class CompanySpaService {

  baseURL: string = "http://localhost:8080/";

  companyToGet: Company = new Company(0, "", "", "");
  couponsList: Coupon[] = new Array<Coupon>();
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

  ajaxCreateCoupon(c: Coupon) {
    this._http.post(this.baseURL + "company/createcoupon", c)
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

  ajaxRemoveCoupon(c: Coupon) {
    this._http.delete(this.baseURL + "company/removecoupon",
      new RequestOptions({ body: c }))
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

  ajaxUpdateCoupon(c: Coupon) {
    this._http.put(this.baseURL + "company/updatecoupon", c)
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

  ajaxGetCouponById(myCouponId: number) {
    this._http.get(this.baseURL + "company/getmycouponbyid/" + myCouponId).subscribe(
      (resp) => {
        this.showSmallTable = true;
        let tempCoupon = resp.json();
        this.couponToGet.setId(tempCoupon.id);
        this.couponToGet.setTitle(tempCoupon.title);
        this.couponToGet.setStartDate(tempCoupon.startDate);
        this.couponToGet.setEndDate(tempCoupon.endDate);
        this.couponToGet.setAmount(tempCoupon.amount);
        this.couponToGet.setCouponType(tempCoupon.couponType);
        this.couponToGet.setMessage(tempCoupon.message);
        this.couponToGet.setPrice(tempCoupon.price);
        this.couponToGet.setImage(tempCoupon.image);
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

  ajaxGetCouponByTitle(myCouponTitle: string) {
    this._http.get(this.baseURL + "company/getmycouponbytitle/" + myCouponTitle).subscribe(
      (resp) => {
        this.showSmallTable = true;
        let tempCoupon = resp.json();
        this.couponToGet.setId(tempCoupon.id);
        this.couponToGet.setTitle(tempCoupon.title);
        this.couponToGet.setStartDate(tempCoupon.startDate);
        this.couponToGet.setEndDate(tempCoupon.endDate);
        this.couponToGet.setAmount(tempCoupon.amount);
        this.couponToGet.setCouponType(tempCoupon.couponType);
        this.couponToGet.setMessage(tempCoupon.message);
        this.couponToGet.setPrice(tempCoupon.price);
        this.couponToGet.setImage(tempCoupon.image);
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

  ajaxGetAllCoupons() {
    this._http.get(this.baseURL + "company/getallmycoupons").subscribe(
      (resp) => {
        while (this.couponsList.length > 0)
          this.couponsList.pop();
        let tempList = resp.json();
        for (let item of tempList) {
          this.couponsList.push(item);
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

  ajaxGetMyCouponsByType(couponType: string) {
    this._http.get(this.baseURL + "company/getmycouponsbytype/" + couponType).subscribe(
      (resp) => {
        while (this.couponsList.length > 0)
          this.couponsList.pop();
        let tempList = resp.json();
        for (let item of tempList) {
          this.couponsList.push(item);
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

  ajaxGetMyCouponsByTopPrice(couponTopPrice: number) {
    this._http.get(this.baseURL + "company/getmycouponsbytopprice/" + couponTopPrice).subscribe(
      (resp) => {
        while (this.couponsList.length > 0)
          this.couponsList.pop();
        let tempList = resp.json();
        for (let item of tempList) {
          this.couponsList.push(item);
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

  ajaxGetMyCouponsByEndDate(endDate: Date) {
    this._http.get(this.baseURL + "company/getmycouponsbyenddate/" + endDate).subscribe(
      (resp) => {
        while (this.couponsList.length > 0)
          this.couponsList.pop();
        let tempList = resp.json();
        for (let item of tempList) {
          this.couponsList.push(item);
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

  ajaxGetMyCompanyDetails() {
    this._http.get(this.baseURL + "company/getmycompanydetails/").subscribe(
      (resp) => {
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
          this.swalWithBootstrapButtons(err._body)
        }
      }
    )
  }

  ajaxLogOut(request, response) {
    this._http.post(this.baseURL + "company/logout/", request, response).subscribe(
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