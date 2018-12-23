(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body {\r\n    background: url(\"https://images.pexels.com/photos/264471/pexels-photo-264471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n#logout {\r\n    padding-top: 8px;\r\n    padding-right: 25px;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n    </div>\n    <div class=\"navbar-collapse collapse\">\n        <ul class=\"nav navbar-nav\">\n\n            <li>\n                <a routerLink=\"/\"> Home\n                    <span class=\"fa fa-home\"></span> &nbsp; </a>\n            </li>\n            <li>\n                <a routerLink=\"/allcoupons\"> All Coupons\n                    <span class=\"glyphicon glyphicon-th-list\"></span>&nbsp; </a>\n            </li>\n            <li>\n                <a routerLink=\"/mypurchasedcoupons\"> My Purchased Coupons\n                    <span class=\"glyphicon glyphicon-shopping-cart\"></span>&nbsp; </a>\n            </li>\n            <li>\n                <a routerLink=\"/mydetails\"> My Details\n                    <span class=\"glyphicon glyphicon-copyright-mark\"></span>&nbsp; </a>\n            </li>\n            <li>\n                <a routerLink=\"/about\"> About\n                    <span class=\"fa fa-info-circle\"></span>\n                </a>\n            </li>\n        </ul>\n\n        <ul id=\"logout\" class=\"nav navbar-nav navbar-right\">\n            <li>\n                <button (click)=\"logout()\" class=\"btn btn-danger\">\n                    <b>Logout </b>\n                    <span class=\"fas fa-sign-out-alt\"></span>\n                </button>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customer_spa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/customer-spa.service */ "./src/app/services/customer-spa.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(_customerSpa) {
        this._customerSpa = _customerSpa;
        this.title = 'customerWebApi';
    }
    AppComponent.prototype.logout = function () {
        // Moving to login page
        window.location.href = 'http://localhost:8080/';
        // Invalidates the user session
        this._customerSpa.ajaxLogOut(this.request, this.response);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customer_spa_service__WEBPACK_IMPORTED_MODULE_1__["CustomerSpaService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_my_purchased_coupons_my_purchased_coupons_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/my-purchased-coupons/my-purchased-coupons.component */ "./src/app/components/my-purchased-coupons/my-purchased-coupons.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_all_coupons_all_coupons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/all-coupons/all-coupons.component */ "./src/app/components/all-coupons/all-coupons.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _services_customer_spa_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/customer-spa.service */ "./src/app/services/customer-spa.service.ts");
/* harmony import */ var _components_my_details_my_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/my-details/my-details.component */ "./src/app/components/my-details/my-details.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_my_purchased_coupons_my_purchased_coupons_component__WEBPACK_IMPORTED_MODULE_6__["MyPurchasedCouponsComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                _components_all_coupons_all_coupons_component__WEBPACK_IMPORTED_MODULE_8__["AllCouponsComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _components_my_details_my_details_component__WEBPACK_IMPORTED_MODULE_11__["MyDetailsComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    {
                        path: 'allcoupons',
                        component: _components_all_coupons_all_coupons_component__WEBPACK_IMPORTED_MODULE_8__["AllCouponsComponent"],
                    },
                    {
                        path: 'mypurchasedcoupons',
                        component: _components_my_purchased_coupons_my_purchased_coupons_component__WEBPACK_IMPORTED_MODULE_6__["MyPurchasedCouponsComponent"],
                    },
                    {
                        path: 'mydetails',
                        component: _components_my_details_my_details_component__WEBPACK_IMPORTED_MODULE_11__["MyDetailsComponent"],
                    },
                    {
                        path: 'about',
                        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                    },
                    {
                        path: '',
                        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"]
                    },
                ])
            ],
            providers: [_services_customer_spa_service__WEBPACK_IMPORTED_MODULE_10__["CustomerSpaService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/Coupon.ts":
/*!**********************************!*\
  !*** ./src/app/common/Coupon.ts ***!
  \**********************************/
/*! exports provided: Coupon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Coupon", function() { return Coupon; });
var Coupon = /** @class */ (function () {
    function Coupon(id, title, startDate, endDate, amount, couponType, message, price, image) {
        this.id = id;
        this.title = title;
        this.startDate = startDate;
        this.endDate = endDate;
        this.amount = amount;
        this.couponType = couponType;
        this.message = message;
        this.price = price;
        this.image = image;
    }
    Coupon.prototype.setId = function (id) {
        this.id = id;
    };
    Coupon.prototype.setTitle = function (title) {
        this.title = title;
    };
    Coupon.prototype.setStartDate = function (startDate) {
        this.startDate = startDate;
    };
    Coupon.prototype.setEndDate = function (endDate) {
        this.endDate = endDate;
    };
    Coupon.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    Coupon.prototype.setCouponType = function (couponType) {
        this.couponType = couponType;
    };
    Coupon.prototype.setMessage = function (message) {
        this.message = message;
    };
    Coupon.prototype.setPrice = function (price) {
        this.price = price;
    };
    Coupon.prototype.setImage = function (image) {
        this.image = image;
    };
    return Coupon;
}());



/***/ }),

/***/ "./src/app/common/Customer.ts":
/*!************************************!*\
  !*** ./src/app/common/Customer.ts ***!
  \************************************/
/*! exports provided: Customer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Customer", function() { return Customer; });
var Customer = /** @class */ (function () {
    function Customer(id, name, password) {
        this.id = id;
        this.name = name;
        this.password = password;
    }
    Customer.prototype.setId = function (id) {
        this.id = id;
    };
    Customer.prototype.setName = function (name) {
        this.name = name;
    };
    Customer.prototype.setPassword = function (password) {
        this.password = password;
    };
    return Customer;
}());



/***/ }),

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\r\n    padding-bottom: 120px; \r\n    width: 90%\r\n}\r\n\r\n#leftimg {\r\n    width: 500px;\r\n    height: 500px; \r\n    border: 3px solid black;\r\n}\r\n\r\n#rightimg {\r\n    width: 900px; \r\n    height: 500px; \r\n    border: 3px solid black;\r\n}\r\n\r\n#footer {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    text-align: center;\r\n    margin-top: 750px;\r\n    right: 40%;\r\n    top: 40%;\r\n    bottom: 1px;\r\n    left: 40%;\r\n    padding: 0.5rem;\r\n}"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n\n<div class=\"container\" id=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-5\">\n            <p>\n                <img src=\"../../../assets/‏‏project.PNG\" id=\"leftimg\">\n            </p>\n        </div>\n\n        <div class=\"col-md-5\">\n            <p>\n                <img src=\"../../../customer/assets/alon.PNG\" id=\"rightimg\">\n            </p>\n        </div>\n    </div>\n\n    <div id=\"footer\" class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n            <span style=\"font-size: 18px\">\n                <strong>Contact us:&nbsp; </strong>\n            </span>\n            <a class=\"btn fab fa-facebook fa-2x\" href=\"https://www.facebook.com/tamarcovich\"></a>\n            <a class=\"btn fab fa-linkedin fa-2x\" href=\"https://www.linkedin.com/in/alon-samet/\"></a>\n            <a class=\"btn fas fa-envelope fa-2x\" href=\"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alonkale@gmail.com&shva=1\"></a>\n        </div>\n        <div class=\"panel-body\">\n            Powered by\n            <strong>\n                <i> Alon Samet </i>\n                <br>\n            </strong>\n            <h6> © All Rights Reserved </h6>\n        </div>\n        <br>\n    </div>"

