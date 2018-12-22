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

module.exports = "body {\r\n    background: url(\"https://images.pexels.com/photos/264507/pexels-photo-264507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940\");\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n#logout {\r\n    padding-top: 8px;\r\n    padding-right: 25px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnSUFBZ0k7SUFDaEksNkJBQTZCO0lBQzdCLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJvZHkge1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvMjY0NTA3L3BleGVscy1waG90by0yNjQ1MDcuanBlZz9hdXRvPWNvbXByZXNzJmNzPXRpbnlzcmdiJmRwcj0yJmg9NjUwJnc9OTQwXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuXHJcbiNsb2dvdXQge1xyXG4gICAgcGFkZGluZy10b3A6IDhweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbn1cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\n    <div class=\"navbar-header\">\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n        </button>\n    </div>\n    <div class=\"navbar-collapse collapse\">\n        <ul class=\"nav navbar-nav\">\n\n            <li>\n                <a routerLink=\"/\"> Home\n                    <span class=\"fa fa-home\"></span> &nbsp; </a>\n            </li>\n            <li>\n                <a routerLink=\"/mycoupons\"> My Company Coupons\n                    <span class=\"glyphicon glyphicon-th-list\"></span>&nbsp; </a>\n            </li>\n            <li>\n                <a routerLink=\"/mycompanydetails\"> My Company Details\n                    <span class=\"glyphicon glyphicon-copyright-mark\"></span>&nbsp; </a>\n            </li>\n            <li>\n                <a routerLink=\"/about\"> About\n                    <span class=\"fa fa-info-circle\"></span>\n                </a>\n            </li>\n        </ul>\n\n        <ul id=\"logout\" class=\"nav navbar-nav navbar-right\">\n            <li>\n                <button (click)=\"logout()\" class=\"btn btn-danger\">\n                    <b> Logout </b>\n                    <span class=\"fas fa-sign-out-alt\"></span>\n                </button>\n            </li>\n        </ul>\n    </div>\n</nav>\n\n<router-outlet></router-outlet>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_company_spa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/company-spa.service */ "./src/app/services/company-spa.service.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(_companySpa) {
        this._companySpa = _companySpa;
        this.title = 'companyWebApi';
    }
    AppComponent.prototype.logout = function () {
        // Moving to login page
        window.location.href = 'http://localhost:8080/';
        // Invalidates the user session
        this._companySpa.ajaxLogOut(this.request, this.response);
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_company_spa_service__WEBPACK_IMPORTED_MODULE_2__["CompanySpaService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_my_company_details_my_company_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/my-company-details/my-company-details.component */ "./src/app/components/my-company-details/my-company-details.component.ts");
/* harmony import */ var _components_my_coupons_my_coupons_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/my-coupons/my-coupons.component */ "./src/app/components/my-coupons/my-coupons.component.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _services_company_spa_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/company-spa.service */ "./src/app/services/company-spa.service.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_my_company_details_my_company_details_component__WEBPACK_IMPORTED_MODULE_7__["MyCompanyDetailsComponent"],
                _components_my_coupons_my_coupons_component__WEBPACK_IMPORTED_MODULE_8__["MyCouponsComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_4__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot([
                    {
                        path: 'mycompanydetails',
                        component: _components_my_company_details_my_company_details_component__WEBPACK_IMPORTED_MODULE_7__["MyCompanyDetailsComponent"],
                    },
                    {
                        path: 'mycoupons',
                        component: _components_my_coupons_my_coupons_component__WEBPACK_IMPORTED_MODULE_8__["MyCouponsComponent"],
                    },
                    {
                        path: 'about',
                        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                    },
                    {
                        path: '',
                        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_11__["HomeComponent"]
                    },
                ])
            ],
            providers: [_services_company_spa_service__WEBPACK_IMPORTED_MODULE_10__["CompanySpaService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_12__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_12__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/common/Company.ts":
/*!***********************************!*\
  !*** ./src/app/common/Company.ts ***!
  \***********************************/
/*! exports provided: Company */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Company", function() { return Company; });
var Company = /** @class */ (function () {
    function Company(id, name, password, email) {
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
    }
    Company.prototype.setId = function (id) {
        this.id = id;
    };
    Company.prototype.setName = function (name) {
        this.name = name;
    };
    Company.prototype.setPassword = function (password) {
        this.password = password;
    };
    Company.prototype.setEmail = function (email) {
        this.email = email;
    };
    return Company;
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

/***/ "./src/app/components/about/about.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/about/about.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\r\n    padding-bottom: 120px; \r\n    width: 90%\r\n}\r\n\r\n#leftimg {\r\n    width: 500px;\r\n    height: 500px; \r\n    border: 3px solid black;\r\n}\r\n\r\n#rightimg {\r\n    width: 900px; \r\n    height: 500px; \r\n    border: 3px solid black;\r\n}\r\n\r\n#footer {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    text-align: center;\r\n    margin-top: 750px;\r\n    right: 40%;\r\n    top: 40%;\r\n    bottom: 1px;\r\n    left: 40%;\r\n    padding: 0.5rem;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLFVBQVU7Q0FDYjs7QUFFRDtJQUNJLGFBQWE7SUFDYixjQUFjO0lBQ2Qsd0JBQXdCO0NBQzNCOztBQUVEO0lBQ0ksYUFBYTtJQUNiLGNBQWM7SUFDZCx3QkFBd0I7Q0FDM0I7O0FBRUQ7SUFDSSx5QkFBaUI7SUFBakIsaUJBQWlCO0lBQ2pCLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxZQUFZO0lBQ1osVUFBVTtJQUNWLGdCQUFnQjtDQUNuQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEyMHB4OyBcclxuICAgIHdpZHRoOiA5MCVcclxufVxyXG5cclxuI2xlZnRpbWcge1xyXG4gICAgd2lkdGg6IDUwMHB4O1xyXG4gICAgaGVpZ2h0OiA1MDBweDsgXHJcbiAgICBib3JkZXI6IDNweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuI3JpZ2h0aW1nIHtcclxuICAgIHdpZHRoOiA5MDBweDsgXHJcbiAgICBoZWlnaHQ6IDUwMHB4OyBcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4jZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiBzdGlja3k7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiA3NTBweDtcclxuICAgIHJpZ2h0OiA0MCU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGJvdHRvbTogMXB4O1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/about/about.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/about/about.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<br>\n<br>\n\n<div class=\"container\" id=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-5\">\n            <p>\n                <img src=\"../../../company/assets/‏‏project.PNG\" id=\"leftimg\">\n            </p>\n        </div>\n\n        <div class=\"col-md-5\">\n            <p>\n                <img src=\"../../../company/assets/alon.PNG\" id=\"rightimg\">\n            </p>\n        </div>\n    </div>\n\n    <div id=\"footer\" class=\"panel panel-info\">\n        <div class=\"panel-heading\">\n            <span style=\"font-size: 18px\">\n                <strong>Contact us:&nbsp; </strong>\n            </span>\n            <a class=\"btn fab fa-facebook fa-2x\" href=\"https://www.facebook.com/tamarcovich\"></a>\n            <a class=\"btn fab fa-linkedin fa-2x\" href=\"https://www.linkedin.com/in/alon-samet/\"></a>\n            <a class=\"btn fas fa-envelope fa-2x\" href=\"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alonkale@gmail.com&shva=1\"></a>\n        </div>\n        <div class=\"panel-body\">\n            Powered by\n            <strong>\n                <i> Alon Samet </i>\n                <br>\n            </strong>\n            <h6> © All Rights Reserved </h6>\n        </div>\n        <br>\n    </div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/components/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/components/about/about.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#container {\r\n    padding-bottom: 120px;\r\n}\r\n\r\n#welcome {\r\n    padding-bottom: 70px;\r\n}\r\n\r\n#shadow {\r\n    text-shadow: -4px 4px 3px #999;\r\n}\r\n\r\n#row {\r\n    position: relative;\r\n    padding-left: 33%; \r\n}\r\n\r\n#img {\r\n    position: absolute;\r\n    margin-top: 300px;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n    transform: translate(-50%,-50%);\r\n    width: 1000px; \r\n    height: 750px;\r\n}\r\n\r\n#footer {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    text-align: center;\r\n    margin-top: 750px;\r\n    right: 40%;\r\n    top: 40%;\r\n    bottom: 1px;\r\n    left: 40%;\r\n    padding: 0.5rem;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLHFCQUFxQjtDQUN4Qjs7QUFFRDtJQUNJLCtCQUErQjtDQUNsQzs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixTQUFTO0lBQ1Qsd0NBQXdDO0lBRXhDLGdDQUFnQztJQUNoQyxjQUFjO0lBQ2QsY0FBYztDQUNqQjs7QUFFRDtJQUNJLHlCQUFpQjtJQUFqQixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNjb250YWluZXIge1xyXG4gICAgcGFkZGluZy1ib3R0b206IDEyMHB4O1xyXG59XHJcblxyXG4jd2VsY29tZSB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogNzBweDtcclxufVxyXG5cclxuI3NoYWRvdyB7XHJcbiAgICB0ZXh0LXNoYWRvdzogLTRweCA0cHggM3B4ICM5OTk7XHJcbn1cclxuXHJcbiNyb3cge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMyU7IFxyXG59XHJcblxyXG4jaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIG1hcmdpbi10b3A6IDMwMHB4O1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbiAgICB3aWR0aDogMTAwMHB4OyBcclxuICAgIGhlaWdodDogNzUwcHg7XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbi10b3A6IDc1MHB4O1xyXG4gICAgcmlnaHQ6IDQwJTtcclxuICAgIHRvcDogNDAlO1xyXG4gICAgYm90dG9tOiAxcHg7XHJcbiAgICBsZWZ0OiA0MCU7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW07XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<br>\n<div class=\"container\" id=\"container\">\n  <div class=\"row\" id=\"welcome\">\n    <h4 id=\"shadow\">\n      <b> Hi\n        <i>\"{{companyToGet.name}}</i>\", </b> you are logged-in!\n    </h4>\n  </div>\n\n  <div class=\"row\" id=\"row\">\n    <img src=\"../../../company/assets/‏‏company.PNG\" id=\"img\">\n  </div>\n</div>\n\n\n<div id=\"footer\" class=\"panel panel-info\">\n  <div class=\"panel-heading\">\n    <span style=\"font-size: 18px\">\n      <strong>Contact us:&nbsp; </strong>\n    </span>\n    <a class=\"btn fab fa-facebook fa-2x\" href=\"https://www.facebook.com/tamarcovich\"></a>\n    <a class=\"btn fab fa-linkedin fa-2x\" href=\"https://www.linkedin.com/in/alon-samet/\"></a>\n    <a class=\"btn fas fa-envelope fa-2x\" href=\"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alonkale@gmail.com&shva=1\"></a>\n  </div>\n  <div class=\"panel-body\">\n    Powered by\n    <strong>\n      <i> Alon Samet </i>\n      <br>\n    </strong>\n    <h6> © All Rights Reserved </h6>\n  </div>\n  <br>\n</div>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/Company */ "./src/app/common/Company.ts");
/* harmony import */ var _services_company_spa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/company-spa.service */ "./src/app/services/company-spa.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(_companySpa) {
        this._companySpa = _companySpa;
        this.companyToGet = new _common_Company__WEBPACK_IMPORTED_MODULE_2__["Company"](0, "", "", "");
        this.companyToGet = this._companySpa.companyToGet;
    }
    HomeComponent.prototype.ngOnInit = function () {
        this._companySpa.ajaxGetMyCompanyDetails();
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_company_spa_service__WEBPACK_IMPORTED_MODULE_3__["CompanySpaService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/my-company-details/my-company-details.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/components/my-company-details/my-company-details.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th, td {\r\n    text-align: center; \r\n    line-height: 35px;\r\n}\r\n\r\n#centerh {\r\n    text-align: center;\r\n}\r\n\r\n#details {\r\n    margin-left: 300px; \r\n    margin-right: 300px; \r\n    align-items:center;\r\n}\r\n\r\n#footer {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    margin-top: 750px  ;\r\n    right: 40%;\r\n    top: 40%;\r\n    bottom: 1px;\r\n    left: 40%;\r\n    padding: 0.5rem;\r\n    text-align: center\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1jb21wYW55LWRldGFpbHMvbXktY29tcGFueS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksbUJBQW1CO0NBQ3RCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLG9CQUFvQjtJQUNwQixtQkFBbUI7Q0FDdEI7O0FBRUQ7SUFDSSx5QkFBaUI7SUFBakIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtDQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXktY29tcGFueS1kZXRhaWxzL215LWNvbXBhbnktZGV0YWlscy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidGgsIHRkIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgXHJcbiAgICBsaW5lLWhlaWdodDogMzVweDtcclxufVxyXG5cclxuI2NlbnRlcmgge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jZGV0YWlscyB7XHJcbiAgICBtYXJnaW4tbGVmdDogMzAwcHg7IFxyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMDBweDsgXHJcbiAgICBhbGlnbi1pdGVtczpjZW50ZXI7XHJcbn1cclxuXHJcbiNmb290ZXIge1xyXG4gICAgcG9zaXRpb246IHN0aWNreTtcclxuICAgIG1hcmdpbi10b3A6IDc1MHB4ICA7XHJcbiAgICByaWdodDogNDAlO1xyXG4gICAgdG9wOiA0MCU7XHJcbiAgICBib3R0b206IDFweDtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIHBhZGRpbmc6IDAuNXJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlclxyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/my-company-details/my-company-details.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/components/my-company-details/my-company-details.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<h3 id=\"centerh\">\n    <span class=\"label label-success\"> My Company Details </span>\n</h3>\n<br>\n<br>\n<br>\n\n<div id=\"details\">\n    <table border=\"1\" class=\"table table-striped table-bordered\">\n        <tr>\n            <th> ID </th>\n            <th> Name </th>\n            <th> Password </th>\n            <th> Email </th>\n        </tr>\n        <tr>\n            <td> {{companyToGet.id}} </td>\n            <td> {{companyToGet.name}} </td>\n            <td> {{companyToGet.password}} </td>\n            <td> {{companyToGet.email}} </td>\n        </tr>\n    </table>\n</div>\n\n<div id=\"footer\" class=\"panel panel-info\">\n  <div class=\"panel-heading\">\n    <span style=\"font-size: 18px\">\n      <strong>Contact us:&nbsp; </strong>\n    </span>\n    <a class=\"btn fab fa-facebook fa-2x\" href=\"https://www.facebook.com/tamarcovich\"></a>\n    <a class=\"btn fab fa-linkedin fa-2x\" href=\"https://www.linkedin.com/in/alon-samet/\"></a>\n    <a class=\"btn fas fa-envelope fa-2x\" href=\"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alonkale@gmail.com&shva=1\"></a>\n  </div>\n  <div class=\"panel-body\">\n    Powered by\n    <strong>\n      <i> Alon Samet </i>\n      <br>\n    </strong>\n    <h6> © All Rights Reserved </h6>\n  </div>\n  <br>\n</div>"

/***/ }),

/***/ "./src/app/components/my-company-details/my-company-details.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/components/my-company-details/my-company-details.component.ts ***!
  \*******************************************************************************/
/*! exports provided: MyCompanyDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCompanyDetailsComponent", function() { return MyCompanyDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_company_spa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/company-spa.service */ "./src/app/services/company-spa.service.ts");
/* harmony import */ var _common_Company__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/./Company */ "./src/app/common/Company.ts");




var MyCompanyDetailsComponent = /** @class */ (function () {
    function MyCompanyDetailsComponent(_companySpa) {
        this._companySpa = _companySpa;
        this.companyToGet = new _common_Company__WEBPACK_IMPORTED_MODULE_3__["Company"](0, "", "", "");
        this.companyToGet = this._companySpa.companyToGet;
    }
    MyCompanyDetailsComponent.prototype.ngOnInit = function () {
        this._companySpa.ajaxGetMyCompanyDetails();
    };
    MyCompanyDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-company-details',
            template: __webpack_require__(/*! ./my-company-details.component.html */ "./src/app/components/my-company-details/my-company-details.component.html"),
            styles: [__webpack_require__(/*! ./my-company-details.component.css */ "./src/app/components/my-company-details/my-company-details.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_company_spa_service__WEBPACK_IMPORTED_MODULE_2__["CompanySpaService"]])
    ], MyCompanyDetailsComponent);
    return MyCompanyDetailsComponent;
}());



/***/ }),

