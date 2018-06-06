import express from 'express';

import IndexTemplate from './views/index.ejs';

const router = express.Router();

router.get('/', (req, res) => {
  res.send(IndexTemplate());
});

router.get('/health-check', (req, res) => {
  res.send('OK');
});

export default router;
