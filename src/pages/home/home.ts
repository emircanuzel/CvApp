import { Component } from '@angular/core';
import { NavController, ModalController, Modal } from 'ionic-angular';

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


const Is = this.modal.create('WorkPage')

    Is.present();

  }
  openModalProje(){

const Proje = this.modal.create('ProjectPage')

    Proje.present();

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

}

openOnayla(){


console.log(this.personalDatas);
console.log(this.educationDatas);
console.log(this.socialDatas);

}

}
