"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_check-in_check-in_module_ts"],{

/***/ 96:
/*!*****************************************************!*\
  !*** ./src/app/check-in/check-in-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckInPageRoutingModule": () => (/* binding */ CheckInPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _check_in_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-in.page */ 6805);




const routes = [
    {
        path: '',
        component: _check_in_page__WEBPACK_IMPORTED_MODULE_0__.CheckInPage
    }
];
let CheckInPageRoutingModule = class CheckInPageRoutingModule {
};
CheckInPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CheckInPageRoutingModule);



/***/ }),

/***/ 6025:
/*!*********************************************!*\
  !*** ./src/app/check-in/check-in.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckInPageModule": () => (/* binding */ CheckInPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _check_in_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./check-in-routing.module */ 96);
/* harmony import */ var _check_in_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-in.page */ 6805);







let CheckInPageModule = class CheckInPageModule {
};
CheckInPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _check_in_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckInPageRoutingModule
        ],
        declarations: [_check_in_page__WEBPACK_IMPORTED_MODULE_1__.CheckInPage]
    })
], CheckInPageModule);



/***/ }),

/***/ 6805:
/*!*******************************************!*\
  !*** ./src/app/check-in/check-in.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckInPage": () => (/* binding */ CheckInPage)
/* harmony export */ });
/* harmony import */ var _Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _check_in_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./check-in.page.html?ngResource */ 7018);
/* harmony import */ var _check_in_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./check-in.page.scss?ngResource */ 3858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment-timezone */ 2469);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 6457);










