import { Folder } from "src/folder/entities";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity('todos')
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, nullable: false })
    task: string;

    @Column({ nullable: false })
    done: boolean;

    @ManyToOne(() => Folder, folder => folder.id, { onDelete: 'CASCADE' })
    folder: number;
}