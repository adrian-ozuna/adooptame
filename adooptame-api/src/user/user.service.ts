import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async create(dto: UserDto) {
    const user = this.prisma.user.create({
      data: {
        name: dto.name,
        email: dto.email,
        tel: dto.tel,
        image_url: dto.image_url,
        gender: dto.gender
      }
    })

    return user
  } 
}
