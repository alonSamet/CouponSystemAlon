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
export class AllCouponsComponent implements OnInit {

  allCouponsList: Coupon[] = new Array<Coupon>();

  constructor(private _customerSpa: CustomerSpaService, private router: Router) {
    this.allCouponsList = this._customerSpa.allCouponsList;
  }

  ngOnInit() {
    this._customerSpa.ajaxGetAllCoupons();
  }

  purchaseCoupon(index: number) {
    // sweet alert
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    })
    swalWithBootstrapButtons({
      title: 'Purchase the Coupon "' + this.allCouponsList[index].title + '"?',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // call ajax method in service
        this._customerSpa.ajaxPurchaseCoupon(this.allCouponsList[index]);
        swalWithBootstrapButtons({
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
