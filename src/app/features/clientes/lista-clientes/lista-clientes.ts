import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-clientes',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-clientes.html',
  styleUrl: './lista-clientes.css'
})
export class ListaClientes {
  // Datos de prueba para el directorio de clientes
  clientes = [
    { 
      id: 'CL-001', 
      empresa: 'Cliente Industrial GDL', 
      contacto: 'Carlos Ramírez', 
      email: 'carlos.r@indgdl.com', 
      telefono: '33 1234 5678', 
      estatus: 'Activo' 
    },
    { 
      id: 'CL-002', 
      empresa: 'Comercial Bajío', 
      contacto: 'Miguel Sánchez', 
      email: 'msanchez@combajio.mx', 
      telefono: '477 987 6543', 
      estatus: 'Activo' 
    },
    { 
      id: 'CL-003', 
      empresa: 'Distribuidora MX', 
      contacto: 'Ana López', 
      email: 'alopez@distribuidoramx.com', 
      telefono: '55 5555 4444', 
      estatus: 'Inactivo' 
    },
    { 
      id: 'CL-004', 
      empresa: 'Apex Manufacturing', 
      contacto: 'Roberto Gómez', 
      email: 'rgomez@apex.com', 
      telefono: '81 1122 3344', 
      estatus: 'Activo' 
    },
    { 
      id: 'CL-005', 
      empresa: 'Global Tech Supplies', 
      contacto: 'Laura Martínez', 
      email: 'laura.m@globaltech.com', 
      telefono: '33 8888 9999', 
      estatus: 'Activo' 
    }
  ];
}