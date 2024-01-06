import { Gender } from "@prisma/client";
import { IsByteLength, IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class UserSignupDto {
  @IsString()
  @IsNotEmpty()
  name: string;
  
  @IsString()
  @IsNotEmpty()
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  @IsByteLength(8)
  password: string;

  @IsPhoneNumber()
  @IsNotEmpty()
  tel: string;

  @IsNotEmpty()
  gender: Gender;
}