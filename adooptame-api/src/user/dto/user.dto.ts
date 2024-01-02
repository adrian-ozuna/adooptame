import { Gender } from "@prisma/client";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class UserDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  tel: string;

  @IsString()
  @IsNotEmpty()
  image_url: string;

  @IsNotEmpty()
  gender: Gender;
}