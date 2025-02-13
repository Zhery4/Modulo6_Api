import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';

export const createRestApiServer = () => {
  const app = new Hono();
  app.use(logger());

  app.use('/api/*', cors());
  return app;
};
