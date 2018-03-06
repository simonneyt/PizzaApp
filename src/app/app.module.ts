import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { OrderPage } from '../pages/order/order';
import { CartPage } from '../pages/cart/cart';
import { BestellingPage } from '../pages/bestelling/bestelling';
import { StoreDetailPage } from '../pages/store-detail/store-detail';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StoresProvider } from '../providers/stores/stores';
import { PizzaListProvider } from '../providers/pizza-list/pizza-list';

import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { UserServiceProvider } from '../providers/user-service/user-service';

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAmM6J1IL_yt6LmXVZjbaK8D97CVd46Xms",
  authDomain: "pizzaapp-99854.firebaseapp.com",
  databaseURL: "https://pizzaapp-99854.firebaseio.com",
  projectId: "pizzaapp-99854",
  storageBucket: "pizzaapp-99854.appspot.com",
  messagingSenderId: "558400752882"
};


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    OrderPage,
    CartPage,
    BestellingPage,
    StoreDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(config)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LoginPage,
    RegisterPage,
    OrderPage,
    CartPage,
    BestellingPage,
    StoreDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StoresProvider,
    PizzaListProvider,
    UserServiceProvider
  ]
})
export class AppModule {}
