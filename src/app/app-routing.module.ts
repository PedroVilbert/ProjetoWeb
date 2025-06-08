import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componetes/home/home.component';
import { ConsultaCepComponent } from './componetes/consulta-cep/consulta-cep.component';
import { CadastroComponent } from './componetes/cadastro/cadastro.component';
import { ListarUsuarioComponent } from './componetes/listar-usuario/listar-usuario.component';
import { LoginComponent } from './componetes/login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {path : 'home', component: HomeComponent, canActivate: [AuthGuard]}, 
  {path : 'cadastro', component: CadastroComponent},
  {path : 'cadastro/:id', component: CadastroComponent, canActivate: [AuthGuard]}, // edição
  {path : 'consulta', component: ConsultaCepComponent, canActivate: [AuthGuard]},
  {path : 'login', component: LoginComponent},
  {path : 'listar', component: ListarUsuarioComponent, canActivate: [AuthGuard]},
  {path : '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
