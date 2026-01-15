const request = require('supertest');
const app = require('./app');

test('Deve criar uma nova tarefa com sucesso', async () => {
    const res = await request(app)
        .post('/tarefas')
        .send({ titulo: 'Estudar para a FECAF' });
    expect(res.statusCode).toEqual(201);
    expect(res.body.titulo).toBe('Estudar para a FECAF');
});
