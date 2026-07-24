import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-asignacion-unidades',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './asignacion-unidades.html',
  styleUrl: './asignacion-unidades.css'
})
export class AsignacionUnidades {
  searchTerm: string = '';
  mensajeActivo: string | null = null;
  
  // El servicio que el usuario seleccionó en la lista izquierda
  servicioSeleccionado: any = null;

  // Mock de Servicios Pendientes de Asignar
  serviciosPendientes = [
    { id: 'SRV-1045', cliente: 'Cliente Industrial GDL', origen: 'Guadalajara, JAL', destino: 'Monterrey, NL', tipoRequerido: 'Caja Seca 53ft', peso: '22 Ton', fecha: 'Hoy, 18:00', prioridad: 'Alta' },
    { id: 'SRV-1046', cliente: 'Comercial Bajío', origen: 'Silao, GTO', destino: 'CDMX', tipoRequerido: 'Camioneta 3.5t', peso: '2.5 Ton', fecha: 'Mañana, 08:00', prioridad: 'Media' },
    { id: 'SRV-1047', cliente: 'Distribuidora MX', origen: 'Querétaro, QRO', destino: 'Puebla, PUE', tipoRequerido: 'Refrigerada 53ft', peso: '18 Ton', fecha: 'Hoy, 22:00', prioridad: 'Alta' },
  ];

  // Mock de Unidades Disponibles (sugerencias)
  unidadesDisponibles = [
    { id: 'UN-081', tipo: 'Caja Seca 53ft', socio: 'Transportes Pérez S.A.', operador: 'Carlos Ramírez', ubicacion: 'Patio GDL', distancia: 'A 15 km', estatus: 'Disponible' },
    { id: 'UN-099', tipo: 'Caja Seca 53ft', socio: 'Transportes Pérez S.A.', operador: 'José Díaz', ubicacion: 'Ruta 15D (Llegando)', distancia: 'A 45 km', estatus: 'Disponible en 2 hrs' },
    { id: 'UN-112', tipo: 'Plataforma', socio: 'Fletes Rápidos', operador: 'Juan Pérez', ubicacion: 'Patio MTY', distancia: 'A 800 km', estatus: 'Disponible' },
    { id: 'UN-005', tipo: 'Camioneta 3.5t', socio: 'Flotilla Propia', operador: 'Miguel Sánchez', ubicacion: 'Patio Silao', distancia: 'A 5 km', estatus: 'Disponible' },
  ];

  constructor() {
    // Seleccionamos el primer servicio por defecto al cargar
    if (this.serviciosPendientes.length > 0) {
      this.seleccionarServicio(this.serviciosPendientes[0]);
    }
  }

  // Filtrar servicios en la barra de búsqueda
  get filteredServicios() {
    if (!this.searchTerm) return this.serviciosPendientes;
    const term = this.searchTerm.toLowerCase();
    return this.serviciosPendientes.filter(s => 
      s.id.toLowerCase().includes(term) || 
      s.cliente.toLowerCase().includes(term) ||
      s.destino.toLowerCase().includes(term)
    );
  }

  // Filtrar unidades que coincidan (idealmente) con el tipo requerido por el servicio seleccionado
  get unidadesSugeridas() {
    if (!this.servicioSeleccionado) return this.unidadesDisponibles;
    // En la vida real, aquí habría un algoritmo complejo. Por ahora, priorizamos las del mismo tipo
    return this.unidadesDisponibles.sort((a, b) => {
      if (a.tipo === this.servicioSeleccionado.tipoRequerido) return -1;
      if (b.tipo === this.servicioSeleccionado.tipoRequerido) return 1;
      return 0;
    });
  }

  seleccionarServicio(servicio: any) {
    this.servicioSeleccionado = servicio;
  }

  asignarUnidad(unidad: any) {
    this.mostrarMensaje(`Unidad ${unidad.id} asignada exitosamente al servicio ${this.servicioSeleccionado.id}`);
    
    // Simulamos que el servicio ya no está pendiente (lo quitamos de la lista)
    setTimeout(() => {
      this.serviciosPendientes = this.serviciosPendientes.filter(s => s.id !== this.servicioSeleccionado.id);
      this.servicioSeleccionado = this.serviciosPendientes.length > 0 ? this.serviciosPendientes[0] : null;
    }, 800);
  }

  mostrarMensaje(msg: string) {
    this.mensajeActivo = msg;
    setTimeout(() => {
      this.mensajeActivo = null;
    }, 3000);
  }
}