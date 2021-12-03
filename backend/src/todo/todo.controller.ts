import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateTodoDto, EditTodoDto } from './dtos';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {

    constructor(private readonly todoService: TodoService) {}

    @Get()
    async getMany() {
        const data = await this.todoService.getMany()

        return {
            status: 'success',
            data
        };
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        const data = await this.todoService.getOne(id)

        return {
            status: 'success',
            data
        }
    }

    @Post()
    createOne(
        @Body() dto: CreateTodoDto
    ) {
        return this.todoService.createOne(dto)
    }

    @Put(':id')
    updateOne(
        @Param('id') id: number,
        @Body() dto: EditTodoDto
    ) {
        return this.todoService.editOne(id, dto)
    }

    @Delete(':id')
    deleteOne(
        @Param('id') id: number
    ) {
        return this.todoService.deleteOne(id)
    }
}
