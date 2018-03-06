import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { StoresProvider } from '../../providers/stores/stores';
import { StoreDetailPage } from '../store-detail/store-detail';
import { LoginPage } from '../login/login';



@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  stores:any;
  constructor(public navCtrl: NavController, public storesProvider:StoresProvider, private menuCtrl:MenuController) {
    menuCtrl.enable(true);
	  this.stores=storesProvider.getAll();
 
  }
  showDetail(item:any){
    this.navCtrl.push(StoreDetailPage,item);
  }
  showMenu(item:any){
    this.navCtrl.push(StoreDetailPage,item);
  }
  
  
}
