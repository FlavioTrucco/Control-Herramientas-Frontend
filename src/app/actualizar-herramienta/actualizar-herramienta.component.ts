import { Component } from '@angular/core';
import { Herramienta } from '../herramienta';
import { HerramientaService } from '../herramienta.service';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, tap } from 'rxjs';

@Component({
  selector: 'app-actualizar-herramienta',
  templateUrl: './actualizar-herramienta.component.html',
  styleUrls: ['./actualizar-herramienta.component.css']
})
export class ActualizarHerramientaComponent {
  herramienta: Herramienta = new Herramienta();
  herramientaId: number;

  constructor(
    private herramientaService: HerramientaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.herramientaId = params['id'];
      this.obtenerHerramienta();
    });
  }

  obtenerHerramienta() {
    this.herramientaService.obtenerHerramientaPorId(this.herramientaId).subscribe(
      herramienta => {
        this.herramienta = this.herramienta;
    })
      
  }

  actualizarHerramienta() {
    this.herramientaService.actualizarHerramientaPorId(this.herramientaId, this.herramienta).pipe(
      tap(dato => {
        console.log("Datos actualizados del empleado:", this.herramienta);
        this.irALaListaDeHerramienta();
      }),
      catchError(error => {
        console.error('Ha ocurrido un error:', error);
        throw error;
      })
    ).subscribe();
  }

  irALaListaDeHerramienta() {
    this.router.navigate(['/empleados']);
  }

  onSubmit() {
    this.actualizarHerramienta();
  }
}
