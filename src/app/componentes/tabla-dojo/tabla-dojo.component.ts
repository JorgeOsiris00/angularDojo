import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Dojo } from 'src/app/clases/dojo';
import { DojoGestionService } from 'src/app/servicios/dojo-gestion.service';

import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import * as jQuery from 'jquery';

@Component({
  selector: 'app-tabla-dojo',
  templateUrl: './tabla-dojo.component.html',
  styleUrls: ['./tabla-dojo.component.css'],
  standalone: true,
  imports: [DecimalPipe, NgFor, FormsModule, NgbTypeaheadModule, NgbPaginationModule],
})
export class TablaDojoComponent {

  dojos: Dojo[] = [];
  page = 1;
	pageSize = 4;
	collectionSize = this.dojos.length;
	
  constructor(private servicioDojo:DojoGestionService,private router:Router,){
    this.refreshDojos();
  }

  

  ngOnInit(){
    this.consultarDojos();    
  }

  async consultarDojos(){
    this.dojos = await this.servicioDojo.getDojos();
  }

  

  async eliminar(dojoEliminar:Dojo){
    jQuery(dojoEliminar).slideDown();
    // await this.servicioDojo.borrar(dojoEliminar.id); resolver lo del ID
    this.refreshDojos();
  }

  ordenarPorNombre(){
    this.dojos.sort((a, b) => {
      if (a.nombre > b.nombre) return 1
      else return -1;
    });
    this.refreshDojos();
  }


  refreshDojos() {
		this.dojos = this.dojos.map((dojo, i) => ({ id: i + 1, ...dojo })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}


