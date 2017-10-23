import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { FormBuilder } from '@angular/forms';

/**
 * Generated class for the ProjectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-project',
  templateUrl: 'project.html',
})
export class ProjectPage {

projectInformation: any = {};
  constructor(public navCtrl: NavController, public navParams: NavParams,private view:ViewController,public formBuilder: FormBuilder) {



     this.projectInformation = this.formBuilder.group({
      PAd:['',],
      PKonu:['',],
      PTek:['',],
      Açıklama:['',],

       PAd2:['',],
      PKonu2:['',],
      PTek2:['',],
      Açıklama2:['',],


       PAd3:['',],
      PKonu3:['',],
      PTek3:['',],
      Açıklama3:['',],
      PSayac:['',],
  
  
    });
  }



 public kontrol: boolean = false;
   public buttonClicked: boolean = false;
  
  public onButtonClick() {
    this.buttonClicked = !this.buttonClicked;
  //  this.projectInformation.PSayac.value=1
  }

public Projeekle() {
    this.kontrol = !this.kontrol;
    // this.projectInformation.PSayac.value=12;
  }
 closeModal(){

   const projectData = this.projectInformation.value;
  this.view.dismiss(projectData);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad ProjectPage');
  }

}
