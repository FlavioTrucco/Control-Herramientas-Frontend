import { Component } from '@angular/core';
import { Registro } from '../registro';
import swal from 'sweetalert2';
import { RegistroService } from '../registro.service';
import { Empleado } from '../empleado';
import { Router } from '@angular/router';
import { Herramienta } from '../herramienta';
import { EmpleadoService } from '../empleado.service';
import { HerramientaService } from '../herramienta.service';



@Component({
  selector: 'app-lista-registros',
  templateUrl: './lista-registros.component.html',
  styleUrls: ['./lista-registros.component.css']
})
export class ListaRegistrosComponent {

  registros:Registro [];
  herramientas:Herramienta [];
  empleados:Empleado [];

  constructor(private registroService:RegistroService, private empleadoservice:EmpleadoService, private herramientaservice:HerramientaService, private router:Router){}

  ngOnInit(): void {
    this.obtenerEmpleados ();
    this.obtenerHerramienta();
    this.obtenerRegistro();
}
  // actualizarEmpleado(id:number){
  //   this.router.navigate(['actualizar-empleado',id]);
  // }

  eliminarRegistro(id:number){
   swal({
    title: '¿Estas seguro?',
    text: "Confirmar la eliminación",
    type:'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor:'#d33',
    confirmButtonText: 'Si',
    cancelButtonText:'No',
    confirmButtonClass:'btn btn-success',
    cancelButtonClass: 'btn btn-danger',

   }).then((result) => {
    if (result.value) {
      this.registroService.eliminarRegistro(id).subscribe(dato => {
        console.log(dato);
        this.obtenerRegistro();
        swal(
          'Registro eliminado',
          'Eliminación exitosa',
          'success'
        );
      });
    }
   });
  }

 private obtenerEmpleados (){
  this.empleadoservice.obetenerListaDeEmpleados().subscribe(dato => {
    this.empleados = dato;
    });
 }

 private obtenerHerramienta (){
  this.herramientaservice.obetenerListaDeHerramienta().subscribe(dato => {
    this.herramientas = dato;
    });
 }

 private obtenerRegistro (){
  this.registroService.obetenerListaDeRegistros().subscribe(dato => {
    this.registros = dato;
    });
 }

 verDetallesDelEmpleado(id:number){
  this.router.navigate(['empleado-detalles',id]);
 }



}
