import { DBCode } from '../../common/interfaces/db.interface';
import { MongoDb } from '../database/mongo.db';

export class DatabaseFactory {
    constructor(dbToConnect: Number, connectionString: string, options: object) {
        this.dbConnection(dbToConnect, connectionString, options);
    }

    dbConnection(dbToConnect: Number, connectionString: string, options: object) {
        switch(dbToConnect) {
            case DBCode.MONGO: MongoDb.getInstance().connect(connectionString, options);
                return;
        }
    }
}