/***/ }),

/***/ "./src/app/components/about/about.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/about/about.component.ts ***!
  \*****************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/all-coupons/all-coupons.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/all-coupons/all-coupons.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* th, td {\r\n    text-align: center; \r\n    vertical-align:middle;\r\n} */\r\n\r\n#shadow {\r\n    text-shadow: 1px 1px;\r\n}\r\n\r\n#centerh {\r\n    text-align: center;\r\n}\r\n\r\n#getby {\r\n    text-align:center;\r\n    width: 300px; \r\n    margin-left:41%; \r\n}\r\n\r\n#button {\r\n    padding-bottom: 70px;\r\n}\r\n\r\n#img {\r\n    padding-top: 30px; \r\n    padding-left: 30px; \r\n    padding-right: 30px;\r\n}\r\n\r\n#footer {\r\n    position: unset;\r\n    text-align: center;\r\n    right: 40%;\r\n    top: 40%;\r\n    bottom: 1px;\r\n    left: 40%;\r\n    padding: 0.5rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/all-coupons/all-coupons.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/all-coupons/all-coupons.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<h3 id=\"centerh\">\n  <span class=\"label label-success\"> All Coupons </span>\n</h3>\n<br>\n\n<div class=\"row\">\n  <!-- Go to purchased coupons page -->\n  <br>\n  <div id=\"button\">\n    <div id=\"centerh\">\n      <button class=\"btn-lg btn btn-warning\" routerLink=\"/mypurchasedcoupons\">\n        Go to my purchased coupons list\n        <span class=\"warning\"></span>\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class=\"container\">\n  <div class=\"row\">\n    <div *ngFor=\"let c of allCouponsList; let i = index\" class=\"col-md-4\">\n      <div class=\"thumbnail\">\n        <img [src]=c.image class=\"img-rounded\" width=\"500\" height=\"300\" id=\"img\">\n        <div class=\"caption\">\n\n          <h3 id=\"centerh\">\n            <b>{{c.title}} </b>\n          </h3>\n          <hr style=\"border: 1px solid rgb(5, 5, 5);\">\n          <p id=\"centerh\"> {{c.message}} </p>\n          <hr style=\"border: 1px solid rgb(0, 0, 0);\">\n          <ul>\n            <li>\n              <b> Price: </b> &nbsp; {{c.price}}&nbsp;NIS\n            </li>\n            <li>\n              <b> Coupon Type: </b> &nbsp; {{c.couponType}}\n            </li>\n            <li>\n              <b> Start Date: </b> &nbsp; {{c.startDate}}\n            </li>\n            <li>\n              <b> End Date: </b> &nbsp; {{c.endDate}}\n            </li>\n            <li>\n              <b> Amount: </b> &nbsp; {{c.amount}}\n            </li>\n            <li>\n              <b> Coupon ID: </b> &nbsp; {{c.id}}\n            </li>\n          </ul>\n          <br>\n          <p id=\"centerh\">\n            <button class=\"btn-lg btn btn-warning\" (click)=\"purchaseCoupon(i)\"> Purchase it!\n              <span class=\"glyphicon glyphicon-shopping-cart\"></span>\n            </button>\n          </p>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n\n<div class=\"row\">\n  <!-- Go to purchased coupons page -->\n  <br>\n  <div id=\"button\">\n    <div id=\"centerh\">\n      <button class=\"btn-lg btn btn-warning\" routerLink=\"/mypurchasedcoupons\">\n        Go to my purchased coupons list\n        <span class=\"warning\"></span>\n      </button>\n    </div>\n  </div>\n</div>\n\n<div class=\"row\">\n  <div id=\"footer\" class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n      <span style=\"font-size: 18px\">\n        <strong>Contact us:&nbsp; </strong>\n      </span>\n      <a class=\"btn fab fa-facebook fa-2x\" href=\"https://www.facebook.com/tamarcovich\"></a>\n      <a class=\"btn fab fa-linkedin fa-2x\" href=\"https://www.linkedin.com/in/alon-samet/\"></a>\n      <a class=\"btn fas fa-envelope fa-2x\" href=\"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alonkale@gmail.com&shva=1\"></a>\n    </div>\n    <div class=\"panel-body\">\n      Powered by\n      <strong>\n        <i> Alon Samet </i>\n        <br>\n      </strong>\n      <h6> © All Rights Reserved </h6>\n    </div>\n    <br>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/all-coupons/all-coupons.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/all-coupons/all-coupons.component.ts ***!
  \*****************************************************************/
