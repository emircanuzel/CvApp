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
    function HomePage(navCtrl, modal, emailComposer, alertCtrl) {
        this.navCtrl = navCtrl;
        this.modal = modal;
        this.emailComposer = emailComposer;
        this.alertCtrl = alertCtrl;
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
        Foto.onDidDismiss(function (photoData, kontrol) {
            _this.photoDatas = photoData;
            _this.kontrol = kontrol;
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
                {
                    columns: [
                        { text: this.personalDatas.Ad + " " + this.personalDatas.Soyad, style: 'header2' },
                        {
                            image: this.photoDatas,
                            width: 150,
                            height: 150,
                            alignment: 'right',
                        },
                    ]
                },
                // {
                //   // if you specify both width and height - image will be stretched
                //   image: this.photoDatas ,
                //   width: 150,
                //   height: 150,
                //   alignment:'left',
                //   // text: tableContent+"\n"+"\n", style: 'header2'
                // },
                { text: "\n" + tableContent, style: 'baslik' },
                { text: this.kisisel, style: 'header' },
                { text: "\n" + tableContent2, style: 'baslik' },
                { text: this.egitim, style: 'header' },
                { text: tableContent3, style: 'baslik' },
                { text: this.is, style: 'header' },
                { text: tableContent4, style: 'baslik' },
                { text: this.proje, style: 'header' },
                { text: tableContent5, style: 'baslik' },
                { text: this.sosyal, style: 'header' },
            ],
            styles: {
                header: {
                    fontSize: 14,
                    margin: [30, 0, 0, 0],
                },
                baslik: {
                    fontSize: 16,
                    alignment: 'center',
                    bold: true
                },
                header2: {
                    fontSize: 24,
                    margin: [60, 60, 0, 0],
                },
            }
        };
        return docDefinition;
    };
    HomePage.prototype.openOnayla = function () {
        var durum = 0;
        var durum2 = 0;
        var durum3 = 0;
        var durum4 = 0;
        var durum5 = 0;
        // this.kisisel= "\n"+"\n"+
        // "Ad: "+this.personalDatas.Ad+"\n"+
        // "Soyad: "+this.personalDatas.Soyad+"\n"+
        // "TC no: "+ this.personalDatas.TCno+"\n"+
        // "Dogum Tarihi: "+ this.personalDatas.DTarih+"\n"+
        // "Adres: "+ this.personalDatas.Adres+"\n"+
        // "Cinsiyet: "+ this.personalDatas.Cinsiyet+"\n"+
        // "Telefon no: "+ this.personalDatas.Telno+"\n"+
        // "Mail: "+ this.personalDatas.Mail+"\n"+"\n"+"\n"
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
        this.kisisel = "";
        if (this.personalDatas.Ad != null && this.personalDatas.Ad != '') {
            this.kisisel = this.kisisel + "Ad: " + this.personalDatas.Ad + "\n";
            durum = 1;
        }
        if (this.personalDatas.Soyad != null && this.personalDatas.Soyad != '') {
            this.kisisel = this.kisisel + "Soyad: " + this.personalDatas.Soyad + "\n";
            durum = 1;
        }
        if (this.personalDatas.TCno != null && this.personalDatas.TCno != '') {
            this.kisisel = this.kisisel + "TC no: " + this.personalDatas.TCno + "\n";
            durum = 1;
        }
        if (this.personalDatas.DTarih != null && this.personalDatas.DTarih != '') {
            this.kisisel = this.kisisel + "Dogum Tarihi: " + this.personalDatas.DTarih + "\n";
            durum = 1;
        }
        if (this.personalDatas.Adres != null && this.personalDatas.Adres != '') {
            this.kisisel = this.kisisel + "Adres: " + this.personalDatas.Adres + "\n";
            durum = 1;
        }
        if (this.personalDatas.Cinsiyet != null && this.personalDatas.Cinsiyet != '') {
            this.kisisel = this.kisisel + "Cinsiyet: " + this.personalDatas.Cinsiyet + "\n";
            durum = 1;
        }
        if (this.personalDatas.Telno != null && this.personalDatas.Telno != '') {
            this.kisisel = this.kisisel + "Telefon no: " + this.personalDatas.Telno + "\n";
            durum = 1;
        }
        if (this.personalDatas.Mail != null && this.personalDatas.Mail != '') {
            this.kisisel = this.kisisel + "Mail: " + this.personalDatas.Mail + "\n";
            durum = 1;
        }
        this.egitim = "";
        if (this.educationDatas.LAd != null && this.educationDatas.LAd != '') {
            this.egitim = this.egitim + "Lise Adi: " + this.educationDatas.LAd + "\n" +
                "Lise Türü: " + this.educationDatas.LTürü + "\n" +
                "Baslangic Tarihi: " + this.educationDatas.LBaTarih + "\n" +
                "Bitis Tarihi: " + this.educationDatas.LBiTarih + "\n" +
                "Lise Ortalamasi: " + this.educationDatas.LOrtalama + "\n" + "\n";
            durum2 = 1;
        }
        if (this.educationDatas.UAd != null && this.educationDatas.UAd != '') {
            this.egitim = this.egitim + "Universite Adi: " + this.educationDatas.UAd + "\n" +
                "Universite Bölümü: " + this.educationDatas.UTürü + "\n" +
                "Baslangic Tarihi: " + this.educationDatas.UBaTarih + "\n" +
                "Bitis Tarihi: " + this.educationDatas.UBiTarih + "\n" +
                "Universite Ortalamasi: " + this.educationDatas.UOrtalama + "\n" + "\n";
            durum2 = 1;
        }
        if (this.educationDatas.YAd != null && this.educationDatas.YAd != '') {
            this.egitim = this.egitim + "Yüksek Lisans Adi: " + this.educationDatas.YAd + "\n" +
                "Yüksek Lisans Türü: " + this.educationDatas.YTürü + "\n" +
                "Baslangic Tarihi: " + this.educationDatas.YBaTarih + "\n" +
                "Bitis Tarihi: " + this.educationDatas.YBiTarih + "\n" + "\n" + "\n";
            durum2 = 1;
        }
        this.is = "";
        if (this.workDatas.SAd != null && this.workDatas.SAd != '') {
            this.is = "Sirket Adi: " + this.workDatas.SAd + "\n" +
                "Baslangic-Bitis Tarihi: " + this.workDatas.BaTarih + "\n" +
                "Bitis Tarihi: " + this.workDatas.BiTarih + "\n" +
                "Pozisyonu: " + this.workDatas.FPozisyon + "\n" +
                "Is Tanimi: " + this.workDatas.Tanım + "\n" +
                "Sirketin Bulundugu Il: " + this.workDatas.Il + "\n" + "\n";
            durum3 = 1;
        }
        if (this.workDatas.SAd2 != null && this.workDatas.SAd2 != '') {
            this.is = this.is + "Sirket Adi: " + this.workDatas.SAd2 + "\n" +
                "Baslangic-Bitis Tarihi: " + this.workDatas.BaTarih2 + "\n" +
                "Bitis Tarihi: " + this.workDatas.BiTarih2 + "\n" +
                "Pozisyonu: " + this.workDatas.FPozisyon2 + "\n" +
                "Is Tanimi: " + this.workDatas.Tanım2 + "\n" +
                "Sirketin Bulundugu Il: " + this.workDatas.Il2 + "\n" + "\n";
            durum3 = 1;
        }
        if (this.workDatas.SAd3 != null && this.workDatas.SAd3 != '') {
            this.is = this.is + "Sirket Adi: " + this.workDatas.SAd3 + "\n" +
                "Baslangic-Bitis Tarihi: " + this.workDatas.BaTarih3 + "\n" +
                "Bitis Tarihi: " + this.workDatas.BiTarih3 + "\n" +
                "Pozisyonu: " + this.workDatas.FPozisyon3 + "\n" +
                "Is Tanimi: " + this.workDatas.Tanım3 + "\n" +
                "Sirketin Bulundugu Il: " + this.workDatas.Il3 + "\n" + "\n";
            durum3 = 1;
        }
        if (this.workDatas.YDil != null && this.workDatas.YDil != '') {
            this.is = this.is + "Yabanci Dil: " + this.workDatas.YDil + "\n" + "\n";
            durum3 = 1;
        }
        if (this.workDatas.Yetenek != null && this.workDatas.Yetenek != '') {
            this.is = this.is + "Yetenek: " + this.workDatas.Yetenek + "\n" + "\n";
            durum3 = 1;
        }
        if (this.workDatas.Sertifika != null && this.workDatas.Sertifika != '') {
            this.is = this.is + "Sertifika: " + this.workDatas.Sertifika + "\n" + "\n";
            durum3 = 1;
        }
        this.proje = "";
        if (this.projectDatas.PAd != null && this.projectDatas.PAd != '') {
            this.proje = "Proje Adi: " + this.projectDatas.PAd + "\n" +
                "Proje Konusu: " + this.projectDatas.PKonu + "\n" +
                "Proje Teknolojisi: " + this.projectDatas.PTek + "\n" +
                "Açiklama: " + this.projectDatas.Açıklama + "\n" + "\n";
            durum4 = 1;
        }
        if (this.projectDatas.PAd2 != null && this.projectDatas.PAd2 != '') {
            this.proje = this.proje + "Proje Adi: " + this.projectDatas.PAd2 + "\n" +
                "Proje Konusu: " + this.projectDatas.PKonu2 + "\n" +
                "Proje Teknolojisi: " + this.projectDatas.PTek2 + "\n" +
                "Açiklama: " + this.projectDatas.Açıklama2 + "\n" + "\n";
            durum4 = 1;
        }
        if (this.projectDatas.PAd3 != null && this.projectDatas.PAd3 != '') {
            this.proje = this.proje + "Proje Adi: " + this.projectDatas.PAd3 + "\n" +
                "Proje Konusu: " + this.projectDatas.PKonu3 + "\n" +
                "Proje Teknolojisi: " + this.projectDatas.PTek3 + "\n" +
                "Açiklama: " + this.projectDatas.Açıklama3 + "\n" + "\n";
            durum4 = 1;
        }
        this.sosyal = "";
        if (this.socialDatas.Skype != null && this.socialDatas.Skype != '') {
            this.sosyal = "Skype: " + this.socialDatas.Skype + "\n";
            durum5 = 1;
        }
        if (this.socialDatas.Linkedin != null && this.socialDatas.Linkedin != '') {
            this.sosyal = this.sosyal + "Linkedin: " + this.socialDatas.Linkedin + "\n";
            durum5 = 1;
        }
        if (this.socialDatas.GitHub != null && this.socialDatas.GitHub != '') {
            this.sosyal = this.sosyal + "GitHub: " + this.socialDatas.GitHub + "\n";
            durum5 = 1;
        }
        if (this.socialDatas.Instagram != null && this.socialDatas.Instagram != '') {
            this.sosyal = this.sosyal + "Instagram: " + this.socialDatas.Instagram + "\n";
            durum5 = 1;
        }
        if (this.socialDatas.Hobiler != null && this.socialDatas.Hobiler != '') {
            this.sosyal = this.sosyal + "Hobiler: " + this.socialDatas.Hobiler;
            durum5 = 1;
        }
        this.baslik5 = "";
        if (durum5 == 1) {
            this.baslik5 = "Sosyal Bilgiler" + "\n" + "------------------------------------------------------------------------------" + "\n" + "\n";
        }
        this.baslik4 = "";
        if (durum4 == 1) {
            this.baslik4 = "Proje Bilgileri" + "\n" + "------------------------------------------------------------------------------" + "\n" + "\n";
        }
        this.baslik3 = "";
        if (durum3 == 1) {
            this.baslik3 = "İş Bilgileri" + "\n" + "------------------------------------------------------------------------------" + "\n" + "\n";
        }
        this.baslik2 = "";
        if (durum2 == 1) {
            this.baslik2 = "Eğitim Bilgileri" + "\n" + "------------------------------------------------------------------------------" + "\n" + "\n";
        }
        this.baslik = "";
        if (durum == 1) {
            this.baslik = "Kişisel Bilgileri" + "\n" + "------------------------------------------------------------------------------" + "\n" + "\n";
        }
        if (this.kontrol != 1) {
            console.log(this.kontrol);
            this.showAlert1();
        }
        else if (this.personalDatas.Ad == undefined || this.personalDatas.Ad == '') {
            console.log(this.personalDatas.Ad);
            this.showAlert2();
        }
        else if (this.personalDatas.Soyad == undefined || this.personalDatas.Soyad == '') {
            console.log(this.personalDatas.Soyad);
            this.showAlert2();
        }
        else {
            this.timeOut(this.baslik, this.baslik2, this.baslik3, this.baslik4, this.baslik5);
            //console.log(this.photoDatas)
        }
    };
    HomePage.prototype.showAlert1 = function () {
        var alert = this.alertCtrl.create({
            title: 'Uyarı!',
            subTitle: 'Lütfen Fotoğraf ekleyiniz.',
            buttons: ['Tamam']
        });
        alert.present();
    };
    HomePage.prototype.showAlert2 = function () {
        var alert = this.alertCtrl.create({
            title: 'Uyarı!',
            subTitle: 'Lütfen Ad Soyad bölümünü doldurunuz.',
            buttons: ['Tamam']
        });
        alert.present();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\pages\home\home.html"*/'<ion-header text-center>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      CV APP\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n <ion-card>\n\n  <ion-card-header text-center>\n\n   CV Başlıkları\n\n  </ion-card-header>\n\n\n\n<br><br>\n\n \n\n    <button ion-item (click)="openModalKisisel()" >\n\n      <ion-icon name="ios-person" item-start></ion-icon>\n\n      Kişisel\n\n    </button>\n\n<br>    \n\n    <button ion-item (click)="openModalEgitim()" >\n\n      <ion-icon name="ios-school" item-start></ion-icon>\n\n      Eğitim\n\n    </button>\n\n<br>\n\n      <button ion-item (click)="openModalIs()">\n\n      <ion-icon name="ios-briefcase" item-start></ion-icon>\n\n      İş\n\n    </button>\n\n<br>\n\n<button ion-item (click)="openModalProje()">\n\n      <ion-icon name="ios-folder-open" item-start></ion-icon>\n\n      Projeler\n\n    </button>\n\n    <br>\n\n        <button ion-item (click)="openModalSosyal()">\n\n      <ion-icon name="ios-information-circle" item-start></ion-icon>\n\n      Sosyal\n\n    </button>\n\n    <br>\n\n     <button ion-item (click)="openModalFoto()">\n\n      <ion-icon name="ios-camera" item-start></ion-icon>\n\n      Fotoğraf\n\n    </button>\n\n<br>\n\n \n\n\n\n\n\n \n\n</ion-card>\n\n  <button ion-button block  (click)="openOnayla()">Onayla</button>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"C:\Users\Emircan.Uzel\Desktop\CvApp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* ModalController */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_email_composer__["a" /* EmailComposer */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

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