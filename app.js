const request = require('supertest');
const express = require('express');
const app = require('./app'); // se você exportar o app no final do app.js

describe('API de Tarefas', () => {
  test('Deve criar uma nova tarefa com POST /tarefas', async () => {
    const resposta = await request(app)
      .post('/tarefas')
      .send({ titulo: 'Estudar IA' });

    expect(resposta.statusCode).toBe(201);
    expect(resposta.body).toHaveProperty('id');
    expect(resposta.body.titulo).toBe('Estudar IA');
    expect(resposta.body.status).toBe('pendente');
  });

  test('Deve retornar erro 400 se título estiver ausente', async () => {
    const resposta = await request(app)
      .post('/tarefas')
      .send({});

    expect(resposta.statusCode).toBe(400);
    expect(resposta.body).toHaveProperty('erro');
  });

  test('Deve listar tarefas com GET /tarefas', async () => {
    const resposta = await request(app).get('/tarefas');
    expect(resposta.statusCode).toBe(200);
    expect(Array.isArray(resposta.body)).toBe(true);
  });
});
module.exports = app;
