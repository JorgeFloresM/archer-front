import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reporte-servicio',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './reporte-servicio.html',
  styleUrl: './reporte-servicio.css'
})
export class ReporteServicio {
  mensajeActivo: string | null = null;
  
  // Mock de los datos del Reporte final
  reporte = {
    folio: 'SRV-1045',
    fechaGeneracion: '24/07/2026',
    estatus: 'Entregado',
    cliente: {
      nombre: 'Cliente Industrial GDL',
      rfc: 'CIG990101XYZ',
      contacto: 'Carlos Ramírez',
      telefono: '+52 (33) 1234 5678'
    },
    ruta: {
      origen: 'Guadalajara, JAL (CEDIS Norte)',
      destino: 'Monterrey, NL (Planta Principal)',
      distancia: '780 km',
      tiempoEstimado: '14 hrs 30 mins'
    },
    operacion: {
      unidad: 'UN-081 (Caja Seca 53ft)',
      placas: '45-TY-8A',
      operador: 'José Díaz',
      pesoCarga: '22.5 Toneladas'
    },
    eventos: [
      { hora: '08:00 AM', fecha: '23/07/2026', evento: 'Unidad posicionada en el andén de origen.' },
      { hora: '09:15 AM', fecha: '23/07/2026', evento: 'Carga finalizada. Puertas cerradas y Sello XJ-902 colocado.' },
      { hora: '10:00 AM', fecha: '23/07/2026', evento: 'Salida de ruta hacia destino (Monterrey, NL).' },
      { hora: '07:00 AM', fecha: '24/07/2026', evento: 'Llegada a instalaciones de destino.' },
      { hora: '08:30 AM', fecha: '24/07/2026', evento: 'Descarga completa. Evidencias y Carta Porte firmadas.' }
    ],
    costos: [
      { concepto: 'Flete Base GDL-MTY', monto: 18500 },
      { concepto: 'Maniobras de carga/descarga', monto: 2200 },
      { concepto: 'Seguro de Carga', monto: 850 }
    ],
    total: 21550
  };

  ejecutarAccion(accion: string) {
    this.mensajeActivo = accion;
    setTimeout(() => {
      this.mensajeActivo = null;
    }, 3000);
  }
}