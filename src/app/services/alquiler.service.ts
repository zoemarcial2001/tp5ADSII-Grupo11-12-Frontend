import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alquiler } from '../models/alquiler';
import { Cliente } from '../models/cliente';
import { Maquinaria } from '../models/maquinaria';

@Injectable({
  providedIn: 'root'
})
export class AlquilerService {
  url_clientes = 'http://localhost:8080/clientes/lista';
  url_maquinarias = 'http://localhost:8080/maquinarias/lista';
  urlBase = 'http://localhost:8080/alquiler';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<any>{
    return this.http.get<Cliente[]>(this.url_clientes);
  }

  createAlquiler(alquiler: Alquiler): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this.http.post(this.urlBase+"/guardar", alquiler, httpOptions);
  }

  getMaquinarias(): Observable<any>{
    return this.http.get<Maquinaria[]>(this.url_maquinarias);
  }

  getAlquileres(): Observable<any>{
    return this.http.get<Alquiler[]>(this.urlBase + 'lista');
  }

  

}
