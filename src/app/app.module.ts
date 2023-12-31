import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { HttpClientModule } from '@angular/common/http';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { FormsModule } from '@angular/forms';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { RegistroHerramientasComponent } from './registro-herramientas/registro-herramientas.component';
import { ListaHerramientasComponent } from './lista-herramientas/lista-herramientas.component';
import { EmpleadoService } from './empleado.service';
import { ListaRegistrosComponent } from './lista-registros/lista-registros.component';
import { AgregarRegistroComponent } from './agregar-registro/agregar-registro.component';
import { ActualizarHerramientaComponent } from './actualizar-herramienta/actualizar-herramienta.component';



@NgModule({
  declarations: [
    AppComponent,
    ListaEmpleadosComponent,
    RegistrarEmpleadoComponent,
    ActualizarEmpleadoComponent,
    EmpleadoDetallesComponent,
    RegistroHerramientasComponent,
    ListaHerramientasComponent,
    ListaRegistrosComponent,
    AgregarRegistroComponent,
    ActualizarHerramientaComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
