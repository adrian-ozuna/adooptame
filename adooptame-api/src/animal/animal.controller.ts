import { Body, Controller, Post } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalDto } from './dto/animal.dto';

@Controller('animal')
export class AnimalController {
  constructor(private animalService: AnimalService) {}

  @Post('create')
  create(@Body() dto: AnimalDto) {
    return this.animalService.create(dto);
  }
}
