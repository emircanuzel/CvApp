import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController , private modal:ModalController) {

  }

  openModalKisisel(){

    const myModal = this.modal.create('PersonalPage')

    myModal.present();

  }
  openModalEgitim(){


const myModal = this.modal.create('EducationPage')

    myModal.present();


  }
  openModalIs(){


const myModal = this.modal.create('WorkPage')

    myModal.present();

  }
  openModalProje(){

const myModal = this.modal.create('ProjectPage')

    myModal.present();

  }

openModalSosyal(){


const myModal = this.modal.create('SocialPage')

    myModal.present();


}
openModalFoto(){


const myModal = this.modal.create('PhotoPage')

    myModal.present();

}

}
