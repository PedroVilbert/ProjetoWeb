import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/usuario.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private http: HttpClient) { }

  api = 'http://localhost:3000/api/usuarios';

  postCriar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(this.api, usuario);
  }

  getListar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.api);
  }

  gteListarPorId(id: any): Observable<Usuario>{
    return this.http.get<Usuario>(`${this.api}/${id}`);
  }

  deletar(id: number): Observable<any> {
    return this.http.delete(`${this.api}/${id}`);
  }

  atualizar(id: any, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.api}/${id}`, usuario);
  }



  
}
