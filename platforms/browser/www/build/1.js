webpackJsonp([1],{

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocialPageModule", function() { return SocialPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__social__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SocialPageModule = (function () {
    function SocialPageModule() {
    }
    return SocialPageModule;
}());
SocialPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__social__["a" /* SocialPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__social__["a" /* SocialPage */]),
        ],
    })
], SocialPageModule);

//# sourceMappingURL=social.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SocialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var SocialPage = (function () {
    function SocialPage(navCtrl, navParams, viewCtrl, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.formBuilder = formBuilder;
        this.socialInformation = {};
        this.socialInformation = this.formBuilder.group({
            Skype: ['',],
            Linkedin: ['',],
            GitHub: ['',],
            Instagram: ['',],
            Hobiler: ['',],
        });
    }
    SocialPage.prototype.closeModal = function () {
        var socialData = this.socialInformation.value;
        this.viewCtrl.dismiss(socialData);
    };
    SocialPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SocialPage');
    };
    return SocialPage;
}());
SocialPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-social',template:/*ion-inline-start:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\pages\social\social.html"*/'<!--\n\n  Generated template for the SocialPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>social</ion-title>\n\n    <ion-buttons end>\n\n       <button ion-button (click)="closeModal()" >Close</button> \n\n       </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n  \n\n\n\n   \n\n<form [formGroup]="socialInformation" (ngSubmit)="closeModal()" novalidate>\n\n\n\n\n\n\n\n\n\n\n\n<ion-list>\n\n<h3 align="center">Sosyal Medya</h3>\n\n<ion-item>\n\n        <ion-label floating> <ion-icon name="logo-skype"></ion-icon> Skype</ion-label>\n\n      <ion-input type="text" value="" name="Skype" formControlName="Skype" ></ion-input>\n\n    </ion-item>\n\n\n\n<ion-item>\n\n        <ion-label floating>  <ion-icon name="logo-linkedin"></ion-icon> Linkedin</ion-label> \n\n         \n\n      <ion-input type="text" value="" name="Linkedin" formControlName="Linkedin" ></ion-input>\n\n    </ion-item>\n\n        \n\n<ion-item>\n\n        <ion-label floating> <ion-icon name="logo-github"></ion-icon>  GitHub</ion-label>\n\n      <ion-input type="text" value=""  name="GitHub" formControlName="GitHub"></ion-input>\n\n    </ion-item>\n\n    <ion-item>\n\n        <ion-label floating>   <ion-icon name="logo-instagram"></ion-icon>  İnstagram</ion-label>\n\n      <ion-input type="text" value="" name="Instagram" formControlName="Instagram" ></ion-input>\n\n    </ion-item>\n\n    \n\n        \n\n\n\n\n\n    <ion-item>\n\n        <ion-label floating>  <ion-icon name="color-palette"></ion-icon>  Hobiler</ion-label>\n\n      <ion-input type="text" value="" name="Hobiler" formControlName="Hobiler" ></ion-input>\n\n    </ion-item>\n\n                      \n\n\n\n\n\n</ion-list>\n\n\n\n\n\n</form>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\pages\social\social.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], SocialPage);

//# sourceMappingURL=social.js.map

/***/ })

});
//# sourceMappingURL=1.js.map