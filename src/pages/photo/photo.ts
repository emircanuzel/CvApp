import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, AlertController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

/**
 * Generated class for the PhotoPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-photo',
  templateUrl: 'photo.html',
})
export class PhotoPage {


   photos: any;
  public base64Image: string;
  kontrol:any=0;

  constructor(public navCtrl: NavController, public navParams: NavParams,private view:ViewController,private alertCtrl: AlertController, private camera: Camera) {
  }
   closeModal(){

     const photoData = this.photos;
    this.view.dismiss(photoData);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhotoPage');
  }


 ngOnInit() {
    this.photos = [];

  }

 takePhoto() {
   this.kontrol=1;
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.PNG,
      mediaType: this.camera.MediaType.PICTURE,
      cameraDirection: 1,
      correctOrientation: false
    }
    this.camera.getPicture(options).then((imageData) => {
      // imageData is either a base64 encoded string or a file URI
      // If it's base64:
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      this.photos.push(this.base64Image);
      this.photos.reverse();
    }, (err) => {
      // Handle error
    });
  }

  deletePhoto(index) {
    let confirm = this.alertCtrl.create({
      title: 'Fotoğrafı silmek istedğinden emin misin?',
      message: '',
      buttons: [
        {
          text: 'Hayır',
          handler: () => {
          }
        },
        {
          text: 'Evet',
          handler: () => {
            this.photos.splice(index, 1);
          }
        }
      ]
    });
    confirm.present();

  }

}
