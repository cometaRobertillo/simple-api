#!/usr/bin/env node

import { Router } from 'express';
import { loggerStart, loggerEnd } from './middlewares/logger';
import { ping } from './routes/ping';

const router = Router();

router.get(
    '/ping',
    loggerStart,
    ping,
    loggerEnd);

export default router;