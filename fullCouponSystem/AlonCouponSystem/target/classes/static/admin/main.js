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

module.exports = "#logout {\r\n    padding-top: 8px;\r\n    padding-right: 25px;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\">\r\n    <div class=\"navbar-header\">\r\n        <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-collapse\">\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n            <span class=\"icon-bar\"></span>\r\n        </button>\r\n    </div>\r\n    <div class=\"navbar-collapse collapse\">\r\n        <ul class=\"nav navbar-nav\">\r\n\r\n            <li>\r\n                <a routerLink=\"/\"> Home\r\n                    <span class=\"fa fa-home\"></span> &nbsp; </a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/companies\"> Companies\r\n                    <span class=\"fas fa-chart-line\"></span>&nbsp; </a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/customers\"> Customers\r\n                    <span class='fas fa-users'></span>\r\n                </a>\r\n            </li>\r\n            <li>\r\n                <a routerLink=\"/about\"> About\r\n                    <span class=\"fa fa-info-circle\"></span>\r\n                </a>\r\n            </li>\r\n        </ul>\r\n\r\n        <ul id=\"logout\" class=\"nav navbar-nav navbar-right\">\r\n            <li>\r\n                <button (click)=\"logout()\" class=\"btn btn-danger\">\r\n                    <b>Logout &nbsp; </b>\r\n                    <span class=\"fas fa-sign-out-alt fa-lg\"></span>\r\n                </button>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n</nav>\r\n\r\n<router-outlet></router-outlet>"

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
/* harmony import */ var _services_admin_spa_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/admin-spa.service */ "./src/app/services/admin-spa.service.ts");
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
    function AppComponent(_adminSpa) {
        this._adminSpa = _adminSpa;
    }
    AppComponent.prototype.logout = function () {
        // Moving to login page
        window.location.href = 'http://localhost:8080/';
        // Invalidates the user session
        this._adminSpa.ajaxLogOut(this.request, this.response);
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_spa_service__WEBPACK_IMPORTED_MODULE_1__["AdminSpaService"]])
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
/* harmony import */ var _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/companies/companies.component */ "./src/app/components/companies/companies.component.ts");
/* harmony import */ var _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/customers/customers.component */ "./src/app/components/customers/customers.component.ts");
/* harmony import */ var _services_admin_spa_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./services/admin-spa.service */ "./src/app/services/admin-spa.service.ts");
/* harmony import */ var _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/about/about.component */ "./src/app/components/about/about.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
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
                _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_6__["CompaniesComponent"],
                _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_7__["CustomersComponent"],
                _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                    {
                        path: 'companies',
                        component: _components_companies_companies_component__WEBPACK_IMPORTED_MODULE_6__["CompaniesComponent"],
                    },
                    {
                        path: 'customers',
                        component: _components_customers_customers_component__WEBPACK_IMPORTED_MODULE_7__["CustomersComponent"],
                    },
                    {
                        path: 'about',
                        component: _components_about_about_component__WEBPACK_IMPORTED_MODULE_9__["AboutComponent"],
                    },
                    {
                        path: '',
                        component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    },
                ])
            ],
            providers: [_services_admin_spa_service__WEBPACK_IMPORTED_MODULE_8__["AdminSpaService"], { provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__["HashLocationStrategy"] }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
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

module.exports = "<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n<br>\r\n\r\n<div class=\"container\" id=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-5\">\r\n            <p>\r\n                <img src=\"../../../admin/assets/‏‏project.PNG\" id=\"leftimg\">\r\n            </p>\r\n        </div>\r\n\r\n        <div class=\"col-md-5\">\r\n            <p>\r\n                <img src=\"../../../admin/assets/alon.PNG\" id=\"rightimg\">\r\n            </p>\r\n        </div>\r\n    </div>\r\n\r\n    <div id=\"footer\" class=\"panel panel-info\">\r\n        <div class=\"panel-heading\">\r\n            <span style=\"font-size: 18px\">\r\n                <strong>Contact us:&nbsp; </strong>\r\n            </span>\r\n            <a class=\"btn fab fa-facebook fa-2x\" href=\"https://www.facebook.com/tamarcovich\"></a>\r\n            <a class=\"btn fab fa-linkedin fa-2x\" href=\"https://www.linkedin.com/in/alon-samet/\"></a>\r\n            <a class=\"btn fas fa-envelope fa-2x\" href=\"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alonkale@gmail.com&shva=1\"></a>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n            Powered by\r\n            <strong>\r\n                <i> Alon Samet </i>\r\n                <br>\r\n            </strong>\r\n            <h6> © All Rights Reserved </h6>\r\n        </div>\r\n        <br>\r\n    </div>"

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

/***/ "./src/app/components/companies/companies.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/companies/companies.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th, td {\r\n    text-align: center; \r\n    vertical-align: middle;\r\n}\r\n\r\n#centerh {\r\n    text-align: center;\r\n}\r\n\r\n#centerv {\r\n    vertical-align: middle;\r\n}\r\n\r\n#left {\r\n    text-align:left;\r\n}\r\n\r\n#shadow {\r\n    text-shadow: -4px 4px 3px #999;\r\n}\r\n\r\n#container {\r\n    padding-bottom:120px; \r\n    padding-left: 100px; \r\n    width: 90%\r\n}\r\n\r\n#create {\r\n    padding-bottom:115px; \r\n    text-align: center; \r\n    background: linear-gradient(rgba(24, 132, 233, 0.2), white);\r\n}\r\n\r\n#get {\r\n    padding-bottom:180px; \r\n    text-align: center; \r\n    background: linear-gradient(rgba(26, 223, 131, 0.356), white);\r\n}\r\n\r\n#update {\r\n    padding-bottom:195px; \r\n    text-align:center; \r\n    background: linear-gradient(rgba(255,152,0,0.2), white);\r\n}\r\n\r\n#getinput {\r\n    text-align:center; \r\n    width: 220px; \r\n    margin-left: 20%\r\n}\r\n\r\n#smtable {\r\n    -webkit-padding-after: 50px;\r\n            padding-block-end: 50px\r\n}\r\n\r\n#footer {\r\n    position: unset;\r\n    right: 40%;\r\n    top: 40%;\r\n    bottom: 1px;\r\n    left: 40%;\r\n    padding: 0.5rem;\r\n    text-align: center\r\n}\r\n\r\n#contact {\r\n    font-size: 18px\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/companies/companies.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/companies/companies.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<br>\r\n\r\n<h3 id=\"centerh\">\r\n    <span class=\"label label-success\"> All Companies Table </span>\r\n</h3>\r\n<br>\r\n\r\n<table border=\"1\" class=\"table table-striped table-bordered\">\r\n    <tr>\r\n        <th> ID </th>\r\n        <th> Name </th>\r\n        <th> Password </th>\r\n        <th> Email </th>\r\n        <th> Delete </th>\r\n        <th> Edit </th>\r\n    </tr>\r\n    <!-- Get all companies data into table -->\r\n    <tr *ngFor=\"let c of companiesList; let i = index\">\r\n        <td> {{c.id}} </td>\r\n        <td> {{c.name}} </td>\r\n        <td *ngIf=\"showDataOnTable\"> {{c.password}} </td>\r\n        <td *ngIf=\"showDataOnTable\"> {{c.email}} </td>\r\n        <!-- Delete button column -->\r\n        <td>\r\n            <button class=\"btn btn-danger glyphicon glyphicon-trash\" (click)=\"removeCompany(i)\"> </button>\r\n        </td>\r\n        <!-- \"Edit\" button column -->\r\n        <td>\r\n            <button class=\"btn btn-warning far fa-edit\" (click)=\"showUpdateCompany(i)\"> </button>\r\n        </td>\r\n    </tr>\r\n</table>\r\n\r\n<br>\r\n<br>\r\n<br>\r\n\r\n<div class=\"container\" id=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\" id=\"create\">\r\n            <!-- Create company -->\r\n            <br>\r\n            <br>\r\n            <h2>\r\n                <span class=\"label label-default\"> &nbsp; Create New Company &nbsp;\r\n                    <span id=\"centerv\" class=\"fas fa-folder-plus\"></span> &nbsp;\r\n                </span>\r\n            </h2>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <div id=\"centerh\">\r\n                <span>\r\n                    <b> Please insert new company details: </b>\r\n                </span>\r\n                <br>\r\n                <br>\r\n                <br>\r\n\r\n                <div id=\"left\" class=\"form-group\">\r\n                    <label> Name: </label>\r\n                    <input type=\"text\" [(ngModel)]=\"newCompany.name\" class=\"form-control\" placeholder=\"Please enter company name\">\r\n                </div>\r\n\r\n                <div id=\"left\" class=\"form-group\">\r\n                    <label id=\"left\"> Password: </label>\r\n                    <input type=\"password\" [(ngModel)]=\"newCompany.password\" class=\"form-control\" placeholder=\"Please enter company password\">\r\n                </div>\r\n\r\n                <div id=\"left\" class=\"form-group\">\r\n                    <label id=\"left\"> Email: </label>\r\n                    <input type=\"text\" [(ngModel)]=\"newCompany.email\" class=\"form-control\" placeholder=\"Please enter company email\">\r\n                </div>\r\n                <br>\r\n                <button class=\"btn btn-primary\" (click)=\"createCompany()\">\r\n                    <b> Create New Company </b>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Gap between columns -->\r\n        <div class=\"col-md-1\">\r\n        </div>\r\n\r\n        <!-- Get company -->\r\n        <div class=\"col-md-3\" id=\"get\">\r\n            <br>\r\n            <br>\r\n            <h2>\r\n                <span class=\"label label-default\">&nbsp; Get Company &nbsp;\r\n                    <span id=\"centerv\" class=\"far fa-folder-open\"></span>&nbsp;\r\n                </span>\r\n            </h2>\r\n            <br>\r\n            <br>\r\n\r\n            <div *ngIf=\"showGetButtons\" class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\" id=\"centerh\">\r\n                <h4>\r\n                    <b> Please select one of the options:</b>\r\n                </h4>\r\n                <br>\r\n                <br>\r\n                <label class=\"btn btn-group active\">\r\n                    <div id=\"centerh\">\r\n                        <div (click)=\"showGetInputById()\">\r\n                            <input type=\"radio\">\r\n                            <h4>\r\n                                <b> Get Company By ID </b>\r\n                            </h4>\r\n                        </div>\r\n                    </div>\r\n                </label>\r\n                <br>\r\n                <br>\r\n                <br>\r\n\r\n                <label class=\"btn btn-group active\">\r\n                    <div (click)=\"showGetInputByName()\">\r\n                        <input type=\"radio\">\r\n                        <h4>\r\n                            <b> Get Company By Name </b>\r\n                        </h4>\r\n                    </div>\r\n                </label>\r\n                <br>\r\n                <br>\r\n                <br>\r\n            </div>\r\n\r\n            <div *ngIf=\"showGetInputByIdBool\">\r\n                <span>\r\n                    <b> Please insert company id: </b>\r\n                </span>\r\n                <br>\r\n                <br>\r\n                <input type=\"number\" id=\"getinput\" class=\"form-control\" [(ngModel)]=\"companyToGet.id\" size=\"25px\" placeholder=\"Enter company id\">\r\n                <br>\r\n                <br>\r\n                <br>\r\n                <button class=\"btn btn-primary\" id=\"centerh\" (click)=\"getCompanyById()\">\r\n                    <b> Get Company! </b>\r\n                </button>\r\n                <br>\r\n                <br>\r\n            </div>\r\n\r\n            <div *ngIf=\"showGetInputByNameBool\">\r\n                <span>\r\n                    <b> Please insert company name: </b>\r\n                </span>\r\n                <br>\r\n                <br>\r\n                <input type=\"text\" size=\"20\" id=\"getinput\" class=\"form-control\" [(ngModel)]=\"companyToGet.name\" size=\"25px\" placeholder=\"Enter company name\">\r\n                <br>\r\n                <br>\r\n                <br>\r\n                <button class=\"btn btn-primary\" (click)=\"getCompanyByName()\">\r\n                    <b> Get Company! </b>\r\n                </button>\r\n                <br>\r\n                <br>\r\n            </div>\r\n            <br>\r\n\r\n            <!-- Small table of selected company -->\r\n            <table *ngIf=\"_adminSpa.showSmallTable\" id=\"smtable\" border=\"1\" class=\"table table-striped table-bordered\">\r\n                <tr>\r\n                    <th> <small> ID </small>  </th>\r\n                    <th> <small> Name </small>  </th>\r\n                    <th> <small> Password </small>  </th>\r\n                    <th> <small> Email</small>  </th>\r\n                </tr>\r\n                <tr>\r\n                    <td> <small> {{companyToGet.id}} </small>  </td>\r\n                    <td> <small> {{companyToGet.name}} </small>  </td>\r\n                    <td> <small> {{companyToGet.password}} </small>  </td>\r\n                    <td> <small> {{companyToGet.email}} </small>  </td>\r\n                </tr>\r\n            </table>\r\n            <br>\r\n\r\n            <!-- Back button -->\r\n            <div *ngIf=\"showGetDetails\" id=\"centerh\">\r\n                <button class=\"btn\" (click)=\"backToGetButtons()\">\r\n                    <b> Back &nbsp;\r\n                        <span class=\"glyphicon glyphicon-arrow-left\"></span>\r\n                    </b>\r\n                </button>\r\n                <br>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <br>\r\n        </div>\r\n\r\n        <!-- Gap between columns -->\r\n        <div class=\"col-md-1\">\r\n        </div>\r\n\r\n        <!-- Update company -->\r\n        <div class=\"col-md-3\" *ngIf=\"showUpdateBool\" id=\"update\">\r\n            <br>\r\n            <br>\r\n            <h2>\r\n                <span class=\"label label-default\"> &nbsp; Update Company &nbsp;\r\n                    <span id=\"centerv\" class=\"far fa-edit\"></span> &nbsp;\r\n                </span>\r\n            </h2>\r\n            <br>\r\n            <br>\r\n            <br>\r\n\r\n            <h4>\r\n                <span class=\"label label-warning\"> Update details of the company \"{{updatedCompany.name}}\": </span>\r\n            </h4>\r\n            <br>\r\n            <div id=\"left\" class=\"form-group\">\r\n                <label> Password: </label>\r\n                <input type=\"password\" [(ngModel)]=\"updatedCompany.password\" class=\"form-control\" placeholder=\"Please enter updated company password\">\r\n            </div>\r\n\r\n            <div id=\"left\" class=\"form-group\">\r\n                <label> Email: </label>\r\n                <input type=\"text\" [(ngModel)]=\"updatedCompany.email\" class=\"form-control\" placeholder=\"Please enter updated company email\">\r\n            </div>\r\n            <br>\r\n            <button class=\"btn btn-primary\" (click)=\"updateCompany()\">\r\n                <b> Update Company </b>\r\n            </button>\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div class=\"panel panel-info\" id=\"footer\">\r\n    <div class=\"panel-heading\">\r\n        <span id=\"contact\">\r\n            <strong>Contact us:&nbsp; </strong>\r\n        </span>\r\n        <a class=\"btn fab fa-facebook fa-2x\" href=\"https://www.facebook.com/tamarcovich\"></a>\r\n        <a class=\"btn fab fa-linkedin fa-2x\" href=\"https://www.linkedin.com/in/alon-samet/\"></a>\r\n        <a class=\"btn fas fa-envelope fa-2x\" href=\"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alonkale@gmail.com&shva=1\"></a>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        Powered by\r\n        <strong>\r\n            <i> Alon Samet </i>\r\n            <br>\r\n        </strong>\r\n        <h6> © All Rights Reserved </h6>\r\n    </div>\r\n    <br>\r\n</div>"

/***/ }),

