"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_recovery_recovery_module_ts"],{

/***/ 6356:
/*!*****************************************************!*\
  !*** ./src/app/recovery/recovery-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoveryPageRoutingModule": () => (/* binding */ RecoveryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _recovery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recovery.page */ 8461);




const routes = [
    {
        path: '',
        component: _recovery_page__WEBPACK_IMPORTED_MODULE_0__.RecoveryPage
    }
];
let RecoveryPageRoutingModule = class RecoveryPageRoutingModule {
};
RecoveryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RecoveryPageRoutingModule);



/***/ }),

/***/ 262:
/*!*********************************************!*\
  !*** ./src/app/recovery/recovery.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoveryPageModule": () => (/* binding */ RecoveryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _recovery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recovery-routing.module */ 6356);
/* harmony import */ var _recovery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recovery.page */ 8461);







let RecoveryPageModule = class RecoveryPageModule {
};
RecoveryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _recovery_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecoveryPageRoutingModule
        ],
        declarations: [_recovery_page__WEBPACK_IMPORTED_MODULE_1__.RecoveryPage]
    })
], RecoveryPageModule);



/***/ }),

/***/ 8461:
/*!*******************************************!*\
  !*** ./src/app/recovery/recovery.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoveryPage": () => (/* binding */ RecoveryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _recovery_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recovery.page.html?ngResource */ 7413);
/* harmony import */ var _recovery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recovery.page.scss?ngResource */ 1965);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);




let RecoveryPage = class RecoveryPage {
    constructor() { }
    ngOnInit() {
    }
};
RecoveryPage.ctorParameters = () => [];
RecoveryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-recovery',
        template: _recovery_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_recovery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RecoveryPage);



/***/ }),

/***/ 1965:
/*!********************************************************!*\
  !*** ./src/app/recovery/recovery.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".recovery-pass {\n  width: 100%;\n  height: auto;\n  margin-top: 20px;\n  background: #23aa3e;\n  padding: 20px;\n  border-radius: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlY292ZXJ5LnBhZ2Uuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uLy4uL01vYmlsZSUyMERvY3VtZW50cy9jb21+YXBwbGV+Q2xvdWREb2NzL1ZlbW9udGVjaC9JdmFuL2FwcC9wcm9zZWNhdGZpL2FwcC9wcm9zZWNhdGZpL3NyYy9hcHAvcmVjb3ZlcnkvcmVjb3ZlcnkucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDQ0oiLCJmaWxlIjoicmVjb3ZlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlY292ZXJ5LXBhc3Mge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bzsgXG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBiYWNrZ3JvdW5kOiAjMjNhYTNlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbn0iLCIucmVjb3ZlcnktcGFzcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJhY2tncm91bmQ6ICMyM2FhM2U7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG59Il19 */";

/***/ }),

/***/ 7413:
/*!********************************************************!*\
  !*** ./src/app/recovery/recovery.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = " \n <ion-header  >\n  <ion-toolbar class=\"bg\">\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content  [fullscreen]=\"true\" class=\"bg\">\n\n  <ion-row style=\"height: 70vh; position: absolute; bottom: 0px; width: 100%; padding: 40px; \">\n    <ion-col size=\"12\">\n      <h4 style=\"padding: 0px; margin: 0px; color: #23aa3e\">OLVIDASTE TU</h4>\n      <H2 style=\"padding: 0px; margin: 0px; color: #23aa3e\"><b>CONTRASEÑA</b></H2>\n      <small style=\"color: #c2c2c2 ;\">Ingrese email donde quiere recibir acceso para restablecer tu contraseña.</small>\n      <div class=\"recovery-pass\">\n\n        \n       \n          <ion-label  >  <p style=\"color:#fff ;\"> INGRESE EMAIL</p></ion-label>\n          <ion-icon  name=\"mail-outline\" style=\"color:#fff ;     margin-top: 11px;\"></ion-icon>\n          <ion-input type=\"email\" placeholder=\"Email\" style=\"width: 90%; float:right ; border-bottom:1px solid #fff;\" ></ion-input>\n    </div>\n    <ion-item style=\"--background:none\">\n      <ion-button     shape=\"round\" color=\"light\" style=\"color: #23aa3e  !important; --color: #23aa3e !important; margin-left: auto;\n      margin-right: auto;  height: 35px;\n    width: 100px;\" class=\" ripple-parent ion-margin\"  >\n        REINICIAR\n        <ion-ripple-effect></ion-ripple-effect>\n        </ion-button>\n    </ion-item>\n    \n    </ion-col>\n   \n  \n  </ion-row>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_recovery_recovery_module_ts.js.map