import { Module } from '@nestjs/common';
import { TraitController } from './trait.controller';
import { TraitService } from './trait.service';

@Module({
  controllers: [TraitController],
  providers: [TraitService]
})
export class TraitModule {}
