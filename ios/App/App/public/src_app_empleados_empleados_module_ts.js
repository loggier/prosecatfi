"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_empleados_empleados_module_ts"],{

/***/ 7512:
/*!*****************************************************!*\
  !*** ./src/app/empleados/empleado-fichaje.modal.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpleadoFichajeModal": () => (/* binding */ EmpleadoFichajeModal)
/* harmony export */ });
/* harmony import */ var _Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _empleado_fichaje_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empleado-fichaje.modal.html?ngResource */ 4059);
/* harmony import */ var _empleado_fichaje_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empleado-fichaje.modal.scss?ngResource */ 3677);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment-timezone */ 2469);
/* harmony import */ var moment_timezone__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @awesome-cordova-plugins/geolocation/ngx */ 6457);










let EmpleadoFichajeModal = class EmpleadoFichajeModal {
  constructor(modalCtrl, http, alertController, geolocation, toastController, loadingCtrl) {
    this.modalCtrl = modalCtrl;
    this.http = http;
    this.alertController = alertController;
    this.geolocation = geolocation;
    this.toastController = toastController;
    this.loadingCtrl = loadingCtrl;
    this.password = '';
    this.isAuthenticated = false;
    this.data_vehiculos = null;
    this.vehiculo_select = null;
    this.asistencias = null;
    this.tipo = 'Entrada';
    this.comentario = '';
    this.loading = null;
    this.latitud = 0;
    this.longitud = 0;
    this.time = null;
    this.timer = null;
    this.server = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.server;
  }

  ngOnInit() {
    this.time = moment_timezone__WEBPACK_IMPORTED_MODULE_4__().tz('Europe/Madrid').format('hh:mm');
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

  validatePassword() {
    var _this = this;

    return (0,_Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const loading = yield _this.loadingCtrl.create({
        message: 'Validando...',
        spinner: 'circles'
      });
      yield loading.present();
      const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
        'Content-Type': 'application/json'
      });

      try {
        const response = yield _this.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.url}/auth/login`, {
          email: _this.empleado.email,
          password: _this.password
        }, {
          headers: httpHeaders
        }).toPromise();

        if (response && response.access_token) {
          _this.isAuthenticated = true; // Guardamos token temporalmente (no en localStorage)

          _this.empleado.access_token = response.access_token;
          yield _this.loadDataVehiculo();
          yield _this.loadDataAsistencia();
        }

        loading.dismiss();
      } catch (error) {
        loading.dismiss();

        _this.presentToastError('Contraseña incorrecta');
      }
    })();
  }

  updateTime() {
    this.timer = setInterval(() => {
      this.time = moment_timezone__WEBPACK_IMPORTED_MODULE_4__().tz('Europe/Madrid').format('hh:mm');
      this.updatePosition();
    }, 10000);
  }

  updatePosition() {
    this.geolocation.getCurrentPosition().then(resp => {
      this.latitud = resp.coords.latitude;
      this.longitud = resp.coords.longitude;
    }).catch(error => {
      this.presentToastError('Debe activar el GPS del dispositivo.');
    });
  }

  loadDataVehiculo() {
    var _this2 = this;

    return (0,_Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${_this2.empleado.access_token}`
      });

      try {
        const data = yield _this2.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.url}/process/dataVehiculos`, {}, {
          headers: httpHeaders
        }).toPromise();
        _this2.data_vehiculos = data;
      } catch (error) {
        console.error('Error loading vehiculos:', error);
      }
    })();
  }

  loadDataAsistencia() {
    var _this3 = this;

    return (0,_Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const fecha = moment_timezone__WEBPACK_IMPORTED_MODULE_4__().tz('Europe/Madrid').format('YYYY-MM-DD');
      const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${_this3.empleado.access_token}`
      });

      try {
        const data = yield _this3.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.url}/process/dataAsistencias`, {
          fecha
        }, {
          headers: httpHeaders
        }).toPromise();
        _this3.asistencias = data;
        _this3.tipo = 'Entrada';

        if (_this3.asistencias.Ultimo) {
          if (_this3.asistencias.Ultimo.tipo == 'Entrada') {
            _this3.tipo = 'Salida';
          } else {
            _this3.tipo = 'Entrada';
          }
        }
      } catch (error) {
        console.error('Error loading asistencias:', error);
      }
    })();
  }

  check() {
    var _this4 = this;

    return (0,_Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this4.data_vehiculos?.Data?.length > 0 && _this4.vehiculo_select == null) {
        _this4.presentToastError('Debe Seleccionar un Vehículo');

        return false;
      }

      yield _this4.showLoading();
      const ultimo = _this4.asistencias.Ultimo ? _this4.asistencias.Ultimo.tipo : null;
      const post = {
        fecha: moment_timezone__WEBPACK_IMPORTED_MODULE_4__().tz('Europe/Madrid').format('YYYY-MM-DD'),
        vehiculo: _this4.vehiculo_select ? _this4.vehiculo_select : null,
        latitud: _this4.latitud,
        longitud: _this4.longitud,
        tipo: ultimo,
        comentario: _this4.comentario
      };
      const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${_this4.empleado.access_token}`
      });

      try {
        const data = yield _this4.http.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.url}/process/storeAsistencias`, post, {
          headers: httpHeaders
        }).toPromise();

        if (data.id_direccion == null) {
          yield _this4.presentToast('Fichaje registrado fuera de fábrica.');
        } else {
          yield _this4.presentToast('Fichaje registrado exitosamente.');
        }

        _this4.loading.dismiss();

        _this4.modalCtrl.dismiss({
          success: true
        });
      } catch (error) {
        _this4.loading.dismiss();

        _this4.presentToastError('Error al registrar fichaje');
      }
    })();
  }

  confirm() {
    var _this5 = this;

    return (0,_Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this5.comentario = '';
      const alert = yield _this5.alertController.create({
        header: '¿Deseas Marcar ' + _this5.tipo + '?',
        mode: 'ios',
        buttons: [{
          text: 'SI',
          role: 'confirm',
          handler: data => {
            _this5.comentario = data.comentario;

            _this5.check();
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
    var _this6 = this;

    return (0,_Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this6.loading = yield _this6.loadingCtrl.create({
        message: 'Marcando fichaje...',
        spinner: 'circles'
      });
      yield _this6.loading.present();
    })();
  }

  presentToast(message) {
    var _this7 = this;

    return (0,_Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this7.toastController.create({
        message: message,
        duration: 2000
      });
      toast.present();
    })();
  }

  presentToastError(message) {
    var _this8 = this;

    return (0,_Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const toast = yield _this8.toastController.create({
        message: message,
        duration: 1000,
        color: 'danger',
        position: 'middle'
      });
      toast.present();
    })();
  }

};

EmpleadoFichajeModal.ctorParameters = () => [{
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ModalController
}, {
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.AlertController
}, {
  type: _awesome_cordova_plugins_geolocation_ngx__WEBPACK_IMPORTED_MODULE_5__.Geolocation
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.ToastController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.LoadingController
}];

EmpleadoFichajeModal.propDecorators = {
  empleado: [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_8__.Input
  }]
};
EmpleadoFichajeModal = (0,tslib__WEBPACK_IMPORTED_MODULE_9__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-empleado-fichaje-modal',
  template: _empleado_fichaje_modal_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_empleado_fichaje_modal_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EmpleadoFichajeModal);


/***/ }),

/***/ 9397:
/*!*******************************************************!*\
  !*** ./src/app/empleados/empleados-routing.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpleadosPageRoutingModule": () => (/* binding */ EmpleadosPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _empleados_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empleados.page */ 8893);




const routes = [
    {
        path: '',
        component: _empleados_page__WEBPACK_IMPORTED_MODULE_0__.EmpleadosPage
    }
];
let EmpleadosPageRoutingModule = class EmpleadosPageRoutingModule {
};
EmpleadosPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EmpleadosPageRoutingModule);



/***/ }),

/***/ 3369:
/*!***********************************************!*\
  !*** ./src/app/empleados/empleados.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpleadosPageModule": () => (/* binding */ EmpleadosPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _empleados_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./empleados-routing.module */ 9397);
/* harmony import */ var _empleados_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empleados.page */ 8893);
/* harmony import */ var _empleado_fichaje_modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empleado-fichaje.modal */ 7512);








let EmpleadosPageModule = class EmpleadosPageModule {
};
EmpleadosPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.IonicModule,
            _empleados_routing_module__WEBPACK_IMPORTED_MODULE_0__.EmpleadosPageRoutingModule
        ],
        declarations: [_empleados_page__WEBPACK_IMPORTED_MODULE_1__.EmpleadosPage, _empleado_fichaje_modal__WEBPACK_IMPORTED_MODULE_2__.EmpleadoFichajeModal]
    })
], EmpleadosPageModule);



/***/ }),

/***/ 8893:
/*!*********************************************!*\
  !*** ./src/app/empleados/empleados.page.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EmpleadosPage": () => (/* binding */ EmpleadosPage)
/* harmony export */ });
/* harmony import */ var _Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _empleados_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./empleados.page.html?ngResource */ 8967);
/* harmony import */ var _empleados_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./empleados.page.scss?ngResource */ 4102);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _empleado_fichaje_modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./empleado-fichaje.modal */ 7512);









let EmpleadosPage = class EmpleadosPage {
  constructor(api, navCtrl, modalCtrl) {
    this.api = api;
    this.navCtrl = navCtrl;
    this.modalCtrl = modalCtrl;
    this.profile = null;
    this.isSupervisor = false;
    this.dataUser = null;
    this.empleados = [];
    this.server = src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.server;
  }

  ngOnInit() {
    if (localStorage.profile) {
      this.profile = JSON.parse(localStorage.profile);
    } // Obtener datos completos del usuario desde el endpoint para asegurar que
    // tenemos la información de cargos/is_empleado tal como en check-in


    this.loadDataUser();
  }

  loadDataUser() {
    const post = {};
    const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.profile?.access_token}`);
    this.api.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.url}/process/dataUser`, post, {
      headers: httpHeaders
    }).subscribe(res => {
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
    const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpHeaders().set('Content-Type', 'application/json').set('Authorization', `Bearer ${this.profile?.access_token}`);
    this.api.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.url}/process/getDataEmpleados`, post, {
      headers: httpHeaders
    }).subscribe(res => {
      // Esperamos { empleados: [...] }
      this.empleados = res?.empleados || [];
    }, err => {
      console.error('Error loading empleados', err);
    });
  }

  goBack() {
    this.navCtrl.back();
  }

  registrarEmpleado(empleado) {
    var _this = this;

    return (0,_Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const modal = yield _this.modalCtrl.create({
        component: _empleado_fichaje_modal__WEBPACK_IMPORTED_MODULE_4__.EmpleadoFichajeModal,
        componentProps: {
          empleado
        }
      });
      modal.onDidDismiss().then(result => {
        if (result.data?.success) {
          // Actualizar lista de empleados después de un fichaje exitoso
          _this.loadEmpleados();
        }
      });
      yield modal.present();
    })();
  }

};

