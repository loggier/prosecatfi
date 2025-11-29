import { Component, OnInit } from '@angular/core';
import { Geolocation } from '@capacitor/geolocation';
import { Capacitor } from "@capacitor/core";
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-permisos',
  templateUrl: './permisos.page.html',
  styleUrls: ['./permisos.page.scss'],
})
export class PermisosPage implements OnInit {

  constructor(private androidPermissions: AndroidPermissions, private navCtrl: NavController,   ) { }

  ngOnInit() {
     
  }

  checkGPSPermission () {

    Geolocation.requestPermissions().then((resp) => {
      console.log(resp);

      if(resp.location=='granted'){
        this.navCtrl.navigateForward('login');
      }else {
        this.navCtrl.navigateForward('home');
      }
     
    
  })

   //
    
  }

}