/***/ "./src/app/components/my-coupons/my-coupons.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/my-coupons/my-coupons.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th, td {\r\n    text-align: center; \r\n    vertical-align: middle;\r\n}\r\n\r\n#container {\r\n    padding-bottom:120px; \r\n    padding-left: 100px; \r\n    width: 90%;\r\n}\r\n\r\n#create {\r\n    text-align: center; \r\n    padding-bottom:5px; \r\n    background: linear-gradient(rgba(24, 132, 233, 0.2), white); \r\n}\r\n\r\n#get {\r\n    text-align: center;\r\n    padding-bottom:468px; \r\n    background: linear-gradient(rgba(26, 223, 131, 0.356), white);\r\n}\r\n\r\n#getinput {\r\n    text-align:center; \r\n    width: 220px; \r\n    margin-left: 20%;\r\n}\r\n\r\n#smtablea {\r\n    align-items:center;\r\n    width:50px; \r\n    height: 50px; \r\n}\r\n\r\n#smtableb {\r\n    position: relative;\r\n}\r\n\r\n#back {\r\n    text-align:center; \r\n    margin-top: 130px;\r\n}\r\n\r\n#update {\r\n    text-align:center; \r\n    padding-bottom:400px; \r\n    background: linear-gradient(rgba(255,152,0,0.2), white);\r\n}\r\n\r\n#centerh {\r\n    text-align: center;\r\n}\r\n\r\n#centerv {\r\n    vertical-align:middle;\r\n}\r\n\r\n#left {\r\n    text-align: left; \r\n}\r\n\r\n#getby {\r\n    text-align:center;\r\n    width: 300px; \r\n    margin-left:41%; \r\n}\r\n\r\n#footer {\r\n    position: unset;\r\n    text-align: center;\r\n    right: 40%;\r\n    top: 40%;\r\n    bottom: 1px;\r\n    left: 40%;\r\n    padding: 0.5rem;\r\n}\r\n\r\n#contact {\r\n    font-size: 18px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9teS1jb3Vwb25zL215LWNvdXBvbnMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxxQkFBcUI7SUFDckIsb0JBQW9CO0lBQ3BCLFdBQVc7Q0FDZDs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsNERBQTREO0NBQy9EOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLHFCQUFxQjtJQUNyQiw4REFBOEQ7Q0FDakU7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7Q0FDckI7O0FBRUQ7SUFDSSxrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLHdEQUF3RDtDQUMzRDs7QUFFRDtJQUNJLG1CQUFtQjtDQUN0Qjs7QUFFRDtJQUNJLHNCQUFzQjtDQUN6Qjs7QUFFRDtJQUNJLGlCQUFpQjtDQUNwQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsU0FBUztJQUNULFlBQVk7SUFDWixVQUFVO0lBQ1YsZ0JBQWdCO0NBQ25COztBQUVEO0lBQ0ksZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9teS1jb3Vwb25zL215LWNvdXBvbnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbInRoLCB0ZCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IFxyXG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG5cclxuI2NvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nLWJvdHRvbToxMjBweDsgXHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwMHB4OyBcclxuICAgIHdpZHRoOiA5MCU7XHJcbn1cclxuXHJcbiNjcmVhdGUge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyBcclxuICAgIHBhZGRpbmctYm90dG9tOjVweDsgXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNCwgMTMyLCAyMzMsIDAuMiksIHdoaXRlKTsgXHJcbn1cclxuXHJcbiNnZXQge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy1ib3R0b206NDY4cHg7IFxyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHJnYmEoMjYsIDIyMywgMTMxLCAwLjM1NiksIHdoaXRlKTtcclxufVxyXG5cclxuI2dldGlucHV0IHtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyOyBcclxuICAgIHdpZHRoOiAyMjBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDogMjAlO1xyXG59XHJcblxyXG4jc210YWJsZWEge1xyXG4gICAgYWxpZ24taXRlbXM6Y2VudGVyO1xyXG4gICAgd2lkdGg6NTBweDsgXHJcbiAgICBoZWlnaHQ6IDUwcHg7IFxyXG59XHJcblxyXG4jc210YWJsZWIge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4jYmFjayB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjsgXHJcbiAgICBtYXJnaW4tdG9wOiAxMzBweDtcclxufVxyXG5cclxuI3VwZGF0ZSB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjsgXHJcbiAgICBwYWRkaW5nLWJvdHRvbTo0MDBweDsgXHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQocmdiYSgyNTUsMTUyLDAsMC4yKSwgd2hpdGUpO1xyXG59XHJcblxyXG4jY2VudGVyaCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbiNjZW50ZXJ2IHtcclxuICAgIHZlcnRpY2FsLWFsaWduOm1pZGRsZTtcclxufVxyXG5cclxuI2xlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDsgXHJcbn1cclxuXHJcbiNnZXRieSB7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxuICAgIHdpZHRoOiAzMDBweDsgXHJcbiAgICBtYXJnaW4tbGVmdDo0MSU7IFxyXG59XHJcblxyXG4jZm9vdGVyIHtcclxuICAgIHBvc2l0aW9uOiB1bnNldDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHJpZ2h0OiA0MCU7XHJcbiAgICB0b3A6IDQwJTtcclxuICAgIGJvdHRvbTogMXB4O1xyXG4gICAgbGVmdDogNDAlO1xyXG4gICAgcGFkZGluZzogMC41cmVtO1xyXG59XHJcblxyXG4jY29udGFjdCB7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/my-coupons/my-coupons.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/my-coupons/my-coupons.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\n<br>\n<br>\n<h3 id=\"centerh\">\n    <span class=\"label label-success\"> My Coupons Table </span>\n</h3>\n<br>\n\n\n<!-- Coupons table filter buttons  -->\n<div class=\"form-group\" id=\"centerh\">\n    <label> Please choose which coupons to show on table: </label>\n</div>\n<div id=\"centerh\">\n    <button class=\"btn btn-success\" (click)=\"getAllCoupons()\"> Show All Coupons </button> &nbsp;\n    <button class=\"btn btn-success\" (click)=\"showEndDateInputForm()\"> By End Date </button> &nbsp;\n    <button class=\"btn btn-success\" (click)=\"showTopPriceInputForm()\"> By Top Price </button> &nbsp;\n    <button class=\"btn btn-success\" (click)=\"showTypeInputForm()\"> By Type </button>\n</div>\n<br>\n\n<!-- Coupons by *end date* input form filter -->\n<div *ngIf=\"showEndDateInputFormBool\" id=\"getby\" class=\"form-group\">\n    <label>\n        <b> Please select coupons end date: </b>\n    </label>\n    <input type=\"date\" [(ngModel)]=\"endDateFilter\" class=\"form-control\">\n    <br>\n    <br>\n    <button class=\"btn btn-primary\" (click)=\"getMyCouponsByEndDate()\"> Show Coupons Table! </button>\n</div>\n\n<!-- Coupons by *top price* input form filter -->\n<div *ngIf=\"showTopPriceInputFormBool\" id=\"getby\" class=\"form-group\">\n    <label>\n        <b> Please select coupons top price: </b>\n    </label>\n    <input type=\"number\" [(ngModel)]=\"topPriceFilter\" class=\"form-control\" id=\"centerh\">\n    <br>\n    <br>\n    <button class=\"btn btn-primary\" (click)=\"getMyCouponsByTopPrice()\"> Show Coupons Table! </button>\n</div>\n\n<!-- Coupons by *type* input form filter -->\n<div *ngIf=\"showTypeInputFormBool\" id=\"getby\" class=\"form-group\">\n    <label> Please select coupons type: </label>\n    <select [(ngModel)]=\"typeFilter\" class=\"form-control\">\n        <option value=\"\" disabled=\"disabled\" selected=\"selected\"> Please select Type </option>\n        <option value=\"FOOD\"> Food </option>\n        <option value=\"ELECTRICITY\"> Electricity</option>\n        <option value=\"HOBBY\"> Hobby </option>\n        <option value=\"VACATION\"> Vacation </option>\n    </select>\n    <br>\n    <br>\n    <button class=\"btn btn-primary\" (click)=\"getMyCouponsByType()\"> Show Coupons Table! </button>\n</div>\n\n<br>\n\n<!-- Get table of coupons -->\n<table *ngIf=\"showCouponsTable\" border=\"1\" class=\"table table-striped table-bordered\">\n    <tr>\n        <th> ID </th>\n        <th> Title </th>\n        <th> Start Date </th>\n        <th> End Date </th>\n        <th> Amount </th>\n        <th> Type </th>\n        <th> Details </th>\n        <th> Price (NIS) </th>\n        <th> Image </th>\n        <th> Delete </th>\n        <th> Edit </th>\n\n    </tr>\n    <!-- Get coupons data into table -->\n    <tr *ngFor=\"let c of couponsList; let i = index\">\n\n        <td> {{c.id}} </td>\n        <td> {{c.title}} </td>\n        <td> {{c.startDate}} </td>\n        <td> {{c.endDate}} </td>\n        <td> {{c.amount}} </td>\n        <td> {{c.couponType}} </td>\n        <td> {{c.message}} </td>\n        <td> {{c.price}} </td>\n        <td>\n            <img [src]=c.image class=\"img-rounded\" width=\"80\" height=\"50\">\n        </td>\n        <td>\n            <button class=\"btn btn-danger glyphicon glyphicon-trash\" (click)=\"removeCoupon(i)\">\n            </button>\n        </td>\n        <td>\n            <button class=\"btn btn-warning glyphicon glyphicon-pencil\" (click)=\"showUpdateCoupon(i)\">\n            </button>\n        </td>\n\n    </tr>\n</table>\n\n<br>\n<br>\n<br>\n\n<div class=\"container\" id=\"container\">\n    <div class=\"row\">\n        <div class=\"col-md-3\" id=\"create\">\n            <!-- Create coupon -->\n            <br>\n            <br>\n            <h2>\n                <span class=\"label label-default\"> &nbsp; Create New Coupon &nbsp;\n                    <span id=\"centerv\" class=\"fas fa-folder-plus\"></span> &nbsp;\n                </span>\n            </h2>\n            <br>\n            <br>\n            <br>\n            <div id=\"centerh\">\n                <span>\n                    <b> Please insert new coupon details: </b>\n                </span>\n                <br>\n                <br>\n                <br>\n\n                <div id=\"left\" class=\"form-group\">\n                    <label> Title: </label>\n                    <input type=\"text\" [(ngModel)]=\"newCoupon.title\" class=\"form-control\" placeholder=\"Please enter coupon details\">\n                </div>\n\n                <div class=\"form-group\" id=\"left\">\n                    <label> Start Date: </label>\n                    <input id=\"centerh\" type=\"date\" [(ngModel)]=\"newCoupon.startDate\" class=\"form-control\">\n                </div>\n\n                <div class=\"form-group\" id=\"left\">\n                    <label> End Date: </label>\n                    <input type=\"date\" id=\"centerh\" [(ngModel)]=\"newCoupon.endDate\" class=\"form-control\">\n                </div>\n\n                <div class=\"form-group\" id=\"left\">\n                    <label> Amount: </label>\n                    <input type=\"number\" id=\"centerh\" [(ngModel)]=\"newCoupon.amount\" class=\"form-control\">\n                </div>\n\n                <div class=\"form-group\" id=\"left\">\n                    <label> Type: </label>\n                    <select [(ngModel)]=\"newCoupon.couponType\" class=\"form-control\">\n                        <option value=\"\" disabled=\"disabled\" selected=\"selected\"> Please select Type </option>\n                        <option value=\"FOOD\"> Food </option>\n                        <option value=\"ELECTRICITY\"> Electricity</option>\n                        <option value=\"HOBBY\"> Hobby </option>\n                        <option value=\"VACATION\"> Vacation </option>\n                    </select>\n                </div>\n\n                <div class=\"form-group\" id=\"left\">\n                    <label> Details: </label>\n                    <input type=\"text\" [(ngModel)]=\"newCoupon.message\" class=\"form-control\" id=\"detailstxt\" placeholder=\"Please enter coupon details\">\n                </div>\n\n                <div class=\"form-group\" id=\"left\">\n                    <label> Price: </label>\n                    <input type=\"number\" id=\"centerh\" [(ngModel)]=\"newCoupon.price\" class=\"form-control\">\n                </div>\n\n                <div class=\"form-group\" id=\"left\">\n                    <label> Image URL: </label>\n                    <input type=\"text\" [(ngModel)]=\"newCoupon.image\" class=\"form-control\" placeholder=\"Please enter image URL\">\n                </div>\n                <br>\n\n                <div id=\"centerh\">\n                    <button class=\"btn btn-primary\" (click)=\"createCoupon()\">\n                        <b> Creat New Coupon! </b>\n                    </button>\n                </div>\n                <br>\n                <br>\n                <br>\n            </div>\n        </div>\n\n        <!-- Gap between columns -->\n        <div class=\"col-md-1\">\n        </div>\n\n        <!-- form: Get single coupon -->\n        <div class=\"col-md-3\" id=\"get\">\n            <br>\n            <br>\n            <h2>\n                <span class=\"label label-default\">&nbsp; Get Coupon &nbsp;\n                    <span id=\"centerv\" class=\"far fa-folder-open\"></span> &nbsp;\n                </span>\n            </h2>\n            <br>\n            <br>\n\n            <div *ngIf=\"showGetButtons\" class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\" id=\"centerh\">\n                <h4>\n                    <b> Please select one of the options:</b>\n                </h4>\n                <br>\n                <br>\n                <label class=\"btn btn-group active\">\n                    <div id=\"centerh\">\n                        <div (click)=\"showGetInputById()\">\n                            <input type=\"radio\">\n                            <h4>\n                                <b> Get Coupon By ID </b>\n                            </h4>\n                        </div>\n                    </div>\n                </label>\n                <br>\n                <br>\n                <br>\n\n                <label class=\"btn btn-group active\">\n                    <div (click)=\"showGetInputByTitle()\">\n                        <input type=\"radio\">\n                        <h4>\n                            <b> Get Coupon By Title </b>\n                        </h4>\n                    </div>\n                </label>\n                <br>\n                <br>\n                <br>\n            </div>\n\n            <div *ngIf=\"showGetInputByIdBool\">\n                <span>\n                    <b> Please insert coupon id: </b>\n                </span>\n                <br>\n                <br>\n                <input type=\"number\" id=\"getinput\" class=\"form-control\" [(ngModel)]=\"couponToGet.id\" size=\"25px\" name=\"idtxt\" placeholder=\"Enter coupon id\">\n                <br>\n                <br>\n                <br>\n                <button class=\"btn btn-primary\" id=\"centerh\" (click)=\"getCouponById()\">\n                    <b> Get Coupon! </b>\n                </button>\n                <br>\n                <br>\n            </div>\n\n            <div *ngIf=\"showGetInputByTitleBool\">\n                <span>\n                    <b> Please insert coupon title: </b>\n                </span>\n                <br>\n                <br>\n                <input type=\"text\" size=\"20\" id=\"getinput\" class=\"form-control\" [(ngModel)]=\"couponToGet.title\" name=\"titletxt\" placeholder=\"Enter coupon title\">\n                <br>\n                <br>\n                <br>\n                <button class=\"btn btn-primary\" (click)=\"getCouponByTitle()\">\n                    <b> Get Coupon! </b>\n                </button>\n                <br>\n                <br>\n            </div>\n            <br>\n\n\n            <!-- Small table of selected coupon -->\n            <div id=\"smtable\">\n                <br>\n                <table *ngIf=\"_companySpa.showSmallTable\" border=\"1\" id=\"smtableb\" class=\"table table-striped table-bordered\">\n                    <tr>\n                        <th>\n                            <small> ID </small>\n                        </th>\n                        <th>\n                            <small> Title </small>\n                        </th>\n                        <th>\n                            <small> Start Date </small>\n                        </th>\n                        <th>\n                            <small> End Date </small>\n                        </th>\n                        <th>\n                            <small> Amount </small>\n                        </th>\n                    </tr>\n                    <tr>\n                        <td>\n                            <small> {{couponToGet.id}} </small>\n                        </td>\n                        <td>\n                            <small> {{couponToGet.title}} </small>\n                        </td>\n                        <td>\n                            <small> {{couponToGet.startDate}} </small>\n                        </td>\n                        <td>\n                            <small> {{couponToGet.endDate}} </small>\n                        </td>\n                        <td>\n                            <small> {{couponToGet.amount}} </small>\n                        </td>\n                    </tr>\n                    <br>\n                    <tr>\n                        <th>\n                            <small> Type </small>\n                        </th>\n                        <th>\n                            <small> Details </small>\n                        </th>\n                        <th>\n                            <small> Price </small>\n                        </th>\n                        <th>\n                            <small> Image </small>\n                        </th>\n                    </tr>\n                    <tr>\n                        <td>\n                            <small> {{couponToGet.couponType}} </small>\n                        </td>\n                        <td>\n                            <small> {{couponToGet.message}} </small>\n                        </td>\n                        <td>\n                            <small> {{couponToGet.price}} </small>\n                        </td>\n                        <td>\n                            <img [src]=couponToGet.image class=\"img-rounded\" width=\"80\" height=\"50\">\n                        </td>\n                    </tr>\n                </table>\n            </div>\n            <br>\n            <br>\n            <!-- Back button -->\n            <div *ngIf=\"showGetDetails\" id=\"back\">\n                <br>\n                <br>\n                <button class=\"btn\" (click)=\"backToGetButtons()\">\n                    <b> Back &nbsp;\n                        <span class=\"glyphicon glyphicon-arrow-left\"></span>\n                    </b>\n                </button>\n                <br>\n            </div>\n            <br>\n            <br>\n            <br>\n        </div>\n\n        <!-- Gap between columns -->\n        <div class=\"col-md-1\">\n        </div>\n\n        <!--  form: Update coupon (Company can update only its coupon's price & end date)  -->\n        <div class=\"col-md-3\" *ngIf=\"showUpdateBool\" id=\"update\">\n            <br>\n            <br>\n            <h2>\n                <span class=\"label label-default\"> &nbsp; Update Coupon &nbsp;\n                    <span style=\"vertical-align: middle\" class=\"far fa-edit\"></span> &nbsp;\n                </span>\n            </h2>\n            <br>\n            <br>\n            <br>\n\n            <h4>\n                <span class=\"label label-warning\"> Update details of the coupon \"{{updatedCoupon.title}}\": </span>\n            </h4>\n            <br>\n            <div id=\"left\" class=\"form-group\">\n                <label> End Date: </label>\n                <input id=\"centerh\" type=\"date\" [(ngModel)]=\"updatedCoupon.endDate\" class=\"form-control\">\n            </div>\n\n            <div id=\"left\" class=\"form-group\">\n                <label> Price: </label>\n                <input id=\"centerh\" type=\"number\" [(ngModel)]=\"updatedCoupon.price\" class=\"form-control\">\n            </div>\n            <br>\n            <br>\n            <br>\n\n            <button class=\"btn btn-primary\" (click)=\"updateCoupon()\">\n                <b> Update Coupon! </b>\n            </button>\n\n            <br>\n            <br>\n            <br>\n            <br>\n            <br>\n        </div>\n    </div>\n</div>\n\n<div id=\"footer\" class=\"panel panel-info\">\n    <div class=\"panel-heading\">\n        <span id=\"contact\">\n            <strong>Contact us:&nbsp; </strong>\n        </span>\n        <a class=\"btn fab fa-facebook fa-2x\" href=\"https://www.facebook.com/tamarcovich\"></a>\n        <a class=\"btn fab fa-linkedin fa-2x\" href=\"https://www.linkedin.com/in/alon-samet/\"></a>\n        <a class=\"btn fas fa-envelope fa-2x\" href=\"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alonkale@gmail.com&shva=1\"></a>\n    </div>\n    <div class=\"panel-body\">\n        Powered by\n        <strong>\n            <i> Alon Samet </i>\n            <br>\n        </strong>\n        <h6> © All Rights Reserved </h6>\n    </div>\n    <br>\n</div>"