/***/ "./src/app/components/companies/companies.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/companies/companies.component.ts ***!
  \*************************************************************/
/*! exports provided: CompaniesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompaniesComponent", function() { return CompaniesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/./Company */ "./src/app/common/Company.ts");
/* harmony import */ var _services_admin_spa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin-spa.service */ "./src/app/services/admin-spa.service.ts");
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




var CompaniesComponent = /** @class */ (function () {
    function CompaniesComponent(_adminSpa) {
        this._adminSpa = _adminSpa;
        this.newCompany = new _common_Company__WEBPACK_IMPORTED_MODULE_1__["Company"](0, "", "", "");
        this.updatedCompany = new _common_Company__WEBPACK_IMPORTED_MODULE_1__["Company"](0, "", "", "");
        this.companyToGet = new _common_Company__WEBPACK_IMPORTED_MODULE_1__["Company"](0, "", "", "");
        //ngIf boolean variables:
        this.showStartImage = false;
        this.showUpdateBool = false;
        this.showGetButtons = true;
        this.showGetInputByIdBool = false;
        this.showGetInputByNameBool = false;
        this.showGetDetails = false;
        this.showTable = false;
        this.showDataOnTable = true;
        this.showInputsOnTable = false;
        this.bool = true;
        this.companiesList = this._adminSpa.companiesList;
        this.companyToGet = this._adminSpa.companyToGet; //now those two companies points on the same object in memory
    }
    CompaniesComponent.prototype.ngOnInit = function () {
        this._adminSpa.ajaxGetAllCompanies();
    };
    CompaniesComponent.prototype.createCompany = function (index) {
        var _this = this;
        // sweet alert
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: true,
        });
        swalWithBootstrapButtons({
            title: 'Create New Company?',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // call ajax method in service
                _this._adminSpa.ajaxCreateCompany(_this.newCompany);
                swalWithBootstrapButtons('The new company "' + _this.newCompany.name + '" was created !');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) { }
        });
    };
    CompaniesComponent.prototype.removeCompany = function (index) {
        var _this = this;
        // sweet alert
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: true,
        });
        swalWithBootstrapButtons({
            title: 'Are you sure you want to delete the company "' + this.companiesList[index].name + '" ?',
            text: "You won't be able to revert this !",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete this company',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // call ajax method in service
                _this._adminSpa.ajaxRemoveCompany(_this.companiesList[index]);
                swalWithBootstrapButtons('The company "' + _this.companiesList[index].name + '"  was deleted!');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) { }
        });
    };
    CompaniesComponent.prototype.updateCompany = function () {
        var _this = this;
        // sweet alert
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: true,
        });
        swalWithBootstrapButtons({
            title: 'Update details of the company "' + this.updatedCompany.name + '" ?',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // call ajax method in service
                _this._adminSpa.ajaxUpdateCompany(_this.updatedCompany);
                swalWithBootstrapButtons('The company "' + _this.updatedCompany.name + '" Was Updated!');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) { }
        });
        this.showDataOnTable = true;
        this.showInputsOnTable = false;
    };
    CompaniesComponent.prototype.getCompanyById = function () {
        this._adminSpa.ajaxGetCompanyById(this.companyToGet.id);
    };
    CompaniesComponent.prototype.getCompanyByName = function () {
        this._adminSpa.ajaxGetCompanyByName(this.companyToGet.name);
    };
    // ****************************************************
    // ************* methods for ngIf tags: ***************
    // ****************************************************
    CompaniesComponent.prototype.showUpdateCompany = function (index) {
        this.updatedCompany.name = this.companiesList[index].name;
        this.updatedCompany.password = ""; // Resets the displayed password when pressing the showUpdate button, so the user can insert its input
        this.updatedCompany.email = ""; // Resets the displayed email when pressing the showUpdate button, so the user can insert its input
        // this.showDataOnTable = false;
        // this.showInputsOnTable = true;
        this.showUpdateBool = true;
    };
    CompaniesComponent.prototype.showGetInputById = function () {
        this.showGetButtons = false;
        this.showGetInputByIdBool = true;
        this.showGetDetails = true;
    };
    CompaniesComponent.prototype.showGetInputByName = function () {
        this.showGetButtons = false;
        this.showGetInputByNameBool = true;
        this.showGetDetails = true;
    };
    CompaniesComponent.prototype.backToGetButtons = function () {
        this._adminSpa.showSmallTable = false;
        this.showGetInputByNameBool = false;
        this.showGetInputByIdBool = false;
        this.showGetDetails = false;
        this.showGetButtons = true;
        this.showTable = false;
    };
    CompaniesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-companies',
            template: __webpack_require__(/*! ./companies.component.html */ "./src/app/components/companies/companies.component.html"),
            styles: [__webpack_require__(/*! ./companies.component.css */ "./src/app/components/companies/companies.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_spa_service__WEBPACK_IMPORTED_MODULE_2__["AdminSpaService"]])
    ], CompaniesComponent);
    return CompaniesComponent;
}());



