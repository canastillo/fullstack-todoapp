import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateFolderDto, EditFolderDto } from './dtos';
import { FolderService } from './folder.service';

@Controller('folders')
export class FolderController {

    constructor( private readonly folderService: FolderService) {}

    @Get()
    async getMany() {
        const data = await this.folderService.getMany()
        return data
    }

    @Get(':id')
    async getOne(@Param('id') id: number) {
        const data = await this.folderService.getOne(id)
        return  data
    }

    @Post()
    createOne(
        @Body() dto: CreateFolderDto
    ) {
        return this.folderService.createOne(dto)
    }

    @Put(':id')
    editOne(
        @Param('id') id: number,
        @Body() dto: EditFolderDto
    ) {
        return this.folderService.editOne(id, dto)
    }

    @Delete(':id')
    deleteOne(@Param('id') id: number) {
        return this.folderService.deleteOne(id)
    }
}
