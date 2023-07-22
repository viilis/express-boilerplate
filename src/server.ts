import http from 'http';
import startExpress from './app';
import { appConfig } from './config/config';
import { logger } from './utils/logger';

// Using http.createServer to start Express allows as to also use it to other purposes like socket.io
// (https://stackoverflow.com/questions/17696801/express-js-app-listen-vs-server-listen)

(async () => {
  logger.log('info', `Running on ${process.env.NODE_ENV}-mode!`);

  const expressInstance = await startExpress();

  const expressServer = http.createServer(expressInstance);

  expressServer.listen(appConfig.port, () => {
    logger.log('info', `Express.js server running on port ${appConfig.port}`);
  });
})();
