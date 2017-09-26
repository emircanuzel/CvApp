webpackJsonp([6],{

/***/ 106:
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
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/education/education.module": [
		261,
		5
	],
	"../pages/personal/personal.module": [
		262,
		4
	],
	"../pages/photo/photo.module": [
		263,
		3
	],
	"../pages/project/project.module": [
		264,
		2
	],
	"../pages/social/social.module": [
		265,
		1
	],
	"../pages/work/work.module": [
		266,
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
webpackAsyncContext.id = 147;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
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
        var Is = this.modal.create('WorkPage');
        Is.present();
    };
    HomePage.prototype.openModalProje = function () {
        var Proje = this.modal.create('ProjectPage');
        Proje.present();
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
        var Foto = this.modal.create('PhotoPage');
        Foto.present();
    };
    HomePage.prototype.openOnayla = function () {
        console.log(this.personalDatas);
        console.log(this.educationDatas);
        console.log(this.socialDatas);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      CV APP\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n <ion-card>\n\n  <ion-card-header text-center>\n\n   CV Başlıkları\n\n  </ion-card-header>\n\n\n\n<br><br>\n\n \n\n    <button ion-item (click)="openModalKisisel()" >\n\n      <ion-icon name="ios-person" item-start></ion-icon>\n\n      Kişisel\n\n    </button>\n\n<br>    \n\n    <button ion-item (click)="openModalEgitim()" >\n\n      <ion-icon name="ios-school" item-start></ion-icon>\n\n      Eğitim\n\n    </button>\n\n<br>\n\n      <button ion-item (click)="openModalIs()">\n\n      <ion-icon name="ios-briefcase" item-start></ion-icon>\n\n      İş\n\n    </button>\n\n<br>\n\n<button ion-item (click)="openModalProje()">\n\n      <ion-icon name="ios-folder-open" item-start></ion-icon>\n\n      Projeler\n\n    </button>\n\n    <br>\n\n        <button ion-item (click)="openModalSosyal()">\n\n      <ion-icon name="ios-information-circle" item-start></ion-icon>\n\n      Sosyal\n\n    </button>\n\n    <br>\n\n     <button ion-item (click)="openModalFoto()">\n\n      <ion-icon name="ios-camera" item-start></ion-icon>\n\n      Fotoğraf\n\n    </button>\n\n<br>\n\n \n\n\n\n\n\n \n\n</ion-card>\n\n  <button ion-button block  (click)="openOnayla()">Onayla</button>\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(211);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(260);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(191);
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
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
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
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(187);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[192]);
//# sourceMappingURL=main.js.map