/***/ }),

/***/ "./src/app/components/customers/customers.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/customers/customers.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "th, td {\r\n    text-align: center; \r\n    vertical-align: middle;\r\n}\r\n\r\n#centerh {\r\n    text-align: center;\r\n}\r\n\r\n#centerv {\r\n    vertical-align: middle;\r\n}\r\n\r\n#left {\r\n    text-align:left;\r\n}\r\n\r\n#shadow {\r\n    text-shadow: -4px 4px 3px #999;\r\n}\r\n\r\n#container {\r\n    padding-bottom:120px; \r\n    padding-left: 100px; \r\n    width: 90%\r\n}\r\n\r\n#create {\r\n    padding-bottom:115px; \r\n    text-align: center; \r\n    background: linear-gradient(rgba(24, 132, 233, 0.2), white);\r\n}\r\n\r\n#get {\r\n    padding-bottom:128px; \r\n    text-align: center; \r\n    background: linear-gradient(rgba(26, 223, 131, 0.356), white);\r\n}\r\n\r\n#update {\r\n    padding-bottom:220px; \r\n    text-align:center; \r\n    background: linear-gradient(rgba(255,152,0,0.2), white);\r\n}\r\n\r\n#getinput {\r\n    text-align:center; \r\n    width: 220px; \r\n    margin-left: 20%\r\n}\r\n\r\n#smtable {\r\n    -webkit-padding-after: 50px;\r\n            padding-block-end: 50px\r\n}\r\n\r\n#footer {\r\n    position: unset;\r\n    right: 40%;\r\n    top: 40%;\r\n    bottom: 1px;\r\n    left: 40%;\r\n    padding: 0.5rem;\r\n    text-align: center\r\n}\r\n\r\n#contact {\r\n    font-size: 18px\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/customers/customers.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/customers/customers.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<br>\r\n\r\n<h3 id=\"centerh\">\r\n    <span class=\"label label-success\"> All Customers Table</span>\r\n</h3>\r\n\r\n<br>\r\n<table border=\"1\" class=\"table table-striped table-bordered\">\r\n    <tr>\r\n        <th> ID </th>\r\n        <th> Name </th>\r\n        <th> Password </th>\r\n        <th> Delete </th>\r\n        <th> Edit </th>\r\n    </tr>\r\n    <!-- Get all customers data into table -->\r\n    <tr *ngFor=\"let c of customersList; let i = index\">\r\n        <td> {{c.id}} </td>\r\n        <td> {{c.name}} </td>\r\n        <td> {{c.password}} </td>\r\n        <td>\r\n            <button class=\"btn btn-danger\" (click)=\"removeCustomer(i)\">\r\n                <span class=\"glyphicon glyphicon-trash\"> </span>\r\n            </button>\r\n        </td>\r\n        <td>\r\n            <button class=\"btn btn-warning far fa-edit\" (click)=\"showUpdateCustomer(i)\"> </button>\r\n        </td>\r\n    </tr>\r\n</table>\r\n\r\n<br>\r\n<br>\r\n<br>\r\n\r\n<div class=\"container\" id=\"container\">\r\n    <div class=\"row\">\r\n        <div class=\"col-md-3\" id=\"create\">\r\n            <!-- Create customer -->\r\n            <br>\r\n            <br>\r\n            <h2>\r\n                <span class=\"label label-default\"> &nbsp; Create New Customer &nbsp;\r\n                    <span id=\"centerv\" class=\"fas fa-user-plus\"></span> &nbsp;\r\n                </span>\r\n            </h2>\r\n            <br>\r\n            <br>\r\n            <br>\r\n            <div id=\"centerh\">\r\n                <span>\r\n                    <b> Please insert new customer details: </b>\r\n                </span>\r\n                <br>\r\n                <br>\r\n                <br>\r\n                <div id=\"left\" class=\"form-group\">\r\n                    <label> Name: </label>\r\n                    <input type=\"text\" [(ngModel)]=\"newCustomer.name\" class=\"form-control\" placeholder=\"Please enter customer name\">\r\n                </div>\r\n\r\n                <div id=\"left\" class=\"form-group\">\r\n                    <label> Password: </label>\r\n                    <input type=\"password\" [(ngModel)]=\"newCustomer.password\" class=\"form-control\" placeholder=\"Please enter customer password\">\r\n                </div>\r\n                <br>\r\n                <button class=\"btn btn-primary\" (click)=\"createCustomer()\" style=\"margin-left: 5%\">\r\n                    <b> Creat New Customer </b>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Gap between columns -->\r\n        <div class=\"col-md-1\">\r\n        </div>\r\n\r\n        <!-- Get customer -->\r\n        <div class=\"col-md-3\" id=\"get\">\r\n            <br>\r\n            <br>\r\n            <h2>\r\n                <span class=\"label label-default\"> &nbsp; Get Customer &nbsp;\r\n                    <span id=\"centerv\" class=\"far fa-folder-open\"></span> &nbsp;\r\n                </span>\r\n            </h2>\r\n            <br>\r\n            <br>\r\n\r\n            <div *ngIf=\"showGetButtons\" class=\"btn-group btn-group-toggle\" data-toggle=\"buttons\" id=\"centerh\">\r\n                <h4>\r\n                    <b> Please select one of the options:</b>\r\n                </h4>\r\n                <br>\r\n                <br>\r\n                <label class=\"btn btn-group active\">\r\n                    <div id=\"centerh\">\r\n                        <div (click)=\"showGetInputById()\">\r\n                            <input type=\"radio\">\r\n                            <h4>\r\n                                <b> Get Customer By ID </b>\r\n                            </h4>\r\n                        </div>\r\n                    </div>\r\n                </label>\r\n                <br>\r\n                <br>\r\n                <br>\r\n\r\n                <label class=\"btn btn-group active\">\r\n                    <div (click)=\"showGetInputByName()\">\r\n                        <input type=\"radio\">\r\n                        <h4>\r\n                            <b> Get Customer By Name </b>\r\n                        </h4>\r\n                    </div>\r\n                </label>\r\n                <br>\r\n                <br>\r\n                <br>\r\n            </div>\r\n\r\n            <div *ngIf=\"showGetInputByIdBool\">\r\n                <span>\r\n                    <b> Please insert customer id: </b>\r\n                </span>\r\n                <br>\r\n                <br>\r\n                <input type=\"number\" id=\"getinput\" class=\"form-control\" [(ngModel)]=\"customerToGet.id\"\r\n                    size=\"25px\" name=\"idtxt\" placeholder=\"Enter company id\">\r\n                <br>\r\n                <br>\r\n                <button (click)=\"getCustomerById()\" class=\"btn btn-primary\" id=\"centerh\">\r\n                    <b> Get Customer! </b>\r\n                </button>\r\n                <br>\r\n                <br>\r\n            </div>\r\n\r\n            <div *ngIf=\"showGetInputByNameBool\">\r\n                <span>\r\n                    <b> Please insert customer name: </b>\r\n                </span>\r\n                <br>\r\n                <br>\r\n                <input type=\"text\" id=\"getinput\" class=\"form-control\" [(ngModel)]=\"customerToGet.name\"\r\n                    size=\"25px\" name=\"nametxt\" placeholder=\"Enter company name\">\r\n                <br>\r\n                <br>\r\n                <button (click)=\"getCustomerByName()\" class=\"btn btn-primary\" id=\"centerh\">\r\n                    <b> Get Customer! </b>\r\n                </button>\r\n                <br>\r\n                <br>\r\n            </div>\r\n            <br>\r\n\r\n            <!-- Small table of selected customer -->\r\n            <table *ngIf=\"_adminSpa.showSmallTable\" border=\"1\" class=\"table table-striped table-bordered\">\r\n                <tr>\r\n                    <th> ID </th>\r\n                    <th> Name </th>\r\n                    <th> Password </th>\r\n                </tr>\r\n                <tr>\r\n                    <td> {{customerToGet.id}} </td>\r\n                    <td> {{customerToGet.name}} </td>\r\n                    <td> {{customerToGet.password}} </td>\r\n                </tr>\r\n            </table>\r\n\r\n            <!-- Back button -->\r\n            <div *ngIf=\"showGetDetails\" id=\"centerh\">\r\n                <br>\r\n                <button (click)=\"backToGetButtons()\" class=\"btn\">\r\n                    <b> Back &nbsp;\r\n                        <span class=\"glyphicon glyphicon-arrow-left\"></span>\r\n                    </b>\r\n                </button>\r\n                <br>\r\n            </div>\r\n            <br>\r\n            <br>\r\n            <br>\r\n        </div>\r\n\r\n        <!-- Gap between columns -->\r\n        <div class=\"col-md-1\">\r\n        </div>\r\n\r\n        <!-- Update customer -->\r\n        <div class=\"col-md-3\" *ngIf=\"showUpdateBool\" id=\"update\">\r\n            <br>\r\n            <br>\r\n            <h2>\r\n                <span class=\"label label-default\"> &nbsp; Update Customer &nbsp;\r\n                    <span id=\"centerv\" class=\"fas fa-user-edit\"></span> &nbsp;\r\n                </span>\r\n            </h2>\r\n            <br>\r\n            <br>\r\n\r\n            <h4>\r\n                <span class=\"label label-warning\"> Update details of the customer \"{{updatedCustomer.name}}\": </span>\r\n            </h4>\r\n            <br>\r\n            <div id=\"left\" class=\"form-group\">\r\n                <label> Password: </label>\r\n                <input type=\"password\" [(ngModel)]=\"updatedCustomer.password\" class=\"form-control\"  placeholder=\"Please enter updated customer password\">\r\n            </div>\r\n            <br>\r\n            <button class=\"btn btn-primary\" (click)=\"updateCustomer()\" style=\"margin-left:36px\">\r\n                <b> Update Customer </b>\r\n            </button>\r\n            <br>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n<div id=\"footer\" class=\"panel panel-info\">\r\n    <div class=\"panel-heading\">\r\n        <span id=\"contact\">\r\n            <strong>Contact us:&nbsp; </strong>\r\n        </span>\r\n        <a class=\"btn fab fa-facebook fa-2x\" href=\"https://www.facebook.com/tamarcovich\"></a>\r\n        <a class=\"btn fab fa-linkedin fa-2x\" href=\"https://www.linkedin.com/in/alon-samet/\"></a>\r\n        <a class=\"btn fas fa-envelope fa-2x\" href=\"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alonkale@gmail.com&shva=1\"></a>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        Powered by\r\n        <strong>\r\n            <i> Alon Samet </i>\r\n            <br>\r\n        </strong>\r\n        <h6> © All Rights Reserved </h6>\r\n    </div>\r\n    <br>\r\n</div>"

