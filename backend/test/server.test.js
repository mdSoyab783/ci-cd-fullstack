const request = require('supertest');
const app = require('../server');

describe('GET /api', () => {
  it('returns API is running', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('API is running');
  });
});
