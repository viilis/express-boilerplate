import winston from 'winston';
import { appConfig } from '../config/config';

export const logger = winston.createLogger({
  level: appConfig.logger.logLevel,
});

// Log into console when not running prod
if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}
