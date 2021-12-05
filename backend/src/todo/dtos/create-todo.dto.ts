import { IsBoolean, IsInt, IsNumber, IsString } from "class-validator";

export class CreateTodoDto {
    @IsString()
    task: string;

    @IsBoolean()
    done: boolean = false;

    @IsNumber()
    folder: number;
}