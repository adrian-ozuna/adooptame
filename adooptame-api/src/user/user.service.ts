import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  getCurrentUser(user) {
    return user;
  }

  async getUserByUsername(username) {
    const findUser = await this.prisma.user.findUnique({
      where: {
        username: username,
      }
    });

    if (!findUser) {
      throw new ForbiddenException('Provided user could not be found.');
    }

    const { password, ...user } = findUser;

    return user;
  }
}
