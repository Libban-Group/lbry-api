import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import api from './src/api.js';

const app = new Hono()

app.use('*', cors());
app.use('*', logger());

app.route('/api', api)

app.get('/', (c) => c.text('Hono!'))

export default app