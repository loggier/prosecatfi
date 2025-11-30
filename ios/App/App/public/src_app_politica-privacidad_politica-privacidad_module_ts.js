"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_politica-privacidad_politica-privacidad_module_ts"],{

/***/ 8045:
/*!***************************************************************************!*\
  !*** ./src/app/politica-privacidad/politica-privacidad-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoliticaPrivacidadPageRoutingModule": () => (/* binding */ PoliticaPrivacidadPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 124);
/* harmony import */ var _politica_privacidad_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./politica-privacidad.page */ 1559);




const routes = [
    {
        path: '',
        component: _politica_privacidad_page__WEBPACK_IMPORTED_MODULE_0__.PoliticaPrivacidadPage
    }
];
let PoliticaPrivacidadPageRoutingModule = class PoliticaPrivacidadPageRoutingModule {
};
PoliticaPrivacidadPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PoliticaPrivacidadPageRoutingModule);



/***/ }),

/***/ 8736:
/*!*******************************************************************!*\
  !*** ./src/app/politica-privacidad/politica-privacidad.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoliticaPrivacidadPageModule": () => (/* binding */ PoliticaPrivacidadPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 4666);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 2508);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _politica_privacidad_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./politica-privacidad-routing.module */ 8045);
/* harmony import */ var _politica_privacidad_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./politica-privacidad.page */ 1559);







let PoliticaPrivacidadPageModule = class PoliticaPrivacidadPageModule {
};
PoliticaPrivacidadPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _politica_privacidad_routing_module__WEBPACK_IMPORTED_MODULE_0__.PoliticaPrivacidadPageRoutingModule
        ],
        declarations: [_politica_privacidad_page__WEBPACK_IMPORTED_MODULE_1__.PoliticaPrivacidadPage]
    })
], PoliticaPrivacidadPageModule);



/***/ }),

/***/ 1559:
/*!*****************************************************************!*\
  !*** ./src/app/politica-privacidad/politica-privacidad.page.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PoliticaPrivacidadPage": () => (/* binding */ PoliticaPrivacidadPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _politica_privacidad_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./politica-privacidad.page.html?ngResource */ 9719);
/* harmony import */ var _politica_privacidad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./politica-privacidad.page.scss?ngResource */ 7045);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2560);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 3819);





let PoliticaPrivacidadPage = class PoliticaPrivacidadPage {
    constructor(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ngOnInit() {
    }
    goBack() {
        this.navCtrl.back();
    }
};
PoliticaPrivacidadPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
PoliticaPrivacidadPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-politica-privacidad',
        template: _politica_privacidad_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_politica_privacidad_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PoliticaPrivacidadPage);



/***/ }),

/***/ 7045:
/*!******************************************************************************!*\
  !*** ./src/app/politica-privacidad/politica-privacidad.page.scss?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = ".title {\n  padding-left: 30px;\n  padding-right: 30px;\n  padding-top: 10px;\n  margin-bottom: 0px;\n  padding-bottom: 0px;\n}\n\n.huella :before {\n  content: \" \";\n  display: block;\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  opacity: 0.1;\n  background-image: url('huella.png');\n  background-repeat: no-repeat;\n  background-position: 100% 0;\n  background-size: contain;\n}\n\n.bg-gris {\n  --background: #efefef;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvbGl0aWNhLXByaXZhY2lkYWQucGFnZS5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vTW9iaWxlJTIwRG9jdW1lbnRzL2NvbX5hcHBsZX5DbG91ZERvY3MvVmVtb250ZWNoL0l2YW4vYXBwL3Byb3NlY2F0ZmkvYXBwL3Byb3NlY2F0Zmkvc3JjL2FwcC9wb2xpdGljYS1wcml2YWNpZGFkL3BvbGl0aWNhLXByaXZhY2lkYWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NKOztBREdBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0FDQUo7O0FERUE7RUFDSSxxQkFBQTtBQ0NKIiwiZmlsZSI6InBvbGl0aWNhLXByaXZhY2lkYWQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRpdGxlIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgcGFkZGluZy1yaWdodDogMzBweDtcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgcGFkZGluZy1ib3R0b206IDBweDtcbn1cbiBcblxuLmh1ZWxsYSA6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIiBcIjtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDE7XG4gICAgb3BhY2l0eTogMC4xO1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2h1ZWxsYS5wbmcpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMTAwJSAwO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cbi5iZy1ncmlzIHtcbiAgICAtLWJhY2tncm91bmQ6ICNlZmVmZWY7XG59IiwiLnRpdGxlIHtcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uaHVlbGxhIDpiZWZvcmUge1xuICBjb250ZW50OiBcIiBcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBvcGFjaXR5OiAwLjE7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi9hc3NldHMvaW1nL2h1ZWxsYS5wbmcpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAxMDAlIDA7XG4gIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbn1cblxuLmJnLWdyaXMge1xuICAtLWJhY2tncm91bmQ6ICNlZmVmZWY7XG59Il19 */";

/***/ }),

/***/ 9719:
/*!******************************************************************************!*\
  !*** ./src/app/politica-privacidad/politica-privacidad.page.html?ngResource ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = "<ion-content class=\"bg-gris\" >\n  <ion-row style=\"height: 20vh;\">\n    <ion-col size=\"12\" class=\"huella\"> \n      <ion-text color=\"primary\" class=\"ion-padding-horizontal\"  >\n       <p class=\"title\"><b>\n        POLÍTICAS DE PRIVACIDAD </b><br>\n       \n        Lee nuestra politica de privacidad.\n       </p>\n      </ion-text>\n     \n    </ion-col>\n  \n    <ion-button    color=\"primary\"  size=\"small\" shape=\"round\" style=\"  float: right;\n    position: absolute;\n    right: 0px;\n    top: 14vh;\n    z-index: 9999;\" (click)=\"goBack()\" >\n      Volver\n    </ion-button>\n  \n\n  <ion-back-button color=\"danger\"></ion-back-button>\n  </ion-row>\n  <ion-row>\n    <ion-col size=\"12\"  style=\"height: 76vh;     background: #fff; margin-left: 10px; border-top-left-radius: 10px;\">\n      <iframe width=\"100%\" height=\"100%\" src=\"https://prosecatfi.com/politicas_privacidad\" frameborder=\"0\" allowfullscreen></iframe>\n\n    </ion-col>\n  </ion-row>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_politica-privacidad_politica-privacidad_module_ts.js.map