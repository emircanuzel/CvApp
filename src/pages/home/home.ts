import { Component } from '@angular/core';
import { NavController, ModalController, Modal } from 'ionic-angular';
import * as jsPDF from 'jspdf'; 
import { EmailComposer } from '@ionic-native/email-composer';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController , private modal:ModalController,private emailComposer:EmailComposer) {

  }
    public personalDatas: any = {};
    public educationDatas: any ={};
    public socialDatas: any ={};
    public workDatas: any ={};
      public projectDatas: any ={};
      public photoDatas: any ={};
      public doc = new jsPDF();
      public doc2 = new jsPDF();
      

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


var i=0;
i=this.workDatas.Sayac;


// for(var key in this.personalDatas){
//    doc.text(10, 10 + i, key + ": " + this.personalDatas[key]);
//    i+=10;
// }

this.doc.text(85,10 , "Kisisel Bilgiler")
this.doc.text(10,30 , "Ad: "+ this.personalDatas.Ad)
this.doc.text(10,40 , "Soyad: "+ this.personalDatas.Soyad)
this.doc.text(10,50 , "TC no: "+ this.personalDatas.TCno)
this.doc.text(10,60 , "Dogum Tarihi: "+ this.personalDatas.DTarih)
this.doc.text(10,70 , "Adres: "+ this.personalDatas.Adres)
this.doc.text(110,30 , "Cinsiyet: "+ this.personalDatas.Cinsiyet)
this.doc.text(110,40 , "Telefon no: "+ this.personalDatas.Telno)
this.doc.text(110,50 , "Mail: "+ this.personalDatas.Mail)



this.doc.text(10,80 , "--------------------------------------------------------------------------------------------------")
this.doc.text(85,90 , "Egitim Bilgileri")
this.doc.text(10,100 , "Lise Adi: "+ this.educationDatas.LAd)
this.doc.text(10,110 , "Lise Türü: "+ this.educationDatas.LTürü)
this.doc.text(110,100 , "Baslangic Tarihi: "+ this.educationDatas.LBaTarih)
this.doc.text(110,110 , "Bitis Tarihi: "+ this.educationDatas.LBiTarih)
this.doc.text(10,120 , "Lise Ortalamasi: "+ this.educationDatas.LOrtalama)

this.doc.text(10,140 , "Universite Adi: "+ this.educationDatas.UAd)
this.doc.text(10,150 , "Universite Bölümü: "+ this.educationDatas.UTürü)
this.doc.text(110,140 , "Baslangic Tarihi: "+ this.educationDatas.UBaTarih)
this.doc.text(110,150 , "Bitis Tarihi: "+ this.educationDatas.UBiTarih)
this.doc.text(10,160 , "Universite Ortalamasi: "+ this.educationDatas.UOrtalama)

this.doc.text(10,180 , "Yüksek Lisans Adi: "+ this.educationDatas.YAd)
this.doc.text(10,190 , "Yüksek Lisans Türü: "+ this.educationDatas.YTürü)
this.doc.text(110,180 , "Baslangic Tarihi: "+ this.educationDatas.YBaTarih)
this.doc.text(110,190 , "Bitis Tarihi: "+ this.educationDatas.YBiTarih)

