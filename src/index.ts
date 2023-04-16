import express, {Express, Request, Response} from 'express';
import * as bodyParser from 'body-parser';
import { envConfig } from './config/env.config';
import authrouter from './routes/auth.routes';
import cors from 'cors';

const app: Express = express();

//*******CORS************ */
const allowedOrigins = [
    'https://chitresh14.github.io/todo-FE',
    'http://localdev-todo.com:4200'
];

const options: cors.CorsOptions = {
  origin: allowedOrigins
};

app.use(cors(options));

// Request body parsing
app.use(bodyParser.json());
// Not required form data to user directly as of now.
app.use(bodyParser.urlencoded({ extended: false }));

app.use(authrouter);

app.get('/api/heath-check', (req: Request, res: Response)=>{
    res.send('I am Working.');
});

app.listen(envConfig.port, ()=> {
console.log(`[Server]: I am running at http://localhost:${envConfig.port}`);
});