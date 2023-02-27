import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TablaComponent} from './componentes/tabla/tabla.component'; //
import { TablaDojoComponent } from './componentes/tabla-dojo/tabla-dojo.component';
import { TablaAlumnoComponent } from './componentes/tabla-alumno/tabla-alumno.component';
import { FormAlumnoComponent } from './componentes/form-alumno/form-alumno.component';
import { FormDojoComponent } from './componentes/form-dojo/form-dojo.component';
import { CardComponent } from './componentes/card/card.component';
import {FormComponent} from './componentes/form/form.component'; //
import {MenuComponent} from './componentes/menu/menu.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';

const routes: Routes = [
  { path: '', redirectTo: '/tablaDojos',pathMatch: 'full'},
  { path: 'tablaDojos', component: TablaDojoComponent},
  { path: 'tablaAlumno', component: TablaAlumnoComponent},
  { path: 'formAlumno', component: FormAlumnoComponent},
  { path: 'formDojo', component: FormDojoComponent},
  { path: 'card', component: CardComponent},
  // no se si el tener dos rutas y luego saber si tiene parametros o no es la manera optima, preguntar
  { path: 'formAlumno', component: FormAlumnoComponent},
  { path: 'formDojo', component: FormDojoComponent},
  { path: 'formAlumno/:alumno', component: FormAlumnoComponent},
  { path: 'formDojo/:dojo', component: FormDojoComponent},
  { path: 'menuComponent', component: MenuComponent}, // creo que este no es necesario
  { path: 'contactos', component:ContactoComponent},
  { path: 'noticias', component:NoticiasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
