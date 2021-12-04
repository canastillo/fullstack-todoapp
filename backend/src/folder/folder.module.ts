import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Folder } from './entities';
import { FolderController } from './folder.controller';
import { FolderService } from './folder.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Folder])
  ],
  controllers: [FolderController],
  providers: [FolderService]
})
export class FolderModule {}
