webpackJsonp([0],{

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkPageModule", function() { return WorkPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__work__ = __webpack_require__(273);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var WorkPageModule = (function () {
    function WorkPageModule() {
    }
    return WorkPageModule;
}());
WorkPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__work__["a" /* WorkPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__work__["a" /* WorkPage */]),
        ],
    })
], WorkPageModule);

//# sourceMappingURL=work.module.js.map

/***/ }),

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WorkPage; });
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
 * Generated class for the WorkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var WorkPage = (function () {
    function WorkPage(navCtrl, navParams, view, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.formBuilder = formBuilder;
        this.workInformation = {};
        this.kontrol = false;
        this.buttonClicked = false;
        this.workInformation = this.formBuilder.group({
            SAd: ['',],
            BaTarih: ['',],
            BiTarih: ['',],
            FPozisyon: ['',],
            Tanım: ['',],
            Il: ['',],
            YDil: ['',],
            Yetenek: ['',],
            Sertifika: ['',],
            SAd2: ['',],
            BaTarih2: ['',],
            BiTarih2: ['',],
            FPozisyon2: ['',],
            Tanım2: ['',],
            Il2: ['',],
            SAd3: ['',],
            BaTarih3: ['',],
            BiTarih3: ['',],
            FPozisyon3: ['',],
            Tanım3: ['',],
            Il3: ['',]
        });
    }
    WorkPage.prototype.onButtonClick = function () {
        this.buttonClicked = !this.buttonClicked;
    };
    WorkPage.prototype.Deneyimekle = function () {
        this.kontrol = !this.kontrol;
    };
    WorkPage.prototype.closeModal = function () {
        var workData = this.workInformation.value;
        this.view.dismiss(workData);
    };
    WorkPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WorkPage');
    };
    return WorkPage;
}());
WorkPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-work',template:/*ion-inline-start:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\pages\work\work.html"*/'<!--\n\n  Generated template for the WorkPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>work</ion-title>\n\n    <ion-buttons end>\n\n       <button ion-button (click)="closeModal()" >Close</button> \n\n       </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n\n\n\n\n    <form [formGroup]="workInformation" (ngSubmit)="closeModal()" novalidate>\n\n<ion-list>\n\n\n\n\n\n <h3 align="center">Deneyim</h3>\n\n\n\n\n\n    <ion-item>\n\n        <ion-label floating>Şirket Adı</ion-label>\n\n      <ion-input type="text" value="" name="SAd" formControlName="SAd"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n      <ion-item>\n\n                      <ion-label floating>Başlagıç Tarihi</ion-label>\n\n                      <ion-datetime displayFormat="DD/MM/YYYY"  name="BaTarih" formControlName="BaTarih" ></ion-datetime>\n\n                    </ion-item>\n\n\n\n                      <ion-item>\n\n                      <ion-label floating>Bitiş Tarihi</ion-label>\n\n                      <ion-datetime displayFormat="DD/MM/YYYY" name="BiTarih" formControlName="BiTarih" ></ion-datetime>\n\n                    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n        <ion-label floating>Firmadaki Pozisyonu</ion-label>\n\n      <ion-input type="text" value="" name="FPozisyon" formControlName="FPozisyon"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n<ion-item>\n\n        <ion-label floating>İş Tanımı</ion-label>\n\n      <ion-input type="text" value="" name="Tanım" formControlName="Tanım"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n<ion-item>\n\n        <ion-label floating>Şirketin Bulunduğu İl</ion-label>\n\n      <ion-input type="text" value="" name="Il" formControlName="Il"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  </form>\n\n  \n\n  <ion-list>\n\n  <button ion-button icon-start round (click)="onButtonClick()">\n\n    <ion-icon name="md-add-circle"></ion-icon>\n\n    Deneyim Ekle\n\n  </button>\n\n  </ion-list>\n\n  \n\n  \n\n  <form [formGroup]="workInformation" (ngSubmit)="closeModal()" novalidate>\n\n      <ion-list>\n\n  <br><br>\n\n  \n\n  <div *ngIf="buttonClicked">\n\n    \n\n    <h3 align="center">2.Deneyim</h3>\n\n    \n\n    \n\n    <ion-item>\n\n      <ion-label floating>Şirket Adı</ion-label>\n\n      <ion-input type="text" value="" name="SAd2" formControlName="SAd2"></ion-input>\n\n    </ion-item>\n\n    \n\n    \n\n    <ion-item>\n\n      <ion-label floating>Başlagıç Tarihi</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY" name="BaTarih2" formControlName="BaTarih2" ></ion-datetime>\n\n    </ion-item>\n\n    \n\n    <ion-item>\n\n      <ion-label floating>Bitiş Tarihi</ion-label>\n\n      <ion-datetime displayFormat="DD/MM/YYYY"  name="BiTarih2" formControlName="BiTarih2" ></ion-datetime>\n\n    </ion-item>\n\n    \n\n    \n\n    <ion-item>\n\n      <ion-label floating>Firmadaki Pozisyonu</ion-label>\n\n      <ion-input type="text" value="" name="FPozisyon2" formControlName="FPozisyon2"></ion-input>\n\n    </ion-item>\n\n    \n\n    \n\n    <ion-item>\n\n      <ion-label floating>İş Tanımı</ion-label>\n\n      <ion-input type="text" value="" name="Tanım2" formControlName="Tanım2"></ion-input>\n\n    </ion-item>\n\n    \n\n    \n\n    <ion-item>\n\n      <ion-label floating>Şirketin Bulunduğu İl</ion-label>\n\n      <ion-input type="text" value="" name="Il2" formControlName="Il2"></ion-input>\n\n    </ion-item>\n\n    \n\n    \n\n    \n\n    \n\n  </div>\n\n  \n\n</ion-list>\n\n  </form>\n\n  <ion-list> \n\n      <div *ngIf="buttonClicked">\n\n  <button ion-button icon-start round (click)="Deneyimekle()">\n\n      <ion-icon name="md-add-circle"></ion-icon>\n\n      Deneyim Ekle \n\n    </button>\n\n      </div>\n\n  </ion-list>\n\n\n\n\n\n\n\n <br><br>\n\n\n\n\n\n\n\n <form [formGroup]="workInformation" (ngSubmit)="closeModal()" novalidate>\n\n    <ion-list>\n\n\n\n\n\n<div *ngIf="kontrol">\n\n\n\n   <h3 align="center">3.Deneyim</h3>\n\n\n\n\n\n    <ion-item>\n\n        <ion-label floating>Şirket Adı</ion-label>\n\n      <ion-input type="text" value="" name="SAd3" formControlName="SAd3"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n      <ion-item>\n\n                      <ion-label floating>Başlagıç Tarihi</ion-label>\n\n                      <ion-datetime displayFormat="DD/MM/YYYY"  name="BaTarih3" formControlName="BaTarih3" ></ion-datetime>\n\n                    </ion-item>\n\n\n\n                      <ion-item>\n\n                      <ion-label floating>Bitiş Tarihi</ion-label>\n\n                      <ion-datetime displayFormat="DD/MM/YYYY" name="BiTarih3" formControlName="BiTarih3" ></ion-datetime>\n\n                    </ion-item>\n\n\n\n\n\n    <ion-item>\n\n        <ion-label floating>Firmadaki Pozisyonu</ion-label>\n\n      <ion-input type="text" value=""  name="FPozisyon3" formControlName="FPozisyon3"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n<ion-item>\n\n        <ion-label floating>İş Tanımı</ion-label>\n\n      <ion-input type="text" value="" name="Tanım3" formControlName="Tanım3"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n<ion-item>\n\n        <ion-label floating>Şirketin Bulunduğu İl</ion-label>\n\n      <ion-input type="text" value="" name="Il3" formControlName="Il3"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n <br><br>\n\n</div>\n\n<ion-item>\n\n  <ion-label>Yabancı Dil</ion-label>\n\n  <ion-select  multiple="true"  name="YDil" formControlName="YDil">\n\n    <ion-option>İngilizce</ion-option>\n\n    <ion-option>Fransızca</ion-option>\n\n    <ion-option>Almanca</ion-option>\n\n    <ion-option>Çince </ion-option>\n\n    <ion-option>İspanyolca </ion-option>\n\n    <ion-option>Hintçe </ion-option>\n\n    <ion-option>Arapça </ion-option>\n\n    <ion-option>Portekizce  </ion-option>\n\n    <ion-option>Rusça  </ion-option>\n\n    <ion-option>Japonca </ion-option>\n\n    <ion-option>Portekizce </ion-option>\n\n    <ion-option>İtalyanca </ion-option>\n\n  </ion-select>\n\n</ion-item>\n\n<br>\n\n\n\n<ion-item>\n\n        <ion-label floating>Yetenekler</ion-label>\n\n      <ion-input type="text" value=""  name="Yetenek" formControlName="Yetenek"></ion-input>\n\n    </ion-item>\n\n\n\n<br>\n\n\n\n\n\n\n\n<ion-item>\n\n        <ion-label floating>Sertifika</ion-label>\n\n      <ion-input type="text" value="" name="Sertifika" formControlName="Sertifika"></ion-input>\n\n    </ion-item>\n\n\n\n</ion-list>\n\n   \n\n </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\pages\work\work.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], WorkPage);

//# sourceMappingURL=work.js.map

/***/ })

});
//# sourceMappingURL=0.js.map