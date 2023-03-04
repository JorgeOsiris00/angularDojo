import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AltaEditarAlumnoComponent } from './componentes/alta-editar-alumno/alta-editar-alumno.component';
import { AltaEditarDojoComponent } from './componentes/alta-editar-dojo/alta-editar-dojo.component';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CardComponent } from './componentes/card/card.component';
import { TablaDojoComponent } from './componentes/tabla-dojo/tabla-dojo.component';
import { TablaAlumnoComponent } from './componentes/tabla-alumno/tabla-alumno.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { NoticiasComponent } from './componentes/noticias/noticias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IndexComponent } from './componentes/index/index.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    AltaEditarAlumnoComponent,
    AltaEditarDojoComponent,
    MenuComponent,
    FooterComponent,
    ContactoComponent,
    CardComponent,
    TablaAlumnoComponent,
    IndexComponent,
     
  ],
  imports: [
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    TablaDojoComponent,
    AppRoutingModule,
    NgbModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbCarouselModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }

// quitaste del package.json: "@angular/localize": "^15.1.0",
