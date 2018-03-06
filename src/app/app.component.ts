import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { HomePage } from '../pages/home/home';
import { OrderPage } from '../pages/order/order';
import { CartPage } from '../pages/cart/cart';
import { UserServiceProvider } from '../providers/user-service/user-service';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav:Nav;
  rootPage:any = LoginPage;

  homePage:any=HomePage;
  orderPage:any=OrderPage;
  cartPage:any=CartPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public userService:UserServiceProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  Logout(){
    console.log('Logout gelukt');
    this.userService.logout();
    this.nav.setRoot(LoginPage);
  }
  openPage(pages){
    console.log('opening page',pages);
    this.nav.push(pages);
  }
}
