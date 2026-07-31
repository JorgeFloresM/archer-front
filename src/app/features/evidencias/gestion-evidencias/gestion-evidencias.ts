import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-gestion-evidencias',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './gestion-evidencias.html',
  styleUrl: './gestion-evidencias.css'
})
export class GestionEvidencias {
  searchTerm: string = '';
  mensajeActivo: string | null = null;
  
  // Mock de Servicios para la columna izquierda
  servicios = [
    { folio: 'SRV-1045', cliente: 'Cliente Industrial GDL', fecha: '23/07/2026', totalEvidencias: 4, estatus: 'Entregado' },
    { folio: 'SRV-1046', cliente: 'Comercial Bajío', fecha: '23/07/2026', totalEvidencias: 1, estatus: 'En Tránsito' },
    { folio: 'SRV-1041', cliente: 'Distribuidora MX', fecha: '22/07/2026', totalEvidencias: 6, estatus: 'Entregado' },
    { folio: 'SRV-1039', cliente: 'Apex Manufacturing', fecha: '20/07/2026', totalEvidencias: 0, estatus: 'Por Asignar' },
  ];

  servicioSeleccionado: any = null;

  // Mock de Evidencias (fotos y documentos) para el servicio seleccionado
  // CORRECCIÓN: Cambiamos 'tamaño' por 'tamano'
  evidencias = [
    { id: 'DOC-001', tipo: 'pdf', nombre: 'Acuse_Recibo_Firmado.pdf', tamano: '1.2 MB', fecha: '23/07/2026 14:30', subidoPor: 'Carlos Ramírez' },
    { id: 'IMG-002', tipo: 'image', nombre: 'Foto_Carga_Origen.jpg', tamano: '3.4 MB', fecha: '23/07/2026 09:15', subidoPor: 'Carlos Ramírez', url: 'https://images.unsplash.com/photo-1586528116311-ad8c7bd74a20?q=80&w=300&auto=format&fit=crop' },
    { id: 'IMG-003', tipo: 'image', nombre: 'Sello_Seguridad.jpg', tamano: '2.1 MB', fecha: '23/07/2026 09:20', subidoPor: 'Carlos Ramírez', url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=300&auto=format&fit=crop' },
    { id: 'DOC-004', tipo: 'pdf', nombre: 'Carta_Porte_Traslado.pdf', tamano: '0.8 MB', fecha: '23/07/2026 08:00', subidoPor: 'Admin User' }
  ];

  constructor() {
    // Seleccionamos el primer servicio por defecto al cargar
    if (this.servicios.length > 0) {
      this.seleccionarServicio(this.servicios[0]);
    }
  }

  get filteredServicios() {
    if (!this.searchTerm) return this.servicios;
    const term = this.searchTerm.toLowerCase();
    return this.servicios.filter(s => 
      s.folio.toLowerCase().includes(term) || 
      s.cliente.toLowerCase().includes(term)
    );
  }

  seleccionarServicio(servicio: any) {
    this.servicioSeleccionado = servicio;
  }

  ejecutarAccion(accion: string) {
    this.mensajeActivo = accion;
    setTimeout(() => {
      this.mensajeActivo = null;
    }, 3000);
  }
}