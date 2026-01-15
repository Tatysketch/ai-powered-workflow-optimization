const request = require('supertest');
const app = require('./app');

describe('Testes da API de Tarefas', () => {
  it('Deve criar uma nova tarefa com sucesso', async () => {
    const res = await request(app)
      .post('/tarefas')
      .send({
        titulo: 'Estudar para a FECAF'
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body.titulo).toBe('Estudar para a FECAF');
  });

  it('Deve listar as tarefas com sucesso', async () => {
    const res = await request(app).get('/tarefas');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
  });
});
