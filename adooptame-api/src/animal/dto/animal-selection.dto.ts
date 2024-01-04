import { IsNotEmpty, IsNumber, isNotEmpty } from "class-validator";

export class AnimalSelectionDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;
}