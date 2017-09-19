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

  openModalKisisel(){

    const Personal: Modal = this.modal.create('PersonalPage')

    Personal.present();

     Personal.onDidDismiss((personalData) => {
      this.personalDatas=personalData;
    });
  }
  openModalEgitim(){


const Egitim = this.modal.create('EducationPage')

    Egitim.present();


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


const Sosyal = this.modal.create('SocialPage')

    Sosyal.present();


}
openModalFoto(){


const Foto = this.modal.create('PhotoPage')

    Foto.present();

}

}
