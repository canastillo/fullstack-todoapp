import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { FolderModule } from './folder/folder.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    TodoModule,
    FolderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
