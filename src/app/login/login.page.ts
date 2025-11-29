import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';

import { environment } from 'src/environments/environment';

import * as $ from "jquery";
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email = '';
  password= '';
  constructor( public api: HttpClient, private alertController: AlertController, private navCtrl: NavController) { }

  ngOnInit() {
  }
  async login(){

    if (this.email==''){
      this.presentAlert('¡Error!', 'Email es requerido.');
      return false;
    }
    if (this.password==''){
      this.presentAlert('¡Error!', 'Contraseña es requerida.');
      return false;
    }

    let post = {
      email: this.email,
      password: this.password,
      remember_me:true,
    }

    

    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json'      
   });

   let self = this; 

  this.api.post(`${environment.url}/auth/login`, post,{headers:httpHeaders}).subscribe(data => {
    localStorage.setItem('profile', JSON.stringify(data));
    self.navCtrl.navigateForward('check-in');
    
   }, error => {
    if(error.status==401){
      console.log(error.error.message);
      this.presentAlert('¡Error!', 'Acceso no autorizado');
    }
    
  });

 

  }

  async presentAlert(type,msj) {
    const alert = await this.alertController.create({
      header: type,
      mode: 'ios',
      message: msj,
      buttons: ['OK']
    });

    await alert.present();
  }
}
