#!/usr/bin/env node

import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import router from './router';

const app:express.Application = express();

app.use(express.static('public'));
app.use(bodyParser.json({limit: '1024mb'}));
app.use(bodyParser.urlencoded({limit: '1024mb',extended: true}));
app.use(cors());

app.use('/api', router);

export default app;
