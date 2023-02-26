import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {TablaComponent} from './componentes/tabla/tabla.component'; //
import { TablaDojoComponent } from './componentes/tabla-dojo/tabla-dojo.component';
import { TablaAlumnoComponent } from './componentes/tabla-alumno/tabla-alumno.component';
import { FormAlumnoComponent } from './componentes/form-alumno/form-alumno.component';
import { FormDojoComponent } from './componentes/form-dojo/form-dojo.component';
import {FormComponent} from './componentes/form/form.component'; //
import {MenuComponent} from './componentes/menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: '/tablaDojos',pathMatch: 'full'},
  { path: 'tablaDojos', component: TablaComponent},
  { path: 'menuComponent', component: MenuComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
