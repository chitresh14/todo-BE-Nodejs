import { Router } from 'express';
import { TodoListRoutes } from './todo-list/todo-list.routes';


// Task todo here: Implement Dependceny Injection Here to reduce constructor calls

// class ControllerRoutes {
//     allRoutes: Router = Router();
//     constructor(
//         private todoListRoutes: TodoListRoutes
//     ) {
//         this.todoListRoutes = todoListRoutes;
//     }

//     allControllerRoutes(): Router {
//         this.allRoutes.use("/todolist", this.todoListRoutes.router);
//         return this.allRoutes;
//     }
// }

// export const allRoutes = new ControllerRoutes();

const allRoutes = Router();

allRoutes.use("/todolist", new TodoListRoutes().router);


export default allRoutes;
