import { Gender, Size, Status } from "@prisma/client";
import { Decimal } from "@prisma/client/runtime/library";
import { IsDate, IsDateString, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class AnimalDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  species: string;

  @IsNotEmpty()
  breed: string;

  @IsNotEmpty()
  age: Decimal;

  @IsNotEmpty()
  gender: Gender;

  @IsOptional()
  @IsString()
  description: string;

  @IsNotEmpty()
  size: Size;

  @IsString()
  @IsNotEmpty()
  image_url: string;

  @IsNotEmpty()
  @IsDateString()
  arrival_date: Date;

  @IsNotEmpty()
  status: Status;

  @IsNotEmpty()
  @IsNumber()
  shelterId: number
}