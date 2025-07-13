import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from '../../services/usuario.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-cadastro',
  standalone: false,
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})

export class CadastroComponent implements OnInit{

  isAtualiza = false;

  isNome = false;
  isEmail = false;
  isSenha = false;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.usuarioService.getListarPorId(id).subscribe({
        next: (res) => this.usuario = res,
        error: (err) => console.error('Erro ao buscar usuário:', err)
      });
      this.isAtualiza = true;
    }
    console.log('Componente Cadastro iniciado');
  }

  
  usuario: Usuario = {
    nome: '',
    email: '',
    senha: ''
  };


  constructor(private usuarioService: UsuarioService,
              private route: ActivatedRoute
  ){ }

  salvar() {
    if (this.isAtualiza){
      // ATUALIZAR USUARIO
      this.usuarioService.atualizar(this.usuario.id, this.usuario).subscribe({
        next: (res) => {
          alert('Usuario atualizado com sucesso!');
        },
        error: (err) => {
          console.error("Erro ao atulaizar usuario: ", err);
          alert('Error ao atualizar usuario.');
        }
      });
    } else {
      this.usuarioService.postCriar(this.usuario).subscribe({
        next: (res) => {
          console.log('Usuário criado com sucesso:', res);
          alert('Usuário criado com sucesso!');
          //this.usuario = { nome: '', email: '', senha: '' }; 
        },
        error: (err) => {
          console.error('Erro ao criar usuário:', err);
          alert('Erro ao criar usuário.');
        }
      });
    } 
  }

  validaEmail(){
    if (this.usuario.email == "" || this.usuario.email.indexOf('@') == -1 || this.usuario.email.indexOf('.') == -1 ||
        this.usuario.email.indexOf('gmail') == -1){
      document.getElementById('email')!.style.borderColor='red';
      this.isEmail = true;
      this.usuario.email = ""; //limpa o campo
    }else {
      document.getElementById('email')!.style.borderColor = '';
      this.isEmail = false;
    }

  }

  validaNome(){
    if(this.usuario.nome.length < 10 || this.usuario.nome == ''){
      this.usuario.nome = '';
      document.getElementById('nome')!.style.borderColor='red';
      this.isNome = true;
    } else {
      document.getElementById('nome')!.style.borderColor='';
      this.isNome = false;
    }
  }

  validaSenha(){
    if(this.usuario.senha.length < 8 || this.usuario.senha == ''){
      this.usuario.senha = '';
      document.getElementById('senha')!.style.borderColor='red';
      this.isSenha = true;
    }else{
      document.getElementById('senha')!.style.borderColor='';
      this.isSenha = false;
    }
  }


 
}
