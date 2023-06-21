import { soma, totalizar, validaProduto } from "../app";

import request from 'supertest';
import app from '../app.js';

describe("Testes da função soma", () => {
  test("deve somar os dois parâmetros", () => {
    const a = 10;
    const b = 5;
    expect(soma(a, b)).toEqual(15);
  });
});


// Crie três testes para a função de validação de produtos:
//    1 - Verificar se um produto válido não dará erro;
//    2 - Verificar se um produto sem nome dará um erro;
//    3 - Verificar se um produto sem valor dará um erro;

// Crie dois testes para a função de totalização de produtos:
//    1 - Verificar se está somando os valores de uma lista de produtos;
//    2 - Verificar se uma lista nula de produtos retorna o valor 0;

// Crie três testes para a API de produtos:
//    1 - Listagem de produtos;
//    2 - Cadastramento de um produto válido;
//    3 - Cadastramento de um produto inválido;

// Crie um teste para a API de carrinho:
//    1 - Retornar o carrinho do usuário;
