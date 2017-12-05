import { Component } from '@angular/core';
import { NavController, ModalController, Modal } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';


import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController , public modal:ModalController,public emailComposer:EmailComposer) {

  }
    public personalDatas: any = {};
    public educationDatas: any ={};
    public socialDatas: any ={};
    public workDatas: any ={};
      public projectDatas: any ={};
      public photoDatas: any ={};
       public kisisel : string;
      public egitim : string;
      public is : string;
      public proje : string;
      public sosyal : string;
      
      

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

timeOut(upperArr,upperArr2,upperArr3,upperArr4,upperArr5) {
  // var now = moment().format("DD.MM.YYYY");
  var pdfdocument = this.generatePDF(upperArr,upperArr2,upperArr3,upperArr4,upperArr5);
  const pdfDocGenerator = pdfMake.createPdf(pdfdocument);
  pdfMake.createPdf(pdfdocument).download();
  

  pdfDocGenerator.getBase64((data) => {
    
    this.emailComposer.open({
      
      to: 'emircanuzel95@gmail.com',
      subject: 'CV UYGULAMASI',
      body: ' Mirsis Bilgi Teknolojileri ',
      attachments: ['base64:CV.pdf//' + data],
      isHtml: true
    });
    
  })
}



generatePDF(tableContent,tableContent2,tableContent3,tableContent4,tableContent5) {
  
  var docDefinition = {
    content: [
      { text: 'Kişisel Bilgiler ', style: 'baslik' },
      { text: tableContent, style: 'header' },
      { text: 'Eğitim Bilgileri '+"\n"+"\n", style: 'baslik' },
      { text: tableContent2, style: 'header' },
      { text: 'İş Bilgileri '+"\n"+"\n", style: 'baslik' },
      { text: tableContent3, style: 'header' },
      { text: 'Proje Bilgileri '+"\n"+"\n", style: 'baslik' },
      { text: tableContent4, style: 'header' },
      { text: 'Sosyal ' +"\n"+"\n", style: 'baslik' },
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
  
}

openOnayla(){


// console.log(this.personalDatas);
// console.log(this.educationDatas);
// console.log(this.socialDatas);
// console.log(this.workDatas);
// console.log(this.projectDatas);
// console.log(this.photoDatas);

this.kisisel= "\n"+"\n"+
"Ad: "+this.personalDatas.Ad+"\n"+
"Soyad: "+this.personalDatas.Soyad+"\n"+
"TC no: "+ this.personalDatas.TCno+"\n"+
"Dogum Tarihi: "+ this.personalDatas.DTarih+"\n"+
"Adres: "+ this.personalDatas.Adres+"\n"+
"Cinsiyet: "+ this.personalDatas.Cinsiyet+"\n"+
"Telefon no: "+ this.personalDatas.Telno+"\n"+
"Mail: "+ this.personalDatas.Mail+"\n"+"\n"+"\n"

 

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



this.egitim="";

if(this.educationDatas.LAd!=null && this.educationDatas.LAd!='' ){
  
    this.egitim= this.egitim+"Lise Adi: "+ this.educationDatas.LAd+"\n"+
    "Lise Türü: "+ this.educationDatas.LTürü+"\n"+
    "Baslangic Tarihi: "+ this.educationDatas.LBaTarih+"\n"+
    "Bitis Tarihi: "+ this.educationDatas.LBiTarih+"\n"+
   "Lise Ortalamasi: "+ this.educationDatas.LOrtalama+"\n"+"\n"
  
  }
  if(this.educationDatas.UAd!=null && this.educationDatas.UAd!='' ){
    
      this.egitim= this.egitim+"Universite Adi: "+ this.educationDatas.UAd+"\n"+
      "Universite Bölümü: "+ this.educationDatas.UTürü+"\n"+
      "Baslangic Tarihi: "+ this.educationDatas.UBaTarih+"\n"+
      "Bitis Tarihi: "+ this.educationDatas.UBiTarih+"\n"+
      "Universite Ortalamasi: "+ this.educationDatas.UOrtalama+"\n"+"\n"
    
    }
    if(this.educationDatas.YAd!=null && this.educationDatas.YAd!='' ){
      
        this.egitim=this.egitim+"Yüksek Lisans Adi: "+ this.educationDatas.YAd+"\n"+
        "Yüksek Lisans Türü: "+ this.educationDatas.YTürü+"\n"+
         "Baslangic Tarihi: "+ this.educationDatas.YBaTarih+"\n"+
         "Bitis Tarihi: "+ this.educationDatas.YBiTarih+"\n"+"\n"+"\n"
      
      }


this.is="";
if(this.workDatas.SAd!=null && this.workDatas.SAd!='' ){
  
    this.is="Sirket Adi: "+ this.workDatas.SAd+"\n"+
    "Baslangic-Bitis Tarihi: "+ this.workDatas.BaTarih+"\n"+
   "Bitis Tarihi: "+ this.workDatas.BiTarih+"\n"+
   "Pozisyonu: "+ this.workDatas.FPozisyon+"\n"+
   "Is Tanimi: "+ this.workDatas.Tanım+"\n"+
   "Sirketin Bulundugu Il: "+ this.workDatas.Il+"\n"+"\n"
  
  }
  if(this.workDatas.SAd2!=null && this.workDatas.SAd2!='' ){
    
      this.is=this.is+"Sirket Adi: "+ this.workDatas.SAd2+"\n"+
      "Baslangic-Bitis Tarihi: "+ this.workDatas.BaTarih2+"\n"+
     "Bitis Tarihi: "+ this.workDatas.BiTarih2+"\n"+
     "Pozisyonu: "+ this.workDatas.FPozisyon2+"\n"+
     "Is Tanimi: "+ this.workDatas.Tanım2+"\n"+
     "Sirketin Bulundugu Il: "+ this.workDatas.Il2+"\n"+"\n"
    
    }
    if(this.workDatas.SAd3!=null && this.workDatas.SAd3!='' ){
      
        this.is=this.is+"Sirket Adi: "+ this.workDatas.SAd3+"\n"+
        "Baslangic-Bitis Tarihi: "+ this.workDatas.BaTarih3+"\n"+
       "Bitis Tarihi: "+ this.workDatas.BiTarih3+"\n"+
       "Pozisyonu: "+ this.workDatas.FPozisyon3+"\n"+
       "Is Tanimi: "+ this.workDatas.Tanım3+"\n"+
       "Sirketin Bulundugu Il: "+ this.workDatas.Il3+"\n"+"\n"
      
      }
      if(this.workDatas.YDil!=null && this.workDatas.YDil!='' ){

        this.is=this.is+"Yabanci Dil: "+ this.workDatas.YDil+"\n"+"\n"
      }
      if(this.workDatas.Yetenek!=null && this.workDatas.Yetenek!='' ){
        
                this.is=this.is+"Yetenek: "+ this.workDatas.Yetenek+"\n"+"\n"
              }
              if(this.workDatas.Sertifika!=null && this.workDatas.Sertifika!='' ){
                
                        this.is=this.is+"Sertifika: "+ this.workDatas.Sertifika+"\n"+"\n"
                      }



                      
this.proje="";
if(this.projectDatas.PAd!=null && this.projectDatas.PAd!='' ){
  
    this.proje="Proje Adi: "+ this.projectDatas.PAd+"\n"+
    "Proje Konusu: "+ this.projectDatas.PKonu+"\n"+
    "Proje Teknolojisi: "+ this.projectDatas.PTek+"\n"+
    "Açiklama: "+ this.projectDatas.Açıklama+"\n"+"\n"
  
  }
  if(this.projectDatas.PAd2!=null && this.projectDatas.PAd2!='' ){
    
      this.proje=this.proje+"Proje Adi: "+ this.projectDatas.PAd2+"\n"+
      "Proje Konusu: "+ this.projectDatas.PKonu2+"\n"+
      "Proje Teknolojisi: "+ this.projectDatas.PTek2+"\n"+
      "Açiklama: "+ this.projectDatas.Açıklama2+"\n"+"\n"
    
    }
    if(this.projectDatas.PAd3!=null && this.projectDatas.PAd3!='' ){
      
        this.proje=this.proje+"Proje Adi: "+ this.projectDatas.PAd3+"\n"+
        "Proje Konusu: "+ this.projectDatas.PKonu3+"\n"+
        "Proje Teknolojisi: "+ this.projectDatas.PTek3+"\n"+
        "Açiklama: "+ this.projectDatas.Açıklama3+"\n"+"\n"
      
      }

this.sosyal="";
if(this.socialDatas.Skype!=null && this.socialDatas.Skype!='' ){

  this.sosyal="Skype: "+ this.socialDatas.Skype+"\n"

}
if (this.socialDatas.Linkedin!=null && this.socialDatas.Linkedin!=''){
this.sosyal=this.sosyal +"Linkedin: "+ this.socialDatas.Linkedin+"\n"
}
if (this.socialDatas.GitHub!=null && this.socialDatas.GitHub!=''){
  this.sosyal=this.sosyal +"GitHub: "+ this.socialDatas.GitHub+"\n"
  }
  if (this.socialDatas.Instagram!=null && this.socialDatas.Instagram!=''){
    this.sosyal=this.sosyal +"Instagram: "+ this.socialDatas.Instagram+"\n"
    }
    if (this.socialDatas.Hobiler!=null && this.socialDatas.Hobiler!=''){
      this.sosyal=this.sosyal +"Hobiler: "+ this.socialDatas.Hobiler
      }
    
console.log(this.sosyal);

  this.timeOut(this.kisisel,this.egitim,this.is,this.proje,this.sosyal);
  
    
}

}