let CheckInPage = class CheckInPage {
  constructor(api, alertController, navCtrl, geolocation, toastController, loadingCtrl) {
    this.api = api;
    this.alertController = alertController;
    this.navCtrl = navCtrl;
    this.geolocation = geolocation;
    this.toastController = toastController;
    this.loadingCtrl = loadingCtrl;
    this.isModalOpen = false;
    this.date = null;
    this.date_format = null;
    this.date_format_send = null;
    this.token = null;
    this.profile = null;
    this.isSupervisor = false;
    this.data_vehiculos = null;
    this.vehiculo_select = null;
    this.asistencias = null;
    this.max_date = null;
    this.timer = null;
    this.time = null;
    this.data = null;
    this.tipo = 'Entrada';
    this.comentario = '';
    this.loading = null;
    this.busqueda = false;
    this.latitud = 0;
    this.longitud = 0;
    this.server = src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.server;
  }

  goToEmpleados() {
    this.navCtrl.navigateForward('empleados');
  }

  ngOnInit() {
    this.date_format = moment_timezone__WEBPACK_IMPORTED_MODULE_3__().tz('Europe/Madrid').format("DD/MM/YYYY");
    this.date_format_send = moment_timezone__WEBPACK_IMPORTED_MODULE_3__().tz('Europe/Madrid').format('YYYY-MM-DD'), this.date = moment_timezone__WEBPACK_IMPORTED_MODULE_3__().tz('Europe/Madrid').toISOString();
    this.max_date = moment_timezone__WEBPACK_IMPORTED_MODULE_3__().tz('Europe/Madrid').toISOString();

    if (localStorage.profile) {
      this.profile = JSON.parse(localStorage.profile);

      if (this.profile.access_token) {
        this.navCtrl.navigateForward('check-in');
      }
    } else {
      this.navCtrl.navigateForward('home');
    }

    this.time = moment_timezone__WEBPACK_IMPORTED_MODULE_3__().tz('Europe/Madrid').format('hh:mm');
    console.log(this.profile);
    this.loadDataVehiclo();
    this.loadData();
    this.loadDataAsistencia();
    this.updateTime();
  }

  setOpen(isOpen) {
    this.isModalOpen = isOpen;
    this.date_format = moment_timezone__WEBPACK_IMPORTED_MODULE_3__(this.date).format("DD/MM/YYYY");
    this.date_format_send = moment_timezone__WEBPACK_IMPORTED_MODULE_3__(this.date).format('YYYY-MM-DD');
    let d = moment_timezone__WEBPACK_IMPORTED_MODULE_3__(this.date).format('YYYY-MM-DD');
    let n = moment_timezone__WEBPACK_IMPORTED_MODULE_3__(this.max_date).format('YYYY-MM-DD');
    console.log(n, d);

    if (n == d) {
      this.busqueda = false;
    } else {
      this.busqueda = true;
    }

    this.loadDataAsistencia();
  }

  loadData() {
    let post = {};
    const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.profile.access_token}`
    });
    let self = this;
    this.api.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.url}/process/dataUser`, post, {
      headers: httpHeaders
    }).subscribe(data => {
      console.log(data);
      const d = data;
      this.data_user = d; // Marcar si el cargo del empleado es SUPERVISOR (case-insensitive)

      this.isSupervisor = (d?.is_empleado?.cargos?.nombre || '').toString().toUpperCase() === 'SUPERVISOR';
    }, error => {
      if (error.status == 401) {}
    });
  }

  loadDataVehiclo() {
    let post = {};
    const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.profile.access_token}`
    });
    let self = this;
    this.api.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.url}/process/dataVehiculos`, post, {
      headers: httpHeaders
    }).subscribe(data => {
      console.log(data);
      this.data_vehiculos = data;
    }, error => {
      if (error.status == 401) {}
    });
  }

  loadDataAsistencia() {
    console.log(this.date_format_send);
    let post = {
      fecha: this.date_format_send
    };
    const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.profile.access_token}`
    });
    console.log(post);
    let self = this;
    this.api.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.url}/process/dataAsistencias`, post, {
      headers: httpHeaders
    }).subscribe(data => {
      console.log(data);
      this.asistencias = data;
      this.tipo = 'Entrada';

      if (this.asistencias.Ultimo) {
        if (this.asistencias.Ultimo.tipo == 'Entrada') {
          this.tipo = 'Salida';
        } else {
          this.tipo = 'Entrada';
        }
      }
    }, error => {
      console.log(error);

      if (error.status == 401) {}
    });
  }

  presentAlert(type, msj) {
    var _this = this;

    return (0,_Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this.alertController.create({
        header: type,
        mode: 'ios',
        message: msj,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

  updateTime() {
    this.timer = setInterval(() => {
      this.time = moment_timezone__WEBPACK_IMPORTED_MODULE_3__().tz('Europe/Madrid').format('hh:mm');
      this.updatePosition();
    }, 10000);
  }

  ionViewWillLeave() {
    clearInterval(this.timer);
  }

  updatePosition() {
    let self = this;
    this.geolocation.getCurrentPosition().then(resp => {
      self.latitud = resp.coords.latitude;
      self.longitud = resp.coords.longitude;
    }).catch(error => {
      this.presentToastError('Debe activar el GPS del dispositivo.');
    });
  }

  check() {
    if (this.data_vehiculos?.Data.length > 0 && this.vehiculo_select == null) {
      this.presentToastError('Debe Seleccionar un Vehículo');
      return false;
    }

    this.showLoading();
    let ultimo = this.asistencias.Ultimo ? this.asistencias.Ultimo.tipo : null;
    let post = {
      fecha: moment_timezone__WEBPACK_IMPORTED_MODULE_3__().tz('Europe/Madrid').format('YYYY-MM-DD'),
      vehiculo: this.vehiculo_select ? this.vehiculo_select : null,
      latitud: this.latitud,
      longitud: this.longitud,
      tipo: ultimo,
      comentario: this.comentario
    };
    console.log(post);
    const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.profile.access_token}`
    });
    let self = this;
    this.api.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.url}/process/storeAsistencias`, post, {
      headers: httpHeaders
    }).subscribe(data => {
      console.log(data);
      self.data = data;

      if (self.data.id_direccion == null) {
        console.log('Fuera de oficina');
        self.presentToast('Fichaje registrado fuera de fabrica.');
        self.loading.dismiss();
      } else {
        self.presentToast('Fichaje registrado exitosamente.');
        self.loading.dismiss();
      }

      self.loadDataVehiclo();
      self.loadData();
      self.loadDataAsistencia();
    }, error => {
      self.loading.dismiss();

      if (error.status == 401) {}
    });
    this.vehiculo_select = null;
  }

  checkGPSPermission() {
    this.navCtrl.navigateForward('permisos');
  }

  ionViewDidEnter() {
    this.updatePosition();
  }

  presentToast(msj) {
    var _this2 = this;

    return (0,_Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this2.toastController.create({
        message: msj,
        duration: 2000
      });
      toast.present();
    })();
  }

  confirm() {
    var _this3 = this;

    return (0,_Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3.comentario = '';
      const alert = yield _this3.alertController.create({
        header: '¿Deseas Marcar ' + _this3.tipo + '?',
        buttons: [{
          text: 'SI',
          role: 'confirm',
          handler: data => {
            _this3.comentario = data.comentario;

            _this3.check();
          }
        }, {
          text: 'NO',
          role: 'cancel',
          handler: () => {}
        }],
        inputs: [{
          name: 'comentario',
          type: 'textarea',
          placeholder: 'Agregar comentario'
        }]
      });
      yield alert.present();
    })();
  }

  showLoading() {
    var _this4 = this;

    return (0,_Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.loading = yield _this4.loadingCtrl.create({
        message: 'Marcando fichaje...',
        spinner: 'circles'
      });

      _this4.loading.present();
    })();
  }

  presentToastError(msj) {
    var _this5 = this;

    return (0,_Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this5.toastController.create({
        message: msj,
        duration: 1000,
        color: 'danger',
        position: 'middle'
      });
      toast.present();
    })();
  }

  logout2() {
    let post = {};
    const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.profile.access_token}`
    });
    let self = this;
    this.api.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_4__.environment.url}/auth/logout`, post, {
      headers: httpHeaders
    }).subscribe(data => {
      localStorage.clear();
      self.navCtrl.navigateForward('login');
    }, error => {
      if (error.status == 401) {}
    });
  }

  logout() {
    var _this6 = this;

    return (0,_Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this6.alertController.create({
        header: '¿Deseas Salir?',
        buttons: [{
          text: 'SI',
          role: 'confirm',
          handler: data => {
            _this6.logout2();
          }
        }, {
          text: 'NO',
          role: 'cancel',
          handler: () => {}
        }]
      });
      yield alert.present();
    })();
  }

  politica() {
    this.navCtrl.navigateForward('politica-privacidad');
  }

  doRefresh(event) {
    this.loadDataAsistencia();
    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

};

