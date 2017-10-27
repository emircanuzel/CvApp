import { Component } from '@angular/core';
import { NavController, ModalController, Modal } from 'ionic-angular';
import * as jsPDF from 'jspdf'; 

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController , private modal:ModalController) {

  }
    public personalDatas: any = {};
    public educationDatas: any ={};
    public socialDatas: any ={};
    public workDatas: any ={};
      public projectDatas: any ={};
      public photoDatas: any ={};
      

  openModalKisisel(){

    const Personal: Modal = this.modal.create('PersonalPage')

    Personal.present();

     Personal.onDidDismiss((personalData) => {
      this.personalDatas=personalData;
    });
  }
  openModalEgitim(){


const Egitim:Modal = this.modal.create('EducationPage')

    Egitim.present();
Egitim.onDidDismiss((educationData)=> {
  this.educationDatas=educationData;
});

  }
  openModalIs(){


const Is:Modal = this.modal.create('WorkPage')

    Is.present();
    Is.onDidDismiss((workData)=> {
      this.workDatas=workData;
    });

  }
  openModalProje(){

const Proje = this.modal.create('ProjectPage')

    Proje.present();
     Proje.onDidDismiss((projectData)=> {
      this.projectDatas=projectData;
    });

  }

openModalSosyal(){


const Sosyal:Modal = this.modal.create('SocialPage')

    Sosyal.present();
Sosyal.onDidDismiss((socialData)=> {
  this.socialDatas=socialData;
});
}
openModalFoto(){


const Foto = this.modal.create('PhotoPage')

    Foto.present();
    Foto.onDidDismiss((photoData)=> {
  this.photoDatas=photoData;
});

}

