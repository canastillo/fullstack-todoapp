import { IsBoolean, IsString } from "class-validator";

export class CreateTodoDto {
    @IsString()
    task: string;

    @IsBoolean()
    done: boolean;
}