interface DataUser {
  name: string;
  is_empleado?: {
    foto?: string;
    documento?: string;
    cargos?: {
      nombre: string;
    };
  };
}
import { Component, OnInit } from '@angular/core';
 
import * as moment from 'moment-timezone';
 import { NavController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-check-in',
  templateUrl: './check-in.page.html',
  styleUrls: ['./check-in.page.scss'],
})
export class CheckInPage implements OnInit {

  isModalOpen= false;
  date= null;
  date_format = null;
  date_format_send = null;
  token= null;
  profile=null;
  isSupervisor = false;
  data_user: DataUser;
  data_vehiculos=null;
  vehiculo_select = null;
  asistencias= null;
  max_date=null;
  timer=null;
  time = null;
  data = null;
  tipo = 'Entrada';
  comentario= '';
  loading= null;
  busqueda = false; 
  latitud = 0;
  longitud = 0;
  server = environment.server;

  constructor(public api: HttpClient, private alertController: AlertController, private navCtrl: NavController, private geolocation: Geolocation, public toastController: ToastController, private loadingCtrl: LoadingController) { 
   
  }

  goToEmpleados(){
    this.navCtrl.navigateForward('empleados');
  }

  ngOnInit() {
    
    this.date_format =   moment().tz('Europe/Madrid').format("DD/MM/YYYY");

    this.date_format_send =   moment().tz('Europe/Madrid').format('YYYY-MM-DD'),
    this.date =   moment().tz('Europe/Madrid').toISOString();
    this.max_date =   moment().tz('Europe/Madrid').toISOString();

    if(localStorage.profile){
      this.profile =  JSON.parse(localStorage.profile);
      if(this.profile.access_token){
        this.navCtrl.navigateForward('check-in');
      }
    }else {
      this.navCtrl.navigateForward('home');
    }
    this.time = moment().tz('Europe/Madrid').format('hh:mm');

    console.log(this.profile);
    this.loadDataVehiclo();
    this.loadData();
    this.loadDataAsistencia();
    this.updateTime();
  }



  setOpen(isOpen: boolean) {
     this.isModalOpen = isOpen;
     this.date_format =   moment(this.date).format("DD/MM/YYYY");
     this.date_format_send =   moment(this.date).format('YYYY-MM-DD');

     let d =     moment(this.date).format('YYYY-MM-DD');
     let n = moment(this.max_date).format('YYYY-MM-DD');

     console.log(n,d);

     if (n==d){
      this.busqueda = false;
     }else {
      this.busqueda=true; 
     }
     this.loadDataAsistencia();
  }

