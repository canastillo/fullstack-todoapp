import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateTodoDto } from './dtos';

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
    getOne(@Param('id', ParseIntPipe) id: number) {
        const todo = todos.find(todo => todo.id === id)
        
        return {
            status: 'success',
            data: todo
        }
    }

    @Post()
    createOne(
        @Body() dto: CreateTodoDto
    ) {
        return dto;
    }

    @Put(':id')
    updateOne() {

    }

    @Delete(':id')
    deleteOne() {

    }


}