EmpleadosPage.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.NavController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.ModalController
}];

EmpleadosPage = (0,tslib__WEBPACK_IMPORTED_MODULE_7__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.Component)({
  selector: 'app-empleados',
  template: _empleados_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_empleados_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], EmpleadosPage);


/***/ }),

/***/ 3677:
/*!******************************************************************!*\
  !*** ./src/app/empleados/empleado-fichaje.modal.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".auth-container {\n  padding: 20px;\n  text-align: center;\n}\n.auth-container .empleado-info {\n  margin-bottom: 20px;\n}\n.auth-container .empleado-info ion-avatar {\n  width: 100px;\n  height: 100px;\n  margin: 0 auto 15px;\n  border: 2px solid #24aa3e;\n}\n.auth-container .empleado-info h2 {\n  margin: 10px 0;\n  color: #333;\n  font-weight: bold;\n}\n.auth-container .empleado-info p {\n  color: #666;\n  margin: 5px 0;\n}\n.auth-container .auth-button {\n  margin-top: 20px;\n}\n.fichaje-container ion-item {\n  --background: none;\n}\n.card {\n  height: 60px;\n  border-left: 7px #31af00 solid;\n  padding: 0px;\n  margin: 0px;\n}\n.card ion-col {\n  height: 100% !important;\n}\n.card p {\n  padding: 2px;\n  margin: 2px;\n}\n.card .img-build {\n  background: #31af00;\n  width: 46px;\n  height: 46px;\n  border-radius: 100%;\n}\n.circle {\n  width: 100%;\n  height: 25vh;\n  margin: auto;\n  border-radius: 100%;\n  text-align: center;\n}\n.circle .fichaje-button {\n  width: 25vh;\n  height: 25vh;\n  margin: 0px;\n  padding: 0px;\n  --border-radius: 100%;\n  --background: #646464;\n  --border-width: 3px;\n}\n.circle .fichaje-button ion-icon {\n  font-size: 30px;\n  color: #31ae01;\n}\n.circle .fichaje-button h1 {\n  margin-top: 35px;\n  color: #ffffff;\n}\n.time-display {\n  font-weight: bolder;\n  text-align: center;\n}\n.time-display span {\n  font-weight: normal;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxlYWRvLWZpY2hhamUubW9kYWwuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL01vYmlsZSUyMERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1ZlbW9udGVjaC9JdmFuL2FwcC9wcm9zZWNhdGZpL2FwcC9wcm9zZWNhdGZpL3NyYy9hcHAvZW1wbGVhZG9zL2VtcGxlYWRvLWZpY2hhamUubW9kYWwuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtBQ0NGO0FEQ0U7RUFDRSxtQkFBQTtBQ0NKO0FEQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUNDTjtBREVJO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQ0FOO0FER0k7RUFDRSxXQUFBO0VBQ0EsYUFBQTtBQ0ROO0FES0U7RUFDRSxnQkFBQTtBQ0hKO0FEUUU7RUFDRSxrQkFBQTtBQ0xKO0FEU0E7RUFDRSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQ05GO0FEUUU7RUFDRSx1QkFBQTtBQ05KO0FEU0U7RUFDRSxZQUFBO0VBQ0EsV0FBQTtBQ1BKO0FEVUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUNSSjtBRFlBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1RGO0FEV0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FDVEo7QURXSTtFQUNFLGVBQUE7RUFDQSxjQUFBO0FDVE47QURZSTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQ1ZOO0FEZUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FDWkY7QURjRTtFQUNFLG1CQUFBO0FDWkoiLCJmaWxlIjoiZW1wbGVhZG8tZmljaGFqZS5tb2RhbC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmF1dGgtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIC5lbXBsZWFkby1pbmZvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIFxuICAgIGlvbi1hdmF0YXIge1xuICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgIG1hcmdpbjogMCBhdXRvIDE1cHg7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCAjMjRhYTNlO1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgIG1hcmdpbjogMTBweCAwO1xuICAgICAgY29sb3I6ICMzMzM7XG4gICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICB9XG5cbiAgICBwIHtcbiAgICAgIGNvbG9yOiAjNjY2O1xuICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICB9XG4gIH1cblxuICAuYXV0aC1idXR0b24ge1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbn1cblxuLmZpY2hhamUtY29udGFpbmVyIHtcbiAgaW9uLWl0ZW0ge1xuICAgIC0tYmFja2dyb3VuZDogbm9uZTtcbiAgfVxufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLWxlZnQ6IDdweCAjMzFhZjAwIHNvbGlkO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuXG4gIGlvbi1jb2wge1xuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG5cbiAgcCB7XG4gICAgcGFkZGluZzogMnB4O1xuICAgIG1hcmdpbjogMnB4O1xuICB9XG5cbiAgLmltZy1idWlsZCB7XG4gICAgYmFja2dyb3VuZDogIzMxYWYwMDtcbiAgICB3aWR0aDogNDZweDtcbiAgICBoZWlnaHQ6IDQ2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgfVxufVxuXG4uY2lyY2xlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjV2aDtcbiAgbWFyZ2luOiBhdXRvO1xuICBib3JkZXItcmFkaXVzOiAxMDAlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgLmZpY2hhamUtYnV0dG9uIHtcbiAgICB3aWR0aDogMjV2aDtcbiAgICBoZWlnaHQ6IDI1dmg7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgcGFkZGluZzogMHB4O1xuICAgIC0tYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICAtLWJhY2tncm91bmQ6ICM2NDY0NjQ7XG4gICAgLS1ib3JkZXItd2lkdGg6IDNweDtcblxuICAgIGlvbi1pY29uIHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIGNvbG9yOiAjMzFhZTAxO1xuICAgIH1cblxuICAgIGgxIHtcbiAgICAgIG1hcmdpbi10b3A6IDM1cHg7XG4gICAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB9XG4gIH1cbn1cblxuLnRpbWUtZGlzcGxheSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICBzcGFuIHtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICB9XG59IiwiLmF1dGgtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmF1dGgtY29udGFpbmVyIC5lbXBsZWFkby1pbmZvIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5hdXRoLWNvbnRhaW5lciAuZW1wbGVhZG8taW5mbyBpb24tYXZhdGFyIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBtYXJnaW46IDAgYXV0byAxNXB4O1xuICBib3JkZXI6IDJweCBzb2xpZCAjMjRhYTNlO1xufVxuLmF1dGgtY29udGFpbmVyIC5lbXBsZWFkby1pbmZvIGgyIHtcbiAgbWFyZ2luOiAxMHB4IDA7XG4gIGNvbG9yOiAjMzMzO1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5hdXRoLWNvbnRhaW5lciAuZW1wbGVhZG8taW5mbyBwIHtcbiAgY29sb3I6ICM2NjY7XG4gIG1hcmdpbjogNXB4IDA7XG59XG4uYXV0aC1jb250YWluZXIgLmF1dGgtYnV0dG9uIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmZpY2hhamUtY29udGFpbmVyIGlvbi1pdGVtIHtcbiAgLS1iYWNrZ3JvdW5kOiBub25lO1xufVxuXG4uY2FyZCB7XG4gIGhlaWdodDogNjBweDtcbiAgYm9yZGVyLWxlZnQ6IDdweCAjMzFhZjAwIHNvbGlkO1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xufVxuLmNhcmQgaW9uLWNvbCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xufVxuLmNhcmQgcCB7XG4gIHBhZGRpbmc6IDJweDtcbiAgbWFyZ2luOiAycHg7XG59XG4uY2FyZCAuaW1nLWJ1aWxkIHtcbiAgYmFja2dyb3VuZDogIzMxYWYwMDtcbiAgd2lkdGg6IDQ2cHg7XG4gIGhlaWdodDogNDZweDtcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbn1cblxuLmNpcmNsZSB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDI1dmg7XG4gIG1hcmdpbjogYXV0bztcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLmNpcmNsZSAuZmljaGFqZS1idXR0b24ge1xuICB3aWR0aDogMjV2aDtcbiAgaGVpZ2h0OiAyNXZoO1xuICBtYXJnaW46IDBweDtcbiAgcGFkZGluZzogMHB4O1xuICAtLWJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIC0tYmFja2dyb3VuZDogIzY0NjQ2NDtcbiAgLS1ib3JkZXItd2lkdGg6IDNweDtcbn1cbi5jaXJjbGUgLmZpY2hhamUtYnV0dG9uIGlvbi1pY29uIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBjb2xvcjogIzMxYWUwMTtcbn1cbi5jaXJjbGUgLmZpY2hhamUtYnV0dG9uIGgxIHtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbi50aW1lLWRpc3BsYXkge1xuICBmb250LXdlaWdodDogYm9sZGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4udGltZS1kaXNwbGF5IHNwYW4ge1xuICBmb250LXdlaWdodDogbm9ybWFsO1xufSJdfQ== */";

