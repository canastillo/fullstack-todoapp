import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('todos')
export class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 50, nullable: false })
    task: string;

    @Column({ nullable: false })
    done: boolean;
}