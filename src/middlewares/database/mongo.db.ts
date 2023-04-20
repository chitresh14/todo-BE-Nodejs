import mongoose from "mongoose";

export class MongoDb {
    private static instance: MongoDb;

    constructor() {}

    connect(connectionString: string, options: object) {
        mongoose.connect(connectionString, options);
    }

    public static getInstance(): MongoDb {
        if (!MongoDb.instance) {
            MongoDb.instance = new MongoDb();
        }

        return MongoDb.instance;
    }
}