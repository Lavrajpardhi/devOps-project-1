const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return Hello from DevOps CI/CD Pipeline!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello from DevOps CI/CD Pipeline!');
    expect(res.statusCode).toEqual(200);
  });
});const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should return Hello from DevOps CI/CD Pipeline!', async () => {
    const res = await request(app).get('/');
    expect(res.text).toBe('Hello from DevOps CI/CD Pipeline!');
    expect(res.statusCode).toEqual(200);
  });
});