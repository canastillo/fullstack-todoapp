import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateTodoDto, EditTodoDto } from './dtos';
import { Todo } from './entities';

@Injectable()
export class TodoService {

    constructor(
        @InjectRepository(Todo)
        private readonly todoRepository: Repository<Todo> 
    ) {}

    async getMany(): Promise<Todo[]> {
        return await this.todoRepository.find()
    }

    async getOne(id: number) {
        const todo = await this.todoRepository.findOne(id)
        if (!todo) throw new NotFoundException()

        return todo
    }

    createOne(dto: CreateTodoDto) {
        const todo = this.todoRepository.create(dto)
        return this.todoRepository.save(todo)
    }

    async editOne(id: number, dto: EditTodoDto) {
        let todo = await this.todoRepository.findOne(id)
        if (!todo) throw new NotFoundException()
        
        return this.todoRepository.save({
            ...todo,
            ...dto
        })
    }

    async deleteOne(id: number) {
        return await this.todoRepository.delete(id)
    }
}
