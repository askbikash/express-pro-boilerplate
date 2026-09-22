import app from './app.js';
import { env } from './config/env.js';
import { logger } from './utils/logger.js';
import { connectDB } from './config/db.js';

const PORT = env.PORT || 3000;

const startServer = async () => {
  await connectDB();
  
  const server = app.listen(PORT, () => {
    logger.info(`Server running in ${env.NODE_ENV} mode on port ${PORT}`);
  });

  // Handle uncaught exceptions and rejections globally
  process.on('uncaughtException', (err) => {
    logger.error(err, 'UNCAUGHT EXCEPTION! Shutting down...');
    process.exit(1);
  });

  process.on('unhandledRejection', (err) => {
    logger.error(err, 'UNHANDLED REJECTION! Shutting down...');
    server.close(() => {
      process.exit(1);
    });
  });

  process.on('SIGTERM', () => {
    logger.info('SIGTERM RECEIVED. Shutting down gracefully');
    server.close(() => {
      logger.info('Process terminated!');
    });
  });
};

startServer();
