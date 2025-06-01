import { Component, OnInit } from '@angular/core';
import { ConsultacepService } from '../../services/consultacep.service';

@Component({
  selector: 'app-consulta-cep',
  standalone: false,
  templateUrl: './consulta-cep.component.html',
  styleUrl: './consulta-cep.component.css'
})

export class ConsultaCepComponent implements OnInit {
  
  constructor(private consultaCep: ConsultacepService){}

  ngOnInit(): void {
      console.log('Componente ConsultaCep iniciado');
  }



  cep : any;
  logradouro: any;
  bairro: any;
  cidade: any;
  estado: any;

  buscar(){
    this.consultaCep.getConsultar(this.cep).subscribe(res =>{
      console.log(res);

      this.cidade = res.localidade;
      this.bairro = res.bairro;
      this.logradouro = res.logradouro;
      this.estado = res.uf;
    },error => {
      console.log(error);
      this.cep = '';
      this.logradouro = '';
      this.bairro = '';
      this.cidade = '';
      this.estado = '';

      console.log("Aqui")
    });

  }
}

