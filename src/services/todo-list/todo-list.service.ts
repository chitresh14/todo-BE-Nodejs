import mongoose from 'mongoose';
import { ITodoList } from '../../common/interfaces/todo_list.interface';
import { TodoList } from '../../models/todo-list/todo-list.model';

export class TodoListService {
    constructor() {}

    async findAllTodoList(): Promise<ITodoList[]> {
        return await TodoList.find();
    }

    async deleteTodoTask(id: any) {
        return await TodoList.deleteOne({_id: new mongoose.Types.ObjectId(id)});
    }

    async addTodoTask(todoTask: ITodoList) {
        try {
            const todoListWithTitle = await this.findByTitle(todoTask.title);
            if (todoListWithTitle.length) {
                throw new Error('Title already exists.');
            }
            return await TodoList.create(todoTask);
        } catch (e) {
            throw new Error(e.message);
        }
    }

    async editTodoTask(id: string, title: string) {
        return await TodoList.findByIdAndUpdate( new mongoose.Types.ObjectId(id), { $set: { title } })
    }

    async findByTitle(title: string) {
        return await TodoList.find({title});
    }
}