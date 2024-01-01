import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { ShelterModule } from './shelter/shelter.module';

@Module({
  imports: [PrismaModule, ConfigModule.forRoot({
    envFilePath: '../.env'
  }), ShelterModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
