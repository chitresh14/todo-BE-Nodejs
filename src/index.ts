import express, {Express, Request, Response} from 'express';
import * as bodyParser from 'body-parser';
import { envConfig } from './config/env.config';
import authrouter from './routes/auth.routes';

const app: Express = express();

// Request body parsing
app.use(bodyParser.json());
// Not required form data to user directly as of now.
app.use(bodyParser.urlencoded({ extended: false }));

app.use(authrouter);

// app.get('/api/heath-check', (req: Request, res: Response)=>{
//     res.send('I am Working.');
// });

app.listen(envConfig.port, ()=> {
console.log(`[Server]: I am running at http://localhost:${envConfig.port}`);
});