/***/ }),

/***/ 4102:
/*!**********************************************************!*\
  !*** ./src/app/empleados/empleados.page.scss?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = ".empleados-container {\n  padding: 16px;\n}\n\n.employee-card {\n  padding: 12px;\n  border-radius: 8px;\n  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.03);\n}\n\n.card-row {\n  align-items: center;\n}\n\n.avatar-wrap img {\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 2px solid #eee;\n}\n\n.emp-name {\n  margin: 0;\n  font-weight: 700;\n}\n\n.emp-role {\n  margin: 0;\n  color: #666;\n  font-size: 0.9rem;\n}\n\n.action-col {\n  display: flex;\n  justify-content: center;\n}\n\n.not-supervisor {\n  padding: 20px;\n  text-align: center;\n  color: #666;\n}\n\n/* New styles for big list look */\n\n.list-wrap {\n  padding: 16px 8px 40px 8px;\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 18px;\n}\n\n.employee-card {\n  display: block;\n  width: 100%;\n  padding: 0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 10px 30px rgba(18, 18, 18, 0.06);\n}\n\n.card-inner {\n  display: flex;\n  align-items: center;\n  padding: 18px 14px;\n}\n\n.avatar img, .avatar {\n  width: 78px;\n  height: 78px;\n  border-radius: 50%;\n  overflow: hidden;\n  display: inline-block;\n  flex: 0 0 78px;\n  margin-right: 18px;\n}\n\n.avatar img {\n  object-fit: cover;\n}\n\n.info {\n  flex: 1 1 auto;\n}\n\n.name {\n  font-size: 20px;\n  font-weight: 800;\n  color: #444;\n  text-transform: uppercase;\n}\n\n.role {\n  font-size: 13px;\n  color: #999;\n  margin-top: 4px;\n}\n\n.action {\n  flex: 0 0 120px;\n  display: flex;\n  justify-content: flex-end;\n}\n\n.register-btn {\n  --background: #31ae01;\n  --background-activated: #289301;\n  --color: #fff;\n  --border-radius: 10px 0 0 10px;\n  height: 48px;\n  padding: 0 18px;\n  font-weight: 700;\n}\n\n/* Header like check-in */\n\n.logo-head {\n  height: 80px;\n  padding: 10px;\n}\n\nion-header {\n  --background: #242424;\n  background: #242424;\n}\n\n/* Responsive: 2 columnas en tablet/desktop */\n\n@media (min-width: 768px) {\n  .list-wrap {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 20px;\n    padding: 20px;\n  }\n\n  .employee-card {\n    margin: 0;\n  }\n}\n\n@media (min-width: 1200px) {\n  /* mantener 2 columnas pero aumentar gap */\n  .list-wrap {\n    grid-template-columns: repeat(2, 1fr);\n    gap: 26px;\n    padding: 24px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVtcGxlYWRvcy5wYWdlLnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi8uLi9Nb2JpbGUlMjBEb2N1bWVudHMvY29tfmFwcGxlfkNsb3VkRG9jcy9WZW1vbnRlY2gvSXZhbi9hcHAvcHJvc2VjYXRmaS9hcHAvcHJvc2VjYXRmaS9zcmMvYXBwL2VtcGxlYWRvcy9lbXBsZWFkb3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtBQ0NGOztBRENBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQ0lGOztBREZBO0VBQ0UsU0FBQTtFQUNBLGdCQUFBO0FDS0Y7O0FESEE7RUFDRSxTQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0FDTUY7O0FESkE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7QUNPRjs7QURMQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUNRRjs7QURMQSxpQ0FBQTs7QUFDQTtFQUNFLDBCQUFBO0VBQ0EsYUFBQTtFQUNBLDBCQUFBO0VBQ0EsU0FBQTtBQ1FGOztBRE5BO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLDhDQUFBO0FDU0Y7O0FEUEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQ1VGOztBRFJBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUNXRjs7QURUQTtFQUFjLGlCQUFBO0FDYWQ7O0FEWkE7RUFDRSxjQUFBO0FDZUY7O0FEYkE7RUFDRSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNnQkY7O0FEZEE7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNpQkY7O0FEZkE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0FDa0JGOztBRGhCQTtFQUNFLHFCQUFBO0VBQ0EsK0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FDbUJGOztBRGhCQSx5QkFBQTs7QUFDQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0FDbUJGOztBRGpCQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7QUNvQkY7O0FEakJBLDZDQUFBOztBQUNBO0VBQ0U7SUFDRSxxQ0FBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0VDb0JGOztFRGxCQTtJQUNFLFNBQUE7RUNxQkY7QUFDRjs7QURsQkE7RUFDRSwwQ0FBQTtFQUNBO0lBQ0UscUNBQUE7SUFDQSxTQUFBO0lBQ0EsYUFBQTtFQ29CRjtBQUNGIiwiZmlsZSI6ImVtcGxlYWRvcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZW1wbGVhZG9zLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDE2cHg7XG59XG4uZW1wbG95ZWUtY2FyZCB7XG4gIHBhZGRpbmc6IDEycHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCA0cHggMTBweCByZ2JhKDAsMCwwLDAuMDMpO1xufVxuLmNhcmQtcm93IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5hdmF0YXItd3JhcCBpbWcge1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBib3JkZXI6IDJweCBzb2xpZCAjZWVlO1xufVxuLmVtcC1uYW1lIHtcbiAgbWFyZ2luOiAwO1xuICBmb250LXdlaWdodDogNzAwO1xufVxuLmVtcC1yb2xlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG4uYWN0aW9uLWNvbCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuLm5vdC1zdXBlcnZpc29yIHtcbiAgcGFkZGluZzogMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzY2Njtcbn1cblxuLyogTmV3IHN0eWxlcyBmb3IgYmlnIGxpc3QgbG9vayAqL1xuLmxpc3Qtd3JhcCB7XG4gIHBhZGRpbmc6IDE2cHggOHB4IDQwcHggOHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgZ2FwOiAxOHB4O1xufVxuLmVtcGxveWVlLWNhcmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMTgsIDE4LCAxOCwgMC4wNik7XG59XG4uY2FyZC1pbm5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmc6IDE4cHggMTRweDtcbn1cbi5hdmF0YXIgaW1nLCAuYXZhdGFyIHtcbiAgd2lkdGg6IDc4cHg7XG4gIGhlaWdodDogNzhweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGZsZXg6IDAgMCA3OHB4O1xuICBtYXJnaW4tcmlnaHQ6IDE4cHg7XG59XG4uYXZhdGFyIGltZyB7IG9iamVjdC1maXQ6IGNvdmVyOyB9XG4uaW5mbyB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLm5hbWUge1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA4MDA7XG4gIGNvbG9yOiAjNDQ0O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLnJvbGUge1xuICBmb250LXNpemU6IDEzcHg7XG4gIGNvbG9yOiAjOTk5O1xuICBtYXJnaW4tdG9wOiA0cHg7XG59XG4uYWN0aW9uIHtcbiAgZmxleDogMCAwIDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuLnJlZ2lzdGVyLWJ0biB7XG4gIC0tYmFja2dyb3VuZDogIzMxYWUwMTtcbiAgLS1iYWNrZ3JvdW5kLWFjdGl2YXRlZDogIzI4OTMwMTtcbiAgLS1jb2xvcjogI2ZmZjtcbiAgLS1ib3JkZXItcmFkaXVzOiAxMHB4IDAgMCAxMHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIHBhZGRpbmc6IDAgMThweDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLyogSGVhZGVyIGxpa2UgY2hlY2staW4gKi9cbi5sb2dvLWhlYWQge1xuICBoZWlnaHQ6IDgwcHg7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG5pb24taGVhZGVyIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMjQyNDI0O1xuICBiYWNrZ3JvdW5kOiAjMjQyNDI0O1xufVxuXG4vKiBSZXNwb25zaXZlOiAyIGNvbHVtbmFzIGVuIHRhYmxldC9kZXNrdG9wICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmxpc3Qtd3JhcCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDIwcHg7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxuICAuZW1wbG95ZWUtY2FyZCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMjAwcHgpIHtcbiAgLyogbWFudGVuZXIgMiBjb2x1bW5hcyBwZXJvIGF1bWVudGFyIGdhcCAqL1xuICAubGlzdC13cmFwIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xuICAgIGdhcDogMjZweDtcbiAgICBwYWRkaW5nOiAyNHB4O1xuICB9XG59XG5cbiIsIi5lbXBsZWFkb3MtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLmVtcGxveWVlLWNhcmQge1xuICBwYWRkaW5nOiAxMnB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDEwcHggcmdiYSgwLCAwLCAwLCAwLjAzKTtcbn1cblxuLmNhcmQtcm93IHtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmF2YXRhci13cmFwIGltZyB7XG4gIHdpZHRoOiA2NHB4O1xuICBoZWlnaHQ6IDY0cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XG59XG5cbi5lbXAtbmFtZSB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbn1cblxuLmVtcC1yb2xlIHtcbiAgbWFyZ2luOiAwO1xuICBjb2xvcjogIzY2NjtcbiAgZm9udC1zaXplOiAwLjlyZW07XG59XG5cbi5hY3Rpb24tY29sIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5ub3Qtc3VwZXJ2aXNvciB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY29sb3I6ICM2NjY7XG59XG5cbi8qIE5ldyBzdHlsZXMgZm9yIGJpZyBsaXN0IGxvb2sgKi9cbi5saXN0LXdyYXAge1xuICBwYWRkaW5nOiAxNnB4IDhweCA0MHB4IDhweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIGdhcDogMThweDtcbn1cblxuLmVtcGxveWVlLWNhcmQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGJveC1zaGFkb3c6IDAgMTBweCAzMHB4IHJnYmEoMTgsIDE4LCAxOCwgMC4wNik7XG59XG5cbi5jYXJkLWlubmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcGFkZGluZzogMThweCAxNHB4O1xufVxuXG4uYXZhdGFyIGltZywgLmF2YXRhciB7XG4gIHdpZHRoOiA3OHB4O1xuICBoZWlnaHQ6IDc4cHg7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmbGV4OiAwIDAgNzhweDtcbiAgbWFyZ2luLXJpZ2h0OiAxOHB4O1xufVxuXG4uYXZhdGFyIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG4uaW5mbyB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgY29sb3I6ICM0NDQ7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5yb2xlIHtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBjb2xvcjogIzk5OTtcbiAgbWFyZ2luLXRvcDogNHB4O1xufVxuXG4uYWN0aW9uIHtcbiAgZmxleDogMCAwIDEyMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xufVxuXG4ucmVnaXN0ZXItYnRuIHtcbiAgLS1iYWNrZ3JvdW5kOiAjMzFhZTAxO1xuICAtLWJhY2tncm91bmQtYWN0aXZhdGVkOiAjMjg5MzAxO1xuICAtLWNvbG9yOiAjZmZmO1xuICAtLWJvcmRlci1yYWRpdXM6IDEwcHggMCAwIDEwcHg7XG4gIGhlaWdodDogNDhweDtcbiAgcGFkZGluZzogMCAxOHB4O1xuICBmb250LXdlaWdodDogNzAwO1xufVxuXG4vKiBIZWFkZXIgbGlrZSBjaGVjay1pbiAqL1xuLmxvZ28taGVhZCB7XG4gIGhlaWdodDogODBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuaW9uLWhlYWRlciB7XG4gIC0tYmFja2dyb3VuZDogIzI0MjQyNDtcbiAgYmFja2dyb3VuZDogIzI0MjQyNDtcbn1cblxuLyogUmVzcG9uc2l2ZTogMiBjb2x1bW5hcyBlbiB0YWJsZXQvZGVza3RvcCAqL1xuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gIC5saXN0LXdyYXAge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gICAgZ2FwOiAyMHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gIH1cblxuICAuZW1wbG95ZWUtY2FyZCB7XG4gICAgbWFyZ2luOiAwO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gIC8qIG1hbnRlbmVyIDIgY29sdW1uYXMgcGVybyBhdW1lbnRhciBnYXAgKi9cbiAgLmxpc3Qtd3JhcCB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcbiAgICBnYXA6IDI2cHg7XG4gICAgcGFkZGluZzogMjRweDtcbiAgfVxufSJdfQ== */";

/***/ }),

