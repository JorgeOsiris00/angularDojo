import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/clases/alumno';
import { AlumnosGestionService } from 'src/app/servicios/alumnos-gestion.service';
import { DecimalPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-tabla-alumno',
  templateUrl: './tabla-alumno.component.html',
  styleUrls: ['./tabla-alumno.component.css']
})
export class TablaAlumnoComponent {
  alumnos: Alumno[] = [];
  page = 1;
	pageSize = 4;
	collectionSize = this.alumnos.length;
	
  constructor(private servicioAlumnos:AlumnosGestionService,private router:Router,){
    this.refreshAlumnos();
  }

  

  ngOnInit(){
    this.consultarDojos();    
  }

  async consultarDojos(){
    this.alumnos = await this.servicioAlumnos.getAlumnos();
  }

  editar(dojo:Alumno){
    this.router.navigate(['editarAlumno/'+dojo._id]);
  }

  irAltaDojo(){
    this.router.navigate(['altaAlumno']);
  }

  
  borrar(alumno:Alumno){
    this.servicioAlumnos.borrar(alumno)
                       .subscribe (respuesta=>{
                        if (respuesta.status=="success"){
                          alert("Alumno borrado");
                          this.consultarDojos();
                        } else {
                          alert("No se ha podido borrar el Alumno");
                        }
                       });
                      }

  ordenarPorNombre(){
    this.alumnos.sort((a, b) => {
      if (a.nombre > b.nombre) return 1
      else return -1;
    });
    this.refreshAlumnos();
  }

  ordenarPorDojo(){
    this.alumnos.sort((a, b) => {
      if (a.nombre > b.nombre) return 1
      else return -1;
    });
    this.refreshAlumnos();
  }

  ordenarPorCategoria(){
    this.alumnos.sort((a, b) => {
      if (a.categoria > b.categoria) return 1
      else return -1;
    });
    this.refreshAlumnos();
  }


  refreshAlumnos() {
		this.alumnos = this.alumnos.map((alumnos, i) => ({ id: i + 1, ...alumnos })).slice(
			(this.page - 1) * this.pageSize,
			(this.page - 1) * this.pageSize + this.pageSize,
		);
	}
}
