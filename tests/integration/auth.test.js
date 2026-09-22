import request from 'supertest';
import app from '../../src/app.js';
import { sequelize } from '../../src/config/db.js';
import { User } from '../../src/models/index.js';

import { env } from '../../src/config/env.js';
import mongoose from 'mongoose';

beforeAll(async () => {
  if (env.DB_TYPE === 'mongo') {
    await mongoose.connect(env.MONGO_URI);
  } else {
    await sequelize.sync({ force: true });
  }
}, 30000);

afterAll(async () => {
  if (env.DB_TYPE === 'mongo') {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
  } else {
    await sequelize.close();
  }
}, 30000);

describe('Auth Endpoints', () => {
  describe('POST /api/v1/auth/register', () => {
    it('should register a new user successfully', async () => {
      const res = await request(app).post('/api/v1/auth/register').send({
        email: 'test@example.com',
        password: 'password123',
      });

      expect(res.statusCode).toEqual(201);
      expect(res.body.success).toBeTruthy();
      expect(res.body.data.user.email).toEqual('test@example.com');
      expect(res.body.data.token).toBeDefined();
    });

    it('should not register user with existing email', async () => {
      await User.create({ email: 'existing@example.com', password: 'password123' });

      const res = await request(app).post('/api/v1/auth/register').send({
        email: 'existing@example.com',
        password: 'password123',
      });

      expect(res.statusCode).toEqual(400);
      expect(res.body.success).toBeFalsy();
    });
  });

  describe('POST /api/v1/auth/login', () => {
    beforeEach(async () => {
      await User.clearAll();
      await User.create({ email: 'login@example.com', password: 'password123' });
    });

    it('should login successfully with correct credentials', async () => {
      const res = await request(app).post('/api/v1/auth/login').send({
        email: 'login@example.com',
        password: 'password123',
      });

      expect(res.statusCode).toEqual(200);
      expect(res.body.success).toBeTruthy();
      expect(res.body.data.token).toBeDefined();
    });

    it('should reject login with wrong password', async () => {
      const res = await request(app).post('/api/v1/auth/login').send({
        email: 'login@example.com',
        password: 'wrongpassword',
      });

      expect(res.statusCode).toEqual(401);
      expect(res.body.success).toBeFalsy();
    });
  });
});
