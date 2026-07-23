import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Dashboard } from './features/dashboard/dashboard';
import { DetalleViaje } from './features/viajes/detalle-viaje/detalle-viaje';
import { RegistroServicio } from './features/servicios/registro-servicio/registro-servicio';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
    { path: 'nuevo-servicio', component: RegistroServicio },
    { path: 'viaje/:id', component: DetalleViaje }
];