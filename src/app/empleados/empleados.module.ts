import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EmpleadosPageRoutingModule } from './empleados-routing.module';

import { EmpleadosPage } from './empleados.page';
import { EmpleadoFichajeModal } from './empleado-fichaje.modal';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EmpleadosPageRoutingModule
  ],
  declarations: [EmpleadosPage, EmpleadoFichajeModal]
})
export class EmpleadosPageModule {}
