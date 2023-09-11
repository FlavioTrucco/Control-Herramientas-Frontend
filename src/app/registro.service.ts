import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registro } from './registro';

@Injectable({
  providedIn: 'root'
})
export class RegistroService {


  private baseURL ="http://localhost:8080/api/v1/altas-bajas";

  constructor( private httpClient: HttpClient) { }

  obetenerListaDeRegistros():Observable<Registro[]>{
    return this.httpClient.get<Registro[]>(`${this.baseURL}`);
   }
   // este metodo sirve pará registrar un empleado
   registrarRegistros(registro:Registro):Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`,registro);
   }
     
    // este metodo sirve para actualizar un empleado 
    actulizarRegistro(id:number, registro:Registro): Observable<Object>{
      return this.httpClient.put(`${this.baseURL}/${id}`, registro);
    }
    // este metodo sirve para obtener o buscar un empleado 
    obtenerRegistroPorId(id:number): Observable<Registro>{
      return this.httpClient.get<Registro>(`${this.baseURL}/${id}`);
    }
  
    actualizarRegistroPorId(id: number, registro: Registro): Observable<Registro> {
      return this.httpClient.put<Registro>(`${this.baseURL}/${id}`, registro);
    }
    
     eliminarRegistro(id:number): Observable<Object>{
      return this.httpClient.delete(`${this.baseURL}/${id}`);
     }
}
