import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { }

  canActivate(): boolean {
    // Verifica se está no navegador
    const isBrowser = typeof window !== 'undefined' && typeof localStorage !== 'undefined';

    if (!isBrowser) {
      // Em ambiente sem localStorage (ex: SSR), decide se bloqueia ou libera
      // Por segurança, bloqueia o acesso:
      return false;
    }

    const usuario = localStorage.getItem('usuarioLogado');
    console.log(usuario);

    if (usuario) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
