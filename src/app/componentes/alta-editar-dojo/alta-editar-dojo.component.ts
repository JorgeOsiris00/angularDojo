import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Dojo } from 'src/app/clases/dojo';
import { DojoGestionService } from 'src/app/servicios/dojo-gestion.service';


@Component({
  selector: 'app-alta-editar-dojo',
  templateUrl: './alta-editar-dojo.component.html',
  styleUrls: ['./alta-editar-dojo.component.css']
})
export class AltaEditarDojoComponent {
    titulo = "ALTA DOJO";
    dojo:Dojo ={
        "_id":"",
        "id": 0,
        "nombre":"",
        "pais": "",
        "domicilio": "",
        "calle":"",
        "maestro": ""
    }

    constructor(private servicioDojo: DojoGestionService,
      private router: Router,
      private location:Location,
      private route: ActivatedRoute) { }

      ngOnInit(): void {
        this.route.params.subscribe( parametro => {
            if (parametro['id']) {
              this.titulo = "EDITAR DOJO";
              this.servicioDojo.getDojoO(parametro['id'])
                                 .subscribe((dojo: Dojo) => this.dojo = dojo);
            }
        });
      }
      darAlta(){
        this.servicioDojo.createDojoO(this.dojo).subscribe((respuesta: { status: string; }) => {
          if (respuesta.status === 'success'){
            alert("Alta realizada");
            this.location.back();
          } else {
            alert("Alta no realizada")
          }
       })
      }

      editar(){
        this.servicioDojo.editar(this.dojo).subscribe((respuesta: { status: string; }) => {
           if (respuesta.status === 'success'){
             alert("Modificación realizada");
             this.location.back();
           } else {
             alert("Modificación no realizada")
           }
        })
      }

      cancelar(){
        this.location.back();
      }
      
}
