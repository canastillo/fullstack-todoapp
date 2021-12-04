import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('folders')
export class Folder {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ length: 20, nullable: false })
    name: string
}