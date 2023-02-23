import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { CardComponent } from './componentes/card/card.component';
import { FormComponent } from './componentes/form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TablaDojoComponent } from './componentes/tabla-dojo/tabla-dojo.component';
import { TablaAlumnoComponent } from './componentes/tabla-alumno/tabla-alumno.component';
import { FormDojoComponent } from './componentes/form-dojo/form-dojo.component';
import { FormAlumnoComponent } from './componentes/form-alumno/form-alumno.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    TablaComponent,
    CardComponent,
    FormComponent,
    TablaDojoComponent,
    TablaAlumnoComponent,
    FormDojoComponent,
    FormAlumnoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
