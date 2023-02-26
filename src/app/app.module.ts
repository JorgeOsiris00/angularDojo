import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { TablaComponent } from './componentes/tabla/tabla.component';
import { CardComponent } from './componentes/card/card.component';
import { FormComponent } from './componentes/form/form.component';
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
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

// quitaste del package.json: "@angular/localize": "^15.1.0",
