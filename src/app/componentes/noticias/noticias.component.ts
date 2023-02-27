import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dojo } from 'src/app/clases/dojo';
import { DojoGestionService } from 'src/app/servicios/dojo-gestion.service';

@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css']
})
export class NoticiasComponent {

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
