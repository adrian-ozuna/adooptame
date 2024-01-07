import { Gender, Size, AnimalStatus } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { IsDateString, IsOptional, IsNumber, IsString } from "class-validator";

export class AnimalUpdateDto {
  @IsString()
  @IsOptional()
  name: string;

  @IsOptional()
  species: string;

  @IsOptional()
  breed: string;

  @IsOptional()
  age: Decimal;

  @IsOptional()
  gender: Gender;

  @IsOptional()
  @IsString()
  description: string;

  @IsOptional()
  size: Size;

  @IsString()
  @IsOptional()
  image_url: string;

  @IsOptional()
  status: AnimalStatus;
}