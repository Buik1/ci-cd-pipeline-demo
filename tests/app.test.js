const request = require('supertest');
const { app, server, utils } = require('../src/app');

describe('API Endpoints', () => {
  afterAll(() => {
    server.close();
  });

  test('GET / should return API info', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.body.message).toBe('CI/CD Pipeline Demo API');
  });

  test('GET /health should return health status', async () => {
    const response = await request(app).get('/health');
    expect(response.status).toBe(200);
    expect(response.body.status).toBe('healthy');
  });

  test('POST /users should create user', async () => {
    const userData = { name: 'John Doe', email: 'john@example.com' };
    const response = await request(app)
      .post('/users')
      .send(userData);
    
    expect(response.status).toBe(201);
    expect(response.body.name).toBe('John Doe');
    expect(response.body.email).toBe('john@example.com');
  });

  test('POST /users should return 400 for missing data', async () => {
    const response = await request(app)
      .post('/users')
      .send({ name: 'John' });
    
    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Name and email are required');
  });
});

describe('Utility Functions', () => {
  test('validateEmail should validate email format', () => {
    expect(utils.validateEmail('test@example.com')).toBe(true);
    expect(utils.validateEmail('invalid-email')).toBe(false);
  });
});