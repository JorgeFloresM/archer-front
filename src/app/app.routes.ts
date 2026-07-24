import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Dashboard } from './features/dashboard/dashboard';
import { DetalleViaje } from './features/viajes/detalle-viaje/detalle-viaje';
import { RegistroServicio } from './features/servicios/registro-servicio/registro-servicio';
import { ListaClientes } from './features/clientes/lista-clientes/lista-clientes';
import { ListaTransportistas } from './features/transportistas/lista-transportistas/lista-transportistas';
import { AsignacionUnidades } from './features/asignacion/asignacion-unidades/asignacion-unidades';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
    { path: 'nuevo-servicio', component: RegistroServicio },
    { path: 'viaje/:id', component: DetalleViaje },
    { path: 'clientes', component: ListaClientes },
    { path: 'transportistas', component: ListaTransportistas },
    { path: 'asignacion', component: AsignacionUnidades }
];