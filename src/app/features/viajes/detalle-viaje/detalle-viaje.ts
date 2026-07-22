import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ViajesService, Viaje } from '../../../core/services/viajes';

@Component({
  selector: 'app-detalle-viaje',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-viaje.html',
  styleUrl: './detalle-viaje.css'
})
export class DetalleViaje implements OnInit {
  folioViaje: string = '';
  viajeDatos: Viaje | undefined;

  constructor(
    private route: ActivatedRoute,
    private viajesService: ViajesService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.folioViaje = params.get('id') || '';
      // Buscamos los datos reales del viaje en nuestro servicio
      this.viajeDatos = this.viajesService.getViajePorFolio(this.folioViaje);
    });
  }
}