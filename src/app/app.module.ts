import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { app_routing } from './app.routes';

import { AppComponent } from './app.component';
import { NgStyleComponent } from './components/ng-style/ng-style.component';
import { CssComponent } from './components/css/css.component';
import { ClasesComponent } from './components/clases/clases.component';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { NoSwitchComponent } from './components/no-switch/no-switch.component';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { NuevoUsuarioComponent } from './components/usuario/nuevo-usuario.component';
import { NuevoDetalleComponent } from './components/usuario/nuevo-detalle.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { EditarComponent } from './components/usuario/usuario-editar.component';

@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponent,
    CssComponent,
    ClasesComponent,
    ResaltadoDirective,
    NoSwitchComponent,
    HomeComponent,
    UsuarioComponent,
    NuevoUsuarioComponent,
    NuevoDetalleComponent,
    NavbarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
