import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email = '';
  senha = '';
  erro = '';

  constructor(
    private authService: AuthService,
    private router: Router,
    private snackBar: MatSnackBar
  ) {}

  
  logar() {
    if (!this.email || !this.senha) {
      this.erro = 'Preencha todos os campos.';
      return;
    }

    this.authService.login(this.email, this.senha).subscribe({
      next: (res) => {
        if (res) {
          this.snackBar.open('Login realizado com sucesso!', 'OK', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
          this.router.navigate(['/home']);
        }
      },
      error: (err) => {
        if (err.status === 401) {
          this.snackBar.open(`Erro: ${err.error.mensagem}`, 'OK', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        } else {
          this.snackBar.open(`Erro ao realizar login: ${err.message}`, 'OK', {
            duration: 3000,
            horizontalPosition: 'center',
            verticalPosition: 'top',
          });
        }
      },
    });

  }
}
