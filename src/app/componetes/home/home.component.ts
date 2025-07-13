import { Component } from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

   usuarios: Usuario[] = [];
   usuario!: Usuario;

  constructor(private usuarioService: UsuarioService,
              private router: Router
  ) {}

  ngOnInit() {
    this.listarUsuario();
  }

  listarUsuario() {
    this.usuarioService.getListar().subscribe({
      next: (resposta) => {
        this.usuarios = resposta;
        this.usuario = resposta[0]; // atribui o primeiro usuário da lista
      },
      error: (err) => console.error(err)
    });
  }

  editar(usuario: Usuario) {
    this.router.navigate(['/cadastro', usuario.id]);
  }

  deletar(id: number) {
    this.usuarioService.deletar(id).subscribe(() => {
      this.listarUsuario();
    });
  }

}
