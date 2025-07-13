import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';


import { FormsModule } from '@angular/forms';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componetes/cabecalho/cabecalho.component';
import { MatToolbarModule } from '@angular/material/toolbar'; 
import { RodapeComponent } from './componetes/rodape/rodape.component';
import { HomeComponent } from './componetes/home/home.component';
import { ConsultaCepComponent } from './componetes/consulta-cep/consulta-cep.component';
import { HttpClientModule} from '@angular/common/http';
import { CadastroComponent } from './componetes/cadastro/cadastro.component';
import { ListarUsuarioComponent } from './componetes/listar-usuario/listar-usuario.component';
import { LoginComponent } from './componetes/login/login.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ListarProdutoComponent } from './componetes/listar-produto/listar-produto.component';



@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    HomeComponent,
    ConsultaCepComponent,
    CadastroComponent,
    ListarUsuarioComponent,
    LoginComponent,
    ListarProdutoComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatSnackBarModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
