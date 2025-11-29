import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NavController, ModalController } from '@ionic/angular';
import { EmpleadoFichajeModal } from './empleado-fichaje.modal';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.page.html',
  styleUrls: ['./empleados.page.scss'],
})
export class EmpleadosPage implements OnInit {

  profile: any = null;
  isSupervisor = false;
  dataUser: any = null;
  empleados: any[] = [];
  server = environment.server;

  constructor(
    public api: HttpClient, 
    private navCtrl: NavController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
    if (localStorage.profile) {
      this.profile = JSON.parse(localStorage.profile);
    }

    // Obtener datos completos del usuario desde el endpoint para asegurar que
    // tenemos la información de cargos/is_empleado tal como en check-in
    this.loadDataUser();
  }

  loadDataUser() {
    const post = {};
    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.profile?.access_token}`);

    this.api.post(`${environment.url}/process/dataUser`, post, { headers: httpHeaders }).subscribe((res: any) => {
  this.dataUser = res;
  const cargo = (res?.is_empleado?.cargos?.nombre || '').toString().toUpperCase();
      this.isSupervisor = cargo === 'SUPERVISOR';
      if (this.isSupervisor) {
        this.loadEmpleados();
      }
    }, err => {
      console.error('Error loading user data', err);
    });
  }

  loadEmpleados() {
    const post = {};
    const httpHeaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', `Bearer ${this.profile?.access_token}`);

    this.api.post(`${environment.url}/process/getDataEmpleados`, post, { headers: httpHeaders }).subscribe((res: any) => {
      // Esperamos { empleados: [...] }
      this.empleados = res?.empleados || [];
    }, err => {
      console.error('Error loading empleados', err);
    });
  }

  goBack() {
    this.navCtrl.back();
  }

  async registrarEmpleado(empleado: any) {
    const modal = await this.modalCtrl.create({
      component: EmpleadoFichajeModal,
      componentProps: {
        empleado
      }
    });

    modal.onDidDismiss().then((result) => {
      if (result.data?.success) {
        // Actualizar lista de empleados después de un fichaje exitoso
        this.loadEmpleados();
      }
    });

    await modal.present();
  }

}
