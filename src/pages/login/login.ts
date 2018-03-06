import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';
import { TabsPage } from '../tabs/tabs';
import { UserServiceProvider } from '../../providers/user-service/user-service';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  user={
    email:"",
    password: ""
  }
  constructor(public navCtrl: NavController, public navParams: NavParams, public userService: UserServiceProvider, private menuCtrl:MenuController) {
    menuCtrl.enable(false);
  }
  goToPage(){
    this.userService.login(this.user.email, this.user.password).then((result)=>{
      if(this.userService.isLoggedIn){
        //if auth succes, go to home
        this.navCtrl.setRoot(TabsPage);
      }
    })
  }
  goToReg(){
    this.navCtrl.push(RegisterPage);
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
