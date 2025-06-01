import { Component, OnInit} from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Usuario } from '../../models/usuario.model';
import { response } from 'express';

import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-usuario',
  standalone: false,
  templateUrl: './listar-usuario.component.html',
  styleUrl: './listar-usuario.component.css'
})
export class ListarUsuarioComponent implements OnInit{

  constructor(private usuarioService: UsuarioService,
              private router: Router
  ){}
  ngOnInit(){
    this.listarUsuario();
  }

  usuarios: Usuario[] = [];

  listarUsuario(){
    this.usuarioService.getListar().subscribe({
      next:(resposta) => this.usuarios = resposta,
      error: (err) => console.error(err)
    })
  }

  editar(usuario: Usuario) {
    this.router.navigate(['/cadastro', usuario.id]); // rotar ex /cadastro/123
  }

  deletar(id: number) {
    this.usuarioService.deletar(id).subscribe(() => {
      this.listarUsuario(); // recarrega a lista 
    });
  }

}
