import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Dojo } from 'src/app/clases/dojo';
import { DojoGestionService } from 'src/app/servicios/dojo-gestion.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-noticias',
  templateUrl: './noticias.component.html',
  styleUrls: ['./noticias.component.css'],
  standalone: true,
	imports: [NgbCarouselModule, NgIf],
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
