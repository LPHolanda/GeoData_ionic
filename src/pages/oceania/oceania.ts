import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AustraliaPage } from "../australia/australia";

/**
 * Generated class for the OceaniaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-oceania',
  templateUrl: 'oceania.html',
})
export class OceaniaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OceaniaPage');
  }

  goToAustraliaPage(){
    this.navCtrl.push(AustraliaPage);
  }
}
