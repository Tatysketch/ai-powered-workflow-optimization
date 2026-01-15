const request = require('supertest');
const app = require('./app');

describe('API Tests', () => {
  it('should list tasks', async () => {
    const res = await request(app).get('/tarefas');
    expect(res.statusCode).toEqual(200);
  });
});