/***/ 4059:
/*!******************************************************************!*\
  !*** ./src/app/empleados/empleado-fichaje.modal.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Fichaje de Empleado</ion-title>\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"dismiss()\">\n        <ion-icon name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- Paso 1: Validación -->\n  <div *ngIf=\"!isAuthenticated\" class=\"auth-container\">\n    <div class=\"empleado-info\">\n      <ion-avatar>\n        <img [src]=\"empleado?.foto ? server + empleado.foto : '../../assets/img/no-user.png'\" alt=\"Foto empleado\">\n      </ion-avatar>\n      <h2>{{empleado?.nombre}} {{empleado?.apellido}}</h2>\n      <p>{{empleado?.email}}</p>\n    </div>\n\n    <ion-item>\n      <ion-label position=\"stacked\">Contraseña</ion-label>\n      <ion-input type=\"password\" [(ngModel)]=\"password\"></ion-input>\n    </ion-item>\n    \n    <ion-button expand=\"block\" (click)=\"validatePassword()\" class=\"auth-button\">\n      Validar\n    </ion-button>\n  </div>\n\n  <!-- Paso 2: Fichaje (similar a check-in) -->\n  <div *ngIf=\"isAuthenticated\" class=\"fichaje-container\">\n    <!-- Selector de vehículo si hay disponibles -->\n    <ion-item *ngIf=\"data_vehiculos?.Data?.length > 0\">\n      <ion-label>Vehículo</ion-label>\n      <ion-select [(ngModel)]=\"vehiculo_select\" placeholder=\"Seleccione Vehículo\" cancel-text=\"Cancelar\">\n        <ion-select-option *ngFor=\"let item of data_vehiculos?.Data\" [value]=\"item.id_vehiculo\">\n          {{item.nombre}}\n        </ion-select-option>\n      </ion-select>\n    </ion-item>\n\n    <!-- Historial de asistencias -->\n    <ion-row>\n      <ion-col size=\"6\" *ngFor=\"let item of asistencias?.Data\">\n        <ion-card class=\"card\">\n          <ion-row>\n            <ion-col size=\"4\">\n              <div class=\"img-build\">\n                <ion-img src=\"../../assets/icon/building-svgrepo-com.svg\" style=\"color: #fff; padding: 12px;\"></ion-img>\n              </div>\n            </ion-col>\n            <ion-col size=\"8\">\n              <p>{{item.tipo}}</p>\n              <p>{{item.hora}}</p>\n            </ion-col>\n          </ion-row>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n\n    <!-- Botón de fichaje -->\n    <ion-row style=\"height: 50vh; width: 100%;\">\n      <ion-col size=\"12\">\n        <div class=\"circle\">\n          <ion-button (click)=\"confirm()\" shape=\"round\" class=\"fichaje-button\">\n            <ion-row>\n              <ion-col size=\"3\">\n                <h1>\n                  <ion-icon *ngIf=\"tipo=='Entrada'\" name=\"cloud-upload\"></ion-icon>\n                  <ion-icon *ngIf=\"tipo!='Entrada'\" name=\"cloud-download\"></ion-icon>\n                </h1>\n              </ion-col>\n              <ion-col size=\"9\" style=\"text-align: center; text-transform: capitalize;\">\n                <h1>\n                  Marcar<br>{{tipo}}\n                </h1>\n              </ion-col>\n            </ion-row>\n          </ion-button>\n        </div>\n        <p class=\"time-display\">Hora Actual: <span>{{time}}</span></p>\n      </ion-col>\n    </ion-row>\n  </div>\n</ion-content>";

/***/ }),

