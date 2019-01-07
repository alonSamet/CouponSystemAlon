import { Component, OnInit } from '@angular/core';
import { Coupon } from '../../common/./Coupon';
import { CustomerSpaService } from '../../services/customer-spa.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-all-coupons',
  templateUrl: './all-coupons.component.html',
  styleUrls: ['./all-coupons.component.css']
})

/* 
This component displays all coupons that can be purchased by the logged-in customer, 
and allows the customer to purchase them.
*/

export class AllCouponsComponent implements OnInit {

  swalWithBootstrapButtons = swal.mixin({
    confirmButtonClass: 'btn btn-success',
    cancelButtonClass: 'btn btn-danger',
    buttonsStyling: true,
  })

  allCouponsList: Coupon[] = new Array<Coupon>();

  constructor(private _customerSpa: CustomerSpaService, private router: Router) {
    this.allCouponsList = this._customerSpa.allCouponsList;
  }

  // This method displays all coupons that can be purchased by the logged-in customer
  ngOnInit() {
    this._customerSpa.ajaxGetAllCoupons();
  }

  purchaseCoupon(index: number) {
    // sweet alert

    this.swalWithBootstrapButtons({
      title: 'Purchase the Coupon "' + this.allCouponsList[index].title + '"?',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // call ajax method in the customer service
        this._customerSpa.ajaxPurchaseCoupon(this.allCouponsList[index]);
        this.swalWithBootstrapButtons({
          title: 'The coupon "' + this.allCouponsList[index].title + '" was successfully purchased!',
          type: 'success',
          showCancelButton: true,
          confirmButtonText: 'Go to your purchased coupons table',
          cancelButtonText: 'Back to all coupons table',
          reverseButtons: true
        }).then((result) => {
          if (result.value) {
            this.router.navigate(['/mypurchasedcoupons/']);
          } else if (result.dismiss === swal.DismissReason.cancel) { }
        })
      } else if (result.dismiss === swal.DismissReason.cancel) { }
    })
  }
}
