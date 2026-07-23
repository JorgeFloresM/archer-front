import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router'; 
import { ViajesService, Viaje } from '../../core/services/viajes';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  viajesRecientes: Viaje[] = [];

  totalActivos = 0;
  totalPorAsignar = 0;
  totalEntregados = 0;

  constructor(private viajesService: ViajesService) {}

  ngOnInit(): void {
    this.viajesRecientes = this.viajesService.getTodosLosViajes();

    this.totalActivos = this.viajesRecientes.filter(v => v.estatus === 'En tránsito').length;
    this.totalPorAsignar = this.viajesRecientes.filter(v => v.estatus === 'Por asignar').length;
    this.totalEntregados = this.viajesRecientes.filter(v => v.estatus === 'Entregado').length;
  }
}
