import { Router } from 'express';
import { TodoListController } from './todo-list.controller';
import { ResponseWrapper } from '../../common/utils/response_wrapper/response.wrapper';
import { TodoListService } from '../../services/todo-list/todo-list.service';

export class TodoListRoutes {
    public router: Router;
    todoListController = new TodoListController(new ResponseWrapper(), new TodoListService());
    constructor(){
        this.router = Router();
        this.registerRoutes();
    }

    protected registerRoutes(): void {
        // binding data as arrow function take present/current "this" reference and nested as null or undefined.
        this.router.get('/', this.todoListController.getTodoList.bind(this.todoListController));
        this.router.post('/', this.todoListController.addTodoList.bind(this.todoListController));
        this.router.delete('/', this.todoListController.deleteTodoTask.bind(this.todoListController));
        this.router.post('/editTask', this.todoListController.editTodoTask.bind(this.todoListController));
    }
}