import { Router } from 'express';
import { TodoListController } from './todo-list.controller';
import { ResponseWrapper } from '../../common/utils/response-wrapper/response.wrapper';

export class TodoListRoutes {
    public router: Router;
    todoListController = new TodoListController(new ResponseWrapper());
    constructor(){
        this.router = Router();
        this.registerRoutes();
    }

    protected registerRoutes(): void {
        // binding data as arrow function take present/current "this" reference and nested as null or undefined.
        this.router.get('/', this.todoListController.getTodoList.bind(this.todoListController));
        this.router.post('/', this.todoListController.addTodoList.bind(this.todoListController));
    }
}