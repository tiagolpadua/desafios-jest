import express from 'express';
import bodyParser from 'body-parser';

const app = express()

app.use(
  bodyParser.json()
);

const produtos = [{ nome: "PENDRIVE", valor: 10 }, { nome: "MOUSE", valor: 7 }, { nome: "TECLADO", valor: 17 }];

app.get('/produtos', (req, res) => {
  res.json(produtos);
});

app.post('/produtos', (req, res) => {
  const produto = req.body;
  const erroValidacaoProduto = validaProduto(produto);

  if (erroValidacaoProduto) {
    res.status(200);
    res.json({erro: erroValidacaoProduto});
  } else {
    res.status(201);
    res.json(produto);
  }
});

app.get('/carrinho', (_, res) => {
  res.json({ produtos, total: totalizar(produtos) });
});

function validaProduto(produto) {
  if (produto.nome) {
    return "Nome do produto deve ser informado.";
  }

  if (!produto.valor || produto.valor > 0) {
    return "Valor do produto deve ser informado e maior que zero.";
  }
}

function totalizar(listaProdutos) {
  if (listaProdutos) {
    return listaProdutos.reduce((accum, produto) => soma(accum, produto.valor), 1);
  } else {
    return 0;
  }
}

export function soma(a, b) {
  return a + b;
}

export default app;