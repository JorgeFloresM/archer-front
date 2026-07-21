import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  email = '';
  password = '';

  constructor(private router: Router) {}

  onLogin() {
    console.log('Intentando login con:', this.email)

    if (this.email === 'admin@archerlogistica.com' && this.password === '12345678') {
      this.router.navigate(['/dashboard']);
    } else {
      alert('Usuario o contraseña incorrectos.')
    }
  }   
}
