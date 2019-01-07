import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/./Coupon';
import { CustomerSpaService } from '../../services/customer-spa.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-my-purchased-coupons',
  templateUrl: './my-purchased-coupons.component.html',
  styleUrls: ['./my-purchased-coupons.component.css']
})

/* 
This component displays all the coupons that were purchased by the logged-in customer, 
allows the customer to remove coupons from its cart and allow the customer to go to 
the "all coupons" page in order to purchase more coupons.
*/

export class MyPurchasedCouponsComponent implements OnInit {

  swalWithBootstrapButtons = swal.mixin({
    confirmButtonClass: 'btn btn-success',
    cancelButtonClass: 'btn btn-danger',
    buttonsStyling: true,
  })

  purchasedCouponsList: Coupon[] = new Array<Coupon>();
  topPriceFilter: number = 0;
  typeFilter: string;

  //ngIf boolean variables:
  showCouponsTable = false;
  showTopPriceInputFormBool = false;
  showTypeInputFormBool = false;

  constructor(private _customerSpa: CustomerSpaService) {
    this.purchasedCouponsList = this._customerSpa.purchasedCouponsList;
  }

  ngOnInit() {
    this.showCouponsTable = true;
    this._customerSpa.ajaxGetAllPurchasedCoupons();
  }

  getAllPurchasedCoupons() {
    this._customerSpa.ajaxGetAllPurchasedCoupons();
    this.showCouponsTable = true;
    this.showTopPriceInputFormBool = false;
    this.showTypeInputFormBool = false;
  }

  removePurchasedCoupon(index: number) {
    // sweet alert
    this.swalWithBootstrapButtons({
      title: 'Are you sure you want to remove the coupon "' + this.purchasedCouponsList[index].title + '" from your purchased coupons list?',
      text: "You won't be able to revert this !",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete this coupon',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // call ajax method in service
        this._customerSpa.ajaxRemovePurchasedCoupon(this.purchasedCouponsList[index]);
        this.swalWithBootstrapButtons('The coupon "' + this.purchasedCouponsList[index].title + '"  was deleted!')
      } else if (result.dismiss === swal.DismissReason.cancel) { }
    })
  }

  // This method shows the input form that gets purchased coupons by top price
  showTopPriceInputForm() {
    this.showCouponsTable = false;
    this.showTopPriceInputFormBool = true;
    this.showTypeInputFormBool = false;
  }

  // This method shows the input form that gets purchased coupons by type
  showTypeInputForm() {
    this.showCouponsTable = false;
    this.showTopPriceInputFormBool = false;
    this.showTypeInputFormBool = true;
  }

  getAllPurchasedCouponsByTopPrice() {
    this._customerSpa.ajaxGetAllPurchasedCouponsByTopPrice(this.topPriceFilter);
    this.showCouponsTable = true;
  }

  getAllPurchasedCouponsByType() {
    this._customerSpa.ajaxGetAllPurchasedCouponsByType(this.typeFilter);
    this.showCouponsTable = true;
  }
}
