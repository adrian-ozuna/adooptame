import { Gender, UserStatus } from "@prisma/client";

export type User = {
  username: string,
  name: string,
  email: string,
  tel: string,
  image_url: string,
  status: UserStatus,
  gender: Gender,
}