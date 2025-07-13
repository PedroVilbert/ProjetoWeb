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

  produtos: Produto[] = [
  {
    "id": 1,
    "nome": "Café Expresso",
    "valor": 6.50,
    "imagem": "https://cdn.sistemawbuy.com.br/arquivos/f101ef5b9be464a6c8854310ae5f5327/produtos/65bb164199b0d/ea6b9e38be0122aedce63daa0891062e-65bb1642a0121.jpg",
    "receita": "Use 7-9g de café moído fino para espresso. Aqueça a máquina. Extraia 25-30ml de café em 25-30 segundos."
  },
  {
    "id": 2,
    "nome": "Cappuccino",
    "valor": 9.00,
    "imagem": "https://www.bongusto.ind.br/wp-content/uploads/2023/06/mockup-galeria-capuccino-tradicional-xicara.jpg",
    "receita": "Prepare 1 dose de espresso. Aqueça e vaporize 100ml de leite até espumar. Misture e polvilhe canela ou chocolate."
  },
  {
    "id": 3,
    "nome": "Latte",
    "valor": 8.50,
    "imagem": "https://villacafe.com.br/blog/wp-content/uploads/2019/01/267558-conheca-mais-sobre-o-latte-art-e-seus-efeitos.jpg",
    "receita": "Prepare 1 dose de espresso. Aqueça 150ml de leite com espuma leve. Despeje sobre o café. Finalize com latte art, se quiser."
  },
  {
    "id": 4,
    "nome": "Croissant",
    "valor": 7.00,
    "imagem": "https://www.sabornamesa.com.br/media/k2/items/cache/a111f23c16ea3f29e72a482eced3b5eb_XL.jpg",
    "receita": "Prepare a massa com farinha, açúcar, sal, leite e fermento. Dobre com manteiga gelada 3x. Asse a 200°C por 20min."
  },
  {
    "id": 5,
    "nome": "Pão de Queijo",
    "valor": 5.00,
    "imagem": "https://www.shutterstock.com/image-photo/traditional-brazilian-cheese-bread-on-260nw-2423525683.jpg",
    "receita": "Misture 250g de polvilho, 150ml de leite, 100ml de óleo, 1 ovo, sal e queijo ralado. Modele e asse a 180°C por 25min."
  },
  {
    "id": 6,
    "nome": "Bolo de Cenoura",
    "valor": 6.00,
    "imagem": "https://img.cybercook.com.br/imagens/receitas/345/bolo-pao-de-lo.jpg",
    "receita": "Bata 3 cenouras, 3 ovos, 1 xíc. óleo. Misture com 2 xíc. farinha, 1.5 xíc. açúcar, 1 colh. fermento. Asse a 180°C por 35min."
  },
  {
    "id": 7,
    "nome": "Suco Natural de Laranja",
    "valor": 7.50,
    "imagem": "https://static.vecteezy.com/ti/fotos-gratis/t2/8642196-suco-de-laranja-gelo-fresco-no-hotel-luxo-bebida-para-hospedes-gratis-foto.jpg",
    "receita": "Esprema 4 laranjas frescas. Coe se desejar. Sirva com gelo e uma rodela de laranja."
  },
  {
    "id": 8,
    "nome": "Chá Gelado",
    "valor": 6.00,
    "imagem": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTrG756WH9-RmrEnhbJAB2ll6aT5gVOnYFFA&s",
    "receita": "Ferva 500ml de água. Infusione 2 sachês de chá preto ou verde por 5min. Adicione gelo, limão e açúcar a gosto."
  }
];

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