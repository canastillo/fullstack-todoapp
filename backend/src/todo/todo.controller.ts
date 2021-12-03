import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

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

@Controller('todos')
export class TodoController {

    @Get()
    getMany() {
        return {
            status: 'success',
            data: todos
        };
    }

    @Get(':id')
    getOne(@Param() id: string) {
        // todos.findIndex(todo.id === id)
        return id
    }

    @Post()
    createOne() {

    }

    @Put(':id')
    updateOne() {

    }

    @Delete(':id')
    deleteOne() {

    }


}