/*! exports provided: AllCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllCouponsComponent", function() { return AllCouponsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customer_spa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/customer-spa.service */ "./src/app/services/customer-spa.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AllCouponsComponent = /** @class */ (function () {
    function AllCouponsComponent(_customerSpa, router) {
        this._customerSpa = _customerSpa;
        this.router = router;
        this.allCouponsList = new Array();
        this.allCouponsList = this._customerSpa.allCouponsList;
    }
    AllCouponsComponent.prototype.ngOnInit = function () {
        this._customerSpa.ajaxGetAllCoupons();
    };
    AllCouponsComponent.prototype.purchaseCoupon = function (index) {
        var _this = this;
        // sweet alert
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: true,
        });
        swalWithBootstrapButtons({
            title: 'Purchase the Coupon "' + this.allCouponsList[index].title + '"?',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // call ajax method in service
                _this._customerSpa.ajaxPurchaseCoupon(_this.allCouponsList[index]);
                swalWithBootstrapButtons({
                    title: 'The coupon "' + _this.allCouponsList[index].title + '" was successfully purchased!',
                    type: 'success',
                    showCancelButton: true,
                    confirmButtonText: 'Go to your purchased coupons table',
                    cancelButtonText: 'Back to all coupons table',
                    reverseButtons: true
                }).then(function (result) {
                    if (result.value) {
                        _this.router.navigate(['/mypurchasedcoupons/']);
                    }
                    else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) { }
                });
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) { }
        });
    };
    AllCouponsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-all-coupons',
            template: __webpack_require__(/*! ./all-coupons.component.html */ "./src/app/components/all-coupons/all-coupons.component.html"),
            styles: [__webpack_require__(/*! ./all-coupons.component.css */ "./src/app/components/all-coupons/all-coupons.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customer_spa_service__WEBPACK_IMPORTED_MODULE_1__["CustomerSpaService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AllCouponsComponent);
    return AllCouponsComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#welcome {\r\n    padding-bottom: 70px;\r\n}\r\n\r\n#shadow {\r\n    text-shadow: -4px 4px 3px #999;\r\n}\r\n\r\n#row {\r\n    position: relative;\r\n    padding-left: 33%; \r\n}\r\n\r\n#img {\r\n    position: absolute;\r\n    margin-top: 300px;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n    transform: translate(-50%,-50%);\r\n    width: 1000px; \r\n    height: 650px;\r\n}\r\n\r\n#footer {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    text-align: center;\r\n    margin-top: 750px;\r\n    right: 40%;\r\n    top: 40%;\r\n    bottom: 1px;\r\n    left: 40%;\r\n    padding: 0.5rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<div class=\"container\">\n  <div class=\"row\" id=\"welcome\">\n    <h4 id=\"shadow\">\n      <b> Hi\n        <i>\"{{customerToGet.name}}</i>\", </b> you are logged-in!\n    </h4>\n  </div>\n\n  <div class=\"row\" id=\"row\">\n    <img src=\"../../../customer/assets/‏colage.PNG\" id=\"img\">\n  </div>\n</div>\n\n<div id=\"footer\" class=\"panel panel-info\">\n  <div class=\"panel-heading\">\n    <span style=\"font-size: 18px\">\n      <strong>Contact us:&nbsp; </strong>\n    </span>\n    <a class=\"btn fab fa-facebook fa-2x\" href=\"https://www.facebook.com/tamarcovich\"></a>\n    <a class=\"btn fab fa-linkedin fa-2x\" href=\"https://www.linkedin.com/in/alon-samet/\"></a>\n    <a class=\"btn fas fa-envelope fa-2x\" href=\"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alonkale@gmail.com&shva=1\"></a>\n  </div>\n  <div class=\"panel-body\">\n    Powered by\n    <strong>\n      <i> Alon Samet </i>\n      <br>\n    </strong>\n    <h6> © All Rights Reserved </h6>\n  </div>\n  <br>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Customer */ "./src/app/common/Customer.ts");
/* harmony import */ var _services_customer_spa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/customer-spa.service */ "./src/app/services/customer-spa.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = /** @class */ (function () {
    function HomeComponent(_customerSpa) {
        this._customerSpa = _customerSpa;
        this.customerToGet = new _common_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](0, "", "");
        this.customerToGet = this._customerSpa.customerToGet;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._customerSpa.ajaxGetMyDetails();
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customer_spa_service__WEBPACK_IMPORTED_MODULE_2__["CustomerSpaService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/my-details/my-details.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/my-details/my-details.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th, td {\r\n    text-align: center; \r\n    line-height: 35px;\r\n}\r\n\r\n#centerh {\r\n    text-align: center;\r\n}\r\n\r\n#details {\r\n    margin-left: 300px; \r\n    margin-right: 300px; \r\n    align-items:center;\r\n}\r\n\r\n#footer {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    margin-top: 750px  ;\r\n    right: 40%;\r\n    top: 40%;\r\n    bottom: 1px;\r\n    left: 40%;\r\n    padding: 0.5rem;\r\n    text-align: center\r\n}"

/***/ }),

