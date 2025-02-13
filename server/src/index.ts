import { serve } from '@hono/node-server';
import { characters } from './mock-data.js';
import { CharacterListResponse } from './model.js';
import { createRestApiServer } from './core/server/api-rest.server.js';
let db = {
  characters,
};

const app = createRestApiServer();

app.get('/api/character', async (context) => {
  const response: CharacterListResponse = {
    info: {
      count: db.characters.length,
    },
    results: db.characters,
  };
  return context.json(response);
});

app.get('/api/character/:id', (context) => {
  return context.json(
    db.characters.find((c) => c.id === Number(context.req.param('id')))
  );
});

app.put('/api/character/:id', async (context) => {
  const id = Number(context.req.param('id'));
  const character = await context.req.json();
  db.characters = db.characters.map((c) =>
    c.id === id ? { ...c, ...character } : c
  );
  return context.body(null, 204);
});

serve({ fetch: app.fetch, port: 3000 }, (info) => {
  console.log(`API running on ${info.port}`);
});
