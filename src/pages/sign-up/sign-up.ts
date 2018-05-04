import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SignupProvider } from '../../providers/signup/signup';

/**
 * Generated class for the SignUpPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sign-up',
  templateUrl: 'sign-up.html',
})
export class SignUpPage {

  signUp

  constructor(public navCtrl: NavController, public navParams: NavParams, public signUpProvider: SignupProvider) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignUpPage');
    this.signUpProvider.signUp()
    .subscribe(
      (data)=> {this.signUp = data;},
      (error)=>{console.log(error);}
    )
  }
}
