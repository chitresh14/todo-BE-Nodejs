import {Express, Request, Response, Router, NextFunction} from 'express';
import allRoutes  from '../controllers';


const authrouter = Router();

authrouter.use('/api', (req: Request, res: Response, next: NextFunction) => {
    // authentication code here
    console.log('passing middleware');
    next();
},  allRoutes);

export default authrouter;