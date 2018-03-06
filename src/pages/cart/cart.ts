import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams} from 'ionic-angular';
import { App } from 'ionic-angular/components/app/app'
import { PizzaListProvider } from '../../providers/pizza-list/pizza-list';
import { BestellingPage } from '../bestelling/bestelling';
import { HomePage } from '../home/home';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {
  pizzalists:any;
  constructor(public navCtrl: NavController, public pizzaListProvider: PizzaListProvider, public app: App) {
    this.pizzalists=pizzaListProvider.getPizza();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  goToBestelling(){
    this.navCtrl.push(BestellingPage);
  }
  cancelOrder(){
    console.log("Cancelling order");
    this.app.getRootNav().setRoot(HomePage);
  }

}
