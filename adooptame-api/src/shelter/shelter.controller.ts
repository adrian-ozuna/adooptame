import { Body, Controller, Post } from '@nestjs/common';
import { ShelterService } from './shelter.service';
import { ShelterDto } from './dto';

@Controller('shelter')
export class ShelterController {
  constructor(private shelterService: ShelterService){}
  
  @Post('create')
  create(@Body() dto: ShelterDto) {
    return this.shelterService.create(dto)
  }
}
