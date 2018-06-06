import fs from 'fs';
import path from 'path';
import spdy from 'spdy';

import app from './app';

import key from './certificates/server.key';
import cert from './certificates/server.crt';
import ca from './certificates/server.csr';

const HOST = process.env.HOST || '0.0.0.0';
const PORT = process.env.PORT || 3000;

const options = {
  key,
  cert,
  ca
};

const server = spdy
  .createServer(options, app)
  .listen(PORT, HOST, (error) => {
    if (error) {
      console.error(error);
      return process.exit(1);
    }
    console.log(`Server listening on ${HOST}:${PORT}`);
  });
