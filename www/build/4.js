webpackJsonp([4],{

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersonalPageModule", function() { return PersonalPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__personal__ = __webpack_require__(268);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PersonalPageModule = (function () {
    function PersonalPageModule() {
    }
    return PersonalPageModule;
}());
PersonalPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__personal__["a" /* PersonalPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__personal__["a" /* PersonalPage */]),
        ],
    })
], PersonalPageModule);

//# sourceMappingURL=personal.module.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PersonalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
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
 * Generated class for the PersonalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var PersonalPage = (function () {
    function PersonalPage(navCtrl, navParams, view, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.formBuilder = formBuilder;
        this.personalInformation = {};
        this.personalInformation = this.formBuilder.group({
            Ad: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            Soyad: ['',],
            TCno: ['',],
            Telno: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(10)],
            Adres: ['',],
            DTarih: ['',],
            Mail: ['',],
            Cinsiyet: ['',]
        });
    }
    PersonalPage.prototype.closeModal = function () {
        var personalData = this.personalInformation.value;
        this.view.dismiss(personalData);
    };
    PersonalPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PersonalPage');
    };
    return PersonalPage;
}());
PersonalPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-personal',template:/*ion-inline-start:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\pages\personal\personal.html"*/'<!--\n\n  Generated template for the PersonalPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Kişisel</ion-title>\n\n    <ion-buttons end>\n\n       <button ion-button (click)="closeModal()" >Close</button> \n\n       </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n     \n\n<form [formGroup]="personalInformation" (ngSubmit)="closeModal()" novalidate>\n\n\n\n\n\n<ion-list>\n\n\n\n    <ion-item>\n\n        <ion-label floating>Ad</ion-label>\n\n      <ion-input type="text" value="" name="Ad" formControlName="Ad" ></ion-input>\n\n    </ion-item>\n\n\n\n\n\n        <ion-item>\n\n            <ion-label floating>Soyad</ion-label>\n\n            <ion-input type="text" value="" name="Soyad" formControlName="Soyad" ></ion-input>\n\n          </ion-item>\n\n\n\n\n\n\n\n              <ion-item>\n\n                <ion-label floating>TC No</ion-label>\n\n                <ion-input type="tel"  maxlength="11"  name="TCno" formControlName="TCno" ></ion-input>\n\n              </ion-item>\n\n\n\n\n\n                                  <ion-item>\n\n                                    <ion-label floating>Cinsiyet</ion-label>\n\n                                    <ion-select name="Cinsiyet" formControlName="Cinsiyet" >\n\n                                      <ion-option value="kadın">Kadın</ion-option>\n\n                                      <ion-option value="erkek">Erkek</ion-option>\n\n                                    </ion-select>\n\n                                    </ion-item>\n\n\n\n                    <ion-item>\n\n                      <ion-label floating>Doğum Tarihi</ion-label>\n\n                      <ion-datetime displayFormat="DD/MM/YYYY" name="DTarih" formControlName="DTarih" ></ion-datetime>\n\n                    </ion-item>\n\n\n\n\n\n                          <ion-item>\n\n                          <ion-label floating>Mail</ion-label>\n\n                          <ion-input type="text" value="" name="Mail" formControlName="Mail" ></ion-input>\n\n                        </ion-item>\n\n\n\n\n\n                              <ion-item>\n\n                                <ion-label floating>Telefon No</ion-label>\n\n                                <ion-input type="number" value="" name="Telno" formControlName="Telno"  ></ion-input>\n\n                              </ion-item>\n\n                                 \n\n                                 \n\n\n\n                                        <ion-item>\n\n                                            <ion-label floating>Adres</ion-label>\n\n                                            <ion-input type="text" value=""  name="Adres" formControlName="Adres" ></ion-input>\n\n                                          </ion-item>\n\n                                           \n\n\n\n\n\n\n\n\n\n</ion-list>\n\n\n\n\n\n\n\n\n\n</form>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\pages\personal\personal.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], PersonalPage);

//# sourceMappingURL=personal.js.map

/***/ })

});
//# sourceMappingURL=4.js.map