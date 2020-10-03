#!/usr/bin/env node

import request from 'supertest';
import app from './index';
import dotenv from "dotenv";

dotenv.config();

describe('Test initial server', () => {

    const port = process.env.PORT;
    const server = app.listen(port);

    it('Should ping the server config', async() => {

        const res = await request(app)
            .get('/api/ping');
        server.close();
        expect(res.status).toEqual(200);
        expect(res.text).toEqual('pong');

    });
})