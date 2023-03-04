import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaDojoComponent } from './componentes/tabla-dojo/tabla-dojo.component';
import { TablaAlumnoComponent } from './componentes/tabla-alumno/tabla-alumno.component';
import { CardComponent } from './componentes/card/card.component';
import { AltaEditarAlumnoComponent } from './componentes/alta-editar-alumno/alta-editar-alumno.component';
import { AltaEditarDojoComponent } from './componentes/alta-editar-dojo/alta-editar-dojo.component';
import {MenuComponent} from './componentes/menu/menu.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { IndexComponent } from './componentes/index/index.component';
import { AccesibilidadComponent } from './componentes/accesibilidad/accesibilidad.component';
import { MapaComponent } from './componentes/mapa/mapa.component';

const routes: Routes = [
  { path: '', redirectTo: '/index',pathMatch: 'full'},
  { path: 'tablaDojos', component: TablaDojoComponent},
  { path: 'index', component: IndexComponent},
  { path: 'tablaAlumnos', component: TablaAlumnoComponent},
  { path: 'card', component: CardComponent},
  { path: 'altaDojos', component:AltaEditarDojoComponent},
  { path: 'editarDojo/:id', component:AltaEditarDojoComponent},
  { path: 'altaAlumno', component:AltaEditarAlumnoComponent},
  { path: 'editarAlumno/:id', component:AltaEditarAlumnoComponent},
  { path: 'menuComponent', component: MenuComponent}, // creo que este no es necesario
  { path: 'contactos', component:ContactoComponent},
  { path: 'noticias', component:NoticiasComponent},
  { path: 'accesibilidad', component:AccesibilidadComponent},
  { path: 'mapa', component:MapaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
