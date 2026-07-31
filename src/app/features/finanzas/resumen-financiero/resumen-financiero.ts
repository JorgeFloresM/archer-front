import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-resumen-financiero',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './resumen-financiero.html',
  styleUrl: './resumen-financiero.css'
})
export class ResumenFinanciero {
  searchTerm: string = '';
  mensajeActivo: string | null = null;
  periodoFiltro: string = 'mes_actual';
  
  // Mock de datos financieros por servicio
  registrosFinancieros = [
    { folio: 'SRV-1045', cliente: 'Cliente Industrial GDL', proveedor: 'Transportes Pérez S.A.', fecha: '28/07/2026', ingreso: 21550.00, costo: 16000.00, estatusCobro: 'Pagado', estatusPago: 'Pendiente' },
    { folio: 'SRV-1046', cliente: 'Comercial Bajío', proveedor: 'Flotilla Propia', fecha: '25/07/2026', ingreso: 8500.00, costo: 4200.00, estatusCobro: 'Pagado', estatusPago: 'Pagado' },
    { folio: 'SRV-1041', cliente: 'Distribuidora MX', proveedor: 'Fletes Rápidos', fecha: '22/07/2026', ingreso: 14800.00, costo: 11500.00, estatusCobro: 'Facturado', estatusPago: 'Pendiente' },
    { folio: 'SRV-1039', cliente: 'Apex Manufacturing', proveedor: 'Transportes Lógicos', fecha: '18/07/2026', ingreso: 35000.00, costo: 28000.00, estatusCobro: 'Por Facturar', estatusPago: 'Pendiente' },
    { folio: 'SRV-1035', cliente: 'Global Tech Supplies', proveedor: 'Transportes Pérez S.A.', fecha: '10/07/2026', ingreso: 12000.00, costo: 9000.00, estatusCobro: 'Pagado', estatusPago: 'Pagado' }
  ];

  // Getters para KPIs Globales (Calculados dinámicamente)
  get ingresosTotales() {
    return this.filteredRegistros.reduce((sum, item) => sum + item.ingreso, 0);
  }

  get costosTotales() {
    return this.filteredRegistros.reduce((sum, item) => sum + item.costo, 0);
  }

  get utilidadBruta() {
    return this.ingresosTotales - this.costosTotales;
  }

  get margenPromedio() {
    if (this.ingresosTotales === 0) return 0;
    return (this.utilidadBruta / this.ingresosTotales) * 100;
  }

  // Filtrado de la tabla
  get filteredRegistros() {
    if (!this.searchTerm) return this.registrosFinancieros;
    const term = this.searchTerm.toLowerCase();
    return this.registrosFinancieros.filter(r => 
      r.folio.toLowerCase().includes(term) || 
      r.cliente.toLowerCase().includes(term) ||
      r.proveedor.toLowerCase().includes(term)
    );
  }

  // Helper para calcular utilidad por fila
  calcularUtilidad(ingreso: number, costo: number) {
    return ingreso - costo;
  }

  // Helper para calcular margen por fila
  calcularMargen(ingreso: number, costo: number) {
    if (ingreso === 0) return 0;
    return ((ingreso - costo) / ingreso) * 100;
  }

  ejecutarAccion(accion: string) {
    this.mensajeActivo = accion;
    setTimeout(() => {
      this.mensajeActivo = null;
    }, 3000);
  }
}