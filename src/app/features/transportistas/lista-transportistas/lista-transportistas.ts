import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- Importamos FormsModule para el buscador

@Component({
  selector: 'app-lista-transportistas',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule], // <-- Lo agregamos a los imports
  templateUrl: './lista-transportistas.html',
  styleUrl: './lista-transportistas.css'
})
export class ListaTransportistas {
  // Variables para la lógica interactiva
  activeTab: 'unidades' | 'operadores' | 'socios' = 'unidades';
  searchTerm: string = '';
  mensajeActivo: string | null = null; // Para mostrar notificaciones flotantes

  // Datos de prueba para el catálogo
  unidades = [
    { 
      id: 'UN-081', 
      tipo: 'Caja Seca 53ft', 
      socio: 'Transportes Pérez S.A.', 
      operador: 'Carlos Ramírez', 
      placas: '45-TY-8A', 
      docEstatus: 'Al corriente' 
    },
    { 
      id: 'UN-005', 
      tipo: 'Camioneta 3.5t', 
      socio: 'Flotilla Propia', 
      operador: 'Miguel Sánchez', 
      placas: 'PZ-1234-A', 
      docEstatus: 'Al corriente' 
    },
    { 
      id: 'UN-112', 
      tipo: 'Plataforma', 
      socio: 'Fletes Rápidos', 
      operador: 'Juan Pérez', 
      placas: '89-GH-2B', 
      docEstatus: 'Por vencer' 
    },
    { 
      id: 'UN-042', 
      tipo: 'Rabón / Torton', 
      socio: 'Transportes Lógicos', 
      operador: 'Raúl Martínez', 
      placas: '12-AS-5C', 
      docEstatus: 'Incompleta' 
    },
    { 
      id: 'UN-099', 
      tipo: 'Refrigerada 53ft', 
      socio: 'Transportes Pérez S.A.', 
      operador: 'José Díaz', 
      placas: '55-QW-1R', 
      docEstatus: 'Al corriente' 
    }
  ];

  operadores = [
    { id: 'OP-104', nombre: 'Carlos Ramírez', licencia: 'A-12345678', vigencia: '2025-10-12', estatus: 'Activo' },
    { id: 'OP-089', nombre: 'Miguel Sánchez', licencia: 'B-98765432', vigencia: '2024-01-05', estatus: 'Por Vencer' },
    { id: 'OP-211', nombre: 'Juan Pérez', licencia: 'A-56473829', vigencia: '2026-03-20', estatus: 'Activo' },
  ];

  socios = [
    { id: 'SO-001', empresa: 'Transportes Pérez S.A.', rfc: 'TPE890101XYZ', unidades: 12, estatus: 'Activo' },
    { id: 'SO-002', empresa: 'Flotilla Propia', rfc: 'ARC123456ABC', unidades: 45, estatus: 'Activo' },
    { id: 'SO-003', empresa: 'Fletes Rápidos', rfc: 'FRA981212QWE', unidades: 4, estatus: 'Inactivo' },
  ];

  // Getters para filtrar las tablas en tiempo real según el buscador
  get filteredUnidades() {
    if (!this.searchTerm) return this.unidades;
    const term = this.searchTerm.toLowerCase();
    return this.unidades.filter(u => 
      u.id.toLowerCase().includes(term) || 
      u.tipo.toLowerCase().includes(term) || 
      u.socio.toLowerCase().includes(term) || 
      u.operador.toLowerCase().includes(term) || 
      u.placas.toLowerCase().includes(term)
    );
  }

  get filteredOperadores() {
    if (!this.searchTerm) return this.operadores;
    const term = this.searchTerm.toLowerCase();
    return this.operadores.filter(o => o.nombre.toLowerCase().includes(term) || o.id.toLowerCase().includes(term) || o.licencia.toLowerCase().includes(term));
  }

  get filteredSocios() {
    if (!this.searchTerm) return this.socios;
    const term = this.searchTerm.toLowerCase();
    return this.socios.filter(s => s.empresa.toLowerCase().includes(term) || s.rfc.toLowerCase().includes(term));
  }

  // Método para simular la apertura de modales/acciones
  ejecutarAccion(accion: string) {
    this.mensajeActivo = accion;
    // Ocultar el mensaje después de 3 segundos
    setTimeout(() => {
      this.mensajeActivo = null;
    }, 3000);
  }
}