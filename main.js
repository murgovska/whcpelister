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

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='container-fluid'>\n  <app-header></app-header>\n  <router-outlet></router-outlet>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'whcpelister';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
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
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ourteam_ourteam_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ourteam/ourteam.component */ "./src/app/ourteam/ourteam.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _ourteam_ourteam_component__WEBPACK_IMPORTED_MODULE_6__["OurteamComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_3__["appRouting"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: appRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRouting", function() { return appRouting; });
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _ourteam_ourteam_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ourteam/ourteam.component */ "./src/app/ourteam/ourteam.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");




var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_0__["HomeComponent"] },
    { path: 'ourteam', component: _ourteam_ourteam_component__WEBPACK_IMPORTED_MODULE_1__["OurteamComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_2__["ContactComponent"] }
];
var appRouting = _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(appRoutes);


/***/ }),

/***/ "./src/app/contact/contact.component.html":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contact\">\n  <h1 class=\"headline\">Contact us</h1>\n  <div class=\"contact-info row\">\n    <div class=\"contact-box-wrapper col-md-4\">\n      <div class=\"contact-box\">\n        <i class=\"fa fa-envelope\" aria-hidden=\"true\"></i>\n        <h4>Email</h4>\n        <a href=\"mailto:zrkpelister2012@yahoo.com\">zrkpelister2012@yahoo.com</a>\n      </div>\n    </div>\n    <div class=\"contact-box-wrapper col-md-4\">\n      <div class=\"contact-box\">\n        <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n        <h4>Cal us on</h4>\n        <a href=\"tel:0038977847110\">0038977847110</a>\n      </div>\n    </div>\n    <div class=\"contact-box-wrapper col-md-4\">\n      <div class=\"contact-box\">\n        <i class=\"fa fa-map-marker\" aria-hidden=\"true\"></i>\n        <h4>Find us at</h4>\n        <p>Bulevar 1vi Maj 206</p>\n      </div>\n    </div>\n  </div>\n  <div class=\"follow-us\">\n    <h5>Follow us on:</h5>\n    <a href=\"https://www.facebook.com/%D0%96%D0%A0%D0%9A-%D0%9F%D0%B5%D0%BB%D0%B8%D1%81%D1%82%D0%B5%D1%80-562856327177254/?ref=br_rs\"><i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></a>\n    <a href=\"https://www.instagram.com/zrkpelister/\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></a>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/contact/contact.component.scss":
/*!************************************************!*\
  !*** ./src/app/contact/contact.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".headline {\n  text-align: center;\n  margin: 40px; }\n\n.fa {\n  border: 6px solid #015249;\n  border-radius: 50%;\n  font-size: 50px;\n  width: 100px;\n  height: 100px;\n  text-align: center;\n  padding: 20px;\n  color: #015249; }\n\n.contact-box-wrapper .contact-box {\n  text-align: center;\n  margin: 5px;\n  background-color: #e9e9e9;\n  padding: 20px;\n  height: 200px; }\n\n.contact-box-wrapper .contact-box p {\n    margin-bottom: 15px; }\n\n.contact-box-wrapper .contact-box a,\n  .contact-box-wrapper .contact-box p {\n    text-decoration: none;\n    color: #015249;\n    font-weight: bold; }\n\n.follow-us {\n  margin-top: 100px;\n  float: right; }\n\n.follow-us .fa {\n    font-size: 20px;\n    width: 40px;\n    height: 40px;\n    padding: 7px;\n    border-width: 3px; }\n\n.follow-us h5 {\n    display: inline-block;\n    margin-right: 25px; }\n\n.follow-us a {\n    display: inline-block;\n    margin-right: 15px; }\n"

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
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

var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row menu\">\n  <div class=\"col-md-3\">\n    <span class='club-name'><a routerLink='home'>HC Pelister</a></span>\n  </div>\n  <div class=\"col-md-9\">\n    <span class=\"col-md-3 menu-item\" [ngClass]=\"{'active': about}\" (mouseenter)=\"about = true\" (mouseleave)=\"about = false\">\n      <a routerLink='home'>About Us</a>\n    </span>\n    <span class=\"col-md-3 menu-item\" [ngClass]=\"{'active': ourTeam}\" (mouseenter)=\"ourTeam = true\" (mouseleave)=\"ourTeam = false\">\n      <a routerLink='ourteam'>Our Team</a>\n    </span>\n    <span class=\"col-md-3 menu-item\" [ngClass]=\"{'active': contact}\" (mouseenter)=\"contact = true\" (mouseleave)=\"contact = false\">\n      <a routerLink='contact'>Contact</a>\n    </span>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.scss":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".menu {\n  background-color: #015249; }\n  .menu .club-name {\n    color: #ffffff;\n    text-shadow: 1.5px 1.5px 3px #a5a5af;\n    text-transform: uppercase;\n    font-weight: 600;\n    transition: all .3s ease; }\n  .menu .club-name:hover {\n      -webkit-transform: scale(1.2, 1.2);\n              transform: scale(1.2, 1.2);\n      padding-left: 15px; }\n  .menu span {\n    display: inline-block;\n    line-height: 2rem;\n    text-transform: uppercase;\n    font-size: 1.5rem;\n    padding: 1.5rem 1rem;\n    text-align: center; }\n  .menu span.active a::before {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      height: 3px;\n      width: 100%;\n      -webkit-transform-origin: left;\n      transform-origin: left;\n      background-color: white;\n      -webkit-animation: menuIn .2s both;\n      animation: menuIn .2s both; }\n  .menu span:not(.active) a::before {\n      -webkit-transform-origin: left;\n      transform-origin: left;\n      -webkit-animation: menuOut .3s both;\n      animation: menuOut .3s both; }\n  .menu a {\n    color: #ffffff;\n    text-decoration: none; }\n  @-webkit-keyframes menuIn {\n  0% {\n    -webkit-transform: scale(0, 1);\n    transform: scale(0, 1); }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); } }\n  @keyframes menuIn {\n  0% {\n    -webkit-transform: scale(0, 1);\n    transform: scale(0, 1); }\n  100% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); } }\n  @-webkit-keyframes menuOut {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); }\n  100% {\n    -webkit-transform: scale(0, 1);\n    transform: scale(0, 1); } }\n  @keyframes menuOut {\n  0% {\n    -webkit-transform: scale(1, 1);\n    transform: scale(1, 1); }\n  100% {\n    -webkit-transform: scale(0, 1);\n    transform: scale(0, 1); } }\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
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

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.about = false;
        this.contact = false;
        this.ourTeam = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/header/header.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='row home-content'>\n  <div class='col-md-8'>\n    <ngb-carousel *ngIf=\"images\">\n      <ng-template ngbSlide>\n        <img [src]=\"images[0]\" alt=\"Random first slide\">\n        <div class=\"carousel-caption\">\n          <h3>WHC Pelister</h3>\n          <p>Season 2018/2019</p>\n        </div>\n      </ng-template>\n      <ng-template ngbSlide>\n        <img [src]=\"images[1]\" alt=\"Random second slide\">\n        <div class=\"carousel-caption\">\n          <h3>Second slide label</h3>\n          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>\n        </div>\n      </ng-template>\n      <ng-template ngbSlide>\n        <img [src]=\"images[2]\" alt=\"Random third slide\">\n        <div class=\"carousel-caption\">\n          <h3>Third slide label</h3>\n          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>\n        </div>\n      </ng-template>\n    </ngb-carousel>\n  </div>\n  <div class='col-md-4 club-description'>\n      <h1>HC Pelister</h1>\n      <p>\n        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In mollis nunc sed id.\n      </p>\n      <p>\n        Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu.\n        Aenean sed adipiscing diam donec adipiscing tristique risus nec feugiat.\n        Ultrices neque ornare aenean euismod elementum nisi. Mauris augue neque gravida in.\n        Arcu cursus vitae congue mauris rhoncus aenean vel elit scelerisque.\n      </p>\n      <p>\n        Et netus et malesuada fames ac turpis egestas sed. In hendrerit gravida rutrum quisque non tellus. Eget sit amet tellus cras adipiscing enim. Risus at ultrices mi tempus imperdiet nulla malesuada pellentesque.\n        Massa massa ultricies mi quis hendrerit.\n        Donec massa sapien faucibus et molestie ac feugiat sed.\n      </p>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.scss":
/*!******************************************!*\
  !*** ./src/app/home/home.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-content {\n  padding: 1.5rem; }\n  .home-content h1 {\n    color: #015249;\n    text-transform: uppercase;\n    text-shadow: 1.5px 1.5px 3px #a5a5af;\n    font-weight: 600;\n    text-align: center; }\n  .home-content img {\n    width: inherit;\n    border-radius: .5rem; }\n  .home-content .club-description {\n    border: 1px solid rgba(165, 165, 175, 0.15);\n    box-shadow: 2.5px 2.5px 5px #a5a5af;\n    border-radius: .5rem; }\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
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
        this.images = [
            '/assets/images/team_photo.jpg',
            '/assets/images/team_photo.jpg',
            '/assets/images/team_photo.jpg'
        ];
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.scss */ "./src/app/home/home.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ourteam/ourteam.component.html":
/*!************************************************!*\
  !*** ./src/app/ourteam/ourteam.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='ourteam'>\n  <h1 class=\"headline\">Our team</h1>\n  <div class='row'>\n    <div *ngFor=\"let player of players\" class='col-md-3 player'>\n      <img src=\"/assets/images/{{player.image}}.jpg\" />\n      <div class=\"player-info\">\n        <p class='player-name'>{{player.nameSurname}}</p>\n        <p class=\"player-birth\">{{player.dateOfBirth}}</p>\n        <p class='player-position'>{{player.position}}</p>\n      </div>\n    </div>\n  </div>\n  <div class='row'>\n    <div class='col-md-3'></div>\n    <div *ngFor=\"let member of otherMembers\" class='col-md-3 player'>\n      <img src=\"/assets/images/{{member.image}}.jpg\" />\n      <div class=\"player-info\">\n        <p class='player-name'>{{member.nameSurname}}</p>\n        <p class=\"player-birth\">{{member.dateOfBirth}}</p>\n        <p class='player-position'>{{member.position}}</p>\n      </div>\n    </div>\n    <div class='col-md-3'></div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/ourteam/ourteam.component.scss":
/*!************************************************!*\
  !*** ./src/app/ourteam/ourteam.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ourteam {\n  padding: 1rem 0; }\n  .ourteam .headline {\n    margin: 40px 0; }\n  .ourteam .col-md-2 {\n    margin: 1rem 0; }\n  .ourteam img {\n    width: inherit;\n    border-radius: .5rem;\n    box-shadow: 1.5px 1.5px 5px #a5a5af;\n    z-index: 1;\n    padding-bottom: 40px; }\n  .ourteam .player {\n    margin-bottom: 25px;\n    position: relative;\n    text-align: center;\n    cursor: pointer;\n    overflow: hidden; }\n  .ourteam .player .player-info {\n      position: absolute;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      height: 35px;\n      transition: all .5s ease; }\n  .ourteam .player:hover .player-info {\n      visibility: visible;\n      transition: all .5s ease;\n      height: 150px;\n      font-weight: bold;\n      font-size: 22px;\n      background-color: rgba(255, 255, 255, 0.8); }\n  .ourteam .player-name,\n  .ourteam .player-position {\n    text-align: center; }\n  .ourteam .player-birth {\n    font-size: 18px;\n    margin-bottom: .25rem; }\n"

/***/ }),

