import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { CreateTodoDto, EditTodoDto } from './dtos';
import { TodoService } from './todo.service';

@Controller('todos')
export class TodoController {

    constructor(private readonly todoService: TodoService) {}

    @Get()
    getMany() {
        return {
            status: 'success',
            data: this.todoService.getMany()
        };
    }

    @Get(':id')
    getOne(@Param('id', ParseIntPipe) id: number) {
        
        return {
            status: 'success',
            data: this.todoService.getOne(id)
        }
    }

    @Post()
    createOne(
        @Body() dto: CreateTodoDto
    ) {
        // return dto;
        return this.todoService.createOne(dto)
    }

    @Put(':id')
    updateOne(
        @Param('id') id: number,
        @Body() dto: EditTodoDto
    ) {
        // return dto
        return this.todoService.editOne(id, dto)
    }

    @Delete(':id')
    deleteOne(
        @Param('id') id: number
    ) {
        return this.todoService.deleteOne(id)
    }


}
