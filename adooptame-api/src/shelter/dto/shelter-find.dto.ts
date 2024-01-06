import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class ShelterFindDto {
  @IsString()
  @IsNotEmpty()
  id: string;
}