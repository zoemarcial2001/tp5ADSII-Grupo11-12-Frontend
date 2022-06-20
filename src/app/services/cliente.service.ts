import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  urlBase = "http://localhost:8080/cliente"
  
  constructor(private http: HttpClient) { }

  createCliente(cliente: Cliente): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this.http.post(this.urlBase+"/guardar", cliente, httpOptions);
  }

  getClientes(): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({

      }),
      params: new HttpParams({

      })
    };
    return this.http.get(this.urlBase, httpOptions);
  }
}
