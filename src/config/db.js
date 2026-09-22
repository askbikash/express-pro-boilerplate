import { Sequelize } from 'sequelize';
import mongoose from 'mongoose';
import { env } from './env.js';
import { logger } from '../utils/logger.js';

export let sequelize;

if (env.DB_TYPE === 'postgres' || env.DB_TYPE === 'mysql') {
  sequelize = new Sequelize(env.DB_NAME, env.DB_USER, env.DB_PASSWORD, {
    host: env.DB_HOST,
    port: env.DB_PORT,
    dialect: env.DB_TYPE,
    logging: (msg) => logger.debug(msg),
  });
}

export const connectDB = async () => {
  try {
    if (env.DB_TYPE === 'postgres' || env.DB_TYPE === 'mysql') {
      await sequelize.authenticate();
      logger.info(`${env.DB_TYPE} connection established successfully.`);
    } else if (env.DB_TYPE === 'mongo') {
      await mongoose.connect(env.MONGO_URI);
      logger.info('MongoDB connection established successfully.');
    }
  } catch (error) {
    logger.error(`Unable to connect to the database (${env.DB_TYPE}):`, error);
    process.exit(1);
  }
};