if(i==1){


}
this.doc.text(10,200 , "--------------------------------------------------------------------------------------------------")

  this.doc.text(85,210 , "Deneyim Bilgileri")
  this.doc.text(10,220 , "Sirket Adi: "+ this.workDatas.SAd)
  this.doc.text(110,220 , "Baslangic-Bitis Tarihi: "+ this.workDatas.BaTarih)
  this.doc.text(110,230 , "Bitis Tarihi: "+ this.workDatas.BiTarih)
  this.doc.text(10,230 , "Pozisyonu: "+ this.workDatas.FPozisyon)
  this.doc.text(10,250 , "Is Tanimi: "+ this.workDatas.Tanım)
  this.doc.text(10,240 , "Sirketin Bulundugu Il: "+ this.workDatas.Il)

  this.doc.text(10,265 , "Sirket Adi: "+ this.workDatas.SAd2)
  this.doc.text(110,265 , "Baslangic-Bitis Tarihi: "+ this.workDatas.BaTarih2)
  this.doc.text(110,275 , "Bitis Tarihi: "+ this.workDatas.BiTarih2)
  this.doc.text(10,275 , "Pozisyonu: "+ this.workDatas.FPozisyon2)
  this.doc.text(10,295 , "Is Tanimi: "+ this.workDatas.Tanım2)
  this.doc.text(10,285 , "Sirketin Bulundugu Il: "+ this.workDatas.Il2)


  this.doc2.text(10,10 , "Sirket Adi: "+ this.workDatas.SAd3)
  this.doc2.text(110,10 , "Baslangic-Bitis Tarihi: "+ this.workDatas.BaTarih3)
  this.doc2.text(110,20 , "Bitis Tarihi: "+ this.workDatas.BiTarih3)
  this.doc2.text(10,20 , "Pozisyonu: "+ this.workDatas.FPozisyon3)
  this.doc2.text(10,40 , "Is Tanimi: "+ this.workDatas.Tanım3)
  this.doc2.text(10,30 , "Sirketin Bulundugu Il: "+ this.workDatas.Il3)

  this.doc2.text(10,50 , "Yabanci Dil: "+ this.workDatas.YDil)
  this.doc2.text(10,60 , "Yetenek: "+ this.workDatas.Yetenek)
  this.doc2.text(10,70 , "Sertifika: "+ this.workDatas.Sertifika)

 this.doc2.text(10,80 , "--------------------------------------------------------------------------------------------------")
 this.doc2.text(85,90 , "Proje Bilgileri")

  this.doc2.text(10,100 , "Proje Adi: "+ this.projectDatas.PAd)
  this.doc2.text(10,110 , "Proje Konusu: "+ this.projectDatas.PKonu)
  this.doc2.text(10,120 , "Proje Teknolojisi: "+ this.projectDatas.PTek)
  this.doc2.text(10,130 , "Açiklama: "+ this.projectDatas.Açıklama)

  
  this.doc2.text(10,140 , "Proje Adi: "+ this.projectDatas.PAd2)
  this.doc2.text(10,150 , "Proje Konusu: "+ this.projectDatas.PKonu2)
  this.doc2.text(10,160 , "Proje Teknolojisi: "+ this.projectDatas.PTek2)
  this.doc2.text(10,170 , "Açiklama: "+ this.projectDatas.Açıklama2)

  
  this.doc2.text(10,180 , "Proje Adi: "+ this.projectDatas.PAd2)
  this.doc2.text(10,190 , "Proje Konusu: "+ this.projectDatas.PKonu2)
  this.doc2.text(10,200 , "Proje Teknolojisi: "+ this.projectDatas.PTek2)
  this.doc2.text(10,210 , "Açiklama: "+ this.projectDatas.Açıklama2)

  this.doc2.text(10,220 , "--------------------------------------------------------------------------------------------------")
  this.doc2.text(85,230 , "Sosyal Bilgileri")

  this.doc2.text(10,240 , "Skype: "+ this.socialDatas.Skype)
  this.doc2.text(10,250 , "Linkedin: "+ this.socialDatas.Linkedin)
  this.doc2.text(10,260 , "GitHub: "+ this.socialDatas.GitHub)
  this.doc2.text(10,270 , "Instagram: "+ this.socialDatas.Instagram)
  this.doc2.text(10,280 , "Hobiler: "+ this.socialDatas.Hobiler)

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
this.doc.save('CV.pdf');
 this.doc2.save('CV.pdf2');




// let email = {
//   to:'emircanuzel95@gmail.com',
  
//   attachment: [

    
//     // 'file://CV.pdf',
//   //  ' this.doc ',
//   //  this.doc.CV.pdf , 
//     // this.personalDatas,
//   ],
// subject:'CV ',
// body: 'Emircan UZEL' , 
// isHtml:true
// };
// this.emailComposer.open(email);


}

mail(){

  let email = {
    to:'emircanuzel95@gmail.com',
    
    attachment: [
  
      'res://CV.pdf'
    //  'file://CV.pdf',
    //  ' this.doc ',
    //  this.doc.CV.pdf , 
      // this.personalDatas,


    ],
  subject:'CV ',
  body: 'Emircan UZEL' , 
  isHtml:true
  };
  this.emailComposer.open(email);


}

}
