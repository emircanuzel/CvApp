import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';

/**
 * Generated class for the EducationPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-education',
  templateUrl: 'education.html',
})
export class EducationPage {
  

  educationInformation: any = {};

  constructor(public navCtrl: NavController, public navParams: NavParams,private viewCtrl:ViewController ,public formBuilder: FormBuilder) {


 this.educationInformation = this.formBuilder.group({
    LAd:['',],
   LTürü:['',],
    LBaTarih:['',],    
    LBiTarih:['',],   
    LOrtalama:['',],
    
     UAd:['',],
   UTürü:['',],
    UBaTarih:['',],    
    UBiTarih:['',],   
    UOrtalama:['',],
      
      YAd:['',],
  YTürü:['',],
   YBaTarih:['',],    
    YBiTarih:['',],   
    
   
  
  
  


  });

  }

 closeModal(){
  const educationData = this.educationInformation.value;
    this.viewCtrl.dismiss(educationData);
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad EducationPage');
  }

}
