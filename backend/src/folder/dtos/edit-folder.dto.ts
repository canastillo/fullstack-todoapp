import { PartialType } from "@nestjs/mapped-types";
import { CreateFolderDto } from ".";

export class EditFolderDto extends PartialType(CreateFolderDto) {}