/***/ 8967:
/*!**********************************************************!*\
  !*** ./src/app/empleados/empleados.page.html?ngResource ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-img src=\"../../assets/img/logo-white.png\" class=\"logo-head\"></ion-img>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\" fill=\"clear\">\n        <ion-icon name=\"chevron-back-outline\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title>Fichaje de empleados</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"empleados-container\" *ngIf=\"isSupervisor; else notSupervisor\">\n    <div class=\"list-wrap\">\n      <ion-card class=\"employee-card\" *ngFor=\"let emp of empleados\">\n        <div class=\"card-inner\">\n          <div class=\"avatar\">\n            <img [src]=\"emp?.foto ? server + emp.foto : '../../assets/img/no-user.png'\" alt=\"avatar\">\n          </div>\n          <div class=\"info\">\n            <div class=\"name\">{{emp.nombre}} {{emp.apellido}}</div>\n            <div class=\"role\">{{emp?.cargos?.nombre}}</div>\n          </div>\n          <div class=\"action\">\n            <ion-button class=\"register-btn\" (click)=\"registrarEmpleado(emp)\">REGISTRAR</ion-button>\n          </div>\n        </div>\n      </ion-card>\n    </div>\n  </div>\n  <ng-template #notSupervisor>\n    <div class=\"not-supervisor\">\n      <p>No tienes permiso para ver esta sección.</p>\n    </div>\n  </ng-template>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_empleados_empleados_module_ts.js.map