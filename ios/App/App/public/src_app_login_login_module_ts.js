"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_login_login_module_ts"],{

/***/ 5393:
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 6825);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 107:
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 5393);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 6825);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 6825:
/*!*************************************!*\
  !*** ./src/app/login/login.page.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var _Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.html?ngResource */ 1729);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 7047);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8987);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 2340);









let LoginPage = class LoginPage {
  constructor(api, alertController, navCtrl) {
    this.api = api;
    this.alertController = alertController;
    this.navCtrl = navCtrl;
    this.email = '';
    this.password = '';
  }

  ngOnInit() {}

  login() {
    var _this = this;

    return (0,_Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.email == '') {
        _this.presentAlert('¡Error!', 'Email es requerido.');

        return false;
      }

      if (_this.password == '') {
        _this.presentAlert('¡Error!', 'Contraseña es requerida.');

        return false;
      }

      let post = {
        email: _this.email,
        password: _this.password,
        remember_me: true
      };
      const httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpHeaders({
        'Content-Type': 'application/json'
      });
      let self = _this;

      _this.api.post(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.url}/auth/login`, post, {
        headers: httpHeaders
      }).subscribe(data => {
        localStorage.setItem('profile', JSON.stringify(data));
        self.navCtrl.navigateForward('check-in');
      }, error => {
        if (error.status == 401) {
          console.log(error.error.message);

          _this.presentAlert('¡Error!', 'Acceso no autorizado');
        }
      });
    })();
  }

  presentAlert(type, msj) {
    var _this2 = this;

    return (0,_Users_raulmartinez_Library_Mobile_Documents_com_apple_CloudDocs_Vemontech_Ivan_app_prosecatfi_app_prosecatfi_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const alert = yield _this2.alertController.create({
        header: type,
        mode: 'ios',
        message: msj,
        buttons: ['OK']
      });
      yield alert.present();
    })();
  }

};

LoginPage.ctorParameters = () => [{
  type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController
}, {
  type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController
}];

LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
  selector: 'app-login',
  template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_1__,
  styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_2__]
})], LoginPage);


/***/ }),

/***/ 7047:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.scss?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n.logo-home {\n  width: 60vw;\n  margin: auto;\n}\n\n.input {\n  --background:#000;\n  background: #000;\n  color: #c2c2c2;\n  --color: #c2c2c2;\n  --highlight-background: #23aa3e;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL01vYmlsZSUyMERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1ZlbW9udGVjaC9JdmFuL2FwcC9wcm9zZWNhdGZpL2FwcC9wcm9zZWNhdGZpL3NyYy9hcHAvbG9naW4vbG9naW4ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FDQUo7O0FESUU7RUFFRSxXQUFBO0VBQ0UsWUFBQTtBQ0ZOOztBREtFO0VBQ0UsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLCtCQUFBO0FDRkoiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI2NvbnRhaW5lciB7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG4gIH1cbiAgXG4gIFxuICAubG9nby1ob21lIHtcbiAgICBcbiAgICB3aWR0aDogNjB2dztcbiAgICAgIG1hcmdpbjogYXV0bztcbiAgICBcbiAgfVxuICAuaW5wdXQge1xuICAgIC0tYmFja2dyb3VuZDojMDAwO1xuICAgIGJhY2tncm91bmQ6ICMwMDA7XG4gICAgY29sb3I6ICNjMmMyYzI7XG4gICAgLS1jb2xvcjogI2MyYzJjMjtcbiAgICAtLWhpZ2hsaWdodC1iYWNrZ3JvdW5kOiAjMjNhYTNlO1xuICB9IiwiI2NvbnRhaW5lciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbn1cblxuLmxvZ28taG9tZSB7XG4gIHdpZHRoOiA2MHZ3O1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5pbnB1dCB7XG4gIC0tYmFja2dyb3VuZDojMDAwO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBjb2xvcjogI2MyYzJjMjtcbiAgLS1jb2xvcjogI2MyYzJjMjtcbiAgLS1oaWdobGlnaHQtYmFja2dyb3VuZDogIzIzYWEzZTtcbn0iXX0= */";

/***/ }),

/***/ 1729:
/*!**************************************************!*\
  !*** ./src/app/login/login.page.html?ngResource ***!
  \**************************************************/
/***/ ((module) => {

module.exports = "<ion-content [fullscreen]=\"true\" class=\"bg \" >\n \n\n  <div id=\"container\">\n    <ion-img src=\"../../assets/img/logo-white.png\" class=\"logo-home\"></ion-img>\n    \n      <ion-row >\n        <ion-col size=\"12\" class=\" ion-padding-horizontal\">\n          <ion-item  class=\"input   ion-margin-top\" style=\"margin-bottom: 5px;\" lines=\"full\"> \n    \n          <ion-label position=\"floating\"> <ion-icon slot=\"start\" name=\"mail-outline\"></ion-icon> Email</ion-label>\n          <ion-input  type=\"email\" autocomplete=\"off\"  [(ngModel)]=\"email\"></ion-input>\n        </ion-item>\n        <ion-item  class=\"input  \"  style=\"margin-bottom: 5px;\"  lines=\"full\"> \n    \n          <ion-label position=\"floating\"><ion-icon slot=\"start\" name=\"lock-closed-outline\"></ion-icon> Contraseña</ion-label>\n          <ion-input type=\"password\"  autocomplete=\"off\" [(ngModel)]=\"password\"></ion-input>\n        </ion-item>\n        </ion-col>\n      </ion-row>\n      <p class=\"font-white\" [routerLink]=\"['/recovery']\" >¿Olvidaste tu Contraseña?</p>\n    \n\n    <ion-button   (click)=\"login()\"   shape=\"round\" color=\"light\" style=\"color: #23aa3e  !important; --color: #23aa3e !important\" class=\" ripple-parent ion-margin\"  >\n    Iniciar sesión\n    <ion-ripple-effect></ion-ripple-effect>\n    </ion-button>\n   \n    <p class=\"font-white\" [routerLink]=\"['/politica-privacidad']\" >Políticas de  Privacidad</p>\n  </div>\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_login_login_module_ts.js.map