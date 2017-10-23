webpackJsonp([6],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/education/education.module": [
		265,
		5
	],
	"../pages/personal/personal.module": [
		266,
		4
	],
	"../pages/photo/photo.module": [
		267,
		3
	],
	"../pages/project/project.module": [
		268,
		2
	],
	"../pages/social/social.module": [
		269,
		1
	],
	"../pages/work/work.module": [
		270,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 148;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jspdf___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jspdf__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, modal) {
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.personalDatas = {};
        this.educationDatas = {};
        this.socialDatas = {};
        this.workDatas = {};
        this.projectDatas = {};
        this.photoDatas = {};
    }
    HomePage.prototype.openModalKisisel = function () {
        var _this = this;
        var Personal = this.modal.create('PersonalPage');
        Personal.present();
        Personal.onDidDismiss(function (personalData) {
            _this.personalDatas = personalData;
        });
    };
    HomePage.prototype.openModalEgitim = function () {
        var _this = this;
        var Egitim = this.modal.create('EducationPage');
        Egitim.present();
        Egitim.onDidDismiss(function (educationData) {
            _this.educationDatas = educationData;
        });
    };
    HomePage.prototype.openModalIs = function () {
        var _this = this;
        var Is = this.modal.create('WorkPage');
        Is.present();
        Is.onDidDismiss(function (workData) {
            _this.workDatas = workData;
        });
    };
    HomePage.prototype.openModalProje = function () {
        var _this = this;
        var Proje = this.modal.create('ProjectPage');
        Proje.present();
        Proje.onDidDismiss(function (projectData) {
            _this.projectDatas = projectData;
        });
    };
    HomePage.prototype.openModalSosyal = function () {
        var _this = this;
        var Sosyal = this.modal.create('SocialPage');
        Sosyal.present();
        Sosyal.onDidDismiss(function (socialData) {
            _this.socialDatas = socialData;
        });
    };
    HomePage.prototype.openModalFoto = function () {
        var _this = this;
        var Foto = this.modal.create('PhotoPage');
        Foto.present();
        Foto.onDidDismiss(function (photoData) {
            _this.photoDatas = photoData;
        });
    };
    HomePage.prototype.openOnayla = function () {
        console.log(this.personalDatas);
        console.log(this.educationDatas);
        console.log(this.socialDatas);
        console.log(this.workDatas);
        console.log(this.projectDatas);
        console.log(this.photoDatas);
        var doc = new __WEBPACK_IMPORTED_MODULE_2_jspdf__();
        var i = 0;
        // for(var key in this.personalDatas){
        //    doc.text(10, 10 + i, key + ": " + this.personalDatas[key]);
        //    i+=10;
        // }
        doc.text(85, 10, "Kisisel Bilgiler");
        doc.text(10, 30, "Ad: " + this.personalDatas.Ad);
        doc.text(10, 40, "Soyad: " + this.personalDatas.Soyad);
        doc.text(10, 50, "TC no: " + this.personalDatas.TCno);
        doc.text(10, 60, "Dogum Tarihi: " + this.personalDatas.DTarih);
        doc.text(10, 70, "Adres: " + this.personalDatas.Adres);
        doc.text(110, 30, "Cinsiyet: " + this.personalDatas.Cinsiyet);
        doc.text(110, 40, "Telefon no: " + this.personalDatas.Telno);
        doc.text(110, 50, "Mail: " + this.personalDatas.Mail);
        doc.text(10, 80, "--------------------------------------------------------------------------------------------------");
        doc.text(85, 90, "Egitim Bilgileri");
        doc.text(10, 100, "Lise Adi: " + this.educationDatas.LAd);
        doc.text(10, 110, "Lise Türü: " + this.educationDatas.LTürü);
        doc.text(110, 100, "Baslangic Tarihi: " + this.educationDatas.LBaTarih);
        doc.text(110, 110, "Bitis Tarihi: " + this.educationDatas.LBiTarih);
        doc.text(10, 120, "Lise Ortalamasi: " + this.educationDatas.LOrtalama);
        doc.text(10, 140, "Universite Adi: " + this.educationDatas.UAd);
        doc.text(10, 150, "Universite Türü: " + this.educationDatas.UTürü);
        doc.text(110, 140, "Baslangic Tarihi: " + this.educationDatas.UBaTarih);
        doc.text(110, 150, "Bitis Tarihi: " + this.educationDatas.UBiTarih);
        doc.text(10, 160, "Universite Ortalamasi: " + this.educationDatas.UOrtalama);
        doc.text(10, 180, "Yüksek Lisans Adi: " + this.educationDatas.YAd);
        doc.text(10, 190, "Yüksek Lisans Türü: " + this.educationDatas.YTürü);
        doc.text(110, 180, "Baslangic Tarihi: " + this.educationDatas.YBaTarih);
        doc.text(110, 190, "Bitis Tarihi: " + this.educationDatas.YBiTarih);
        doc.text(10, 200, "--------------------------------------------------------------------------------------------------");
        doc.text(85, 210, "Deneyim Bilgileri");
        doc.text(10, 220, "Sirket Adi: " + this.workDatas.SAd);
        doc.text(110, 220, "Baslangic-Bitis Tarihi: " + this.workDatas.BaTarih);
        doc.text(110, 230, "Bitis Tarihi: " + this.workDatas.BiTarih);
        doc.text(10, 230, "Pozisyonu: " + this.workDatas.FPozisyon);
        doc.text(10, 250, "Is Tanimi: " + this.workDatas.Tanım);
        doc.text(10, 240, "Sirketin Bulundugu Il: " + this.workDatas.Il);
        // for(var key in this.educationDatas){
        //   doc.text(50, 20 + i, key + ": " + this.educationDatas[key]);
        //   i+=10;
        // }
        // for(var key in this.workDatas){
        //   doc.text(20, 10 + i, key + ": " + this.workDatas[key]);
        //   i+=10;
        // }
        // for(var key in this.projectDatas){
        //   doc.text(20, 10 + i, key + ": " + this.projectDatas[key]);
        //   i+=10;
        // }
        // for(var key in this.socialDatas){
        //   doc.text(20, 10 + i, key + ": " + this.socialDatas[key]);
        //   i+=10;
        // }
        doc.save('CV.pdf');
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      CV APP\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n <ion-card>\n\n  <ion-card-header text-center>\n\n   CV Başlıkları\n\n  </ion-card-header>\n\n\n\n<br><br>\n\n \n\n    <button ion-item (click)="openModalKisisel()" >\n\n      <ion-icon name="ios-person" item-start></ion-icon>\n\n      Kişisel\n\n    </button>\n\n<br>    \n\n    <button ion-item (click)="openModalEgitim()" >\n\n      <ion-icon name="ios-school" item-start></ion-icon>\n\n      Eğitim\n\n    </button>\n\n<br>\n\n      <button ion-item (click)="openModalIs()">\n\n      <ion-icon name="ios-briefcase" item-start></ion-icon>\n\n      İş\n\n    </button>\n\n<br>\n\n<button ion-item (click)="openModalProje()">\n\n      <ion-icon name="ios-folder-open" item-start></ion-icon>\n\n      Projeler\n\n    </button>\n\n    <br>\n\n        <button ion-item (click)="openModalSosyal()">\n\n      <ion-icon name="ios-information-circle" item-start></ion-icon>\n\n      Sosyal\n\n    </button>\n\n    <br>\n\n     <button ion-item (click)="openModalFoto()">\n\n      <ion-icon name="ios-camera" item-start></ion-icon>\n\n      Fotoğraf\n\n    </button>\n\n<br>\n\n \n\n\n\n\n\n \n\n</ion-card>\n\n  <button ion-button block  (click)="openOnayla()">Onayla</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _b || Object])
], HomePage);

var _a, _b;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/education/education.module#EducationPageModule', name: 'EducationPage', segment: 'education', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/personal/personal.module#PersonalPageModule', name: 'PersonalPage', segment: 'personal', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/photo/photo.module#PhotoPageModule', name: 'PhotoPage', segment: 'photo', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/project/project.module#ProjectPageModule', name: 'ProjectPage', segment: 'project', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/social/social.module#SocialPageModule', name: 'SocialPage', segment: 'social', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/work/work.module#WorkPageModule', name: 'WorkPage', segment: 'work', priority: 'low', defaultHistory: [] }
                ]
            })
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n\n'/*ion-inline-end:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map