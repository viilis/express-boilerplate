import * as dotenv from 'dotenv';
dotenv.config();

const env = process.env.NODE_ENV;

export const appConfig = {
  logger: {
    logLevel: env === 'development' ? 'info' : process.env.LOG_LEVEL || 'warn',
  },
  database: {},
  port: process.env.PORT || '3000',
};
