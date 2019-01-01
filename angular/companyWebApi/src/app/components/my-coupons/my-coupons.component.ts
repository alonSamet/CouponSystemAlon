import { Component, OnInit } from '@angular/core';
import { Company } from '../../common/./Company';
import { Coupon } from '../../common/./Coupon';
import { CompanySpaService } from '../../services/company-spa.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-my-coupons',
  templateUrl: './my-coupons.component.html',
  styleUrls: ['./my-coupons.component.css']
})


/* 
This component displays the coupons belong to the logged-in company (with display filters),
and enables the company to create new coupon, update Existing coupon & show details of requested coupon (by its id/title) 
*/

export class MyCouponsComponent implements OnInit {

  couponsList: Coupon[] = new Array<Coupon>();
  newCoupon: Coupon = new Coupon(0, "", null, null, 0, "", "", 0, "");
  updatedCoupon: Coupon = new Coupon(0, "", null, null, 0, "", "", 0, "");
  couponToGet: Coupon = new Coupon(0, "", null, null, 0, "", "", 0, "");
  endDateFilter: Date = null;
  topPriceFilter: number = 0;
  typeFilter: string;

  // Boolean variables for using ngIf:
  showUpdateBool = false;
  showGetButtons = true;
  showGetInputByIdBool = false;
  showGetInputByTitleBool = false;
  showGetDetails = false;
  showCouponsTable = false;
  showEndDateInputFormBool = false;
  showTopPriceInputFormBool = false;
  showTypeInputFormBool = false;


  constructor(private _companySpa: CompanySpaService) {
    this.couponsList = this._companySpa.couponsList;
    this.couponToGet = this._companySpa.couponToGet; // now those two coupons points on the same object in memory
  }

  ngOnInit() {
    this.showCouponsTable = true;
    this._companySpa.ajaxGetAllCoupons();
  }

  getAllCoupons() {
    this._companySpa.ajaxGetAllCoupons();
    this.showEndDateInputFormBool = false;
    this.showTopPriceInputFormBool = false;
    this.showTypeInputFormBool = false;
    this.showCouponsTable = true;
  }

  // This method shows the input form that gets coupons by end date
  showEndDateInputForm() {
    this.showCouponsTable = false;
    this.showEndDateInputFormBool = true;
    this.showTopPriceInputFormBool = false;
    this.showTypeInputFormBool = false;
  }

  // This method shows the input form that gets coupons by top price
  showTopPriceInputForm() {
    this.showCouponsTable = false;
    this.showEndDateInputFormBool = false;
    this.showTopPriceInputFormBool = true;
    this.showTypeInputFormBool = false;
  }

  // This method shows the input form that gets coupons by type
  showTypeInputForm() {
    this.showCouponsTable = false;
    this.showEndDateInputFormBool = false;
    this.showTopPriceInputFormBool = false;
    this.showTypeInputFormBool = true;
  }

  // Invokes method in the company service in order to get coupons by end date
  getMyCouponsByEndDate() {
    this._companySpa.ajaxGetMyCouponsByEndDate(this.endDateFilter);
    this.showCouponsTable = true;
  }

  // Invokes method in the company service in order to get coupons by top price
  getMyCouponsByTopPrice() {
    this._companySpa.ajaxGetMyCouponsByTopPrice(this.topPriceFilter);
    this.showCouponsTable = true;
  }

  // Invokes method in the company service in order to get coupons by type
  getMyCouponsByType() {
    this._companySpa.ajaxGetMyCouponsByType(this.typeFilter);
    this.showCouponsTable = true;
  }

  createCoupon(index: number) {
    // sweet alert
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    })
    swalWithBootstrapButtons({
      title: 'Create New Coupon?',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // call ajax method in service
        this._companySpa.ajaxCreateCoupon(this.newCoupon);
        swalWithBootstrapButtons('The new coupon "' + this.newCoupon.title + '" was created !')
      } else if (
        result.dismiss === swal.DismissReason.cancel
      ) { }
    })
  }

  removeCoupon(index: number) {
    // sweet alert
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    })
    swalWithBootstrapButtons({
      title: 'Are you sure you want to delete the coupon "' + this.couponsList[index].title + '" ?',
      text: "You won't be able to revert this !",
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete this coupon',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // call ajax method in service
        this._companySpa.ajaxRemoveCoupon(this.couponsList[index]);
        swalWithBootstrapButtons('The coupon "' + this.couponsList[index].title + '"  was deleted!')
      } else if (result.dismiss === swal.DismissReason.cancel) { }
    })
  }

  updateCoupon() {  //Company can update only its coupon's price & end date
    // sweet alert
    const swalWithBootstrapButtons = swal.mixin({
      confirmButtonClass: 'btn btn-success',
      cancelButtonClass: 'btn btn-danger',
      buttonsStyling: true,
    })
    swalWithBootstrapButtons({
      title: 'Update details of the coupon "' + this.updatedCoupon.title + '" ?',
      type: 'question',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'Cancel',
      reverseButtons: true
    }).then((result) => {
      if (result.value) {
        // call ajax method in service
        this._companySpa.ajaxUpdateCoupon(this.updatedCoupon);
        swalWithBootstrapButtons('The coupon "' + this.updatedCoupon.title + '" Was Updated!')
      } else if (result.dismiss === swal.DismissReason.cancel) { }
    })
  }

  getCouponById() {
    this._companySpa.ajaxGetCouponById(this.couponToGet.id)
  }

  getCouponByTitle() {
    this._companySpa.ajaxGetCouponByTitle(this.couponToGet.title)
  }

  // ****************************************************
  // ************* methods for ngIf tags: ***************
  // ****************************************************

  
// This method shows the input form that updates coupon
  showUpdateCoupon(i) { // Company can update only its coupon's price & end date
    this.showUpdateBool = true;
    this.updatedCoupon.id = this.couponsList[i].id; // Gets the data from the relevant line in the getAllCoupons Table
    this.updatedCoupon.title = this.couponsList[i].title;
    this.updatedCoupon.startDate = this.couponsList[i].startDate;
    this.updatedCoupon.endDate = null; // resets the displayed endDate when pressing the showUpdate button, so the user can insert its input
    this.updatedCoupon.amount = this.couponsList[i].amount;
    this.updatedCoupon.couponType = this.couponsList[i].couponType;
    this.updatedCoupon.message = this.couponsList[i].message;
    this.updatedCoupon.price = 0; // resets the displayed price when pressing the showUpdate button, so the user can insert its input
    this.updatedCoupon.image = this.couponsList[i].image;
  }

// This method shows the input form that gets coupon by its id
  showGetInputById() {
    this.showGetButtons = false;
    this.showGetInputByIdBool = true;
    this.showGetDetails = true;
  }

// This method shows the input form that gets coupon by its title
  showGetInputByTitle() {
    this.showGetButtons = false;
    this.showGetInputByTitleBool = true;
    this.showGetDetails = true;
  }

// This method shows the buttons that gets coupon by its id/title
  backToGetButtons() {
    this._companySpa.showSmallTable = false;
    this.showGetInputByTitleBool = false;
    this.showGetInputByIdBool = false;
    this.showGetDetails = false;
    this.showGetButtons = true;
  }
}
