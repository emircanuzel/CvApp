import { Component } from '@angular/core';
import { NavController, ModalController, Modal, AlertController, LoadingController } from 'ionic-angular';
import { EmailComposer } from '@ionic-native/email-composer';



import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;




@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  constructor(public navCtrl: NavController , public modal:ModalController,public emailComposer:EmailComposer,private alertCtrl: AlertController,public loadingCtrl: LoadingController) {

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
      public baslik : string;
      public baslik2 : string;
      public baslik3 : string;
      public baslik4 : string;
      public baslik5 : string;
     public kontrol: any;
    public durum=0;
    public durum2=0;
    public durum3=0;
    public durum4=0;
    public durum5=0;



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
    Foto.onDidDismiss((photoData,kontrol)=> {
  this.photoDatas=photoData;
  this.kontrol=kontrol;
});

}

timeOut(upperArr,upperArr2,upperArr3,upperArr4,upperArr5) {
  // var now = moment().format("DD.MM.YYYY");
  //this.presentLoading();
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
     {
       
      columns: [
        {  text: this.personalDatas.Ad+" "+this.personalDatas.Soyad, style: 'header2'},
        {
          
          image: this.photoDatas ,
          width: 150,
          height: 150,
          alignment:'right',
        
        },



        
      ]
    
    },
      
     {  text:"\n"+ tableContent, style: 'baslik'},
      { text: this.kisisel, style: 'header' },
      { text: "\n"+tableContent2, style: 'baslik' },
      { text: this.egitim, style: 'header' },
      { text: tableContent3, style: 'baslik' },
      { text: this.is, style: 'header' },
      { text: tableContent4, style: 'baslik' },
      { text: this.proje, style: 'header' },
      { text: tableContent5 , style: 'baslik' },
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
  
}

openOnayla(){



 this.kisiselbölüm();



this.egitimisbölüm();

this.projesosyalbölüm();


       this.baslik5=""
      
      if(this.durum5==1){
        
        this.baslik5="Sosyal Bilgiler"+"\n"+"------------------------------------------------------------------------------"+"\n"+"\n"

      }
      this.baslik4=""
      
      if(this.durum4==1){
        
        this.baslik4="Proje Bilgileri"+"\n"+"------------------------------------------------------------------------------"+"\n"+"\n"

      }
      this.baslik3=""
      
      if(this.durum3==1){
        
        this.baslik3="İş Bilgileri"+"\n"+"------------------------------------------------------------------------------"+"\n"+"\n"

      }
      this.baslik2=""
      
      if(this.durum2==1){
        
        this.baslik2="Eğitim Bilgileri"+"\n"+"------------------------------------------------------------------------------"+"\n"+"\n"

      }
      this.baslik=""
      
      if(this.durum==1){
        
        this.baslik="Kişisel Bilgileri"+"\n"+"------------------------------------------------------------------------------"+"\n"+"\n"

      }
      

      if(this.kontrol!=1){
        console.log(this.kontrol)
        this.showAlert1();
      }
      else if(this.personalDatas.Ad==undefined || this.personalDatas.Ad==''){
        console.log(this.personalDatas.Ad)
      this.showAlert2();
      }
      else if(this.personalDatas.Soyad==undefined || this.personalDatas.Soyad==''){
        console.log(this.personalDatas.Soyad)
      this.showAlert2();
      }
      else {
        
        
        this.presentLoading();
        this.timeOut(this.baslik,this.baslik2,this.baslik3,this.baslik4,this.baslik5);
        //console.log(this.photoDatas)
      }

  
    
}

