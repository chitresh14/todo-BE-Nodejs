import { Router } from 'express';
import { TodoListRoutes } from './todo-list/todo-list.routes';


const allRoutes = Router();

allRoutes.use("/todolist", new TodoListRoutes().router);


export default allRoutes;
