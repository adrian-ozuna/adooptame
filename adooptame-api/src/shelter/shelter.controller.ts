import { Body, Controller, Get, Param, Patch, Post, Delete, UseGuards } from '@nestjs/common';
import { ShelterService } from './shelter.service';
import { ShelterCreateDto } from './dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('shelter')
export class ShelterController {
  constructor(private shelterService: ShelterService){}
  
  @Get('all')
  getAllShelters() {
    return this.shelterService.getAllShelters();
  }

  @Post('create')
  create(@Body() dto: ShelterCreateDto) {
    return this.shelterService.createShelter(dto)
  }
  
  @Get(':id')
  getShelterById(@Param('id') id) {
    return this.shelterService.getShelterById(parseInt(id));
  }

  @Patch(':id')
  updateShelter(@Param('id') id, @Body() dto: ShelterCreateDto) {
    return this.shelterService.updateShelterById(id, dto);
  }

  @Delete(':id')
  deleteShelter(@Param('id') id) {
    return this.shelterService.deleteShelter(id);
  }
}
