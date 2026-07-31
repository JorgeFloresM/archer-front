import { Routes } from '@angular/router';
import { Login } from './features/auth/login/login';
import { Dashboard } from './features/dashboard/dashboard';
import { DetalleViaje } from './features/viajes/detalle-viaje/detalle-viaje';
import { RegistroServicio } from './features/servicios/registro-servicio/registro-servicio';
import { ListaClientes } from './features/clientes/lista-clientes/lista-clientes';
import { ListaTransportistas } from './features/transportistas/lista-transportistas/lista-transportistas';
import { AsignacionUnidades } from './features/asignacion/asignacion-unidades/asignacion-unidades';
import { SeguimientoOperativo } from './features/seguimiento/seguimiento-operativo/seguimiento-operativo';
import { GestionEvidencias } from './features/evidencias/gestion-evidencias/gestion-evidencias';
import { ReporteServicio } from './features/reportes/reporte-servicio/reporte-servicio';
import { ResumenFinanciero } from './features/finanzas/resumen-financiero/resumen-financiero';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: 'login', component: Login },
    { path: 'dashboard', component: Dashboard },
    { path: 'nuevo-servicio', component: RegistroServicio },
    { path: 'viaje/:id', component: DetalleViaje },
    { path: 'clientes', component: ListaClientes },
    { path: 'transportistas', component: ListaTransportistas },
    { path: 'asignacion', component: AsignacionUnidades },
    { path: 'seguimiento', component: SeguimientoOperativo },
    { path: 'evidencias', component: GestionEvidencias },
    { path: 'reportes', component: ReporteServicio },
    { path: 'finanzas', component: ResumenFinanciero }
];