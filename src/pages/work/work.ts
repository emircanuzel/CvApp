import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

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

  constructor(public navCtrl: NavController, public navParams: NavParams,private view:ViewController) {
  }
 closeModal(){

    this.view.dismiss();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad WorkPage');
  }

}
