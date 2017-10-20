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
var i=0;
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


// for(var key in this.educationDatas){
//   doc.text(50, 20 + i, key + ": " + this.educationDatas[key]);
//   i+=10;
// }
for(var key in this.workDatas){
  doc.text(20, 10 + i, key + ": " + this.workDatas[key]);
  i+=10;
}
for(var key in this.projectDatas){
  doc.text(20, 10 + i, key + ": " + this.projectDatas[key]);
  i+=10;
}
for(var key in this.socialDatas){
  doc.text(20, 10 + i, key + ": " + this.socialDatas[key]);
  i+=10;
}
doc.save('CV.pdf');


}

}