kisiselbölüm(){
  this.kisisel="";
if(this.personalDatas.Ad!=null && this.personalDatas.Ad!='' ){

this.kisisel= this.kisisel +"Ad: "+this.personalDatas.Ad+"\n"
this.durum=1;

}
if(this.personalDatas.Soyad!=null && this.personalDatas.Soyad!='' ){
  
  this.kisisel= this.kisisel +"Soyad: "+this.personalDatas.Soyad+"\n"
  this.durum=1;
  
  }
  if(this.personalDatas.TCno!=null && this.personalDatas.TCno!='' ){
    
    this.kisisel= this.kisisel +"TC no: "+ this.personalDatas.TCno+"\n"
    this.durum=1;
    
    }
    if(this.personalDatas.DTarih!=null && this.personalDatas.DTarih!='' ){
      
      this.kisisel= this.kisisel +"Dogum Tarihi: "+ this.personalDatas.DTarih+"\n"
      this.durum=1;
      
      }
      if(this.personalDatas.Adres!=null && this.personalDatas.Adres!='' ){
        
        this.kisisel= this.kisisel +"Adres: "+ this.personalDatas.Adres+"\n"
        this.durum=1;
        
        }
        if(this.personalDatas.Cinsiyet!=null && this.personalDatas.Cinsiyet!='' ){
          
          this.kisisel= this.kisisel +"Cinsiyet: "+ this.personalDatas.Cinsiyet+"\n"
          this.durum=1;
          
          }
          if(this.personalDatas.Telno!=null && this.personalDatas.Telno!='' ){
            
            this.kisisel= this.kisisel +"Telefon no: "+ this.personalDatas.Telno+"\n"
            this.durum=1;
            
            }
            if(this.personalDatas.Mail!=null && this.personalDatas.Mail!='' ){
              
              this.kisisel= this.kisisel +"Mail: "+ this.personalDatas.Mail+"\n"
              this.durum=1;
              
              }


}

egitimisbölüm(){

  this.egitim="";

  if(this.educationDatas.LAd!=null && this.educationDatas.LAd!='' ){
    
      this.egitim= this.egitim+"Lise Adi: "+ this.educationDatas.LAd+"\n"+
      "Lise Türü: "+ this.educationDatas.LTürü+"\n"+
      "Baslangic Tarihi: "+ this.educationDatas.LBaTarih+"\n"+
      "Bitis Tarihi: "+ this.educationDatas.LBiTarih+"\n"+
     "Lise Ortalamasi: "+ this.educationDatas.LOrtalama+"\n"+"\n"
     this.durum2=1;
    
    }
    if(this.educationDatas.UAd!=null && this.educationDatas.UAd!='' ){
      
        this.egitim= this.egitim+"Universite Adi: "+ this.educationDatas.UAd+"\n"+
        "Universite Bölümü: "+ this.educationDatas.UTürü+"\n"+
        "Baslangic Tarihi: "+ this.educationDatas.UBaTarih+"\n"+
        "Bitis Tarihi: "+ this.educationDatas.UBiTarih+"\n"+
        "Universite Ortalamasi: "+ this.educationDatas.UOrtalama+"\n"+"\n"
        this.durum2=1;
      
      }
      if(this.educationDatas.YAd!=null && this.educationDatas.YAd!='' ){
        
          this.egitim=this.egitim+"Yüksek Lisans Adi: "+ this.educationDatas.YAd+"\n"+
          "Yüksek Lisans Türü: "+ this.educationDatas.YTürü+"\n"+
           "Baslangic Tarihi: "+ this.educationDatas.YBaTarih+"\n"+
           "Bitis Tarihi: "+ this.educationDatas.YBiTarih+"\n"+"\n"+"\n"
           this.durum2=1;
        
        }
  
  
  this.is="";
  if(this.workDatas.SAd!=null && this.workDatas.SAd!='' ){
    
      this.is="Sirket Adi: "+ this.workDatas.SAd+"\n"+
      "Baslangic-Bitis Tarihi: "+ this.workDatas.BaTarih+"\n"+
     "Bitis Tarihi: "+ this.workDatas.BiTarih+"\n"+
     "Pozisyonu: "+ this.workDatas.FPozisyon+"\n"+
     "Is Tanimi: "+ this.workDatas.Tanım+"\n"+
     "Sirketin Bulundugu Il: "+ this.workDatas.Il+"\n"+"\n"
     this.durum3=1;
    
    }
    if(this.workDatas.SAd2!=null && this.workDatas.SAd2!='' ){
      
        this.is=this.is+"Sirket Adi: "+ this.workDatas.SAd2+"\n"+
        "Baslangic-Bitis Tarihi: "+ this.workDatas.BaTarih2+"\n"+
       "Bitis Tarihi: "+ this.workDatas.BiTarih2+"\n"+
       "Pozisyonu: "+ this.workDatas.FPozisyon2+"\n"+
       "Is Tanimi: "+ this.workDatas.Tanım2+"\n"+
       "Sirketin Bulundugu Il: "+ this.workDatas.Il2+"\n"+"\n"
       this.durum3=1;
      
      }
      if(this.workDatas.SAd3!=null && this.workDatas.SAd3!='' ){
        
          this.is=this.is+"Sirket Adi: "+ this.workDatas.SAd3+"\n"+
          "Baslangic-Bitis Tarihi: "+ this.workDatas.BaTarih3+"\n"+
         "Bitis Tarihi: "+ this.workDatas.BiTarih3+"\n"+
         "Pozisyonu: "+ this.workDatas.FPozisyon3+"\n"+
         "Is Tanimi: "+ this.workDatas.Tanım3+"\n"+
         "Sirketin Bulundugu Il: "+ this.workDatas.Il3+"\n"+"\n"
         this.durum3=1;
        
        }
        if(this.workDatas.YDil!=null && this.workDatas.YDil!='' ){
  
          this.is=this.is+"Yabanci Dil: "+ this.workDatas.YDil+"\n"+"\n"
          this.durum3=1;
        }
        if(this.workDatas.Yetenek!=null && this.workDatas.Yetenek!='' ){
          
                  this.is=this.is+"Yetenek: "+ this.workDatas.Yetenek+"\n"+"\n"
                  this.durum3=1;
                }
                if(this.workDatas.Sertifika!=null && this.workDatas.Sertifika!='' ){
                  
                          this.is=this.is+"Sertifika: "+ this.workDatas.Sertifika+"\n"+"\n"
                          this.durum3=1;
                        }

}

