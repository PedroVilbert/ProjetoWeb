import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../services/produto.service';
import { Router } from '@angular/router';
import { Produto } from '../../models/produto.model';

@Component({
  selector: 'app-listar-produto',
  standalone: false,
  templateUrl: './listar-produto.component.html',
  styleUrls: ['./listar-produto.component.css']
})
export class ListarProdutoComponent implements OnInit {

  produtos: Produto[] = []

produtoSelecionado: Produto | null = null;

  constructor(
    private produtoService: ProdutoService,
    private router: Router
  ) {}

  ngOnInit() {
    this.listarProduto();
  }

  listarProduto() {
    this.produtoService.getListar().subscribe({
      next: (resposta) => {
        this.produtos = resposta;
        console.log(this.produtos);
      },
      error: (err) => console.error(err)
    });
  }

  abrirReceita(produto: Produto) {
    this.produtoSelecionado = produto;
  }

  fecharReceita() {
    this.produtoSelecionado = null;
  }
}