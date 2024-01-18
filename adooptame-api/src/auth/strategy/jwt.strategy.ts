import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ForbiddenException, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';

type UserType = {
  user,
  shelterStaff
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    config: ConfigService,
    private prisma: PrismaService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_SECRET'),
    });
  }

  async validate(payload: { sub: number; username: string }, userType: UserType) {
    if (userType === userType.user) {
      const findUser = await this.prisma.user.findUnique({
        where: {
          id: payload.sub,
        },
      });
  
      const { password, ...user } = findUser;
      
      return user;
    } else if (userType === userType.shelterStaff) {
      const findShelterStaff = await this.prisma.shelterStaff.findUnique({
        where: {
          id: payload.sub,
        },
      });
  
      const { hash, ...shelterStaff } = findShelterStaff;
      
      return shelterStaff;
    } else {
      return new ForbiddenException('Valid user type not provided.');
    }
  }
}
