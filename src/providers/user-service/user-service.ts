
import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { FirebaseApp } from 'angularfire2';

@Injectable()
export class UserServiceProvider {
isLoggedIn:Boolean;
  constructor(public afAuth: AngularFireAuth, public toastCtrl: ToastController, public firebase:FirebaseApp) {
    console.log('Hello UserServiceProvider Provider');
  }
  loginwithGoogle(){
   
  }
  login(email:string,password:string){

    return this.afAuth.auth.signInWithEmailAndPassword(email,password).then((result)=>{
      console.log("login result",result);
      this.isLoggedIn = true;
    }).catch((error)=>{
      console.log("Error during login", error);
      this.presentToast(error.message);
      this.isLoggedIn=false;
    })
  }
  logout(){
    this.afAuth.auth.signOut();
    this.isLoggedIn = false;
  }
  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000,
      position: 'top'
    });
  
    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });
  
    toast.present();
  }

}
