import { Component, AfterViewInit, OnInit, OnDestroy, ViewEncapsulation} from '@angular/core';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../../models/usuario.model';


@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None, // faz o CSS "vazar" para o global
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {

  usuarios: Usuario[] = [];
  usuario!: Usuario;

  // Imagens do carrossel
  imagens: string[] = [
    'https://forbes.com.br/wp-content/uploads/2024/04/Life_cafeterias-em-sao-paulo-12.jpg',
    'https://cdn.esbrasil.com.br/wp-content/uploads/2024/03/IMG_8907.jpg',
    'https://images.unsplash.com/photo-1521305916504-4a1121188589'
  ];

  activeIndex = 0;
  intervaloId: any;

  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listarUsuario();
  }

  ngAfterViewInit() {
    // Começa o auto slide do carrossel
    this.iniciarAutoSlide();
  }

  ngOnDestroy() {
    // Limpa o intervalo ao destruir o componente para evitar vazamentos de memória
    clearInterval(this.intervaloId);
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

  // Carrossel methods

  iniciarAutoSlide() {
    this.intervaloId = setInterval(() => {
      this.proximo();
    }, 5000);
  }

  anterior() {
    this.activeIndex = (this.activeIndex === 0) ? this.imagens.length - 1 : this.activeIndex - 1;
  }

  proximo() {
    this.activeIndex = (this.activeIndex === this.imagens.length - 1) ? 0 : this.activeIndex + 1;
  }

  goToSlide(index: number) {
    this.activeIndex = index;
  }

}