/***/ }),

/***/ "./src/app/components/my-coupons/my-coupons.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/my-coupons/my-coupons.component.ts ***!
  \***************************************************************/
/*! exports provided: MyCouponsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyCouponsComponent", function() { return MyCouponsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Coupon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/./Coupon */ "./src/app/common/Coupon.ts");
/* harmony import */ var _services_company_spa_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/company-spa.service */ "./src/app/services/company-spa.service.ts");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_4__);





var MyCouponsComponent = /** @class */ (function () {
    function MyCouponsComponent(_companySpa) {
        this._companySpa = _companySpa;
        this.couponsList = new Array();
        this.newCoupon = new _common_Coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"](0, "", null, null, 0, "", "", 0, "");
        this.updatedCoupon = new _common_Coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"](0, "", null, null, 0, "", "", 0, "");
        this.couponToGet = new _common_Coupon__WEBPACK_IMPORTED_MODULE_2__["Coupon"](0, "", null, null, 0, "", "", 0, "");
        this.endDateFilter = null;
        this.topPriceFilter = 0;
        //ngIf boolean variables:
        this.showUpdateBool = false;
        this.showGetButtons = true;
        this.showGetInputByIdBool = false;
        this.showGetInputByTitleBool = false;
        this.showGetDetails = false;
        this.showCouponsTable = false;
        this.showEndDateInputFormBool = false;
        this.showTopPriceInputFormBool = false;
        this.showTypeInputFormBool = false;
        this.couponsList = this._companySpa.couponsList;
        this.couponToGet = this._companySpa.couponToGet; // now those two coupons points on the same object in memory
    }
    MyCouponsComponent.prototype.ngOnInit = function () {
        this.showCouponsTable = true;
        this._companySpa.ajaxGetAllCoupons();
    };
    MyCouponsComponent.prototype.getAllCoupons = function () {
        this._companySpa.ajaxGetAllCoupons();
        this.showEndDateInputFormBool = false;
        this.showTopPriceInputFormBool = false;
        this.showTypeInputFormBool = false;
        this.showCouponsTable = true;
    };
    MyCouponsComponent.prototype.showEndDateInputForm = function () {
        this.showCouponsTable = false;
        this.showEndDateInputFormBool = true;
        this.showTopPriceInputFormBool = false;
        this.showTypeInputFormBool = false;
    };
    MyCouponsComponent.prototype.showTopPriceInputForm = function () {
        this.showCouponsTable = false;
        this.showEndDateInputFormBool = false;
        this.showTopPriceInputFormBool = true;
        this.showTypeInputFormBool = false;
    };
    MyCouponsComponent.prototype.showTypeInputForm = function () {
        this.showCouponsTable = false;
        this.showEndDateInputFormBool = false;
        this.showTopPriceInputFormBool = false;
        this.showTypeInputFormBool = true;
    };
    MyCouponsComponent.prototype.getMyCouponsByEndDate = function () {
        console.log("endDateFilter:  " + this.endDateFilter);
        this._companySpa.ajaxGetMyCouponsByEndDate(this.endDateFilter);
        this.showCouponsTable = true;
    };
    MyCouponsComponent.prototype.getMyCouponsByTopPrice = function () {
        this._companySpa.ajaxGetMyCouponsByTopPrice(this.topPriceFilter);
        this.showCouponsTable = true;
    };
    MyCouponsComponent.prototype.getMyCouponsByType = function () {
        this._companySpa.ajaxGetMyCouponsByType(this.typeFilter);
        this.showCouponsTable = true;
    };
    MyCouponsComponent.prototype.createCoupon = function (index) {
        var _this = this;
        // sweet alert
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: true,
        });
        swalWithBootstrapButtons({
            title: 'Create New Coupon?',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // call ajax method in service
                _this._companySpa.ajaxCreateCoupon(_this.newCoupon);
                swalWithBootstrapButtons('The new coupon "' + _this.newCoupon.title + '" was created !');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) { }
        });
    };
    MyCouponsComponent.prototype.removeCoupon = function (index) {
        var _this = this;
        // sweet alert
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: true,
        });
        swalWithBootstrapButtons({
            title: 'Are you sure you want to delete the coupon "' + this.couponsList[index].title + '" ?',
            text: "You won't be able to revert this !",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete this coupon',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // call ajax method in service
                _this._companySpa.ajaxRemoveCoupon(_this.couponsList[index]);
                swalWithBootstrapButtons('The coupon "' + _this.couponsList[index].title + '"  was deleted!');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) { }
        });
    };
    MyCouponsComponent.prototype.updateCoupon = function () {
        var _this = this;
        // sweet alert
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: true,
        });
        swalWithBootstrapButtons({
            title: 'Update details of the coupon "' + this.updatedCoupon.title + '" ?',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // call ajax method in service
                _this._companySpa.ajaxUpdateCoupon(_this.updatedCoupon);
                swalWithBootstrapButtons('The coupon "' + _this.updatedCoupon.title + '" Was Updated!');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.DismissReason.cancel) { }
        });
    };
    MyCouponsComponent.prototype.getCouponById = function () {
        this._companySpa.ajaxGetCouponById(this.couponToGet.id);
    };
    MyCouponsComponent.prototype.getCouponByTitle = function () {
        this._companySpa.ajaxGetCouponByTitle(this.couponToGet.title);
    };
    // ****************************************************
    // ************* methods for ngIf tags: ***************
    // ****************************************************
    MyCouponsComponent.prototype.showUpdateCoupon = function (i) {
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
    };
    MyCouponsComponent.prototype.showGetInputById = function () {
        this.showGetButtons = false;
        this.showGetInputByIdBool = true;
        this.showGetDetails = true;
    };
    MyCouponsComponent.prototype.showGetInputByTitle = function () {
        this.showGetButtons = false;
        this.showGetInputByTitleBool = true;
        this.showGetDetails = true;
    };
    MyCouponsComponent.prototype.backToGetButtons = function () {
        this._companySpa.showSmallTable = false;
        this.showGetInputByTitleBool = false;
        this.showGetInputByIdBool = false;
        this.showGetDetails = false;
        this.showGetButtons = true;
    };
    MyCouponsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-coupons',
            template: __webpack_require__(/*! ./my-coupons.component.html */ "./src/app/components/my-coupons/my-coupons.component.html"),
            styles: [__webpack_require__(/*! ./my-coupons.component.css */ "./src/app/components/my-coupons/my-coupons.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_company_spa_service__WEBPACK_IMPORTED_MODULE_3__["CompanySpaService"]])
    ], MyCouponsComponent);
    return MyCouponsComponent;
}());



