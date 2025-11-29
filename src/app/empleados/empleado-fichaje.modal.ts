import { Component, Input } from '@angular/core';
import { ModalController, AlertController, ToastController, LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import * as moment from 'moment-timezone';
import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';

@Component({
  selector: 'app-empleado-fichaje-modal',
  templateUrl: './empleado-fichaje.modal.html',
  styleUrls: ['./empleado-fichaje.modal.scss']
})
export class EmpleadoFichajeModal {
  @Input() empleado: any;
  
  password = '';
  isAuthenticated = false;
  data_vehiculos = null;
  vehiculo_select = null;
  asistencias = null;
  tipo = 'Entrada';
  comentario = '';
  loading = null;
  latitud = 0;
  longitud = 0;
  time = null;
  timer = null;
  server = environment.server;

  constructor(
    private modalCtrl: ModalController,
    private http: HttpClient,
    private alertController: AlertController,
    private geolocation: Geolocation,
    private toastController: ToastController,
    private loadingCtrl: LoadingController
  ) {}

  ngOnInit() {
    this.time = moment().tz('Europe/Madrid').format('hh:mm');
    this.updateTime();
    this.updatePosition();
  }

  ionViewWillLeave() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }

  dismiss() {
    this.modalCtrl.dismiss();
  }

  async validatePassword() {
    const loading = await this.loadingCtrl.create({
      message: 'Validando...',
      spinner: 'circles'
    });
    await loading.present();

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    try {
      const response: any = await this.http.post(`${environment.url}/auth/login`, {
        email: this.empleado.email,
        password: this.password
      }, { headers: httpHeaders }).toPromise();

      if (response && response.access_token) {
        this.isAuthenticated = true;
        // Guardamos token temporalmente (no en localStorage)
        this.empleado.access_token = response.access_token;
        await this.loadDataVehiculo();
        await this.loadDataAsistencia();
      }
      loading.dismiss();
    } catch (error) {
      loading.dismiss();
      this.presentToastError('Contraseña incorrecta');
    }
  }

  updateTime() {
    this.timer = setInterval(() => {
      this.time = moment().tz('Europe/Madrid').format('hh:mm');
      this.updatePosition();
    }, 10000);
  }

  updatePosition() {
    this.geolocation.getCurrentPosition().then((resp) => {
      this.latitud = resp.coords.latitude;
      this.longitud = resp.coords.longitude;
    }).catch((error) => {
      this.presentToastError('Debe activar el GPS del dispositivo.');
    });
  }

  async loadDataVehiculo() {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.empleado.access_token}`
    });

    try {
      const data: any = await this.http.post(`${environment.url}/process/dataVehiculos`, {}, 
        { headers: httpHeaders }).toPromise();
      this.data_vehiculos = data;
    } catch (error) {
      console.error('Error loading vehiculos:', error);
    }
  }

  async loadDataAsistencia() {
    const fecha = moment().tz('Europe/Madrid').format('YYYY-MM-DD');
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.empleado.access_token}`
    });

    try {
      const data: any = await this.http.post(`${environment.url}/process/dataAsistencias`, 
        { fecha }, { headers: httpHeaders }).toPromise();
      
      this.asistencias = data;
      this.tipo = 'Entrada';
      if (this.asistencias.Ultimo) {
        if (this.asistencias.Ultimo.tipo == 'Entrada') {
          this.tipo = 'Salida';
        } else {
          this.tipo = 'Entrada';
        }
      }
    } catch (error) {
      console.error('Error loading asistencias:', error);
    }
  }

  async check() {
    if (this.data_vehiculos?.Data?.length > 0 && this.vehiculo_select == null) {
      this.presentToastError('Debe Seleccionar un Vehículo');
      return false;
    }

    await this.showLoading();

    const ultimo = this.asistencias.Ultimo ? this.asistencias.Ultimo.tipo : null;
    const post = {
      fecha: moment().tz('Europe/Madrid').format('YYYY-MM-DD'),
      vehiculo: this.vehiculo_select ? this.vehiculo_select : null,
      latitud: this.latitud,
      longitud: this.longitud,
      tipo: ultimo,
      comentario: this.comentario
    };

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.empleado.access_token}`
    });

    try {
      const data: any = await this.http.post(`${environment.url}/process/storeAsistencias`, 
        post, { headers: httpHeaders }).toPromise();
      
      if (data.id_direccion == null) {
        await this.presentToast('Fichaje registrado fuera de fábrica.');
      } else {
        await this.presentToast('Fichaje registrado exitosamente.');
      }

      this.loading.dismiss();
      this.modalCtrl.dismiss({ success: true });
    } catch (error) {
      this.loading.dismiss();
      this.presentToastError('Error al registrar fichaje');
    }
  }

  async confirm() {
    this.comentario = '';
    const alert = await this.alertController.create({
      header: '¿Deseas Marcar ' + this.tipo + '?',
      mode: 'ios',
      buttons: [
        {
          text: 'SI',
          role: 'confirm',
          handler: (data) => {
            this.comentario = data.comentario;
            this.check();
          }
        },
        {
          text: 'NO',
          role: 'cancel',
          handler: () => { }
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
    await this.loading.present();
  }

  async presentToast(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }

  async presentToastError(message: string) {
    const toast = await this.toastController.create({
      message: message,
      duration: 1000,
      color: 'danger',
      position: 'middle'
    });
    toast.present();
  }
}