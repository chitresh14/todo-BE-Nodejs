import express, {Express, Request, Response} from 'express';

import { envConfig } from './config/env.config';

import { Application }  from './app'
// import app from './app';

const app: Express = express();

new Application(app);

app.get('/api/heath-check', (req: Request, res: Response)=>{
    res.send('I am Working.');
});

app.listen(envConfig.port, ()=> {
console.log(`[Server]: I am running at http://localhost:${envConfig.port}`);
});