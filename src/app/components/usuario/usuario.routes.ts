import { Routes } from '@angular/router';

import { EditarComponent } from './usuario-editar.component';
import { NuevoUsuarioComponent } from './nuevo-usuario.component';
import { NuevoDetalleComponent } from './nuevo-detalle.component';

export const USUARIO_ROUTES: Routes = [
  {path: 'nuevo', component: NuevoUsuarioComponent},
  {path: 'editar', component: EditarComponent},
  {path: 'detalle', component: NuevoDetalleComponent}
];
