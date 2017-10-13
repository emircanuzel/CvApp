import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import { FormBuilder, Validators } from '@angular/forms';

/**
 * Generated class for the PersonalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
  

  personalInformation: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,private view:ViewController,public formBuilder: FormBuilder) {

  this.personalInformation = this.formBuilder.group({
    Ad:['',Validators.required],
    Soyad:['',],
    TCno:['',],
    DTarih:['',],
    Telno:['',Validators.maxLength(10)],
    Cinsiyet:['',],
    Mail:['',],
    Adres:['',]
    

  });
  }

 

  closeModal(){
    const personalData = this.personalInformation.value;
    this.view.dismiss(personalData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonalPage');
  }

}
