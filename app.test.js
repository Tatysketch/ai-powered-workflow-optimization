const request = require('supertest');
const app = require('./app');

describe('Testes da API', () => {
  it('Deve criar uma tarefa', async () => {
    const res = await request(app)
      .post('/tarefas')
      .send({ titulo: 'Estudar' });
    expect(res.statusCode).toEqual(201);
  });

  it('Deve listar tarefas', async () => {
    const res = await request(app).get('/tarefas');
    expect(res.statusCode).toEqual(200);
  });
});
