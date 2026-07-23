import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-registro-servicio',
  standalone: true,
  imports: [CommonModule, RouterLink], // Asegúrate de que estos dos estén aquí
  templateUrl: './registro-servicio.html',
  styleUrl: './registro-servicio.css'
})
export class RegistroServicio {
  // Mantén la clase vacía por ahora
}