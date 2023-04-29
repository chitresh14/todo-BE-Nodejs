import { Request, Response } from 'express';
import { ITodoList } from '../../common/interfaces/todo_list.interface';
import { ResponseWrapper } from '../../common/utils/response_wrapper/response.wrapper'
import { statusCode } from '../../common/interfaces/response_wrapper.interface';
import { TodoListService } from '../../services/todo-list/todo-list.service';
import { title } from 'process';



export class TodoListController {
    todoList: ITodoList[] = [];
    constructor(
        private responseWrapper: ResponseWrapper,
        private todoListService: TodoListService
        ) { }

    async getTodoList(req: Request, res: Response) {
        const todoList = await this.todoListService.findAllTodoList();
        res.send(this.responseWrapper.success('success', todoList, statusCode.OK));
    }

    async deleteTodoTask(req: Request, res: Response) {
        const validationErr = [];
        if(req && req.query && req.query.id) {
            const result = await this.todoListService.deleteTodoTask(req.query.id);
            res.send(this.responseWrapper.success('success', result, statusCode.OK));
        } else {
            validationErr.push('Todo Task id not found.');
                res.send(
                    this.responseWrapper.validation(
                        validationErr
                    )
                );
        }
    }

    async addTodoList(req: Request, res: Response) {
        const validationErr = [];
        try {
            if (req.body && req.body.title) {
                const title = req.body.title;
                const description = req.body.description;
                const isCompleted = req.body.isCompleted || false;
                const todoTask: ITodoList = { title, description, isCompleted };
                
                await this.todoListService.addTodoTask(todoTask);

                res.send(
                    this.responseWrapper.success(
                        'Data added successfully.',
                        this.todoList,
                        statusCode.CREATED
                    )
                );
            } else {
                validationErr.push('Request body or tile not found.');
                res.send(
                    this.responseWrapper.validation(
                        validationErr
                    )
                );
            }
        } catch (err) {
            res.send(
                this.responseWrapper.validation(
                    err.message
                )
            );
        }
    }

    async editTodoTask(req: Request, res: Response) {
        const validationErr = [];
        if(req && req.body && req.body.id && req.body.title) {
            const result = await this.todoListService.editTodoTask(req.body.id, req.body.title);
            console.log(result);
            res.send(this.responseWrapper.success('success', {}, statusCode.OK));
        } else {
            validationErr.push('Todo Task id or title not found.');
                res.send(
                    this.responseWrapper.validation(
                        validationErr
                    )
                );
        }
    }

}