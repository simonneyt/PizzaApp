import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderPage } from '../order/order';

/**
 * Generated class for the StoreDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-store-detail',
  templateUrl: 'store-detail.html',
})
export class StoreDetailPage {
  store:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log('Store data',navParams.data);
    this.store=navParams.data;
  }
  goToOrder(){
    this.navCtrl.push(OrderPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoreDetailPage');
  }

}
