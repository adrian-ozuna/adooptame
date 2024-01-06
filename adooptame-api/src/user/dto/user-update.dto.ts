import { IsEmail, IsOptional, IsPhoneNumber, IsString } from "class-validator";

export class UserUpdateDto {
  @IsOptional()
  @IsString()
  name: string;

  @IsOptional()
  @IsEmail()
  email: string;

  @IsOptional()
  @IsString()
  password: string;

  @IsOptional()
  @IsPhoneNumber()
  tel: string;
  
  @IsOptional()
  @IsString()
  image_url: string;
}