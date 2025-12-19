const request = require('supertest');
const app = require('../app');

describe('Students API', () => {

  test('GET /students should return all students', async () => {
    const res = await request(app).get('/students');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  test('GET /students/1 should return a student', async () => {
    const res = await request(app).get('/students/1');
    expect(res.statusCode).toBe(200);
    expect(res.body.name).toBe('Rahul');
  });

  test('GET /students/100 should return 404', async () => {
    const res = await request(app).get('/students/100');
    expect(res.statusCode).toBe(404);
  });

});

