import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/clases/alumno';
import { AlumnosGestionService } from 'src/app/servicios/alumnos-gestion.service';

@Component({
  selector: 'app-alta-editar-alumno',
  templateUrl: './alta-editar-alumno.component.html',
  styleUrls: ['./alta-editar-alumno.component.css']
})
export class AltaEditarAlumnoComponent {
  titulo = "ALTA ALUMNO";
  alumno:Alumno ={
      "_id":"",
      "nombre":"",
      "apellido": "",
      "rango": "",
      "dojo":"",
      "codigo": "",
      "categoria": "",
      "tlf": 0,
      "correo": "",
  }

  constructor(private servicioAlumno: AlumnosGestionService,
    private router: Router,
    private location:Location,
    private route: ActivatedRoute) { }

    ngOnInit(): void {
      this.route.params.subscribe( parametro => {
          if (parametro['id']) {
            this.titulo = "EDITAR ALUMNO";
            this.servicioAlumno.getAlumnoO(parametro['id'])
                               .subscribe((alumno: Alumno) => this.alumno = alumno);
          }
      });
    }

    darAlta(){
      this.servicioAlumno.createAlumnoO(this.alumno).subscribe((respuesta: { status: string; }) => {
        if (respuesta.status === 'success'){
          alert("Alta realizada");
          this.location.back();
        } else {
          alert("Alta no realizada")
        }
     })
    }

    editar(){
      this.servicioAlumno.editar(this.alumno).subscribe((respuesta: { status: string; }) => {
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
