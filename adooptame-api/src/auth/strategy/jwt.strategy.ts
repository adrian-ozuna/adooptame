import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from 'src/user/types/user.type';

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

  async validate(payload: { sub: number; username: string }) {
    const findUser = await this.prisma.user.findUnique({
      where: {
        id: payload.sub,
      },
    });

    // const user: User = {
    //   username: findUser.username,
    //   name: findUser.name,
    //   email: findUser.email,
    //   tel: findUser.tel,
    //   image_url: findUser.image_url,
    //   status: findUser.status,
    //   gender: findUser.gender,
    // }

    const { password, ...user } = findUser;
    
    return user;
  }
}
