import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dojo } from 'src/app/clases/dojo';
import { DojoGestionService } from 'src/app/servicios/dojo-gestion.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  // idear manera de que los cards se hiciesen por For, de manera que cada card saca la informacion del dojo al que hace referencia
  // tambien, tendrias que sacar info de los maestros en funcion del dojo, para sacar temas de numero y correo

  dojos: Dojo[] = [];

  constructor(private servicioDojo:DojoGestionService,private router:Router,){
  }

  ngOnInit(){
    this.consultarDojos();    
  }

  async consultarDojos(){
    this.dojos = await this.servicioDojo.getDojos();
  }
}