/***/ }),

/***/ "./src/app/services/company-spa.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/company-spa.service.ts ***!
  \*************************************************/
/*! exports provided: CompanySpaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanySpaService", function() { return CompanySpaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Company__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/./Company */ "./src/app/common/Company.ts");
/* harmony import */ var _common_Coupon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/./Coupon */ "./src/app/common/Coupon.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_5__);






var CompanySpaService = /** @class */ (function () {
    function CompanySpaService(_http) {
        this._http = _http;
        this.companyToGet = new _common_Company__WEBPACK_IMPORTED_MODULE_2__["Company"](0, "", "", "");
        this.couponsList = new Array();
        this.couponToGet = new _common_Coupon__WEBPACK_IMPORTED_MODULE_3__["Coupon"](0, "", null, null, 0, "", "", 0, "");
        this.showSmallTable = false;
        this.swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_5___default.a.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: true,
        });
    }
    CompanySpaService.prototype.ajaxCreateCoupon = function (c) {
        var _this = this;
        this._http.post("http://localhost:8080/company/createcoupon", c)
            .subscribe(function (resp) {
            _this.ajaxGetAllCoupons();
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CompanySpaService.prototype.ajaxRemoveCoupon = function (c) {
        var _this = this;
        this._http.delete("http://localhost:8080/company/removecoupon", new _angular_http__WEBPACK_IMPORTED_MODULE_4__["RequestOptions"]({ body: c }))
            .subscribe(function (resp) {
            _this.ajaxGetAllCoupons();
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CompanySpaService.prototype.ajaxUpdateCoupon = function (c) {
        var _this = this;
        this._http.put("http://localhost:8080/company/updatecoupon", c)
            .subscribe(function (resp) {
            _this.ajaxGetAllCoupons();
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CompanySpaService.prototype.ajaxGetCouponById = function (myCouponId) {
        var _this = this;
        this._http.get("http://localhost:8080/company/getmycouponbyid/" + myCouponId).subscribe(function (resp) {
            _this.showSmallTable = true;
            var tempCoupon = resp.json();
            _this.couponToGet.setId(tempCoupon.id);
            _this.couponToGet.setTitle(tempCoupon.title);
            _this.couponToGet.setStartDate(tempCoupon.startDate);
            _this.couponToGet.setEndDate(tempCoupon.endDate);
            _this.couponToGet.setAmount(tempCoupon.amount);
            _this.couponToGet.setCouponType(tempCoupon.couponType);
            _this.couponToGet.setMessage(tempCoupon.message);
            _this.couponToGet.setPrice(tempCoupon.price);
            _this.couponToGet.setImage(tempCoupon.image);
        }, function (err) {
            _this.showSmallTable = false;
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CompanySpaService.prototype.ajaxGetCouponByTitle = function (myCouponTitle) {
        var _this = this;
        this._http.get("http://localhost:8080/company/getmycouponbytitle/" + myCouponTitle).subscribe(function (resp) {
            _this.showSmallTable = true;
            var tempCoupon = resp.json();
            _this.couponToGet.setId(tempCoupon.id);
            _this.couponToGet.setTitle(tempCoupon.title);
            _this.couponToGet.setStartDate(tempCoupon.startDate);
            _this.couponToGet.setEndDate(tempCoupon.endDate);
            _this.couponToGet.setAmount(tempCoupon.amount);
            _this.couponToGet.setCouponType(tempCoupon.couponType);
            _this.couponToGet.setMessage(tempCoupon.message);
            _this.couponToGet.setPrice(tempCoupon.price);
            _this.couponToGet.setImage(tempCoupon.image);
        }, function (err) {
            _this.showSmallTable = false;
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CompanySpaService.prototype.ajaxGetAllCoupons = function () {
        var _this = this;
        this._http.get("http://localhost:8080/company/getallmycoupons").subscribe(function (resp) {
            while (_this.couponsList.length > 0)
                _this.couponsList.pop();
            var tempList = resp.json();
            for (var _i = 0, tempList_1 = tempList; _i < tempList_1.length; _i++) {
                var item = tempList_1[_i];
                _this.couponsList.push(item);
            }
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CompanySpaService.prototype.ajaxGetMyCouponsByType = function (couponType) {
        var _this = this;
        this._http.get("http://localhost:8080/company/getmycouponsbytype/" + couponType).subscribe(function (resp) {
            while (_this.couponsList.length > 0)
                _this.couponsList.pop();
            var tempList = resp.json();
            for (var _i = 0, tempList_2 = tempList; _i < tempList_2.length; _i++) {
                var item = tempList_2[_i];
                _this.couponsList.push(item);
            }
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CompanySpaService.prototype.ajaxGetMyCouponsByTopPrice = function (couponTopPrice) {
        var _this = this;
        this._http.get("http://localhost:8080/company/getmycouponsbytopprice/" + couponTopPrice).subscribe(function (resp) {
            while (_this.couponsList.length > 0)
                _this.couponsList.pop();
            var tempList = resp.json();
            for (var _i = 0, tempList_3 = tempList; _i < tempList_3.length; _i++) {
                var item = tempList_3[_i];
                _this.couponsList.push(item);
            }
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CompanySpaService.prototype.ajaxGetMyCouponsByEndDate = function (endDate) {
        var _this = this;
        this._http.get("http://localhost:8080/company/getmycouponsbyenddate/" + endDate).subscribe(function (resp) {
            while (_this.couponsList.length > 0)
                _this.couponsList.pop();
            var tempList = resp.json();
            for (var _i = 0, tempList_4 = tempList; _i < tempList_4.length; _i++) {
                var item = tempList_4[_i];
                _this.couponsList.push(item);
            }
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CompanySpaService.prototype.ajaxGetMyCompanyDetails = function () {
        var _this = this;
        this._http.get("http://localhost:8080/company/getmycompanydetails/").subscribe(function (resp) {
            var tempCompany = resp.json();
            _this.companyToGet.setId(tempCompany.id);
            _this.companyToGet.setName(tempCompany.name);
            _this.companyToGet.setPassword(tempCompany.password);
            _this.companyToGet.setEmail(tempCompany.email);
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CompanySpaService.prototype.ajaxLogOut = function (request, response) {
        var _this = this;
        this._http.post("http://localhost:8080/company/logout/", request, response).subscribe(function (resp) {
            _this.swalWithBootstrapButtons({
                title: 'You have successfully logged out',
                type: 'info',
            });
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    CompanySpaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_4__["Http"]])
    ], CompanySpaService);
    return CompanySpaService;
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

module.exports = __webpack_require__(/*! C:\workSpaces\AngularCouponSystem\companywebapi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map