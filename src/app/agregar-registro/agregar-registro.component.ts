import { Component, OnInit } from '@angular/core';
import { Registro } from '../registro';
import { HerramientaService } from '../herramienta.service';
import { Router } from '@angular/router';
import { catchError, tap } from 'rxjs/operators';
import { RegistroService } from '../registro.service';
import { ListaRegistrosComponent } from '../lista-registros/lista-registros.component';
import { Empleado } from '../empleado';
import { Herramienta } from '../herramienta';
import { EmpleadoService } from '../empleado.service';

@Component({
  selector: 'app-agregar-registro',
  templateUrl: './agregar-registro.component.html',
  styleUrls: ['./agregar-registro.component.css']
})
export class AgregarRegistroComponent implements OnInit{
  
  herramientas:Herramienta [];
  empleados:Empleado [];

  registro : Registro = new Registro;
  nombre: any;
  herramienta: any;
  constructor (private herramientaService: HerramientaService, private empleadoService: EmpleadoService, private registroService: RegistroService,private router:Router){ }

  ngOnInit(): void { 
    this.obtenerEmpleados ();
    this.obtenerHerramienta();

  }
  actualizarNombre(e){
    this.registro.nombre= e.target.value;
  }
  actualizarApellido(e){
    this.registro.apellido= e.target.value;
  }
  actualizarArea(e){
    this.registro.area= e.target.value;
  }
  actualizarNombreHerramienta(e){
    this.registro.nombreHerramienta= e.target.value;
  }
  actualizarTipo(e){
    this.registro.tipo= e.target.value;
  }

  guardarRegistro() {
    this.registroService.registrarRegistros(this.registro).pipe(
      tap(dato => {
        console.log("Operacion Exitosa",dato) ;
        this.irALaListaDeRegistros();
      }),
      catchError(error => {
        console.error('Ha ocurrido un error:', error);
        throw error; 
      })
    ).subscribe();
  }

  irALaListaDeRegistros(){
    this.router.navigate(['/lista-registros']);
  }

  onSubmit(){
     //console.log(this.empleado);
     this.guardarRegistro();

  }

  private obtenerEmpleados (){
    this.empleadoService.obetenerListaDeEmpleados().subscribe(dato => {
      this.empleados = dato;
      });
   }
  
   private obtenerHerramienta (){
    this.herramientaService.obetenerListaDeHerramienta().subscribe(dato => {
      this.herramientas = dato;
      });
   }

}
