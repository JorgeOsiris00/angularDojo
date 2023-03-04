import { Injectable } from '@angular/core';
import { Alumno } from '../clases/alumno';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, lastValueFrom} from 'rxjs';
import {catchError,map,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AlumnosGestionService {

  constructor( private http:HttpClient) { }
  private apirestUrl = 'http://localhost:2525';
  // URL del proyecto Pinar tienes que poner

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
  };

  async getAlumnos(): Promise<Alumno[]>{
    try{
      const alumnos = await lastValueFrom(this.http.get<Alumno[]>(this.apirestUrl + "/alumnos"));
      return alumnos;
    }catch{ return[];}
  }

  async getAlumno(id:string): Promise<Alumno>{
    let data:Alumno;
    try{
      data = await lastValueFrom(this.http.get<Alumno>(this.apirestUrl+"/alumnos/"+id))
    }catch{
      data={
        "_id": "",
        "nombre": "",
        "apellido": "",
        "rango": "",
        "dojo": "",
        "codigo": "",
        "categoria": "",
        "tlf": 0,
        "correo": ""
      }
    }
    return data;
  }
  editar(alumno:Alumno): Observable<any>{
    return this.http.put(this.apirestUrl+"/alumnos/",alumno,this.httpOptions);
  }

  getAlumnoO(id:string):Observable<Alumno>{
    return this.http.get<Alumno>(this.apirestUrl+"/alumnos/"+id)
  }
  createAlumnoO(alumno:Alumno):Observable<any>{
    return this.http.post<any>(this.apirestUrl+"/alumnos",alumno,this.httpOptions)
  }

  borrar(alumno:Alumno): Observable<any>{
    return this.http.delete(this.apirestUrl+"/alumnos/"+alumno._id);
  }



}
