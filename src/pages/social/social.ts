import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';

/**
 * Generated class for the SocialPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-social',
  templateUrl: 'social.html',
})
export class SocialPage {


 socialInformation: any = {};


  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController ,public formBuilder: FormBuilder) {

    
 this.socialInformation = this.formBuilder.group({
    Skype:['',],
   Linkedin:['',],
    GitHub:['',],    
    Instagram:['',],   
    Hobiler:['',],
    
    
  
  


  });
  }
 closeModal(){
const socialData = this.socialInformation.value;
    this.viewCtrl.dismiss(socialData);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad SocialPage');
  }

}
