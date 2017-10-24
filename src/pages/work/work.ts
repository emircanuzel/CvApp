import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';
import { HomePage } from '../home/home';

/**
 * Generated class for the WorkPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-work',
  templateUrl: 'work.html',
})
export class WorkPage {


  workInformation: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,private view:ViewController,public formBuilder: FormBuilder) {

    
    this.workInformation = this.formBuilder.group({
      SAd:['',],
      BaTarih:['',],
      BiTarih:['',],
      
      FPozisyon:['',],
      Tanım:['',],
      Il:['',],
      YDil:['',],
      Yetenek:['',],
      Sertifika:['',],


      SAd2:['',],
      BaTarih2:['',],
      BiTarih2:['',],
     
      FPozisyon2:['',],
      Tanım2:['',],
      Il2:['',],


      SAd3:['',],
      BaTarih3:['',],
      BiTarih3:['',],
      
      FPozisyon3:['',],
      Tanım3:['',],
      Il3:['',],

      // Sayac:['',],
  
  
    });
  }
public Sayac=0;
  public kontrol: boolean = false;
  public buttonClicked: boolean = false;
  
  public onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
    // this.workInformation.Sayac=1;
      this.Sayac=1;
  }

  public Deneyimekle() {
    this.kontrol = !this.kontrol;
    // this.workInformation.Sayac=12;
     this.Sayac=12;
  }


 closeModal(){

  const workData = this.workInformation.value;
  this.view.dismiss(workData);
  
  
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkPage');
    
    console.log(this.Sayac);
  }

}