/***/ "./src/app/components/my-details/my-details.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-details/my-details.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<h3 id=\"centerh\">\n  <span class=\"label label-success\"> My Details </span>\n</h3>\n<br>\n<br>\n<br>\n\n<div id=\"details\">\n  <table border=\"1\" class=\"table table-striped table-bordered\">\n    <tr>\n      <th> ID </th>\n      <th> Name </th>\n      <th> Password </th>\n    </tr>\n    <tr>\n      <td> {{customerToGet.id}} </td>\n      <td> {{customerToGet.name}} </td>\n      <td> {{customerToGet.password}} </td>\n    </tr>\n  </table>\n</div>\n<br>\n\n<div id=\"footer\" class=\"panel panel-info\">\n  <div class=\"panel-heading\">\n    <span style=\"font-size: 18px\">\n      <strong>Contact us:&nbsp; </strong>\n    </span>\n    <a class=\"btn fab fa-facebook fa-2x\" href=\"https://www.facebook.com/tamarcovich\"></a>\n    <a class=\"btn fab fa-linkedin fa-2x\" href=\"https://www.linkedin.com/in/alon-samet/\"></a>\n    <a class=\"btn fas fa-envelope fa-2x\" href=\"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alonkale@gmail.com&shva=1\"></a>\n  </div>\n  <div class=\"panel-body\">\n    Powered by\n    <strong>\n      <i> Alon Samet </i>\n      <br>\n    </strong>\n    <h6> © All Rights Reserved </h6>\n  </div>\n  <br>\n</div>"