CheckInPage.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.NavController
}, {
  type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}];

CheckInPage = (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.Component)({
  selector: 'app-check-in',
  template: _check_in_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_check_in_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], CheckInPage);


/***/ }),

/***/ 3858:
/*!********************************************************!*\
  !*** ./src/app/check-in/check-in.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "@charset \"UTF-8\";\n.logo-head {\n  height: 80px;\n  padding: 10px;\n}\nion-header {\n  --background: #242424;\n  background: #242424;\n}\n.top {\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  background: #f9f9f9;\n  background-image: url('huella.png');\n  background-repeat: no-repeat;\n  background-position: 100% 0;\n  background-size: contain;\n}\n.bg-gris {\n  --background: #efefef;\n}\n.title_bg {\n  width: 50%;\n  background: #31ae01;\n  height: 40px;\n  left: 0px;\n  float: right;\n  border-bottom-right-radius: 20px;\n  border-top-right-radius: 20px;\n  padding-right: 10px;\n}\n.card {\n  height: 60px;\n  border-left: 7px #31af00 solid;\n  padding: 0px;\n  margin: 0px;\n}\n.card ion-col {\n  height: 100% !important;\n}\n.card p {\n  padding: 2px;\n  margin: 2px;\n}\n.card .img-build {\n  background: #31af00;\n  width: 46px;\n  height: 46px;\n  border-radius: 100%;\n}\n.circle {\n  width: 100%;\n  height: 25vh;\n  margin: auto;\n  border-radius: 100%;\n  text-align: center;\n}\n/* Clase reutilizable para los iconos del header (color/tamaño/espaciado igual que los existentes) */\n.header-icon {\n  width: 30px;\n  height: 30px;\n  color: #24aa3e;\n  margin-right: 10px;\n  vertical-align: middle;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL01vYmlsZSUyMERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1ZlbW9udGVjaC9JdmFuL2FwcC9wcm9zZWNhdGZpL2FwcC9wcm9zZWNhdGZpL3NyYy9hcHAvY2hlY2staW4vY2hlY2staW4ucGFnZS5zY3NzIiwiY2hlY2staW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLFlBQUE7RUFDQSxhQUFBO0FERUo7QUNBQTtFQUNJLHFCQUFBO0VBQ0EsbUJBQUE7QURHSjtBQ0NBO0VBRUksT0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FEQ0o7QUNDQTtFQUNJLHFCQUFBO0FERUo7QUNBQTtFQUNJLFVBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBREdKO0FDQUE7RUFDSSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBREdKO0FDRkk7RUFDSSx1QkFBQTtBRElSO0FDRkk7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBRElSO0FDRkk7RUFDSSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QURJUjtBQ0FBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBREdKO0FDRUEsb0dBQUE7QUFDQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QURDSiIsImZpbGUiOiJjaGVjay1pbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4ubG9nby1oZWFkIHtcbiAgaGVpZ2h0OiA4MHB4O1xuICBwYWRkaW5nOiAxMHB4O1xufVxuXG5pb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjQyNDI0O1xuICBiYWNrZ3JvdW5kOiAjMjQyNDI0O1xufVxuXG4udG9wIHtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBiYWNrZ3JvdW5kOiAjZjlmOWY5O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vYXNzZXRzL2ltZy9odWVsbGEucG5nKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XG59XG5cbi5iZy1ncmlzIHtcbiAgLS1iYWNrZ3JvdW5kOiAjZWZlZmVmO1xufVxuXG4udGl0bGVfYmcge1xuICB3aWR0aDogNTAlO1xuICBiYWNrZ3JvdW5kOiAjMzFhZTAxO1xuICBoZWlnaHQ6IDQwcHg7XG4gIGxlZnQ6IDBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDIwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbi5jYXJkIHtcbiAgaGVpZ2h0OiA2MHB4O1xuICBib3JkZXItbGVmdDogN3B4ICMzMWFmMDAgc29saWQ7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG59XG4uY2FyZCBpb24tY29sIHtcbiAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XG59XG4uY2FyZCBwIHtcbiAgcGFkZGluZzogMnB4O1xuICBtYXJnaW46IDJweDtcbn1cbi5jYXJkIC5pbWctYnVpbGQge1xuICBiYWNrZ3JvdW5kOiAjMzFhZjAwO1xuICB3aWR0aDogNDZweDtcbiAgaGVpZ2h0OiA0NnB4O1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xufVxuXG4uY2lyY2xlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjV2aDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qIENsYXNlIHJldXRpbGl6YWJsZSBwYXJhIGxvcyBpY29ub3MgZGVsIGhlYWRlciAoY29sb3IvdGFtYcOxby9lc3BhY2lhZG8gaWd1YWwgcXVlIGxvcyBleGlzdGVudGVzKSAqL1xuLmhlYWRlci1pY29uIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgY29sb3I6ICMyNGFhM2U7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn0iLCIubG9nby1oZWFkIHtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbn1cbmlvbi1oZWFkZXIge1xuICAgIC0tYmFja2dyb3VuZDogIzI0MjQyNDtcbiAgICBiYWNrZ3JvdW5kOiAjMjQyNDI0O1xufVxuXG5cbi50b3AgICB7XG4gICAgXG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDE7IFxuICAgIGJhY2tncm91bmQ6ICAjZjlmOWY5IDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOnVybCguLi8uLi9hc3NldHMvaW1nL2h1ZWxsYS5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbi5iZy1ncmlzIHtcbiAgICAtLWJhY2tncm91bmQ6ICNlZmVmZWY7XG59XG4udGl0bGVfYmcge1xuICAgIHdpZHRoOiA1MCU7XG4gICAgYmFja2dyb3VuZDogIzMxYWUwMTtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbGVmdDogMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMjBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGJvcmRlci1sZWZ0OiA3cHggIzMxYWYwMCBzb2xpZDtcbiAgICBwYWRkaW5nOiAwcHg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgaW9uLWNvbCAge1xuICAgICAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgICB9XG4gICAgcHtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICBtYXJnaW46IDJweDtcbiAgICB9XG4gICAgLmltZy1idWlsZCB7XG4gICAgICAgIGJhY2tncm91bmQ6ICAjMzFhZjAwIDtcbiAgICAgICAgd2lkdGg6IDQ2cHg7XG4gICAgICAgIGhlaWdodDogNDZweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB9XG4gICAgXG59XG4uY2lyY2xlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI1dmg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuIFxuIFxufVxuXG4vKiBDbGFzZSByZXV0aWxpemFibGUgcGFyYSBsb3MgaWNvbm9zIGRlbCBoZWFkZXIgKGNvbG9yL3RhbWHDsW8vZXNwYWNpYWRvIGlndWFsIHF1ZSBsb3MgZXhpc3RlbnRlcykgKi9cbi5oZWFkZXItaWNvbiB7XG4gICAgd2lkdGg6IDMwcHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGNvbG9yOiAjMjRhYTNlO1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4iXX0= */";

/***/ }),

