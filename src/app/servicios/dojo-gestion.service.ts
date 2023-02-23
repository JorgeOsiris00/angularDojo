import { Injectable } from '@angular/core';
import {Dojo} from '../clases/dojo';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, lastValueFrom} from 'rxjs';
import {catchError,map,tap} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DojoGestionService {

  constructor( private http:HttpClient) { }
  private apiRestUrl = 'http://localhost:2525' 
  // URL del proyecto Pinar tienes que poner
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
  };

  async getDojos(): Promise<Dojo[]>{
    try{
      const dojos = await lastValueFrom(this.http.get<Dojo[]>(this.apiRestUrl+ "/flores"));
      return dojos;
    }catch{ return[];}
  }

  async getDojo(id:string): Promise<Dojo>{
    let data:Dojo;
    try{
      data = await lastValueFrom(this.http.get<Dojo>(this.apiRestUrl+"/dojo"+id))
    } catch{
        data ={
          "id": 0,
          "nombre": "",
          "pais": "",
          "domicilio": "",
          "calle": "",
          "maestro": "",
          "alumnos": "",
        }
    }
    return data;
  }

  async create(dojo:Dojo): Promise<any>{
    try{
      const dojos = await lastValueFrom(this.http.post<any>(this.apiRestUrl+"/nuevoDojo",dojo,this.httpOptions));
      return dojos;
    }catch{
      return {"status": "error"};
    }
  }

  editar(dojo:Dojo):Observable<any>{
    return this.http.put(this.apiRestUrl + "/frutas",dojo,this.httpOptions);
  }
  borrar(id:string):Observable<any>{
    return this.http.delete(this.apiRestUrl + "/frutas/" + id);
  }
}
