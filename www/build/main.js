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
		268,
		5
	],
	"../pages/personal/personal.module": [
		269,
		4
	],
	"../pages/photo/photo.module": [
		270,
		3
	],
	"../pages/project/project.module": [
		271,
		2
	],
	"../pages/social/social.module": [
		272,
		1
	],
	"../pages/work/work.module": [
		273,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





__WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake__["vfs"] = __WEBPACK_IMPORTED_MODULE_4_pdfmake_build_vfs_fonts__["pdfMake"].vfs;
var HomePage = (function () {
    function HomePage(navCtrl, modal, emailComposer) {
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.emailComposer = emailComposer;
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
    HomePage.prototype.timeOut = function (upperArr, upperArr2, upperArr3, upperArr4, upperArr5) {
        var _this = this;
        // var now = moment().format("DD.MM.YYYY");
        var pdfdocument = this.generatePDF(upperArr, upperArr2, upperArr3, upperArr4, upperArr5);
        var pdfDocGenerator = __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake__["createPdf"](pdfdocument);
        __WEBPACK_IMPORTED_MODULE_3_pdfmake_build_pdfmake__["createPdf"](pdfdocument).download();
        pdfDocGenerator.getBase64(function (data) {
            _this.emailComposer.open({
                to: 'emircanuzel95@gmail.com',
                subject: 'CV UYGULAMASI',
                body: ' Mirsis Bilgi Teknolojileri ',
                attachments: ['base64:CV.pdf//' + data],
                isHtml: true
            });
        });
    };
    HomePage.prototype.generatePDF = function (tableContent, tableContent2, tableContent3, tableContent4, tableContent5) {
        var docDefinition = {
            content: [
                { text: 'Kişisel Bilgiler ', style: 'baslik' },
                { text: tableContent, style: 'header' },
                { text: 'Eğitim Bilgileri ' + "\n" + "\n", style: 'baslik' },
                { text: tableContent2, style: 'header' },
                { text: 'İş Bilgileri ' + "\n" + "\n", style: 'baslik' },
                { text: tableContent3, style: 'header' },
                { text: 'Proje Bilgileri ' + "\n" + "\n", style: 'baslik' },
                { text: tableContent4, style: 'header' },
                { text: 'Sosyal ' + "\n" + "\n", style: 'baslik' },
                { text: tableContent5, style: 'header' },
            ],
            styles: {
                header: {
                    fontSize: 14,
                },
                baslik: {
                    fontSize: 16,
                    alignment: 'center',
                    bold: true
                },
            }
        };
        return docDefinition;
    };
    HomePage.prototype.openOnayla = function () {
        // console.log(this.personalDatas);
        // console.log(this.educationDatas);
        // console.log(this.socialDatas);
        // console.log(this.workDatas);
        // console.log(this.projectDatas);
        // console.log(this.photoDatas);
        this.kisisel = "\n" + "\n" +
            "Ad: " + this.personalDatas.Ad + "\n" +
            "Soyad: " + this.personalDatas.Soyad + "\n" +
            "TC no: " + this.personalDatas.TCno + "\n" +
            "Dogum Tarihi: " + this.personalDatas.DTarih + "\n" +
            "Adres: " + this.personalDatas.Adres + "\n" +
            "Cinsiyet: " + this.personalDatas.Cinsiyet + "\n" +
            "Telefon no: " + this.personalDatas.Telno + "\n" +
            "Mail: " + this.personalDatas.Mail + "\n" + "\n" + "\n";
        //  this.egitim="Lise Adi: "+ this.educationDatas.LAd+"\n"+
        //  "Lise Türü: "+ this.educationDatas.LTürü+"\n"+
        //  "Baslangic Tarihi: "+ this.educationDatas.LBaTarih+"\n"+
        //  "Bitis Tarihi: "+ this.educationDatas.LBiTarih+"\n"+
        // "Lise Ortalamasi: "+ this.educationDatas.LOrtalama+"\n"+"\n"+
        //  "Universite Adi: "+ this.educationDatas.UAd+"\n"+
        //  "Universite Bölümü: "+ this.educationDatas.UTürü+"\n"+
        //  "Baslangic Tarihi: "+ this.educationDatas.UBaTarih+"\n"+
        //  "Bitis Tarihi: "+ this.educationDatas.UBiTarih+"\n"+
        //  "Universite Ortalamasi: "+ this.educationDatas.UOrtalama+"\n"+"\n"+
        //  "Yüksek Lisans Adi: "+ this.educationDatas.YAd+"\n"+
        // "Yüksek Lisans Türü: "+ this.educationDatas.YTürü+"\n"+
        //  "Baslangic Tarihi: "+ this.educationDatas.YBaTarih+"\n"+
        //  "Bitis Tarihi: "+ this.educationDatas.YBiTarih+"\n"+"\n"+"\n"
        //  this.is= "\n"+"\n"+
        //  "Sirket Adi: "+ this.workDatas.SAd+"\n"+
        //  "Baslangic-Bitis Tarihi: "+ this.workDatas.BaTarih+"\n"+
        // "Bitis Tarihi: "+ this.workDatas.BiTarih+"\n"+
        // "Pozisyonu: "+ this.workDatas.FPozisyon+"\n"+
        // "Is Tanimi: "+ this.workDatas.Tanım+"\n"+
        // "Sirketin Bulundugu Il: "+ this.workDatas.Il+"\n"+"\n"+
        // "Sirket Adi: "+ this.workDatas.SAd2+"\n"+
        // "Baslangic-Bitis Tarihi: "+ this.workDatas.BaTarih2+"\n"+
        // "Bitis Tarihi: "+ this.workDatas.BiTarih2+"\n"+
        // "Pozisyonu: "+ this.workDatas.FPozisyon2+"\n"+
        //  "Is Tanimi: "+ this.workDatas.Tanım2+"\n"+
        // "Sirketin Bulundugu Il: "+ this.workDatas.Il2+"\n"+"\n"+
        // "Sirket Adi: "+ this.workDatas.SAd3+"\n"+
        // "Baslangic-Bitis Tarihi: "+ this.workDatas.BaTarih3+"\n"+
        // "Bitis Tarihi: "+ this.workDatas.BiTarih3+"\n"+
        // "Pozisyonu: "+ this.workDatas.FPozisyon3+"\n"+
        // "Is Tanimi: "+ this.workDatas.Tanım3+"\n"+
        // "Sirketin Bulundugu Il: "+ this.workDatas.Il3+"\n"+"\n"+
        // "Yabanci Dil: "+ this.workDatas.YDil+"\n"+
        // "Yetenek: "+ this.workDatas.Yetenek+"\n"+
        // "Sertifika: "+ this.workDatas.Sertifika+"\n"+"\n"+"\n"
        // this.proje="Proje Adi: "+ this.projectDatas.PAd+"\n"+
        // "Proje Konusu: "+ this.projectDatas.PKonu+"\n"+
        // "Proje Teknolojisi: "+ this.projectDatas.PTek+"\n"+
        // "Açiklama: "+ this.projectDatas.Açıklama+"\n"+"\n"+  
        // "Proje Adi: "+ this.projectDatas.PAd2+"\n"+
        // "Proje Konusu: "+ this.projectDatas.PKonu2+"\n"+
        // "Proje Teknolojisi: "+ this.projectDatas.PTek2+"\n"+
        //  "Açiklama: "+ this.projectDatas.Açıklama2+"\n"+"\n"+  
        // "Proje Adi: "+ this.projectDatas.PAd3+"\n"+
        // "Proje Konusu: "+ this.projectDatas.PKonu3+"\n"+
        // "Proje Teknolojisi: "+ this.projectDatas.PTek3+"\n"+
        // "Açiklama: "+ this.projectDatas.Açıklama3+"\n"+"\n"+"\n"
        // this.sosyal="\n"+"\n"+
        //  "Skype: "+ this.socialDatas.Skype+"\n"+
        // "Linkedin: "+ this.socialDatas.Linkedin+"\n"+
        // "GitHub: "+ this.socialDatas.GitHub+"\n"+
        // "Instagram: "+ this.socialDatas.Instagram+"\n"+
        // "Hobiler: "+ this.socialDatas.Hobiler
        this.egitim = "";
        if (this.educationDatas.LAd != null && this.educationDatas.LAd != '') {
            this.egitim = this.egitim + "Lise Adi: " + this.educationDatas.LAd + "\n" +
                "Lise Türü: " + this.educationDatas.LTürü + "\n" +
                "Baslangic Tarihi: " + this.educationDatas.LBaTarih + "\n" +
                "Bitis Tarihi: " + this.educationDatas.LBiTarih + "\n" +
                "Lise Ortalamasi: " + this.educationDatas.LOrtalama + "\n" + "\n";
        }
        if (this.educationDatas.UAd != null && this.educationDatas.UAd != '') {
            this.egitim = this.egitim + "Universite Adi: " + this.educationDatas.UAd + "\n" +
                "Universite Bölümü: " + this.educationDatas.UTürü + "\n" +
                "Baslangic Tarihi: " + this.educationDatas.UBaTarih + "\n" +
                "Bitis Tarihi: " + this.educationDatas.UBiTarih + "\n" +
                "Universite Ortalamasi: " + this.educationDatas.UOrtalama + "\n" + "\n";
        }
        if (this.educationDatas.YAd != null && this.educationDatas.YAd != '') {
            this.egitim = this.egitim + "Yüksek Lisans Adi: " + this.educationDatas.YAd + "\n" +
                "Yüksek Lisans Türü: " + this.educationDatas.YTürü + "\n" +
                "Baslangic Tarihi: " + this.educationDatas.YBaTarih + "\n" +
                "Bitis Tarihi: " + this.educationDatas.YBiTarih + "\n" + "\n" + "\n";
        }
        this.is = "";
        if (this.workDatas.SAd != null && this.workDatas.SAd != '') {
            this.is = "Sirket Adi: " + this.workDatas.SAd + "\n" +
                "Baslangic-Bitis Tarihi: " + this.workDatas.BaTarih + "\n" +
                "Bitis Tarihi: " + this.workDatas.BiTarih + "\n" +
                "Pozisyonu: " + this.workDatas.FPozisyon + "\n" +
                "Is Tanimi: " + this.workDatas.Tanım + "\n" +
                "Sirketin Bulundugu Il: " + this.workDatas.Il + "\n" + "\n";
        }
        if (this.workDatas.SAd2 != null && this.workDatas.SAd2 != '') {
            this.is = this.is + "Sirket Adi: " + this.workDatas.SAd2 + "\n" +
                "Baslangic-Bitis Tarihi: " + this.workDatas.BaTarih2 + "\n" +
                "Bitis Tarihi: " + this.workDatas.BiTarih2 + "\n" +
                "Pozisyonu: " + this.workDatas.FPozisyon2 + "\n" +
                "Is Tanimi: " + this.workDatas.Tanım2 + "\n" +
                "Sirketin Bulundugu Il: " + this.workDatas.Il2 + "\n" + "\n";
        }
        if (this.workDatas.SAd3 != null && this.workDatas.SAd3 != '') {
            this.is = this.is + "Sirket Adi: " + this.workDatas.SAd3 + "\n" +
                "Baslangic-Bitis Tarihi: " + this.workDatas.BaTarih3 + "\n" +
                "Bitis Tarihi: " + this.workDatas.BiTarih3 + "\n" +
                "Pozisyonu: " + this.workDatas.FPozisyon3 + "\n" +
                "Is Tanimi: " + this.workDatas.Tanım3 + "\n" +
                "Sirketin Bulundugu Il: " + this.workDatas.Il3 + "\n" + "\n";
        }
        if (this.workDatas.YDil != null && this.workDatas.YDil != '') {
            this.is = this.is + "Yabanci Dil: " + this.workDatas.YDil + "\n" + "\n";
        }
        if (this.workDatas.Yetenek != null && this.workDatas.Yetenek != '') {
            this.is = this.is + "Yetenek: " + this.workDatas.Yetenek + "\n" + "\n";
        }
        if (this.workDatas.Sertifika != null && this.workDatas.Sertifika != '') {
            this.is = this.is + "Sertifika: " + this.workDatas.Sertifika + "\n" + "\n";
        }
        this.proje = "";
        if (this.projectDatas.PAd != null && this.projectDatas.PAd != '') {
            this.proje = "Proje Adi: " + this.projectDatas.PAd + "\n" +
                "Proje Konusu: " + this.projectDatas.PKonu + "\n" +
                "Proje Teknolojisi: " + this.projectDatas.PTek + "\n" +
                "Açiklama: " + this.projectDatas.Açıklama + "\n" + "\n";
        }
        if (this.projectDatas.PAd2 != null && this.projectDatas.PAd2 != '') {
            this.proje = this.proje + "Proje Adi: " + this.projectDatas.PAd2 + "\n" +
                "Proje Konusu: " + this.projectDatas.PKonu2 + "\n" +
                "Proje Teknolojisi: " + this.projectDatas.PTek2 + "\n" +
                "Açiklama: " + this.projectDatas.Açıklama2 + "\n" + "\n";
        }
        if (this.projectDatas.PAd3 != null && this.projectDatas.PAd3 != '') {
            this.proje = this.proje + "Proje Adi: " + this.projectDatas.PAd3 + "\n" +
                "Proje Konusu: " + this.projectDatas.PKonu3 + "\n" +
                "Proje Teknolojisi: " + this.projectDatas.PTek3 + "\n" +
                "Açiklama: " + this.projectDatas.Açıklama3 + "\n" + "\n";
        }
        this.sosyal = "";
        if (this.socialDatas.Skype != null && this.socialDatas.Skype != '') {
            this.sosyal = "Skype: " + this.socialDatas.Skype + "\n";
        }
        if (this.socialDatas.Linkedin != null && this.socialDatas.Linkedin != '') {
            this.sosyal = this.sosyal + "Linkedin: " + this.socialDatas.Linkedin + "\n";
        }
        if (this.socialDatas.GitHub != null && this.socialDatas.GitHub != '') {
            this.sosyal = this.sosyal + "GitHub: " + this.socialDatas.GitHub + "\n";
        }
        if (this.socialDatas.Instagram != null && this.socialDatas.Instagram != '') {
            this.sosyal = this.sosyal + "Instagram: " + this.socialDatas.Instagram + "\n";
        }
        if (this.socialDatas.Hobiler != null && this.socialDatas.Hobiler != '') {
            this.sosyal = this.sosyal + "Hobiler: " + this.socialDatas.Hobiler;
        }
        console.log(this.sosyal);
        this.timeOut(this.kisisel, this.egitim, this.is, this.proje, this.sosyal);
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      CV APP\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n <ion-card>\n\n  <ion-card-header text-center>\n\n   CV Başlıkları\n\n  </ion-card-header>\n\n\n\n<br><br>\n\n \n\n    <button ion-item (click)="openModalKisisel()" >\n\n      <ion-icon name="ios-person" item-start></ion-icon>\n\n      Kişisel\n\n    </button>\n\n<br>    \n\n    <button ion-item (click)="openModalEgitim()" >\n\n      <ion-icon name="ios-school" item-start></ion-icon>\n\n      Eğitim\n\n    </button>\n\n<br>\n\n      <button ion-item (click)="openModalIs()">\n\n      <ion-icon name="ios-briefcase" item-start></ion-icon>\n\n      İş\n\n    </button>\n\n<br>\n\n<button ion-item (click)="openModalProje()">\n\n      <ion-icon name="ios-folder-open" item-start></ion-icon>\n\n      Projeler\n\n    </button>\n\n    <br>\n\n        <button ion-item (click)="openModalSosyal()">\n\n      <ion-icon name="ios-information-circle" item-start></ion-icon>\n\n      Sosyal\n\n    </button>\n\n    <br>\n\n     <!-- <button ion-item (click)="openModalFoto()">\n\n      <ion-icon name="ios-camera" item-start></ion-icon>\n\n      Fotoğraf\n\n    </button> -->\n\n<br>\n\n \n\n\n\n\n\n \n\n</ion-card>\n\n  <button ion-button block  (click)="openOnayla()">Onayla</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */]) === "function" && _c || Object])
], HomePage);

var _a, _b, _c;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(214);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_email_composer__ = __webpack_require__(192);
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
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_email_composer__["a" /* EmailComposer */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
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

},[195]);
//# sourceMappingURL=main.js.map