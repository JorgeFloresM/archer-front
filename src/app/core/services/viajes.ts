import { Injectable } from '@angular/core';

export interface EtapaViaje {
  id: number;
  titulo: string;
  descripcion: string;
  completada: boolean;
  activa: boolean;
  fecha?: string;
}

export interface Viaje {
  folio: string;
  cliente: string;
  ruta: string;
  unidad: string;
  operador: string;
  carga: string;
  estatus: string;
  etapas: EtapaViaje[];
}

@Injectable({
  providedIn: 'root' 
})
export class ViajesService {

  private mockViajes: Viaje[] = [
    {
      folio: 'SRV-1042',
      cliente: 'Cliente Industrial GDL',
      ruta: 'Guadalajara → Ciudad de México',
      unidad: 'Tráiler Caja Seca 53 ft (UN-001)',
      operador: 'Carlos Ramírez',
      carga: 'Tarimas - 18t',
      estatus: 'En tránsito',
      etapas: [
        { id: 1, titulo: 'Servicio creado', descripcion: 'Solicitud registrada.', completada: true, activa: false, fecha: '16 Jul 08:10' },
        { id: 2, titulo: 'Cliente confirmado', descripcion: 'Requerimientos validados.', completada: true, activa: false, fecha: '16 Jul 09:05' },
        { id: 3, titulo: 'Unidad asignada', descripcion: 'Vehículo y transportista listos.', completada: true, activa: false, fecha: '16 Jul 10:30' },
        { id: 4, titulo: 'Llegada a origen', descripcion: 'Unidad en punto de carga.', completada: true, activa: false, fecha: '16 Jul 14:00' },
        { id: 5, titulo: 'Carga iniciada', descripcion: 'Mercancía documentada.', completada: true, activa: false, fecha: '16 Jul 16:15' },
        { id: 6, titulo: 'Unidad en tránsito', descripcion: 'Viaje en curso hacia destino.', completada: false, activa: true, fecha: 'Actualizando...' },
        { id: 7, titulo: 'Llegada a destino', descripcion: 'Pendiente.', completada: false, activa: false },
        { id: 8, titulo: 'Entrega completada', descripcion: 'Pendiente.', completada: false, activa: false },
        { id: 9, titulo: 'Evidencias cargadas', descripcion: 'Pendiente.', completada: false, activa: false },
        { id: 10, titulo: 'Reporte final generado', descripcion: 'Pendiente.', completada: false, activa: false },
        { id: 11, titulo: 'Servicio cerrado', descripcion: 'Pendiente.', completada: false, activa: false }
      ]
    },
    {
      folio: 'SRV-1041',
      cliente: 'Comercial Bajío',
      ruta: 'Guadalajara → León',
      unidad: 'Camioneta 3.5t (UN-005)',
      operador: 'Miguel Sánchez',
      carga: 'Cajas de cartón - 2t',
      estatus: 'Entregado',
      etapas: [
        { id: 1, titulo: 'Servicio creado', descripcion: 'Solicitud registrada.', completada: true, activa: false, fecha: '15 Jul 07:00' },
        { id: 2, titulo: 'Cliente confirmado', descripcion: 'Requerimientos validados.', completada: true, activa: false, fecha: '15 Jul 07:30' },
        { id: 3, titulo: 'Unidad asignada', descripcion: 'Vehículo y transportista listos.', completada: true, activa: false, fecha: '15 Jul 08:00' },
        { id: 4, titulo: 'Llegada a origen', descripcion: 'Unidad en punto de carga.', completada: true, activa: false, fecha: '15 Jul 09:15' },
        { id: 5, titulo: 'Carga iniciada', descripcion: 'Mercancía documentada.', completada: true, activa: false, fecha: '15 Jul 10:00' },
        { id: 6, titulo: 'Unidad en tránsito', descripcion: 'Viaje en curso hacia destino.', completada: true, activa: false, fecha: '15 Jul 10:30' },
        { id: 7, titulo: 'Llegada a destino', descripcion: 'Unidad en CEDIS cliente.', completada: true, activa: false, fecha: '15 Jul 13:45' },
        { id: 8, titulo: 'Entrega completada', descripcion: 'Mercancía descargada.', completada: true, activa: false, fecha: '15 Jul 15:00' },
        { id: 9, titulo: 'Evidencias cargadas', descripcion: 'Fotos y firmas subidas.', completada: true, activa: false, fecha: '15 Jul 15:10' },
        { id: 10, titulo: 'Reporte final generado', descripcion: 'Documento PDF creado.', completada: true, activa: false, fecha: '15 Jul 15:15' },
        { id: 11, titulo: 'Servicio cerrado', descripcion: 'Proceso finalizado.', completada: true, activa: false, fecha: '15 Jul 15:30' }
      ]
    },
    {
      folio: 'SRV-1040',
      cliente: 'Distribuidora MX',
      ruta: 'Guadalajara → Querétaro',
      unidad: 'Por asignar',
      operador: 'Por asignar',
      carga: 'Refacciones - 5t',
      estatus: 'Por asignar',
      etapas: [
        { id: 1, titulo: 'Servicio creado', descripcion: 'Solicitud registrada.', completada: true, activa: false, fecha: '16 Jul 17:00' },
        { id: 2, titulo: 'Cliente confirmado', descripcion: 'Requerimientos validados.', completada: false, activa: true, fecha: 'En revisión...' },
        { id: 3, titulo: 'Unidad asignada', descripcion: 'Pendiente.', completada: false, activa: false },
        { id: 4, titulo: 'Llegada a origen', descripcion: 'Pendiente.', completada: false, activa: false },
        { id: 5, titulo: 'Carga iniciada', descripcion: 'Pendiente.', completada: false, activa: false },
        { id: 6, titulo: 'Unidad en tránsito', descripcion: 'Pendiente.', completada: false, activa: false },
        { id: 7, titulo: 'Llegada a destino', descripcion: 'Pendiente.', completada: false, activa: false },
        { id: 8, titulo: 'Entrega completada', descripcion: 'Pendiente.', completada: false, activa: false },
        { id: 9, titulo: 'Evidencias cargadas', descripcion: 'Pendiente.', completada: false, activa: false },
        { id: 10, titulo: 'Reporte final generado', descripcion: 'Pendiente.', completada: false, activa: false },
        { id: 11, titulo: 'Servicio cerrado', descripcion: 'Pendiente.', completada: false, activa: false }
      ]
    }
  ];

  constructor() { }

  getViajePorFolio(folio: string): Viaje | undefined {
    return this.mockViajes.find(v => v.folio === folio);
  }
}