/***/ }),

/***/ "./src/app/components/customers/customers.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/customers/customers.component.ts ***!
  \*************************************************************/
/*! exports provided: CustomersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomersComponent", function() { return CustomersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Customer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/Customer */ "./src/app/common/Customer.ts");
/* harmony import */ var _services_admin_spa_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/admin-spa.service */ "./src/app/services/admin-spa.service.ts");
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




var CustomersComponent = /** @class */ (function () {
    function CustomersComponent(_adminSpa) {
        this._adminSpa = _adminSpa;
        this.newCustomer = new _common_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](0, "", "");
        this.updatedCustomer = new _common_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](0, "", "");
        this.customerToGet = new _common_Customer__WEBPACK_IMPORTED_MODULE_1__["Customer"](0, "", "");
        //ngIf boolean variables:
        this.showStartImage = false;
        this.showUpdateBool = false;
        this.showGetButtons = true;
        this.showGetInputByIdBool = false;
        this.showGetInputByNameBool = false;
        this.showGetDetails = false;
        this.showTable = false;
        this.customersList = this._adminSpa.customersList;
        this.customerToGet = this._adminSpa.customerToGet; //now those two customers points on the same object in memory
    }
    CustomersComponent.prototype.ngOnInit = function () {
        this._adminSpa.ajaxGetAllCustomers();
    };
    CustomersComponent.prototype.createCustomer = function () {
        var _this = this;
        // sweet alert
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: true,
        });
        swalWithBootstrapButtons({
            title: 'Create New Customer?',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // call ajax method in service
                _this._adminSpa.ajaxCreateCustomer(_this.newCustomer);
                swalWithBootstrapButtons('The new customer "' + _this.newCustomer.name + '" was created !');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) { }
        });
    };
    CustomersComponent.prototype.removeCustomer = function (index) {
        var _this = this;
        // sweet alert
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: true,
        });
        swalWithBootstrapButtons({
            title: 'Are you sure you want to delete the customer "' + this.customersList[index].name + '" ?',
            text: "You won't be able to revert this !",
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete this customer',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // call ajax method in service
                _this._adminSpa.ajaxRemoveCustomer(_this.customersList[index]);
                swalWithBootstrapButtons('The customer "' + _this.customersList[index].name + '"  was deleted!');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) { }
        });
    };
    CustomersComponent.prototype.updateCustomer = function () {
        var _this = this;
        // sweet alert
        var swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: true,
        });
        swalWithBootstrapButtons({
            title: 'Update details of the customer "' + this.updatedCustomer.name + '" ?',
            type: 'question',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'Cancel',
            reverseButtons: true
        }).then(function (result) {
            if (result.value) {
                // call ajax method in service
                _this._adminSpa.ajaxUpdateCustomer(_this.updatedCustomer);
                swalWithBootstrapButtons('The customer "' + _this.updatedCustomer.name + '" Was Updated!');
            }
            else if (result.dismiss === sweetalert2__WEBPACK_IMPORTED_MODULE_3___default.a.DismissReason.cancel) { }
        });
    };
    CustomersComponent.prototype.getCustomerById = function () {
        this._adminSpa.ajaxGetCustomerById(this.customerToGet.id);
    };
    CustomersComponent.prototype.getCustomerByName = function () {
        this._adminSpa.ajaxGetCustomerByName(this.customerToGet.name);
    };
    // ****************************************************
    // ************* methods for ngIf tags: ***************
    // ****************************************************
    CustomersComponent.prototype.showUpdateCustomer = function (i) {
        this.showUpdateBool = true;
        this.updatedCustomer.name = this.customersList[i].name; // Gets the data from the relevant line in the getAllCustomers Table
        this.updatedCustomer.password = ""; // Resets the displayed password when pressing the showUpdate button, so the user can insert its input
    };
    CustomersComponent.prototype.showGetInputById = function () {
        this.showGetButtons = false;
        this.showGetInputByIdBool = true;
        this.showGetDetails = true;
    };
    CustomersComponent.prototype.showGetInputByName = function () {
        this.showGetButtons = false;
        this.showGetInputByNameBool = true;
        this.showGetDetails = true;
    };
    CustomersComponent.prototype.backToGetButtons = function () {
        this._adminSpa.showSmallTable = false;
        this.showGetInputByNameBool = false;
        this.showGetInputByIdBool = false;
        this.showGetDetails = false;
        this.showGetButtons = true;
        this.showTable = false;
    };
    CustomersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-customers',
            template: __webpack_require__(/*! ./customers.component.html */ "./src/app/components/customers/customers.component.html"),
            styles: [__webpack_require__(/*! ./customers.component.css */ "./src/app/components/customers/customers.component.css")]
        }),
        __metadata("design:paramtypes", [_services_admin_spa_service__WEBPACK_IMPORTED_MODULE_2__["AdminSpaService"]])
    ], CustomersComponent);
    return CustomersComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#welcome {\r\n    padding-bottom: 70px;\r\n}\r\n\r\n#shadow {\r\n    text-shadow: -4px 4px 3px #999;\r\n}\r\n\r\n#row {\r\n    position: relative;\r\n    padding-left: 33%; \r\n}\r\n\r\n#img {\r\n    position: absolute;\r\n    margin-top: 300px;\r\n    left: 50%;\r\n    top: 50%;\r\n    -webkit-transform: translate(-50%,-50%);\r\n    transform: translate(-50%,-50%);\r\n    width: 1000px; \r\n    height: 750px;\r\n}\r\n\r\n#footer {\r\n    position: -webkit-sticky;\r\n    position: sticky;\r\n    text-align: center;\r\n    margin-top: 750px;\r\n    right: 40%;\r\n    top: 40%;\r\n    bottom: 1px;\r\n    left: 40%;\r\n    padding: 0.5rem;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<br>\r\n<br>\r\n<br>\r\n<br>\r\n<div class=\"container\">\r\n    <div class=\"row\" id=\"welcome\">\r\n        <h4 id=\"shadow\">\r\n            <b> Hi\r\n                <u>\r\n                    <i>Admin</i>\r\n                </u> , you are logged-in </b>\r\n        </h4>\r\n    </div>\r\n\r\n\r\n\r\n</div>\r\n\r\n<div id=\"footer\" class=\"panel panel-info\">\r\n    <div class=\"panel-heading\">\r\n        <span style=\"font-size: 18px\">\r\n            <strong>Contact us:&nbsp; </strong>\r\n        </span>\r\n        <a class=\"btn fab fa-facebook fa-2x\" href=\"https://www.facebook.com/tamarcovich\"></a>\r\n        <a class=\"btn fab fa-linkedin fa-2x\" href=\"https://www.linkedin.com/in/alon-samet/\"></a>\r\n        <a class=\"btn fas fa-envelope fa-2x\" href=\"https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=alonkale@gmail.com&shva=1\"></a>\r\n    </div>\r\n    <div class=\"panel-body\">\r\n        Powered by\r\n        <strong>\r\n            <i> Alon Samet </i>\r\n            <br>\r\n        </strong>\r\n        <h6> © All Rights Reserved </h6>\r\n    </div>\r\n    <br>\r\n</div>"

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
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/services/admin-spa.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/admin-spa.service.ts ***!
  \***********************************************/