/***/ 7018:
/*!********************************************************!*\
  !*** ./src/app/check-in/check-in.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-img src=\"../../assets/img/logo-white.png\" class=\"logo-head\"></ion-img>\n</ion-header>\n\n<ion-content>\n\n  <ion-refresher slot=\"fixed\" (ionRefresh)=\"doRefresh($event)\">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n \n  <ion-row style=\"height: 20vh;\" class=\"top\">\n    <ion-col size=\"12\"  > \n     <ion-item  lines=\"none\" style=\"    --background: none;\">\n      <ion-avatar slot=\"start\"  style=\"    border: 2px solid #24aa3e;\">\n        \n\n        <img *ngIf=\"data_user?.is_empleado?.foto\" src=\"{{server+data_user?.is_empleado?.foto}}\"/>\n        <img *ngIf=\"!data_user?.is_empleado?.foto\" src=\"../../assets/img/no-user.png\"/>\n      </ion-avatar>\n      <ion-label>\n        <p style=\"color:   #24aa3e;\">{{data_user?.name}}</p>\n        \n        <p>\n          {{data_user?.is_empleado?.documento}}\n           \n        </p>\n      </ion-label>\n      <ion-label slot=\"end\">\n        <ion-icon class=\"header-icon\" (click)=\"politica()\" name=\"information-circle\" title=\"Información\"></ion-icon>\n        <!-- Mostrar enlace a empleados solo si es supervisor -->\n        <ion-icon *ngIf=\"isSupervisor\" class=\"header-icon\" (click)=\"goToEmpleados()\" name=\"people\" title=\"Empleados\"></ion-icon>\n        <ion-icon class=\"header-icon\" (click)=\"logout()\" name=\"log-out\" title=\"Salir\"></ion-icon>\n      </ion-label>\n     </ion-item>\n    \n     \n    </ion-col>\n    <div class=\"title_bg\">\n      <p style=\"border: 0px;\n      padding: 0px;\n      margin: 8px;\n      float: right; color:#fff; font-weight: bold; \" >FICHAJE</p>\n    </div><div style=\"width: 50%;\"></div>\n   \n    </ion-row>  \n    <ion-row>\n      <ion-col size=\"12\">\n        <ion-item id=\"open-modal\" (click)=\"setOpen(true)\">\n          <ion-label style=\"text-align: center ; color: #24aa3e;\">{{date_format}}</ion-label>\n         </ion-item>\n      </ion-col>\n    </ion-row>\n    <ion-item>\n      <ion-label>Vehículo</ion-label>\n      <ion-select    placeholder=\"Seleccione Vehículo\" cancel-text=\"Cancelar\" [(ngModel)]=\"vehiculo_select\">\n        <ion-select-option *ngFor=\"let item of data_vehiculos?.Data \" value=\"{{item.id_vehiculo}}\">{{item.nombre}}</ion-select-option>\n        \n      </ion-select>\n    </ion-item>\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let item of asistencias?.Data \">\n        <ion-card class=\"card\"> \n          <ion-row>\n           \n        \n           <ion-col size=\"4\">\n            <div class=\"img-build\">\n              <ion-img src=\"../../assets/icon/building-svgrepo-com.svg\" style=\"color: #fff; padding: 12px;\"></ion-img>\n            </div>\n           \n           </ion-col>\n           <ion-col size=\"8\">\n            <p>{{item.tipo}}</p>\n            <p>{{item.hora}}</p>\n          </ion-col>\n        </ion-row>\n        \n        </ion-card>\n      </ion-col>\n      \n      \n    </ion-row>\n    \n    \n     \n \n\n \n \n  \n  <ion-row style=\"height: 50vh; width: 100%;\">\n    <ion-col size=\"12\">\n\n      <div  *ngIf=\"busqueda==true\" style=\"text-align: center;\">\n        <h4>\n          <b>Sin Fichaje Realizados</b>\n        </h4>\n        <p>\n          Desliza hacia abajo si quiere actualizar...\n        </p>\n      </div>\n \n      <div class=\"circle\" *ngIf=\"busqueda==false\">\n        \n        <ion-row>\n       \n          <ion-col size=\"12\" >\n            <ion-button (click)=\"confirm()\"  shape=\"round\" style=\"    width: 25vh;\n            height: 25vh;\n            margin: 0px;\n            padding: 0px;\n            --border-radius: 100%;\n            --background: #646464;\n            --border-width: 3px; \" fill=\"outline\">\n             <ion-row>\n              <ion-col size=\"3\">\n                <h1 style=\"margin-top: 35px;\">\n                <ion-icon *ngIf=\"tipo=='Entrada'\" name=\"cloud-upload\" style=\"font-size: 30px; color: #31ae01;\"></ion-icon>\n                <ion-icon *ngIf=\"tipo!='Entrada'\" name=\"cloud-download\" style=\"font-size: 30px; color: #31ae01;\"></ion-icon>\n              </h1>\n              </ion-col>\n              <ion-col size=\"9\" style=\"text-align: center; text-transform: capitalize; color: #ffffff;\">\n                <h1 *ngIf=\"tipo=='Entrada'\">\n                  Marcar <br>Entrada\n                </h1>\n                <h1 *ngIf=\"tipo!='Entrada'\">\n                  Marcar <br>Salida\n                </h1>\n              </ion-col>\n             </ion-row>\n              <ion-ripple-effect></ion-ripple-effect>\n            </ion-button>\n            \n          </ion-col>\n        </ion-row>\n      </div>\n      <p style=\"font-weight:bolder; text-align: center; ;\">Hora Actual: <span style=\"font-weight:normal\"> {{time}}</span></p>\n    </ion-col>\n  </ion-row>\n \n\n</ion-content>\n<ion-modal  [isOpen]=\"isModalOpen\" >\n  <ng-template>\n    \n    <ion-content class=\"ion-padding\">\n      <ion-item>\n        <ion-item>\n          <ion-label>Date</ion-label>\n          <ion-datetime display-format=\"DD/MM/YYYY\" presentation=\"date\" [(ngModel)]=\"date\" [max]=\"max_date\"></ion-datetime>\n        </ion-item>\n      </ion-item>\n      <ion-toolbar>\n        <ion-buttons collapse=\"true\" slot=\"end\" (click)=\"setOpen(false)\">\n          <ion-button>OK</ion-button>\n        </ion-buttons>\n        \n      </ion-toolbar>\n    </ion-content>\n  </ng-template>\n</ion-modal>\n \n";

/***/ })

}]);
//# sourceMappingURL=src_app_check-in_check-in_module_ts.js.map