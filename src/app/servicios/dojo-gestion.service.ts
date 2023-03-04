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
      const dojos = await lastValueFrom(this.http.get<Dojo[]>(this.apiRestUrl+ "/dojos"));
      return dojos;
    }catch{ return[];}
  }

  async getDojo(id:string): Promise<Dojo>{
    let data:Dojo;
    try{
      data = await lastValueFrom(this.http.get<Dojo>(this.apiRestUrl+"/dojos/"+id))
    } catch{
        data ={
          "_id":"",
          "id": 0,
          "nombre": "",
          "pais": "",
          "domicilio": "",
          "calle": "",
          "maestro": "",
        }
    }
    return data;
  }

  async create(dojo:Dojo): Promise<any>{
    try{
      const dojos = await lastValueFrom(this.http.post<any>(this.apiRestUrl+"/dojos",dojo,this.httpOptions));
      return dojos;
    }catch{
      return {"status": "error"};
    }
  }

  getDojoO(id:string):Observable<Dojo>{
    return this.http.get<Dojo>(this.apiRestUrl+"/dojos/"+id)
  }

  createDojoO(dojo:Dojo):Observable<any>{
      return this.http.post<any>(this.apiRestUrl+"/dojos",dojo,this.httpOptions)
  }

  editar(dojo:Dojo):Observable<any>{
    return this.http.put(this.apiRestUrl + "/dojos",dojo,this.httpOptions);
  }
  borrar(dojo:Dojo):Observable<any>{
    return this.http.delete(this.apiRestUrl + "/dojos/" +dojo._id);
  }
}
