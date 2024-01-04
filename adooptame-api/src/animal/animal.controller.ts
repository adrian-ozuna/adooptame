import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalDto, AnimalSelectionDto } from './dto';

@Controller('animal')
export class AnimalController {
  constructor(private animalService: AnimalService) {}

  @Post('create')
  create(@Body() dto: AnimalDto) {
    return this.animalService.create(dto);
  }

  @Get('selection')
  getSelection(@Param() params: AnimalSelectionDto) {
    return this.animalService.getSelection(params);
  }
}
