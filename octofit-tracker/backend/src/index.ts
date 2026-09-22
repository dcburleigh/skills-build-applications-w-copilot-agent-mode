import express from 'express';
import database from './config/database.js';
import apiRouter from './routes/api.js';

const app = express();
const port = Number(process.env.PORT) || 8000;

app.use(express.json());

app.get('/api/health', (_request, response) => {
  response.json({
    status: 'ok',
    database: database.readyState === 1 ? 'connected' : 'connecting',
  });
});

app.use('/api', apiRouter);

app.listen(port, () => {
  console.log(`OctoFit API listening on port ${port}`);
});