import { Router, Express } from "express";
import cors from 'cors';
import * as bodyParser from 'body-parser';
import { DatabaseFactory } from '../middlewares/database/db.factory';
import authrouter from '../routes/auth.routes';

export class Middleware {
    app: Express;
    router: Router;

    constructor(app: Express, router: Router) {
        this.app = app;
        this.router = router;
    }

    db(dbCode: number, connectionString: string, options: object) {
        new DatabaseFactory(dbCode, connectionString, options);
        return this;
    }

    cors() {
        const allowedOrigins = [
            'https://chitresh14.github.io/todo-FE',
            'http://localdev-todo.com:4200'
        ];

        const options: cors.CorsOptions = {
            origin: allowedOrigins
        };

        this.app.use(cors(options));
        return this;
    }

    bodyParser() {
        // Request body parsing
        this.app.use(bodyParser.json());
        // Not required form data to user directly as of now.
        this.app.use(bodyParser.urlencoded({ extended: false }));
        return this;
    }

    authRoutes() {
        this.app.use(authrouter);
    }

}