/***/ }),

/***/ "./src/app/components/my-details/my-details.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/my-details/my-details.component.ts ***!
  \***************************************************************/
/*! exports provided: MyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyDetailsComponent", function() { return MyDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customer_spa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/customer-spa.service */ "./src/app/services/customer-spa.service.ts");
/* harmony import */ var _common_Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/./Customer */ "./src/app/common/Customer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyDetailsComponent = /** @class */ (function () {
    function MyDetailsComponent(_customerSpa) {
        this._customerSpa = _customerSpa;
        this.customerToGet = new _common_Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"](0, "", "");
        this.customerToGet = this._customerSpa.customerToGet;
    }
    MyDetailsComponent.prototype.ngOnInit = function () {
        this._customerSpa.ajaxGetMyDetails();
    };
    MyDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-details',
            template: __webpack_require__(/*! ./my-details.component.html */ "./src/app/components/my-details/my-details.component.html"),
            styles: [__webpack_require__(/*! ./my-details.component.css */ "./src/app/components/my-details/my-details.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customer_spa_service__WEBPACK_IMPORTED_MODULE_1__["CustomerSpaService"]])
    ], MyDetailsComponent);
    return MyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/my-purchased-coupons/my-purchased-coupons.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/components/my-purchased-coupons/my-purchased-coupons.component.css ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th, td {\r\n    text-align: center; \r\n    vertical-align:middle;\r\n}\r\n\r\n#centerh {\r\n    text-align: center;\r\n}\r\n\r\n#getby {\r\n    text-align:center;\r\n    width: 300px; \r\n    margin-left:41%; \r\n}\r\n\r\n#footer {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    text-align: center;\r\n    margin-top: 100px;\r\n    right: 40%;\r\n    top: 40%;\r\n    bottom: 1px;\r\n    left: 40%;\r\n    padding: 0.5rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/my-purchased-coupons/my-purchased-coupons.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/components/my-purchased-coupons/my-purchased-coupons.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<h3 id=\"centerh\">\n  <span class=\"label label-success\"> &nbsp; My Purchased Coupons &nbsp;\n  </span> \n</h3>\n\n<!-- Coupons table filter buttons  -->\n<div class=\"form-group\" id=\"centerh\">\n  <br>\n  <h3> Please choose which coupons to show on table: </h3>\n</div>\n<br>\n<div id=\"centerh\">\n  <button class=\"btn btn-info\" (click)=\"getAllPurchasedCoupons()\"> Show All My Purchased Coupons </button> &nbsp;\n  <button class=\"btn btn-info\" (click)=\"showTopPriceInputForm()\"> By Top Price </button> &nbsp;\n  <button class=\"btn btn-info\" (click)=\"showTypeInputForm()\"> By Type </button>\n</div>\n<br>\n<br>\n<br>\n\n<!-- Purchased coupons by *top price* input form filter -->\n<div *ngIf=\"showTopPriceInputFormBool\" id=\"getby\" class=\"form-group\">\n  <label>\n    <b> Please select coupons top price: </b>\n  </label>\n  <input type=\"number\" [(ngModel)]=\"topPriceFilter\" class=\"form-control\" id=\"centerh\">\n  <br>\n  <br>\n  <button class=\"btn btn-primary\" (click)=\"getAllPurchasedCouponsByTopPrice()\"> Show Coupons Table! </button>\n</div>\n\n<!-- Purchased coupons by *type* input form filter -->\n<div *ngIf=\"showTypeInputFormBool\" id=\"getby\" class=\"form-group\">\n  <label> Please select coupons type: </label>\n  <select [(ngModel)]=\"typeFilter\" class=\"form-control\">\n    <option value=\"\" disabled=\"disabled\" selected=\"selected\"> Please select Type </option>\n    <option value=\"FOOD\"> Food </option>\n    <option value=\"ELECTRICITY\"> Electricity</option>\n    <option value=\"HOBBY\"> Hobby </option>\n    <option value=\"VACATION\"> Vacation </option>\n  </select>\n  <br>\n  <br>\n  <button class=\"btn btn-primary\" (click)=\"getAllPurchasedCouponsByType()\"> Show Coupons Table! </button>\n</div>\n\n<!-- Get table of customer's purchased coupons -->\n<table *ngIf=\"showCouponsTable\" border=\"1\" class=\"table table-striped table-bordered\">\n  <tr>\n    <th> ID </th>\n    <th> Title </th>\n    <th> Start Date </th>\n    <th> End Date </th>\n    <th> Amount </th>\n    <th> Type </th>\n    <th> Details </th>\n    <th> Price (NIS) </th>\n    <th> Image </th>\n    <th> Delete </th>\n\n\n  </tr>\n  <!-- Get purchased coupons data into table -->\n  <tr *ngFor=\"let c of purchasedCouponsList; let i = index\">\n    <td> {{c.id}} </td>\n    <td> {{c.title}} </td>\n    <td> {{c.startDate}} </td>\n    <td> {{c.endDate}} </td>\n    <td> {{c.amount}} </td>\n    <td> {{c.couponType}} </td>\n    <td> {{c.message}} </td>\n    <td> {{c.price}} </td>\n    <td>\n      <img [src]=c.image class=\"img-rounded\" width=\"80\" height=\"50\">\n    </td>\n    <td>\n      <button class=\"btn btn-danger glyphicon glyphicon-trash\" (click)=\"removePurchasedCoupon(i)\"> </button>\n    </td>\n  </tr>\n</table>\n\n<!-- Go to all coupons page -->\n<br>\n<br>\n<div id=\"centerh\">\n  <button class=\"btn-lg btn btn-warning\" routerLink=\"/allcoupons\">\n    Purchase more coupons!\n    <span class=\"warning glyphicon glyphicon-shopping-cart\"></span>\n  </button>\n</div>\n\n<div id=\"footer\" class=\"panel panel-info\">\n  <div class=\"panel-heading\">\n    <span style=\"font-size: 18px\">\n      <strong>Contact us:&nbsp; </strong>\n    </span>\n    <a class=\"btn fab fa-facebook fa-2x\" href=\"https://www.facebook.com/tamarcovich\"></a>\n    <a class=\"btn fab fa-linkedin fa-2x\" href=\"https://www.linkedin.com/in/alon-samet/\"></a>\n    <a class=\"btn fas fa-envelope fa-2x\" href=\"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alonkale@gmail.com&shva=1\"></a>\n  </div>\n  <div class=\"panel-body\">\n    Powered by\n    <strong>\n      <i> Alon Samet </i>\n      <br>\n    </strong>\n    <h6> © All Rights Reserved </h6>\n  </div>\n  <br>\n</div>"

