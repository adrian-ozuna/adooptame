import { IsEmail, IsNotEmpty, IsOptional, IsPhoneNumber, IsString, IsUrl, isEmail, isNotEmpty } from "class-validator";

export class ShelterDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  zipcode: string;

  @IsUrl()
  @IsOptional()
  website?: string;

  @IsString()
  @IsOptional()
  description?: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  tel: string;
}