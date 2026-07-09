import express from 'express';

const app = express();
const PORT = Number(process.env.PORT ?? 4000);

app.get('/health', (_req, res) => {
  res.json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString(),
  });
});

app.get('/api', (_req, res) => {
  res.json({
    message: 'Hello from the Express API',
    version: '1.0.0',
  });
});

app.listen(PORT, () => {
  console.log(`Express API listening on http://localhost:${PORT}`);
});
