import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { PrismaModule } from 'src/prisma/prisma.module';
import { ProfilePictureService } from 'src/shared/services/profile-picture/profile-picture.service';
import { UserModule } from 'src/user/user.module';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { JwtStrategy } from './strategy';

@Module({
  controllers: [AuthController],
  providers: [AuthService, ProfilePictureService, JwtStrategy],
  imports: [PrismaModule, UserModule, JwtModule.register({}), ConfigModule],
})
export class AuthModule {}
