import { Request, Response } from 'express';
import { ITodoList } from '../../common/interfaces/todo-list.interface';
import { ResponseWrapper } from '../../common/utils/response-wrapper/response.wrapper'
import { statusCode } from '../../common/interfaces/response-wrapper.interface';
import { v4 as uuidv4 } from 'uuid';


export class TodoListController {
    todoList: ITodoList[] = [];
    constructor(private responseWrapper: ResponseWrapper) { }

    getTodoList(req: Request, res: Response) {
        res.send(this.responseWrapper.success('success', this.todoList, statusCode.OK));
    }

    addTodoList(req: Request, res: Response) {
        const validationErr = [];
        try {
            if (req.body && req.body.title) {
                const title = req.body.title;
                const description = req.body.description;
                const todoList: ITodoList = { id: uuidv4(), title, description };
                this.todoList.push(todoList);

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
}