/***/ }),

/***/ "./src/app/components/my-purchased-coupons/my-purchased-coupons.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/components/my-purchased-coupons/my-purchased-coupons.component.ts ***!
  \***********************************************************************************/
/*! exports provided: MyPurchasedCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyPurchasedCouponsComponent", function() { return MyPurchasedCouponsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_customer_spa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/customer-spa.service */ "./src/app/services/customer-spa.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyPurchasedCouponsComponent = /** @class */ (function () {
    function MyPurchasedCouponsComponent(_customerSpa) {
        this._customerSpa = _customerSpa;
        this.purchasedCouponsList = new Array();
        this.topPriceFilter = 0;
        //ngIf boolean variables:
        this.showCouponsTable = false;
        this.showTopPriceInputFormBool = false;
        this.showTypeInputFormBool = false;
        this.purchasedCouponsList = this._customerSpa.purchasedCouponsList;
    }
    MyPurchasedCouponsComponent.prototype.ngOnInit = function () {
        this.showCouponsTable = true;
        this._customerSpa.ajaxGetAllPurchasedCoupons();
    };
    MyPurchasedCouponsComponent.prototype.getAllPurchasedCoupons = function () {
        this._customerSpa.ajaxGetAllPurchasedCoupons();
        this.showCouponsTable = true;
        this.showTopPriceInputFormBool = false;
        this.showTypeInputFormBool = false;
    };
    MyPurchasedCouponsComponent.prototype.removePurchasedCoupon = function (index) {
        var _this = this;
        // sweet alert
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: true,
        });
        swalWithBootstrapButtons({
            title: 'Are you sure you want to remove the coupon "' + this.purchasedCouponsList[index].title + '" from your purchased coupons list?',
            text: "You won't be able to revert this !",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete this coupon',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // call ajax method in service
                _this._customerSpa.ajaxRemovePurchasedCoupon(_this.purchasedCouponsList[index]);
                swalWithBootstrapButtons('The coupon "' + _this.purchasedCouponsList[index].title + '"  was deleted!');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_2___default.a.DismissReason.cancel) { }
        });
    };
    MyPurchasedCouponsComponent.prototype.showTopPriceInputForm = function () {
        this.showCouponsTable = false;
        this.showTopPriceInputFormBool = true;
        this.showTypeInputFormBool = false;
    };
    MyPurchasedCouponsComponent.prototype.showTypeInputForm = function () {
        this.showCouponsTable = false;
        this.showTopPriceInputFormBool = false;
        this.showTypeInputFormBool = true;
    };
    MyPurchasedCouponsComponent.prototype.getAllPurchasedCouponsByTopPrice = function () {
        this._customerSpa.ajaxGetAllPurchasedCouponsByTopPrice(this.topPriceFilter);
        this.showCouponsTable = true;
    };
    MyPurchasedCouponsComponent.prototype.getAllPurchasedCouponsByType = function () {
        this._customerSpa.ajaxGetAllPurchasedCouponsByType(this.typeFilter);
        this.showCouponsTable = true;
    };
    MyPurchasedCouponsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-my-purchased-coupons',
            template: __webpack_require__(/*! ./my-purchased-coupons.component.html */ "./src/app/components/my-purchased-coupons/my-purchased-coupons.component.html"),
            styles: [__webpack_require__(/*! ./my-purchased-coupons.component.css */ "./src/app/components/my-purchased-coupons/my-purchased-coupons.component.css")]
        }),
        __metadata("design:paramtypes", [_services_customer_spa_service__WEBPACK_IMPORTED_MODULE_1__["CustomerSpaService"]])
    ], MyPurchasedCouponsComponent);
    return MyPurchasedCouponsComponent;
}());



