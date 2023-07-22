import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { logger } from './utils/logger';
import bodyParser from 'body-parser';
import v1Router from './v1/v1-router';

const startExpress = async () => {
  logger.log('info', 'Starting Express server...');

  const app = express();

  // Database start here

  // Basic middlewares
  app.use(helmet());
  app.use(cors());
  app.use(bodyParser.json({ limit: '1gb' }));

  // Routers here
  app.use('/api/v1', v1Router);

  // 404 handler here

  // Error handler here

  return app;
};

export default startExpress;
