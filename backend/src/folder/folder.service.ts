import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateFolderDto, EditFolderDto } from './dtos';
import { Folder } from './entities';

@Injectable()
export class FolderService {

    constructor(
        @InjectRepository(Folder)
        private readonly folderRepository: Repository<Folder>
    ) {}

    async getMany(): Promise<Folder[]> {
        return await this.folderRepository.find()
    }

    async getOne(id: number) {
        const todo = await this.folderRepository.findOne(id)
        if (!todo) throw new NotFoundException()

        return todo
    }

    createOne(dto: CreateFolderDto) {
        const todo = this.folderRepository.create(dto)
        return this.folderRepository.save(todo)
    }

    async editOne(id: number, dto: EditFolderDto) {
        let todo = await this.folderRepository.findOne(id)
        if (!todo) throw new NotFoundException()
        
        return this.folderRepository.save({
            ...todo,
            ...dto
        })
    }

    async deleteOne(id: number) {
        return await this.folderRepository.delete(id)
    }
}
