import { Router, Express } from "express";
import { Middleware } from "./middlewares";
import { DBCode } from './common/interfaces/db.interface';
import { envConfig } from './config/env.config';

export class Application {
    middleware: Middleware;
    router = Router();

    constructor(app: Express) {
        this.middleware = new Middleware(app, this.router);
        this.initialiseMiddleware();
    }

    initialiseMiddleware() {

        this.middleware
        .cors()
        .bodyParser()
        .db(
            DBCode.MONGO, 
            envConfig.MONGO_URI,
            {}
        )
        .authRoutes()
    }
}