projesosyalbölüm(){

                      
  this.proje="";
  if(this.projectDatas.PAd!=null && this.projectDatas.PAd!='' ){
    
      this.proje="Proje Adi: "+ this.projectDatas.PAd+"\n"+
      "Proje Konusu: "+ this.projectDatas.PKonu+"\n"+
      "Proje Teknolojisi: "+ this.projectDatas.PTek+"\n"+
      "Açiklama: "+ this.projectDatas.Açıklama+"\n"+"\n"
      this.durum4=1;
    
    }
    if(this.projectDatas.PAd2!=null && this.projectDatas.PAd2!='' ){
      
        this.proje=this.proje+"Proje Adi: "+ this.projectDatas.PAd2+"\n"+
        "Proje Konusu: "+ this.projectDatas.PKonu2+"\n"+
        "Proje Teknolojisi: "+ this.projectDatas.PTek2+"\n"+
        "Açiklama: "+ this.projectDatas.Açıklama2+"\n"+"\n"
        this.durum4=1;
      
      }
      if(this.projectDatas.PAd3!=null && this.projectDatas.PAd3!='' ){
        
          this.proje=this.proje+"Proje Adi: "+ this.projectDatas.PAd3+"\n"+
          "Proje Konusu: "+ this.projectDatas.PKonu3+"\n"+
          "Proje Teknolojisi: "+ this.projectDatas.PTek3+"\n"+
          "Açiklama: "+ this.projectDatas.Açıklama3+"\n"+"\n"
          this.durum4=1;
        
        }
  
  this.sosyal="";
  if(this.socialDatas.Skype!=null && this.socialDatas.Skype!='' ){
  
    this.sosyal="Skype: "+ this.socialDatas.Skype+"\n"
    this.durum5=1;
  
  }
  if (this.socialDatas.Linkedin!=null && this.socialDatas.Linkedin!=''){
  this.sosyal=this.sosyal +"Linkedin: "+ this.socialDatas.Linkedin+"\n"
  this.durum5=1;
    }
  if (this.socialDatas.GitHub!=null && this.socialDatas.GitHub!=''){
    this.sosyal=this.sosyal +"GitHub: "+ this.socialDatas.GitHub+"\n"
    this.durum5=1;  
    }
    if (this.socialDatas.Instagram!=null && this.socialDatas.Instagram!=''){
      this.sosyal=this.sosyal +"Instagram: "+ this.socialDatas.Instagram+"\n"
      this.durum5=1;
      }
      if (this.socialDatas.Hobiler!=null && this.socialDatas.Hobiler!=''){
        this.sosyal=this.sosyal +"Hobiler: "+ this.socialDatas.Hobiler
        this.durum5=1;
        }

}

showAlert1() {
  let alert = this.alertCtrl.create({
    title: 'Uyarı!',
    subTitle: 'Lütfen Fotoğraf ekleyiniz.',
    buttons: ['Tamam']
  });
  alert.present();
}

showAlert2() {
  let alert = this.alertCtrl.create({
    title: 'Uyarı!',
    subTitle: 'Lütfen Ad Soyad bölümünü doldurunuz.',
    buttons: ['Tamam']
  });
  alert.present();
}
presentLoading() {
  let loader = this.loadingCtrl.create({
    content: "Please wait...",
    duration: 2000
  });
  loader.present();
}
  

}

