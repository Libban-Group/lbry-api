import { Hono } from 'hono';
import status from './endpoints/status.js';
import proxy from './endpoints/proxy.js';

const app = new Hono();

app.all('/proxy', proxy);

app.get('/status', status);

export default app;