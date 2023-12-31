import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaEmpleadosComponent } from './lista-empleados/lista-empleados.component';
import { RegistrarEmpleadoComponent } from './registrar-empleado/registrar-empleado.component';
import { ActualizarEmpleadoComponent } from './actualizar-empleado/actualizar-empleado.component';
import { EmpleadoDetallesComponent } from './empleado-detalles/empleado-detalles.component';
import { ListaHerramientasComponent } from './lista-herramientas/lista-herramientas.component';
import { ListaRegistrosComponent } from './lista-registros/lista-registros.component';
import { AgregarRegistroComponent } from './agregar-registro/agregar-registro.component';
import { ActualizarHerramientaComponent } from './actualizar-herramienta/actualizar-herramienta.component';

const routes: Routes = [
  {path:'empleados', component: ListaEmpleadosComponent},
  {path:'',redirectTo: 'empleados',pathMatch:'full'},
  {path:'registrar-empleado', component: RegistrarEmpleadoComponent},
  {path:'actualizar-empleado/:id', component: ActualizarEmpleadoComponent},
  {path:'actualizar-herramienta/:id', component: ActualizarHerramientaComponent},
  {path:'empleado-detalles/:id', component: EmpleadoDetallesComponent},
  {path:'lista-herramientas', component: ListaHerramientasComponent},
  {path:'lista-registros', component: ListaRegistrosComponent},
  {path:'agregar-registro', component: AgregarRegistroComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
