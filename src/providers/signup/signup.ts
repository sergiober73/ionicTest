import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

/*
  Generated class for the SignupProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SignupProvider {

  private signUpUrl = 'https://test2.youmobile.es/signup';
  private signUpObject = {
    phone:'688116782',
    pass:'Hola1234*'
  }
  

  constructor(public http: HttpClient) {
    console.log('Hello SignupProvider Provider');
  }

  signUp(){
    return this.http.post(this.signUpUrl, this.signUpObject);
  }

}
