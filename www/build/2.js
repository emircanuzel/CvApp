webpackJsonp([2],{

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPageModule", function() { return ProjectPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__project__ = __webpack_require__(277);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProjectPageModule = (function () {
    function ProjectPageModule() {
    }
    return ProjectPageModule;
}());
ProjectPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__project__["a" /* ProjectPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__project__["a" /* ProjectPage */]),
        ],
    })
], ProjectPageModule);

//# sourceMappingURL=project.module.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectPage; });
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
 * Generated class for the ProjectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ProjectPage = (function () {
    function ProjectPage(navCtrl, navParams, view, formBuilder) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.view = view;
        this.formBuilder = formBuilder;
        this.projectInformation = {};
        this.kontrol = false;
        this.buttonClicked = false;
        this.projectInformation = this.formBuilder.group({
            PAd: ['',],
            PKonu: ['',],
            PTek: ['',],
            Açıklama: ['',],
            PAd2: ['',],
            PKonu2: ['',],
            PTek2: ['',],
            Açıklama2: ['',],
            PAd3: ['',],
            PKonu3: ['',],
            PTek3: ['',],
            Açıklama3: ['',],
            PSayac: ['',],
        });
    }
    ProjectPage.prototype.onButtonClick = function () {
        this.buttonClicked = !this.buttonClicked;
        //  this.projectInformation.PSayac.value=1
    };
    ProjectPage.prototype.Projeekle = function () {
        this.kontrol = !this.kontrol;
        // this.projectInformation.PSayac.value=12;
    };
    ProjectPage.prototype.closeModal = function () {
        var projectData = this.projectInformation.value;
        this.view.dismiss(projectData);
    };
    ProjectPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProjectPage');
    };
    return ProjectPage;
}());
ProjectPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-project',template:/*ion-inline-start:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\pages\project\project.html"*/'<!--\n\n  Generated template for the ProjectPage page.\n\n\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n\n  Ionic pages and navigation.\n\n-->\n\n<ion-header>\n\n\n\n  <ion-navbar>\n\n    <ion-title>Proje Bilgileri</ion-title>\n\n    <ion-buttons end>\n\n       <button ion-button (click)="closeModal()" >Close</button> \n\n       </ion-buttons>\n\n  </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n <form [formGroup]="projectInformation" (ngSubmit)="closeModal()" novalidate>\n\n<ion-list>\n\n\n\n\n\n <h3 align="center">Proje</h3>\n\n\n\n\n\n    <ion-item>\n\n        <ion-label floating>Proje Adı</ion-label>\n\n      <ion-input type="text" value="" name="PAd" formControlName="PAd"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n      \n\n\n\n\n\n    <ion-item>\n\n        <ion-label floating>Proje Konusu</ion-label>\n\n      <ion-input type="text" value="" name="PKonu" formControlName="PKonu"></ion-input>\n\n    </ion-item>\n\n\n\n<ion-item>\n\n        <ion-label floating>Projede kullanılan teknoloji</ion-label>\n\n      <ion-input type="text" value="" name="PTek" formControlName="PTek" ></ion-input>\n\n    </ion-item>\n\n\n\n\n\n<ion-item>\n\n        <ion-label floating>Açıklama</ion-label>\n\n      <ion-input type="text" value="" name="Açıklama" formControlName="Açıklama"></ion-input>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  </form>\n\n  \n\n  <ion-list>\n\n  <button ion-button icon-start round (click)="onButtonClick()">\n\n    <ion-icon name="md-add-circle"></ion-icon>\n\n    Proje Ekle\n\n  </button>\n\n  </ion-list>\n\n  \n\n  \n\n  <form [formGroup]="projectInformation" (ngSubmit)="closeModal()" novalidate>\n\n      <ion-list>\n\n  <br><br>\n\n  \n\n  <div *ngIf="buttonClicked">\n\n    \n\n    <h3 align="center">Proje 2</h3>\n\n\n\n\n\n    <ion-item>\n\n        <ion-label floating>Proje Adı</ion-label>\n\n      <ion-input type="text" value="" name="PAd2" formControlName="PAd2"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n      \n\n\n\n\n\n    <ion-item>\n\n        <ion-label floating>Proje Konusu</ion-label>\n\n      <ion-input type="text" value="" name="PKonu2" formControlName="PKonu2"></ion-input>\n\n    </ion-item>\n\n\n\n<ion-item>\n\n        <ion-label floating>Projede kullanılan teknoloji</ion-label>\n\n      <ion-input type="text" value="" name="PTek2" formControlName="PTek2" ></ion-input>\n\n    </ion-item>\n\n\n\n\n\n<ion-item>\n\n        <ion-label floating>Açıklama</ion-label>\n\n      <ion-input type="text" value="" name="Açıklama2" formControlName="Açıklama2"></ion-input>\n\n    </ion-item>\n\n    \n\n    \n\n    \n\n    \n\n  </div>\n\n  \n\n</ion-list>\n\n  </form>\n\n  <ion-list> \n\n      <div *ngIf="buttonClicked">\n\n  <button ion-button icon-start round (click)="Projeekle()">\n\n      <ion-icon name="md-add-circle"></ion-icon>\n\n      Proje Ekle \n\n    </button>\n\n      </div>\n\n  </ion-list>\n\n\n\n\n\n\n\n <br><br>\n\n\n\n\n\n\n\n <form [formGroup]="projectInformation" (ngSubmit)="closeModal()" novalidate>\n\n    <ion-list>\n\n\n\n\n\n<div *ngIf="kontrol">\n\n\n\n   <h3 align="center">Proje 3</h3>\n\n\n\n\n\n    <ion-item>\n\n        <ion-label floating>Proje Adı</ion-label>\n\n      <ion-input type="text" value="" name="PAd3" formControlName="PAd3"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n      \n\n\n\n\n\n    <ion-item>\n\n        <ion-label floating>Proje Konusu</ion-label>\n\n      <ion-input type="text" value="" name="PKonu3" formControlName="PKonu3"></ion-input>\n\n    </ion-item>\n\n\n\n<ion-item>\n\n        <ion-label floating>Projede kullanılan teknoloji</ion-label>\n\n      <ion-input type="text" value="" name="PTek3" formControlName="PTek3" ></ion-input>\n\n    </ion-item>\n\n\n\n\n\n<ion-item>\n\n        <ion-label floating>Açıklama</ion-label>\n\n      <ion-input type="text" value="" name="Açıklama3" formControlName="Açıklama3"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n <br><br>\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n</ion-list>\n\n   \n\n </form>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\pages\project\project.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */], __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */]])
], ProjectPage);

//# sourceMappingURL=project.js.map

/***/ })

});
//# sourceMappingURL=2.js.map