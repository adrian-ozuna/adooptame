import { Module } from '@nestjs/common';
import { ShelterController } from './shelter.controller';
import { ShelterService } from './shelter.service';

@Module({
  controllers: [ShelterController],
  providers: [ShelterService]
})
export class ShelterModule {}
