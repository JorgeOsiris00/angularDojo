import { Injectable } from '@angular/core';
import {Usuarios} from '../clases/usuarios';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of, lastValueFrom} from 'rxjs';
import {catchError,map,tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginGestionService {

  constructor(private http:HttpClient) {  }
  private apiRestUrl = 'http://localhost:2525' 
  // URL del proyecto Pinar tienes que poner
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json'})
  }

  async getUsuarios(): Promise<Usuarios[]>{
    try{
      const usuarios = await lastValueFrom(this.http.get<Usuarios[]>(this.apiRestUrl+ "/user"));
      return usuarios;
    }catch{ return[];}
  }

  // faltaria un valdiar y un comprobar() que se conecte a Promise

}
