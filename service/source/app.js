import express from 'express';
import bodyParser from 'body-parser';
import helmet from 'helmet';
import morgan from 'morgan';
import cors from 'cors';

import router from './router';

const app = express();

app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

app.use(bodyParser.json({
  limit: '50mb'
}));

app.use(bodyParser.urlencoded({
  parameterLimit: 100000,
  limit: '50mb',
  extended: true
}));

app.set('view engine', 'ejs')

app.set('SECRET_KEY', (new Buffer(process.env.SECRET_KEY || 'SECRET_KEY').toString('base64')));

app.use('/', router);

export default app;
