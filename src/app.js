import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { env } from './config/env.js';
import { logger } from './utils/logger.js';
import { errorHandler, notFoundHandler } from './middlewares/error.middleware.js';

const app = express();

// Security and utility middlewares
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Request logging middleware
app.use((req, res, next) => {
  logger.info({ method: req.method, url: req.url }, 'Incoming request');
  next();
});

// Health check route
app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      status: 'ok',
      env: env.NODE_ENV,
      timestamp: new Date().toISOString(),
    },
  });
});

import authRoutes from './modules/auth/auth.routes.js';
import { setupSwagger } from './config/swagger.js';

// Setup Swagger Documentation
setupSwagger(app);

// API Routes
app.use('/api/v1/auth', authRoutes);

// 404 and Global Error Handler
app.use(notFoundHandler);
app.use(errorHandler);

export default app;