/***/ }),

/***/ "./src/app/services/customer-spa.service.ts":
/*!**************************************************!*\
  !*** ./src/app/services/customer-spa.service.ts ***!
  \**************************************************/
/*! exports provided: CustomerSpaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerSpaService", function() { return CustomerSpaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/./Customer */ "./src/app/common/Customer.ts");
/* harmony import */ var _common_Coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/./Coupon */ "./src/app/common/Coupon.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CustomerSpaService = /** @class */ (function () {
    function CustomerSpaService(_http) {
        this._http = _http;
        this.customerToGet = new _common_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](0, "", "");
        this.allCouponsList = new Array();
        this.purchasedCouponsList = new Array();
        this.couponToGet = new _common_Coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"](0, "", null, null, 0, "", "", 0, "");
        this.showSmallTable = false;
        this.swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: true,
        });
    }
    CustomerSpaService.prototype.ajaxPurchaseCoupon = function (c) {
        var _this = this;
        this._http.post("http://localhost:8080/customer/purchasecoupon", c)
            .subscribe(function (resp) {
            _this.ajaxGetAllCoupons();
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CustomerSpaService.prototype.ajaxRemovePurchasedCoupon = function (c) {
        var _this = this;
        this._http.delete("http://localhost:8080/customer/removepurchasedcoupon", new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ body: c }))
            .subscribe(function (resp) {
            _this.ajaxGetAllPurchasedCoupons();
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CustomerSpaService.prototype.ajaxGetAllCoupons = function () {
        var _this = this;
        this._http.get("http://localhost:8080/customer/getallcoupons").subscribe(function (resp) {
            while (_this.allCouponsList.length > 0)
                _this.allCouponsList.pop();
            var tempList = resp.json();
            for (var _i = 0, tempList_1 = tempList; _i < tempList_1.length; _i++) {
                var item = tempList_1[_i];
                _this.allCouponsList.push(item);
            }
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CustomerSpaService.prototype.ajaxGetAllPurchasedCoupons = function () {
        var _this = this;
        this._http.get("http://localhost:8080/customer/getallpurchasedcoupons").subscribe(function (resp) {
            while (_this.purchasedCouponsList.length > 0)
                _this.purchasedCouponsList.pop();
            var tempList = resp.json();
            for (var _i = 0, tempList_2 = tempList; _i < tempList_2.length; _i++) {
                var item = tempList_2[_i];
                _this.purchasedCouponsList.push(item);
            }
            if (_this.purchasedCouponsList.length == 0) {
                _this.swalWithBootstrapButtons('You do not have any purchased coupons');
            }
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CustomerSpaService.prototype.ajaxGetAllPurchasedCouponsByType = function (couponType) {
        var _this = this;
        this._http.get("http://localhost:8080/customer/getallpurchasedcouponsbytype/" + couponType).subscribe(function (resp) {
            while (_this.purchasedCouponsList.length > 0)
                _this.purchasedCouponsList.pop();
            var tempList = resp.json();
            for (var _i = 0, tempList_3 = tempList; _i < tempList_3.length; _i++) {
                var item = tempList_3[_i];
                _this.purchasedCouponsList.push(item);
            }
            if (_this.purchasedCouponsList.length == 0) {
                _this.swalWithBootstrapButtons('You do not have purchased coupons of this type');
            }
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CustomerSpaService.prototype.ajaxGetAllPurchasedCouponsByTopPrice = function (couponTopPrice) {
        var _this = this;
        this._http.get("http://localhost:8080/customer/getallpurchasedcouponsbytopprice/" + couponTopPrice).subscribe(function (resp) {
            while (_this.purchasedCouponsList.length > 0)
                _this.purchasedCouponsList.pop();
            var tempList = resp.json();
            for (var _i = 0, tempList_4 = tempList; _i < tempList_4.length; _i++) {
                var item = tempList_4[_i];
                _this.purchasedCouponsList.push(item);
            }
            if (_this.purchasedCouponsList.length == 0) {
                _this.swalWithBootstrapButtons('You do not have purchased coupons below this price');
            }
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CustomerSpaService.prototype.ajaxGetMyDetails = function () {
        var _this = this;
        this._http.get("http://localhost:8080/customer/getmydetails/").subscribe(function (resp) {
            var tempCustomer = resp.json();
            _this.customerToGet.setId(tempCustomer.id);
            _this.customerToGet.setName(tempCustomer.name);
            _this.customerToGet.setPassword(tempCustomer.password);
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CustomerSpaService.prototype.ajaxLogOut = function (request, response) {
        var _this = this;
        this._http.post("http://localhost:8080/customer/logout/", request, response).subscribe(function (resp) {
            _this.swalWithBootstrapButtons({
                title: 'You have successfully logged out',
                type: 'info',
            });
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CustomerSpaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], CustomerSpaService);
    return CustomerSpaService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\workSpaces\AngularCouponSystem\customerwebapi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map