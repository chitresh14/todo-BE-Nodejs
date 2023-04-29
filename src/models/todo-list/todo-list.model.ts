import mongoose from 'mongoose';
import { todoListSchema } from './todo-list.schema';

export const TodoList = mongoose.model('TodoList', todoListSchema);
