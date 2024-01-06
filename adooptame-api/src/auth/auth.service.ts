import {
  ForbiddenException,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserSignupDto, UserSigninDto } from './dto';
import { PrismaService } from 'src/prisma/prisma.service';
import * as argon2 from 'argon2';
import { ProfilePictureService } from 'src/shared/services/profile-picture/profile-picture.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private profilePicture: ProfilePictureService,
    private jwt: JwtService,
  ) {}

  async signupUser(dto: UserSignupDto) {
    const hash = await argon2.hash(dto.password);

    try {
      const user = await this.prisma.user.create({
        data: {
          name: dto.name,
          username: dto.username,
          email: dto.email,
          password: hash,
          image_url: this.profilePicture.generateProfilePicture(dto.name),
          tel: dto.tel,
          gender: dto.gender,
        },
      });

      return this.signToken(user.id, user.username);
    } catch (e) {
      if (e instanceof PrismaClientKnownRequestError) {
        if (e.code === 'P2002') {
          throw new ForbiddenException('Credentials taken');
        }
      }
      throw e;
    }
  }

  async signinUser(dto: UserSigninDto) {
    const user = await this.prisma.user.findUnique({
      where: {
        username: dto.username,
      },
    });

    if (!user) {
      throw new UnauthorizedException('Provided credentials are incorrect.');
    }

    const pwdMatches = await argon2.verify(user.password, dto.password);

    if (!pwdMatches) {
      throw new UnauthorizedException('Provided password is incorrect.');
    }

    return this.signToken(user.id, user.username);
  }

  async signToken(
    userId: number,
    username: string,
  ): Promise<{}> {
    const payload = {
      sub: userId,
      username: username,
    };

    const token = await this.jwt.signAsync(payload, {
      expiresIn: '15m',
      secret: jwtConstants.secret,
    });

    return {
      access_token: token,
    };
  }
}