openOnayla(){


console.log(this.personalDatas);
console.log(this.educationDatas);
console.log(this.socialDatas);
console.log(this.workDatas);
console.log(this.projectDatas);
console.log(this.photoDatas);

var doc = new jsPDF();
var doc2 = new jsPDF();
var i=0;
i=this.workDatas.Sayac;


// for(var key in this.personalDatas){
//    doc.text(10, 10 + i, key + ": " + this.personalDatas[key]);
//    i+=10;
// }

doc.text(85,10 , "Kisisel Bilgiler")
doc.text(10,30 , "Ad: "+ this.personalDatas.Ad)
doc.text(10,40 , "Soyad: "+ this.personalDatas.Soyad)
doc.text(10,50 , "TC no: "+ this.personalDatas.TCno)
doc.text(10,60 , "Dogum Tarihi: "+ this.personalDatas.DTarih)
doc.text(10,70 , "Adres: "+ this.personalDatas.Adres)
doc.text(110,30 , "Cinsiyet: "+ this.personalDatas.Cinsiyet)
doc.text(110,40 , "Telefon no: "+ this.personalDatas.Telno)
doc.text(110,50 , "Mail: "+ this.personalDatas.Mail)



doc.text(10,80 , "--------------------------------------------------------------------------------------------------")
doc.text(85,90 , "Egitim Bilgileri")
doc.text(10,100 , "Lise Adi: "+ this.educationDatas.LAd)
doc.text(10,110 , "Lise Türü: "+ this.educationDatas.LTürü)
doc.text(110,100 , "Baslangic Tarihi: "+ this.educationDatas.LBaTarih)
doc.text(110,110 , "Bitis Tarihi: "+ this.educationDatas.LBiTarih)
doc.text(10,120 , "Lise Ortalamasi: "+ this.educationDatas.LOrtalama)

doc.text(10,140 , "Universite Adi: "+ this.educationDatas.UAd)
doc.text(10,150 , "Universite Bölümü: "+ this.educationDatas.UTürü)
doc.text(110,140 , "Baslangic Tarihi: "+ this.educationDatas.UBaTarih)
doc.text(110,150 , "Bitis Tarihi: "+ this.educationDatas.UBiTarih)
doc.text(10,160 , "Universite Ortalamasi: "+ this.educationDatas.UOrtalama)

doc.text(10,180 , "Yüksek Lisans Adi: "+ this.educationDatas.YAd)
doc.text(10,190 , "Yüksek Lisans Türü: "+ this.educationDatas.YTürü)
doc.text(110,180 , "Baslangic Tarihi: "+ this.educationDatas.YBaTarih)
doc.text(110,190 , "Bitis Tarihi: "+ this.educationDatas.YBiTarih)

if(i==1){


}
doc.text(10,200 , "--------------------------------------------------------------------------------------------------")

  doc.text(85,210 , "Deneyim Bilgileri")
  doc.text(10,220 , "Sirket Adi: "+ this.workDatas.SAd)
  doc.text(110,220 , "Baslangic-Bitis Tarihi: "+ this.workDatas.BaTarih)
  doc.text(110,230 , "Bitis Tarihi: "+ this.workDatas.BiTarih)
  doc.text(10,230 , "Pozisyonu: "+ this.workDatas.FPozisyon)
  doc.text(10,250 , "Is Tanimi: "+ this.workDatas.Tanım)
  doc.text(10,240 , "Sirketin Bulundugu Il: "+ this.workDatas.Il)

  doc.text(10,265 , "Sirket Adi: "+ this.workDatas.SAd2)
  doc.text(110,265 , "Baslangic-Bitis Tarihi: "+ this.workDatas.BaTarih2)
  doc.text(110,275 , "Bitis Tarihi: "+ this.workDatas.BiTarih2)
  doc.text(10,275 , "Pozisyonu: "+ this.workDatas.FPozisyon2)
  doc.text(10,295 , "Is Tanimi: "+ this.workDatas.Tanım2)
  doc.text(10,285 , "Sirketin Bulundugu Il: "+ this.workDatas.Il2)


  doc2.text(10,10 , "Sirket Adi: "+ this.workDatas.SAd3)
  doc2.text(110,10 , "Baslangic-Bitis Tarihi: "+ this.workDatas.BaTarih3)
  doc2.text(110,20 , "Bitis Tarihi: "+ this.workDatas.BiTarih3)
  doc2.text(10,20 , "Pozisyonu: "+ this.workDatas.FPozisyon3)
  doc2.text(10,40 , "Is Tanimi: "+ this.workDatas.Tanım3)
  doc2.text(10,30 , "Sirketin Bulundugu Il: "+ this.workDatas.Il3)

  doc2.text(10,50 , "Yabanci Dil: "+ this.workDatas.YDil)
  doc2.text(10,60 , "Yetenek: "+ this.workDatas.Yetenek)
  doc2.text(10,70 , "Sertifika: "+ this.workDatas.Sertifika)

  doc2.text(10,80 , "--------------------------------------------------------------------------------------------------")
  doc2.text(85,90 , "Proje Bilgileri")

  doc2.text(10,100 , "Proje Adi: "+ this.workDatas.PAd)
  doc2.text(10,110 , "Proje Konusu: "+ this.workDatas.PKonu)
  doc2.text(10,120 , "Proje Teknolojisi: "+ this.workDatas.PTek)
  doc2.text(10,130 , "Açiklama: "+ this.workDatas.Açıklama)

  
  doc2.text(10,140 , "Proje Adi: "+ this.workDatas.PAd2)
  doc2.text(10,150 , "Proje Konusu: "+ this.workDatas.PKonu2)
  doc2.text(10,160 , "Proje Teknolojisi: "+ this.workDatas.PTek2)
  doc2.text(10,170 , "Açiklama: "+ this.workDatas.Açıklama2)

  
  doc2.text(10,180 , "Proje Adi: "+ this.workDatas.PAd2)
  doc2.text(10,190 , "Proje Konusu: "+ this.workDatas.PKonu2)
  doc2.text(10,200 , "Proje Teknolojisi: "+ this.workDatas.PTek2)
  doc2.text(10,210 , "Açiklama: "+ this.workDatas.Açıklama2)

  doc2.text(10,220 , "--------------------------------------------------------------------------------------------------")
  doc2.text(85,230 , "Sosyal Bilgileri")

  doc2.text(10,240 , "Skype: "+ this.workDatas.Skype)
  doc2.text(10,250 , "Linkedin: "+ this.workDatas.Linkedin)
  doc2.text(10,260 , "GitHub: "+ this.workDatas.GitHub)
  doc2.text(10,270 , "Instagram: "+ this.workDatas.Instagram)
  doc2.text(10,280 , "Hobiler: "+ this.workDatas.Hobiler)

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
doc2.save('CV.pdf2');


}

}
