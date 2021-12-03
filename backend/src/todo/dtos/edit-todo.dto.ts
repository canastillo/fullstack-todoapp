import { PartialType } from "@nestjs/mapped-types";
import { CreateTodoDto } from ".";

export class EditTodoDto extends PartialType(CreateTodoDto) {}