  loadData(){
    let post = {
      
    }
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.profile.access_token}`     
   });

   let self = this; 

  this.api.post(`${environment.url}/process/dataUser`, post,{headers:httpHeaders}).subscribe(data => {
    console.log(data);
    const d: any = data;
    this.data_user = d;
    // Marcar si el cargo del empleado es SUPERVISOR (case-insensitive)
    this.isSupervisor = (d?.is_empleado?.cargos?.nombre || '').toString().toUpperCase() === 'SUPERVISOR';
     
   }, error => {
    if(error.status==401){
     
    }
    
  });
  }
  loadDataVehiclo(){
    let post = {
      
    }
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.profile.access_token}`     
   });

   let self = this; 

  this.api.post(`${environment.url}/process/dataVehiculos`, post,{headers:httpHeaders}).subscribe(data => {
    console.log(data);
    this.data_vehiculos = data; 
     
   }, error => {
    if(error.status==401){
     
    }
    
  });
  }
  loadDataAsistencia(){

    console.log(this.date_format_send);
    let post = {

      fecha:  this.date_format_send
      
    }
    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.profile.access_token}`     
   });

   console.log(post);

   let self = this; 

  this.api.post(`${environment.url}/process/dataAsistencias`, post,{headers:httpHeaders}).subscribe(data => {
    console.log(data);
    this.asistencias = data; 
    this.tipo= 'Entrada';
    if(this.asistencias.Ultimo){

      if(this.asistencias.Ultimo.tipo=='Entrada'){
        this.tipo= 'Salida';
      }else {
        this.tipo= 'Entrada';
      }
      
    }

   
     
   }, error => {
    console.log(error);
    if(error.status==401){
     
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
  updateTime(){

    this.timer = setInterval(() => {
        this.time = moment().tz('Europe/Madrid').format('hh:mm');
        this.updatePosition();
     }, 10000);
  }
  ionViewWillLeave(){
    clearInterval(this.timer);
  }

  updatePosition(){
    let self = this;
    this.geolocation.getCurrentPosition().then((resp) => {
      self.latitud= resp.coords.latitude;
      self.longitud= resp.coords.longitude;

   }).catch((error) => {
     
    this.presentToastError('Debe activar el GPS del dispositivo.');
   });

  }
  check (){

   
    if(this.data_vehiculos?.Data.length>0 && this.vehiculo_select==null){
      this.presentToastError('Debe Seleccionar un Vehículo');
      return false; 
    }
    
 

    this.showLoading();



    let ultimo = this.asistencias.Ultimo?this.asistencias.Ultimo.tipo:null;
    let post =  {
      fecha: moment().tz('Europe/Madrid').format('YYYY-MM-DD'),
      vehiculo:this.vehiculo_select?this.vehiculo_select:null,
      latitud:this.latitud,
      longitud:this.longitud,
      tipo:ultimo,
      comentario:this.comentario

    }
    console.log(post);
 

    const httpHeaders = new HttpHeaders ({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.profile.access_token}`     
   });

   let self = this; 


 

    
    this.api.post(`${environment.url}/process/storeAsistencias`, post,{headers:httpHeaders}).subscribe(data => {
      console.log(data);
      self.data= data;
      if( self.data.id_direccion==null){

        console.log('Fuera de oficina');
        self.presentToast('Fichaje registrado fuera de fabrica.');

        self.loading.dismiss();

      }else {
        self.presentToast('Fichaje registrado exitosamente.');
        self.loading.dismiss();
      }

      self.loadDataVehiclo();
      self.loadData();
      self.loadDataAsistencia();
       
     }, error => {
      self.loading.dismiss();
      if(error.status==401){
        
       
      }
    })


   this.vehiculo_select= null;

}

checkGPSPermission () {

  this.navCtrl.navigateForward('permisos');
  

}
ionViewDidEnter(){
  this.updatePosition();
}

async presentToast(msj) {
  const toast = await this.toastController.create({
    message: msj,
    duration: 2000
  });
  toast.present();
}

async confirm() {
  this.comentario='';
  const alert = await this.alertController.create({
    header: '¿Deseas Marcar '+this.tipo+'?',
    buttons: [
      {
        text: 'SI',
        role: 'confirm',
        handler: (data) => { this.comentario= data.comentario;  this.check() }
      },
      {
        text: 'NO',
        role: 'cancel',
        handler: () => {   }
      }
    ],
    inputs: [
      
      {
        name: 'comentario',
        type: 'textarea',
        placeholder: 'Agregar comentario'
      }
    ]
  });

  await alert.present();
}

async showLoading() {
  this.loading = await this.loadingCtrl.create({
    message: 'Marcando fichaje...',
 
    spinner: 'circles'
  });
  
  this.loading.present();
}

async presentToastError(msj) {
  const toast = await this.toastController.create({
    message: msj,
    duration: 1000,
    color:'danger',
    position:'middle'
  });
  toast.present();
}


logout2(){

  let post = {
      
  }
  const httpHeaders = new HttpHeaders ({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.profile.access_token}`     
 });

 let self = this; 

  this.api.post(`${environment.url}/auth/logout`, post,{headers:httpHeaders}).subscribe(data => {
    localStorage.clear();
    self.navCtrl.navigateForward('login');
    
     
   }, error => {
    
    if(error.status==401){
      
     
    }
  })
}
async logout(){
 
    const alert = await this.alertController.create({
      header: '¿Deseas Salir?',
      buttons: [
        {
          text: 'SI',
          role: 'confirm',
          handler: (data) => {   this.logout2() }
        },
        {
          text: 'NO',
          role: 'cancel',
          handler: () => {   }
        }
      ],
  
    });
  
    await alert.present();
  

}
politica(){
  this.navCtrl.navigateForward('politica-privacidad');
}
doRefresh(event){
  this.loadDataAsistencia();

  setTimeout(() => {
    console.log('Async operation has ended');
    event.target.complete();
  }, 2000);
}
 
}
