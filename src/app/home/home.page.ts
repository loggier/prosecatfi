import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  profile= null;
  ok = false; 
  constructor(private navCtrl: NavController) {}
  ngOnInit() {

  
  
  }
  ionViewWillEnter(){
    if(localStorage.profile){
      this.profile =  JSON.parse(localStorage.profile);
      if(this.profile.access_token){
        this.navCtrl.navigateRoot('check-in');
       
      }else {
        this.ok = true; 
      }
    }else {
      this.ok = true; 
    }
  }
 

}