/***/ "./src/app/ourteam/ourteam.component.ts":
/*!**********************************************!*\
  !*** ./src/app/ourteam/ourteam.component.ts ***!
  \**********************************************/
/*! exports provided: OurteamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OurteamComponent", function() { return OurteamComponent; });
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

var OurteamComponent = /** @class */ (function () {
    function OurteamComponent() {
        this.players = [
            { image: 'angela_jankulovska', nameSurname: 'Angela Jankulovska', dateOfBirth: '27.07.2002', position: 'Left Back, Playmaker' },
            { image: 'anastasija_belevska', nameSurname: 'Anastasija Belevska', dateOfBirth: '03.01.2003', position: 'Right Wing, Right Back' },
            { image: 'maja_karanfilovska', nameSurname: 'Maja Karanfilovska', dateOfBirth: '01.05.1996', position: 'Left Back, Right Back' },
            { image: 'anastasija_nikolovska', nameSurname: 'Anastasija Nikolovska', dateOfBirth: '12.08.1998', position: 'Left Wing' },
            { image: 'arijona_raif', nameSurname: 'Arijona Raif', dateOfBirth: '18.06.2001', position: 'Left Back, Right Back' },
            { image: 'dimitrieva_ilina', nameSurname: 'Dimitrieva Ilina', dateOfBirth: '05.11.2000', position: 'Pivot' },
            { image: 'dragana_milosavljevikj', nameSurname: 'Dragana Milosavljevikj', dateOfBirth: 'left wing,28.04.2002', position: 'Playmaker' },
            { image: 'frosina_apostolovska', nameSurname: 'Frosina Apostolovska', dateOfBirth: '18.06.2001', position: 'Playmaker, Right Back' },
            { image: 'grujevska_ivona', nameSurname: 'Grujevska Ivona', dateOfBirth: '-', position: '-' },
            { image: 'iva_bozhinoska', nameSurname: 'Iva Bozhinoska', dateOfBirth: '21.01.1999', position: 'Playmaker' },
            { image: 'kakovska_kristina', nameSurname: 'Kakovska Kristina', dateOfBirth: '-', position: 'Pivot' },
            { image: 'medea_chokeli', nameSurname: 'Medea Chokeli', dateOfBirth: '02.01.1999', position: 'Pivot' },
            { image: 'sandra_durlanova', nameSurname: 'Sandra Durlanova', dateOfBirth: '02.11.1994', position: 'Goalkeeper' },
            { image: 'sashka_filiposka', nameSurname: 'Sashka Filiposka', dateOfBirth: '13.12.1999', position: 'Pivot' },
            { image: 'slobodanka_kiceska', nameSurname: 'Slobodanka Kiceska', dateOfBirth: '16.12.1999', position: 'Goalkeeper' },
            { image: 'talevska_monika', nameSurname: 'Monika Talevska', dateOfBirth: '03.09.1995', position: 'Left Wing' },
            { image: 'vaska_gligorjadis', nameSurname: 'Vaska Gligorjadis', dateOfBirth: '20.07.1999', position: 'Right Wing' },
        ];
        this.otherMembers = [
            { image: 'viktorija_blazhevska', nameSurname: 'Viktorija Blazhevska', dateOfBirth: '20.02.1992', position: 'Coach' },
            { image: 'jovan_vasilev', nameSurname: 'Jovan Vasilev', dateOfBirth: '30.10.1949', position: 'President' }
        ];
    }
    OurteamComponent.prototype.ngOnInit = function () {
    };
    OurteamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ourteam',
            template: __webpack_require__(/*! ./ourteam.component.html */ "./src/app/ourteam/ourteam.component.html"),
            styles: [__webpack_require__(/*! ./ourteam.component.scss */ "./src/app/ourteam/ourteam.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], OurteamComponent);
    return OurteamComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/kristina.murgovska/Desktop/whcpelister/whcpelister/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map