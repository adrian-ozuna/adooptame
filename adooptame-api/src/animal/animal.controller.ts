import { Body, Controller, Delete, Get, Param, Post, Patch, UseGuards } from '@nestjs/common';
import { AnimalService } from './animal.service';
import { AnimalDto, AnimalSelectionDto } from './dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('animal')
export class AnimalController {
  constructor(private animalService: AnimalService) {}

  @Post()
  create(@Body() dto: AnimalDto) {
    return this.animalService.create(dto);
  }

  @Get()
  getAllAnimals() {
    return this.animalService.getAllAnimals();
  }

  @Get(':id')
  getAnimalsById(@Param('id') id) {
    return this.animalService.getAnimalById(id);
  }

  @Get('shelter/:shelter')
  getAnimalsByShelter(@Param('shelterId') shelterId) {
    return this.animalService.getAnimalsByShelter(shelterId);
  }

  @Patch(':id')
  updateAnimal(@Param('id') id, @Body() dto: AnimalDto) {
    return this.animalService.updateAnimal(id, dto);
  }

  @Delete(':id')
  deleteAnimal(@Param('id') id) {
    return this.animalService.deleteAnimal(id);
  }
}
