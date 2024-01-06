import { Gender } from "@prisma/client";
import { IsEmail, IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";

export class UserSignupDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}