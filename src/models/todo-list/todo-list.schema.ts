import mongoose from 'mongoose';
import { ITodoList } from '../../common/interfaces/todo_list.interface';
const { Schema } = mongoose;

export const todoListSchema = new Schema(
    {
        title: { type: String, required: true, trim: true },
        description: String, // String is shorthand for 
        isCompleted: Boolean
    },
    {
        timestamps: true
    });
