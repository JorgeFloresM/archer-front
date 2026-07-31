import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-seguimiento-operativo',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './seguimiento-operativo.html',
  styleUrl: './seguimiento-operativo.css'
})
export class SeguimientoOperativo {
  searchTerm: string = '';
  
  // Mock de Servicios Activos
  viajesActivos = [
    { 
      folio: 'SRV-1045', 
      cliente: 'Cliente Industrial GDL', 
      ruta: 'Guadalajara → Monterrey',
      unidad: 'UN-081',
      progreso: 60,
      etapas: [
        { titulo: 'Servicio Creado', descripcion: 'Folio SRV-1045 generado en sistema.', fecha: 'Hoy, 08:00 AM', completada: true, activa: false },
        { titulo: 'Unidad Asignada', descripcion: 'Unidad UN-081 asignada exitosamente.', fecha: 'Hoy, 08:30 AM', completada: true, activa: false },
        { titulo: 'En Tránsito a Origen', descripcion: 'Operador en camino al punto de recolección.', fecha: 'Hoy, 09:15 AM', completada: true, activa: false },
        { titulo: 'Llegada a Origen', descripcion: 'Unidad en patio del cliente. Inicia carga.', fecha: 'Hoy, 10:00 AM', completada: true, activa: false },
        { titulo: 'En Tránsito a Destino', descripcion: 'Ruta activa hacia Monterrey, NL. Sin demoras.', fecha: 'Hoy, 11:30 AM', completada: false, activa: true },
        { titulo: 'Llegada a Destino', descripcion: 'Unidad en instalaciones de entrega.', completada: false, activa: false },
        { titulo: 'Descarga y Evidencias', descripcion: 'Descarga y firma de acuse de recibo.', completada: false, activa: false }
      ]
    },
    { 
      folio: 'SRV-1046', 
      cliente: 'Comercial Bajío', 
      ruta: 'Silao → CDMX',
      unidad: 'UN-005',
      progreso: 25,
      etapas: [
        { titulo: 'Servicio Creado', descripcion: 'Folio SRV-1046 generado en sistema.', fecha: 'Hoy, 10:00 AM', completada: true, activa: false },
        { titulo: 'Unidad Asignada', descripcion: 'Unidad UN-005 asignada exitosamente.', fecha: 'Hoy, 10:45 AM', completada: true, activa: false },
        { titulo: 'En Tránsito a Origen', descripcion: 'Operador reporta tráfico moderado en ruta.', fecha: 'Hoy, 11:10 AM', completada: false, activa: true },
        { titulo: 'Llegada a Origen', descripcion: 'Unidad en patio del cliente. Inicia carga.', completada: false, activa: false },
        { titulo: 'En Tránsito a Destino', descripcion: 'Ruta activa hacia CDMX.', completada: false, activa: false },
        { titulo: 'Llegada a Destino', descripcion: 'Unidad en instalaciones de entrega.', completada: false, activa: false },
        { titulo: 'Descarga y Evidencias', descripcion: 'Descarga y firma de acuse de recibo.', completada: false, activa: false }
      ]
    },
    { 
      folio: 'SRV-1041', 
      cliente: 'Distribuidora MX', 
      ruta: 'Querétaro → Puebla',
      unidad: 'UN-112',
      progreso: 100,
      etapas: [
        { titulo: 'Servicio Creado', descripcion: 'Folio SRV-1041 generado en sistema.', fecha: 'Ayer, 04:00 PM', completada: true, activa: false },
        { titulo: 'Unidad Asignada', descripcion: 'Unidad UN-112 asignada exitosamente.', fecha: 'Ayer, 04:30 PM', completada: true, activa: false },
        { titulo: 'En Tránsito a Origen', descripcion: 'Operador en camino al punto de recolección.', fecha: 'Ayer, 05:15 PM', completada: true, activa: false },
        { titulo: 'Llegada a Origen', descripcion: 'Unidad en patio del cliente. Inicia carga.', fecha: 'Ayer, 06:00 PM', completada: true, activa: false },
        { titulo: 'En Tránsito a Destino', descripcion: 'Ruta activa hacia Puebla, PUE.', fecha: 'Ayer, 08:30 PM', completada: true, activa: false },
        { titulo: 'Llegada a Destino', descripcion: 'Unidad en instalaciones de entrega.', fecha: 'Hoy, 07:00 AM', completada: true, activa: false },
        { titulo: 'Descarga y Evidencias', descripcion: 'Acuse de recibo firmado y subido al sistema.', fecha: 'Hoy, 08:30 AM', completada: true, activa: false }
      ]
    }
  ];

  viajeSeleccionado: any = null;

  constructor() {
    // Seleccionamos el primer viaje por defecto al cargar
    if (this.viajesActivos.length > 0) {
      this.seleccionarViaje(this.viajesActivos[0]);
    }
  }

  get filteredViajes() {
    if (!this.searchTerm) return this.viajesActivos;
    const term = this.searchTerm.toLowerCase();
    return this.viajesActivos.filter(v => 
      v.folio.toLowerCase().includes(term) || 
      v.cliente.toLowerCase().includes(term) ||
      v.ruta.toLowerCase().includes(term)
    );
  }

  seleccionarViaje(viaje: any) {
    this.viajeSeleccionado = viaje;
  }
}