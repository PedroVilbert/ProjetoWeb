import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/produto.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(private http: HttpClient) { }


  api = 'http://localhost:3000/api/produtos';

  getListar(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.api);
  }

  getListarPorId(id: any): Observable<Produto> {
    return this.http.get<Produto>(`${this.api}/${id}`);
  }

}
