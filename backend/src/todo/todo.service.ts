import { Injectable } from '@nestjs/common';
import { CreateTodoDto, EditTodoDto } from './dtos';

const todos = [
    {
        id: 1,
        task: "Take Ensolvers test",
        done: true
    },
    {
        id: 2,
        task: "Code fullstack SPA",
        done: true
    },
    {
        id: 3,
        task: "Get hired",
        done: false
    }
]

@Injectable()
export class TodoService {

    getMany() {
        return todos
    }

    getOne(id: number) {
        const todo = todos.find(todo => todo.id === id)
        return todo
    }

    createOne(dto: CreateTodoDto) {
        return { ok: "createOne"}
    }

    editOne(id: number, dto: EditTodoDto) {
        return { ok: "editOne" }
    }

    deleteOne(id: number) {
        return { ok: "deleteOne" }
    }
}
