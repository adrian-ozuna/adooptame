import { Body, Controller, Delete, Get, Param, Post, Patch, UseGuards } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalDto } from './dto';
import { AuthGuard } from '@nestjs/passport';
import { AnimalUpdateDto } from './dto/animal-update.dto';

@UseGuards(AuthGuard('jwt'))
@Controller('animal')
export class AnimalController {
  constructor(private animalService: AnimalService) {}

  @Post()
  create(@Body() dto: AnimalDto) {
    return this.animalService.createAnimal(dto);
  }

  @Get()
  getAllAnimals() {
    return this.animalService.getAllAnimals();
  }

  @Get(':id')
  getAnimalsById(@Param('id') id) {
    return this.animalService.getAnimalById(parseInt(id));
  }

  @Get('shelter/:shelterid')
  getAnimalsByShelter(@Param('shelterid') shelterId) {
    return this.animalService.getAnimalsByShelter(parseInt(shelterId));
  }

  @Patch(':id')
  updateAnimal(@Param('id') id, @Body() dto: AnimalUpdateDto) {
    return this.animalService.updateAnimal(parseInt(id), dto);
  }

  @Delete(':id')
  deleteAnimal(@Param('id') id) {
    return this.animalService.deleteAnimal(parseInt(id));
  }
}