/*! exports provided: AdminSpaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminSpaService", function() { return AdminSpaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _common_Company__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/./Company */ "./src/app/common/Company.ts");
/* harmony import */ var _common_Customer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/./Customer */ "./src/app/common/Customer.ts");
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





var AdminSpaService = /** @class */ (function () {
    function AdminSpaService(_http) {
        this._http = _http;
        this.companiesList = new Array();
        this.companyToGet = new _common_Company__WEBPACK_IMPORTED_MODULE_1__["Company"](0, "", "", "");
        this.customersList = new Array();
        this.customerToGet = new _common_Customer__WEBPACK_IMPORTED_MODULE_2__["Customer"](0, "", "");
        this.showSmallTable = false;
        this.swalWithBootstrapButtons = sweetalert2__WEBPACK_IMPORTED_MODULE_4___default.a.mixin({
            confirmButtonClass: 'btn btn-success',
            cancelButtonClass: 'btn btn-danger',
            buttonsStyling: true,
        });
    }
    ;
    //***********************************
    //********* Company methods *********
    //***********************************
    AdminSpaService.prototype.ajaxCreateCompany = function (c) {
        var _this = this;
        this._http.post("http://localhost:8080/admin/createcompany", c)
            .subscribe(function (resp) {
            _this.ajaxGetAllCompanies();
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    AdminSpaService.prototype.ajaxRemoveCompany = function (c) {
        var _this = this;
        this._http.delete("http://localhost:8080/admin/removecompany", new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ body: c }))
            .subscribe(function (resp) {
            _this.ajaxGetAllCompanies();
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    AdminSpaService.prototype.ajaxUpdateCompany = function (c) {
        var _this = this;
        this._http.put("http://localhost:8080/admin/updatecompany", c)
            .subscribe(function (resp) {
            _this.ajaxGetAllCompanies();
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    AdminSpaService.prototype.ajaxGetAllCompanies = function () {
        var _this = this;
        this._http.get("http://localhost:8080/admin/getallcompanies").subscribe(function (resp) {
            while (_this.companiesList.length > 0)
                _this.companiesList.pop();
            var tempList = resp.json();
            for (var _i = 0, tempList_1 = tempList; _i < tempList_1.length; _i++) {
                var item = tempList_1[_i];
                _this.companiesList.push(item);
            }
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    AdminSpaService.prototype.ajaxGetCompanyById = function (companyId) {
        var _this = this;
        this._http.get("http://localhost:8080/admin/getcompanybyid/" + companyId).subscribe(function (resp) {
            _this.showSmallTable = true;
            var tempCompany = resp.json();
            _this.companyToGet.setId(tempCompany.id);
            _this.companyToGet.setName(tempCompany.name);
            _this.companyToGet.setPassword(tempCompany.password);
            _this.companyToGet.setEmail(tempCompany.email);
        }, function (err) {
            _this.showSmallTable = false;
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    AdminSpaService.prototype.ajaxGetCompanyByName = function (companyName) {
        var _this = this;
        this._http.get("http://localhost:8080/admin/getcompanybyname/" + companyName).subscribe(function (resp) {
            _this.showSmallTable = true;
            var tempCompany = resp.json();
            _this.companyToGet.setId(tempCompany.id);
            _this.companyToGet.setName(tempCompany.name);
            _this.companyToGet.setPassword(tempCompany.password);
            _this.companyToGet.setEmail(tempCompany.email);
        }, function (err) {
            _this.showSmallTable = false;
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    //***********************************
    //********* Customer methods *********
    //***********************************
    AdminSpaService.prototype.ajaxCreateCustomer = function (c) {
        var _this = this;
        this._http.post("http://localhost:8080/admin/createcustomer", c)
            .subscribe(function (resp) {
            _this.ajaxGetAllCustomers();
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    AdminSpaService.prototype.ajaxRemoveCustomer = function (c) {
        var _this = this;
        this._http.delete("http://localhost:8080/admin/removecustomer", new _angular_http__WEBPACK_IMPORTED_MODULE_3__["RequestOptions"]({ body: c }))
            .subscribe(function (resp) {
            _this.ajaxGetAllCustomers();
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    AdminSpaService.prototype.ajaxUpdateCustomer = function (c) {
        var _this = this;
        this._http.put("http://localhost:8080/admin/updatecustomer", c)
            .subscribe(function (resp) {
            _this.ajaxGetAllCustomers();
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    AdminSpaService.prototype.ajaxGetAllCustomers = function () {
        var _this = this;
        this._http.get("http://localhost:8080/admin/getallcustomers")
            .subscribe(function (resp) {
            var tempList = resp.json();
            while (_this.customersList.length > 0) {
                _this.customersList.pop();
            }
            for (var _i = 0, tempList_2 = tempList; _i < tempList_2.length; _i++) {
                var item = tempList_2[_i];
                _this.customersList.push(item);
            }
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    AdminSpaService.prototype.ajaxGetCustomerById = function (customerId) {
        var _this = this;
        this._http.get("http://localhost:8080/admin/getcustomerbyid/" + customerId).subscribe(function (resp) {
            _this.showSmallTable = true;
            var tempCustomer = resp.json();
            _this.customerToGet.setId(tempCustomer.id);
            _this.customerToGet.setName(tempCustomer.name);
            _this.customerToGet.setPassword(tempCustomer.password);
        }, function (err) {
            _this.showSmallTable = false;
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    AdminSpaService.prototype.ajaxGetCustomerByName = function (customerName) {
        var _this = this;
        this._http.get("http://localhost:8080/admin/getcustomerbyname/" + customerName).subscribe(function (resp) {
            _this.showSmallTable = true;
            var tempCustomer = resp.json();
            _this.customerToGet.setId(tempCustomer.id);
            _this.customerToGet.setName(tempCustomer.name);
            _this.customerToGet.setPassword(tempCustomer.password);
        }, function (err) {
            _this.showSmallTable = false;
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    AdminSpaService.prototype.ajaxLogOut = function (request, response) {
        var _this = this;
        this._http.post("http://localhost:8080/admin/logout/", request, response).subscribe(function (resp) {
            _this.swalWithBootstrapButtons({
                title: 'You have successfully logged out',
                type: 'info',
            });
        }, function (err) {
            _this.swalWithBootstrapButtons(err._body);
        });
    };
    AdminSpaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], AdminSpaService);
    return AdminSpaService;
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

module.exports = __webpack_require__(/*! C:\CouponSystemAlon\angular\adminwebapi\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map