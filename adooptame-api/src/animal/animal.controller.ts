import { Body, Controller, Get, Param, Post, Req, UseGuards } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalDto, AnimalSelectionDto } from './dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('animal')
export class AnimalController {
  constructor(private animalService: AnimalService) {}

  @Post('create')
  create(@Body() dto: AnimalDto) {
    return this.animalService.create(dto);
  }
}
